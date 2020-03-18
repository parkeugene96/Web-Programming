<?php
$name = $_GET['fname'];
$model = $_GET['model'];

setcookie('Name', $name, time()+86400, "/");
setcookie('Model', $model, time()+86400);
if(isset($_COOKIE['Name'])){
    echo "Cookie name is set to ".$_COOKIE['Name']."<br>";
}
if(isset($_COOKIE['Model'])){
    echo "Cookie model is set to ".$_COOKIE['Model'];
}
?>

<html>
    <head>
        <title>Select Color</title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="pageContainer centerText">
            <p></p>
            <h2 class="centerText">Select Color</h2>
            <div class="pageContainer">
                <form action="Order03.php" class="formLayout">
                    <div class="formGroup">
                        <label>Car color:</label>
                        <div class="formElements">
                            <select name="color" required >
                                <option  value=""></option>
                                <option style="background-color: blue; color:white;" value="blue">Blue</option>
                                <option style="background-color: red" value="red">Red</option>
                                <option style="background-color: yellow" value="yellow">Yellow</option>
                            </select> 

                        </div>
                    </div>
                    <div class="formGroup">
                        <label></label>
                        <button type="submit"> >> Next >> </button>
                    </div>
                    <div class="centerText vertGap55">
                        <button type="submit" formnovalidate>Submit without validation</button><br><br>
                        <a href="?">Reload page</a>
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>