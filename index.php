<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "product_listing_app";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle price filtering
$min_price = isset($_GET['min_price']) ? $_GET['min_price'] : 0;
$max_price = isset($_GET['max_price']) ? $_GET['max_price'] : 10000;

// Handle category filtering
$categories = isset($_GET['categories']) ? explode(',', $_GET['categories']) : [];
$category_filter = "";
if (!empty($categories)) {
    $category_filter = " AND category IN ('" . implode("','", $categories) . "')";
}

// Handle sale status filtering
$sale_status = isset($_GET['sale_status']) ? $_GET['sale_status'] : '';
$sale_status_filter = "";
if ($sale_status !== '') {
    if ($sale_status === 'on_sale') {
        $sale_status_filter = " AND stock > 0";
    } elseif ($sale_status === 'not_on_sale') {
        $sale_status_filter = " AND stock <= 0";
    }
}

// Handle pagination
$page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
$items_per_page = 12;
$offset = ($page - 1) * $items_per_page;

// Get the total number of products for pagination
$count_sql = "SELECT COUNT(*) as total FROM products WHERE price BETWEEN $min_price AND $max_price $category_filter $sale_status_filter";
$count_result = $conn->query($count_sql);
$total_items = $count_result->fetch_assoc()['total'];
$total_pages = ceil($total_items / $items_per_page);

$sql = "SELECT id, name, image, stock, price, category, rating FROM products WHERE price BETWEEN $min_price AND $max_price $category_filter $sale_status_filter LIMIT $items_per_page OFFSET $offset";
$result = $conn->query($sql);

$products = [];
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
}
$conn->close();
?>




<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Product Listing App</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
</head>
<body>
    <nav class="navbar">
        <div class="logo">MyStore</div>
        <ul class="nav-links">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="#">Products</a></li>
            <li class="nav-item"><a href="#">About</a></li>
            <li class="nav-item"><a href="#">Contact</a></li>
            <li class="nav-item cart1">
                <a href="#">
                    <span class="icon">🛒</span>
                    <span class="cart-count">3</span>
                </a>
            </li>
        </ul>
        <div class="nav-toggle" id="nav-toggle">☰</div>
    </nav>

    <div class="main">
        <div class="left">
            <!-- Price range filter -->
            <div class="price">
                <h2 class="font-xbold body-font border-bottom filter-title">Price Range</h2>
                <div class="mb-3 theme-clr xs2-font d-flex justify-content-between">
                    <span id="slider-range-value1">$<?php echo $min_price; ?></span>
                    <span id="slider-range-value2">$<?php echo $max_price; ?></span>
                </div>
                <div class="mb-30 filter-options">
                    <div id="slider-range">
                        <input type="range" min="0" max="10000" step="1" id="min-price" value="<?php echo $min_price; ?>">
                        <input type="range" min="0" max="10000" step="1" id="max-price" value="<?php echo $max_price; ?>">
                    </div>
                    <button id="filter-btn" class="btn btn-primary">Apply</button>
                </div>
            </div>

            <!-- Categories filter -->
            <div class="categories">
                <h2 class="font-xbold body-font border-bottom filter-title">Categories</h2>
                <ul class="filter-list">
                    <li><input type="checkbox" class="category-checkbox" value="Electronics" id="category1"> <label for="category1">Electronics</label></li>
                    <li><input type="checkbox" class="category-checkbox" value="Clothing" id="category2"> <label for="category2">Clothing</label></li>
                    <li><input type="checkbox" class="category-checkbox" value="Home Appliances" id="category3"> <label for="category3">Home Appliances</label></li>
                    <li><input type="checkbox" class="category-checkbox" value="Books" id="category4"> <label for="category4">Books</label></li>
                    <li><input type="checkbox" class="category-checkbox" value="Toys" id="category5"> <label for="category5">Toys</label></li>
                </ul>
            </div>

            <!-- Sale Status filter -->
            <div class="sale-status">
                <h2 class="font-xbold body-font border-bottom filter-title">Sale Status</h2>
                <ul class="filter-list">
                    <li><input type="radio" name="sale-status" value="on_sale" id="sale1"> <label for="sale1">On Sale</label></li>
                    <li><input type="radio" name="sale-status" value="not_on_sale" id="sale2"> <label for="sale2">Not On Sale</label></li>
                </ul>
            </div>
        </div>

        <!-- Right section -->
        <div class="right">
            <div class="card-item1">
                <?php if (!empty($products)): ?>
                    <?php foreach ($products as $product): ?>
                        <div class="card">
                            <img src="<?php echo $product['image']; ?>" alt="<?php echo $product['name']; ?>">
                            <div class="detail">
                                <h3><?php echo $product['name']; ?></h3>
                                <div>
                                    <?php for ($i = 0; $i < 5; $i++): ?>
                                        <?php if ($i < $product['rating']): ?>
                                            <span>⭐</span>
                                        <?php else: ?>
                                            <span>☆</span>
                                        <?php endif; ?>
                                    <?php endfor; ?>
                                    <p>$<?php echo number_format($product['price'], 2); ?></p>
                                </div>
                                <button class="btn">Add to cart</button>
                            </div>
                        </div> 
                    <?php endforeach; ?>
                <?php else: ?>
                    <p>No products available.</p>
                <?php endif; ?>
            </div>

            <!-- Pagination controls -->
            <nav class="pagi" aria-label="Page navigation example">
                <ul class="pagination justify-content-end">
                    <?php if ($page > 1): ?>
                        <li class="page-item">
                            <a class="page-link" href="?page=<?php echo $page - 1; ?>&min_price=<?php echo $min_price; ?>&max_price=<?php echo $max_price; ?>&categories=<?php echo implode(',', $categories); ?>&sale_status=<?php echo $sale_status; ?>" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                    <?php endif; ?>
                    <?php for ($i = 1; $i <= $total_pages; $i++): ?>
                        <li class="page-item <?php if ($i == $page) echo 'active'; ?>">
                            <a class="page-link" href="?page=<?php echo $i; ?>&min_price=<?php echo $min_price; ?>&max_price=<?php echo $max_price; ?>&categories=<?php echo implode(',', $categories); ?>&sale_status=<?php echo $sale_status; ?>">
                                <?php echo $i; ?>
                            </a>
                        </li>
                    <?php endfor; ?>
                    <?php if ($page < $total_pages): ?>
                        <li class="page-item">
                            <a class="page-link" href="?page=<?php echo $page + 1; ?>&min_price=<?php echo $min_price; ?>&max_price=<?php echo $max_price; ?>&categories=<?php echo implode(',', $categories); ?>&sale_status=<?php echo $sale_status; ?>" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('filter-btn').addEventListener('click', function() {
                let minPrice = document.getElementById('min-price').value;
                let maxPrice = document.getElementById('max-price').value;

                let selectedCategories = [];
                document.querySelectorAll('.category-checkbox:checked').forEach(function(checkbox) {
                    selectedCategories.push(checkbox.value);
                });

                let saleStatus = document.querySelector('input[name="sale-status"]:checked') ? document.querySelector('input[name="sale-status"]:checked').value : '';

                let url = `index.php?min_price=${minPrice}&max_price=${maxPrice}&categories=${selectedCategories.join(',')}&sale_status=${saleStatus}`;
                window.location.href = url;
            });
        });
    </script>
</body>
</html>

