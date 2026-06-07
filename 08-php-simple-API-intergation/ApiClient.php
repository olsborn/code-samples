<?php

require_once __DIR__ . '/config.php';

class ApiClient
{
    private static function makeRequest(string $action, array $params = []): array
    {
        $params['auth'] = API_AUTH_KEY;
        $params['action'] = $action;

        $url = API_URL . '?' . http_build_query($params);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_TIMEOUT, 30);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        if (curl_errno($ch)) {
            $error = curl_error($ch);
            curl_close($ch);
            throw new Exception("Błąd cURL: {$error}");
        }

        curl_close($ch);

        if ($httpCode !== 200) {
            throw new Exception("Błąd API: kod HTTP {$httpCode}");
        }

        $data = json_decode($response, true);

        if (!is_array($data)) {
            throw new Exception("Nieprawidłowa odpowiedź z API");
        }

        return $data;
    }

    public static function getCategories(): array
    {
        if (OFFLINE_MODE) {
            return json_decode(file_get_contents(__DIR__ . '/data/categories.json'), true);
        }
        return self::makeRequest('categories');
    }

    public static function getProducts(?int $categoryId = null): array
    {
        if (OFFLINE_MODE) {
            $products = json_decode(file_get_contents(__DIR__ . '/data/products.json'), true);

            if ($categoryId !== null) {
                $products = array_filter($products, function ($product) use ($categoryId) {
                    return isset($product['category']) && (int)$product['category'] === $categoryId;
                });
            }

            return array_values($products);
        }
        $params = [];

        if ($categoryId !== null) {
            $params['idKat'] = $categoryId;
        }

        return self::makeRequest('products', $params);
    }

    /**
     * Sortowanie produktów po nazwie z uwzględnieniem polskich znaków diakrytycznych.
     * Używamy zamiany znaków specjalnych na odpowiedniki łacińskie, ponieważ nie zakładamy 
     * istnienia rozszerzenia intl (klasa Collator) na serwerze.
     */
    public static function sortProductsByName(array $products, string $direction = 'asc'): array
    {
        $polish = ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż', 'Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ź', 'Ż'];
        $latin = ['a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z', 'a', 'c', 'e', 'l', 'n', 'o', 's', 'z', 'z'];

        usort($products, function ($a, $b) use ($direction, $polish, $latin) {
            $nameA = str_replace($polish, $latin, mb_strtolower($a['name'] ?? '', 'UTF-8'));
            $nameB = str_replace($polish, $latin, mb_strtolower($b['name'] ?? '', 'UTF-8'));
            $comparison = strcmp($nameA, $nameB);
            return $direction === 'desc' ? -$comparison : $comparison;
        });

        return $products;
    }

    public static function sortProductsByPrice(array $products, string $direction = 'asc'): array
    {
        usort($products, function ($a, $b) use ($direction) {
            $priceA = floatval($a['price'] ?? 0);
            $priceB = floatval($b['price'] ?? 0);

            $comparison = $priceA === $priceB ? 0 : ($priceA < $priceB ? -1 : 1);
            return $direction === 'desc' ? -$comparison : $comparison;
        });

        return $products;
    }

    /**
     * Buduje płaskie drzewo kategorii z poziomami hierarchii.
     * Optymalizacja: indeksujemy kategorie po parent_id aby uniknąć wielokrotnego array_filter.
     */
    public static function buildCategoryTree(array $categories, int $parentId = 0, int $level = 0): array
    {
        static $indexed = null;

        // Indeksowanie tylko raz przy pierwszym wywołaniu
        if ($indexed === null) {
            $indexed = [];
            foreach ($categories as $category) {
                $parent = (int)($category['parent'] ?? 0);
                $indexed[$parent][] = $category;
            }
        }

        $result = [];

        if (isset($indexed[$parentId])) {
            foreach ($indexed[$parentId] as $category) {
                $category['level'] = $level;
                $result[] = $category;
                $children = self::buildCategoryTree($categories, (int)$category['id'], $level + 1);
                $result = array_merge($result, $children);
            }
        }

        return $result;
    }

    public static function indexCategoriesById(array $categories): array
    {
        $indexed = [];
        foreach ($categories as $category) {
            $indexed[(int)$category['id']] = $category;
        }
        return $indexed;
    }

    public static function getCategoryPath(int $categoryId, array $categoriesById): string
    {
        $path = [];
        $currentId = $categoryId;

        while (isset($categoriesById[$currentId])) {
            $category = $categoriesById[$currentId];
            array_unshift($path, $category['name']);
            $currentId = (int)($category['parent'] ?? 0);
            if (empty($currentId)) {
                break;
            }
        }

        return implode(' / ', $path);
    }
}
