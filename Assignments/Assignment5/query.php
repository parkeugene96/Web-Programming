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

$supplierID = "";

if (isset($_POST['search_order'])) {
    $supplierID = mysqli_real_escape_string($conn, $_POST['supplierID']);
}
?>

<html>
    <head>
        <title></title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="pageContainer centerText">
            <?php
            $sql = "SELECT date, description, price FROM Purchases WHERE supplierID='$supplierID'";
            $result = $conn -> query($sql);

            if (isset($_POST['search_order'])){
                echo ("<table>");
                    echo ("<tr>");
                    echo("<th>  Date of Purchase  </th>");
                    echo("<th>Item Description</th>");
                    echo("<th>Unit Price</th>");
                while($row = mysqli_fetch_array($result)){
                    echo ("<tr>");
                    echo("<td align='center'>" . $row['date'] . "</td>");
                    echo("<td align='center'>" . $row['description'] . "</td>");
                    echo("<td align='center'>" . $row['price'] . "</td>");
                }
                echo ("</table>");
                mysqli_free_result($result);
            }
            ?>
            <div class="formGroup">
                <button type="button" onclick="window.location.href='http://codd.cs.gsu.edu/~wpark5/Assignments/Assignment5/index.html'">Home</button><br>
            </div>
        </div>
    </body>
</html>