<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "product_listing_app";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$category = isset($_GET['category']) ? $_GET['category'] : '';
$priceMin = isset($_GET['price_min']) ? $_GET['price_min'] : 0;
$priceMax = isset($_GET['price_max']) ? $_GET['price_max'] : 10000;
$saleStatus = isset($_GET['sale_status']) ? $_GET['sale_status'] : '';

echo "Price Min: $priceMin<br>";
echo "Price Max: $priceMax<br>";

$sql = "SELECT id, name, image, stock, price, category, rating FROM products WHERE price BETWEEN $priceMin AND $priceMax";

if ($category) {
    $categories = implode("','", explode(',', $category));
    $sql .= " AND category IN ('$categories')";
}

if ($saleStatus === 'on_sale') {
    $sql .= " AND stock > 0";
} elseif ($saleStatus === 'not_on_sale') {
    $sql .= " AND stock = 0";
}

echo "SQL Query: $sql<br>";

$result = $conn->query($sql);

$products = [];
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
} else {
    echo "0 results";
}
$conn->close();

echo "<pre>";
print_r($products);
echo "</pre>";
?>
