# Product Catalog - Sample Code

Product catalog application demo with filtering and sorting capabilities.

## Requirements

- PHP 8.2+
- cURL extension (online mode only)

## 🎬 Demo

![Demo](demo.gif)

---

## Configuration

The `config.php` file contains:

- `OFFLINE_MODE` - operating mode (true = data from JSON files, false = data from API)
- `API_URL` - REST API address (used only when OFFLINE_MODE = false)
- `API_AUTH_KEY` - API authorization key (used only when OFFLINE_MODE = false)

### Offline Mode (default)

The application runs in offline mode by default, using sample data from the `data/` directory:

- `data/categories.json` - product categories
- `data/products.json` - product list

To run in offline mode, ensure that in `config.php`:

```php
const OFFLINE_MODE = true;
```

### Online Mode

To connect to a real API, set in `config.php`:

```php
const OFFLINE_MODE = false;
const API_URL = 'https://your-api-url.com/rest.php';
const API_AUTH_KEY = 'your_api_key';
```

## Running the Application

1. Place files in the HTTP server directory (e.g., XAMPP, WAMP)
2. Open `index.php` in your browser
3. The application works immediately with sample data (offline mode)

## Features

- Display products from API
- Category filtering (hierarchical)
- Sorting (name A-Z/Z-A, price ascending/descending)
  - Sorting supports Polish diacritical characters (ą, ć, ę, ł, ń, ó, ś, ź, ż)
  - Implementation does not require PHP intl extension (Collator)
- Display category breadcrumb path
- Mark unavailable products (quantity = 0)
- Responsive layout

## Technical Notes

- Alphabetical sorting uses Polish character replacement with Latin equivalents, which does not require the intl extension
- Category tree building function optimized - indexing by parent_id instead of multiple filtering operations

## Project Structure

```text
.
├── index.php           # Main application file
├── config.php          # Configuration (OFFLINE_MODE, API_URL, API_AUTH_KEY)
├── ApiClient.php       # Class for API handling and offline mode
├── style.css           # CSS styles
├── script.js           # JavaScript (filter handling)
├── data/
│   ├── categories.json # Sample categories (offline mode)
│   └── products.json   # Sample products (offline mode)
└── README.md           # This file
```
