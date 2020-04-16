<?php
//Server
$servername = "localhost";
$username = "wpark5";
$password = "wpark5";
$dbname = "wpark5";

//Create Connection
$conn = new mysqli($servername, $username, $password, $dbname);

//Check Connection
if ($conn -> connect_error){
    die("Connection failed: ". $conn -> connect_error);
}
else{
    echo("Successful");
}

$purchaseNo = "";
$supplierID = "";
$date = "";
$quantity = "";
$description = "";
$price = "";

if (isset($_POST['new_order'])) {
    $purchaseNo = mysqli_real_escape_string($conn, $_POST['purchaseNo']);
    $supplierID = mysqli_real_escape_string($conn, $_POST['supplierID']);
    $date = mysqli_real_escape_string($conn, $_POST['date']);
    $quantity = mysqli_real_escape_string($conn, $_POST['quantity']);
    $description = mysqli_real_escape_string($conn, $_POST['description']);
    $price = mysqli_real_escape_string($conn, $_POST['price']);
    
    $user_query=$conn->query("INSERT INTO Purchases (purchaseNo, supplierID, date, quantity, description, price) VALUES ('$purchaseNo', '$supplierID', '$date', '$quantity', '$description', '$price')");
    
    header('location: display.php');
}

?>