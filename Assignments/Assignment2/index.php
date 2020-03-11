<html>
    <head></head>
    <body>
        <h3>Question 1:</h3>
        <?php
            function isBitten(){
                $num = rand(1,2);
                if ($num==1){
                    echo "<p>Charlie ate my lunch!</p>";
                }
                else{
                    echo "<p>Charlie did not eat my lunch!</p>";
                }
            }
        isBitten();
        ?>
        <br>
        
        
        <h3>Question 2:</h3>
        <table width="300px" cellspacing="1px" cellpadding="1px" border="1px">
            <?php
            for($row=1;$row<=8;$row++){
                echo "<tr>";
                for($col=1;$col<=8;$col++){
                    $total=$row+$col;
                    if($total%2==0){
                        echo "<td height=35px width=35px bgcolor=#FF0000></td>";
                    }
                    else{
                        echo "<td height=35px width=35px bgcolor=#000000></td>";
                    }
                }
                echo "</tr>";
            }
            ?>
        </table>
        <br><br>
        
        
        <h3>Question 3:</h3>
        <p>  
            <?php
            $month = array ('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December');
            $sorted = $month;
            sort($sorted);
            echo "Step 1: ";
            for($i=0;$i<12;$i++){
                echo "$month[$i]   ";
            }
            echo "<br>Step 2: ";
            for($i=0;$i<12;$i++){
                echo "$sorted[$i]   ";
            }
            echo "<br>Step 3: ";
            foreach($month as $value){
                echo "$value   ";
            }
            echo "<br>Step 4: ";
            foreach($sorted as $value){
                echo "$value   ";
            }
            ?>
        </p>
        <br><br>
        
        
        <h3>Question 5:</h3>
        <form action="index.php" method="post">
            <table>
                <tr >
                    <th>ITEMS</th>
                    <th>$</th>
                    <th>QUANTITY</th>
                </tr>
                <tr>
                    <td>Hamburgers</td>
                    <td>$4.95 each</td>
                    <td><input type="number" name="hamburger"></td>
                </tr>
                <tr>
                    <td>Chocolate Shakes</td>
                    <td>$1.95 each</td>
                    <td><input type="number" name="shake"></td>
                </tr>
                <tr>
                    <td>Cola</td>
                    <td>$0.85 each</td>
                    <td><input type="number" name="cola"></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>+16% Pre-tax Tip</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td>+7.5% Sales Tax</td>
                </tr>
            </table>
            <input type="submit">
        </form>
        <?php
        $ham=($_POST["hamburger"])*4.95;
        $shake=($_POST["shake"])*1.95;
        $cola=($_POST["cola"])*.85;
        $subtotal=$ham+$shake+$cola;
        $tip=$subtotal*.16;
        $taxtotal=$subtotal*1.075;
        $total=ROUND(($tip+$taxtotal),2);
        echo "<p>Total Cost: $$total</p>"
        ?>
    </body>
</html>
