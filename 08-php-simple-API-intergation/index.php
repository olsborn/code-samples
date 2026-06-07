<?php
require_once __DIR__ . '/ApiClient.php';

$categoryId = isset($_GET['category']) ? (int)$_GET['category'] : null;
$sortBy = $_GET['sort'] ?? '';
$sortDir = $_GET['dir'] ?? 'asc';



try {
    $categories = ApiClient::getCategories();
    $products = ApiClient::getProducts($categoryId);

    if ($sortBy === 'name') {
        $products = ApiClient::sortProductsByName($products, $sortDir);
    } elseif ($sortBy === 'price') {
        $products = ApiClient::sortProductsByPrice($products, $sortDir);
    }

    $error = null;
} catch (Exception $e) {
    $error = $e->getMessage();
    $categories = [];
    $products = [];
}

$categoriesTree = ApiClient::buildCategoryTree($categories);
$categoriesById = ApiClient::indexCategoriesById($categories);

?>
<!DOCTYPE html>
<html lang="pl">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sklep - Produkty</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="container">
        <header>
            <h1>Katalog Produktów</h1>
        </header>

        <main>
            <?php if ($error): ?>
                <div class="error-message">
                    <?php echo htmlspecialchars($error); ?>
                </div>
            <?php else: ?>
                <div class="filters">
                    <div class="filter-group">
                        <label for="categorySelect">Kategoria:</label>
                        <select id="categorySelect">
                            <option value="">Wszystkie kategorie</option>
                            <?php foreach ($categoriesTree as $category): ?>
                                <option value="<?php echo $category['id']; ?>" <?php echo $categoryId === (int)$category['id'] ? 'selected' : ''; ?>><?php echo str_repeat('— ', $category['level']); ?><?php echo htmlspecialchars($category['name']); ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>

                    <div class="filter-group">
                        <label for="sortSelect">Sortuj:</label>
                        <select id="sortSelect">
                            <option value="">Domyślnie</option>
                            <option value="name-asc" <?php echo $sortBy === 'name' && $sortDir === 'asc' ? 'selected' : ''; ?>>Nazwa A-Z</option>
                            <option value="name-desc" <?php echo $sortBy === 'name' && $sortDir === 'desc' ? 'selected' : ''; ?>>Nazwa Z-A</option>
                            <option value="price-asc" <?php echo $sortBy === 'price' && $sortDir === 'asc' ? 'selected' : ''; ?>>Cena rosnąco</option>
                            <option value="price-desc" <?php echo $sortBy === 'price' && $sortDir === 'desc' ? 'selected' : ''; ?>>Cena malejąco</option>
                        </select>
                    </div>
                </div>

                <div class="products-count">
                    Znaleziono produktów: <strong><?php echo count($products); ?></strong>
                </div>

                <div class="products-grid">
                    <?php foreach ($products as $product): ?>
                        <div class="product-card<?php echo (isset($product['quantity']) && $product['quantity'] == 0) ? ' unavailable' : ''; ?>">
                            <div class="product-image">
                                <?php if (!empty($product['photo'])): ?>
                                    <img src="<?php echo htmlspecialchars($product['photo']); ?>"
                                        alt="<?php echo htmlspecialchars($product['name']); ?>">
                                <?php else: ?>
                                    <div class="no-image">Brak zdjęcia</div>
                                <?php endif; ?>
                            </div>

                            <div class="product-name"><?php echo htmlspecialchars($product['name']); ?></div>

                            <?php if (!empty($product['category']) && isset($categoriesById[(int)$product['category']])): ?>
                                <div class="product-category"><?php echo htmlspecialchars(ApiClient::getCategoryPath((int)$product['category'], $categoriesById)); ?></div>
                            <?php endif; ?>

                            <div class="product-price-container">
                                <?php if (isset($product['quantity']) && $product['quantity'] == 0): ?>
                                    <div class="product-unavailable">Produkt niedostępny</div>
                                <?php else: ?>
                                    <?php if (!empty($product['oldPrice']) && $product['oldPrice'] > 0 && $product['oldPrice'] != $product['price']): ?>
                                        <div class="product-old-price">
                                            <?php echo number_format($product['oldPrice'], 2, ',', ' '); ?> zł
                                        </div>
                                    <?php endif; ?>
                                    <div class="product-price">
                                        <?php echo number_format($product['price'], 2, ',', ' '); ?> zł
                                    </div>
                                <?php endif; ?>
                            </div>

                        </div>
                    <?php endforeach; ?>
                </div>

                <?php if (empty($products)): ?>
                    <div class="no-products">
                        Brak produktów w wybranej kategorii
                    </div>
                <?php endif; ?>
            <?php endif; ?>
        </main>
    </div>

    <script src="script.js"></script>
</body>

</html>