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
?>

<html>
    <head>
        <title></title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="pageContainer centerText">
            <?php
            $sql = "SELECT * FROM Purchases";
            $result = $conn -> query($sql);

            if(mysqli_num_rows($result) > 0){
                echo ("<table>");
                    echo ("<tr>");
                    echo("<th>ID</th>");
                    echo("<th>Purchase Number</th>");
                    echo("<th>  Supplier ID  </th>");
                    echo("<th>  Date of Purchase  </th>");
                    echo("<th>  Quantity of Item  </th>");
                    echo("<th>Item Description</th>");
                    echo("<th>Unit Price</th>");
                while($row = mysqli_fetch_array($result)){
                    echo ("<tr>");
                    echo("<td align='center'>" . $row['id'] . "</td>");
                    echo("<td align='center'>" . $row['purchaseNo'] . "</td>");
                    echo("<td align='center'>" . $row['supplierID'] . "</td>");
                    echo("<td align='center'>" . $row['date'] . "</td>");
                    echo("<td align='center'>" . $row['quantity'] . "</td>");
                    echo("<td align='center'>" . $row['description'] . "</td>");
                    echo("<td align='center'>" . $row['price'] . "</td>");
                }
                echo ("</table>");
                mysqli_free_result($result);
            }
            else{
                echo ("ERROR IDK");
            }
            ?>
            <div class="formGroup">
                <button type="button" onclick="window.location.href='http://codd.cs.gsu.edu/~wpark5/Assignments/Assignment5/index.html'">Home</button><br>
            </div>
        </div>
    </body>
</html>