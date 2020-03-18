<?php
$color = $_GET['color'];

setcookie('Color', $color, time()+86400, "/");

if(isset($_COOKIE['Name'])){
    echo "Cookie name is set to ".$_COOKIE['Name']."<br>";
}
if(isset($_COOKIE['Model'])){
    echo "Cookie model is set to ".$_COOKIE['Model']."<br>";
}
if(isset($_COOKIE['Color'])){
    echo "Cookie color is set to ".$_COOKIE['Color'];
}
?>

<html>
    <head>
        <title>Select Model</title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
       <div class="pageContainer">

          <h2 class="centerText">Select Model</h2>

          <form action="Order01.php" class="formLayout">
             <div class="formGroup">
                <label>Car Choice:</label>
             </div>
              <div class="formGroup">
                  <?php
                  if($_COOKIE['Model']=='Mustang' && $_COOKIE['Color']=='red'){
                      echo '<img src="img/mr.jpg">';
                  }
                  if($_COOKIE['Model']=='Mustang' && $_COOKIE['Color']=='blue'){
                      echo '<img src="img/mb.jpg">';
                  }
                  if($_COOKIE['Model']=='Mustang' && $_COOKIE['Color']=='yellow'){
                      echo '<img src="img/my.jpg">';
                  }
                  
                  
                  if($_COOKIE['Model']=='Corvette' && $_COOKIE['Color']=='red'){
                      echo '<img src="img/cr.jpg">';
                  }
                  if($_COOKIE['Model']=='Corvette' && $_COOKIE['Color']=='blue'){
                      echo '<img src="img/cb.jpg">';
                  }
                  if($_COOKIE['Model']=='Corvette' && $_COOKIE['Color']=='yellow'){
                      echo '<img src="img/cy.jpg">';
                  }
                  
                  
                  if($_COOKIE['Model']=='Subaru' && $_COOKIE['Color']=='red'){
                      echo '<img src="img/sr.jpg">';
                  }
                  if($_COOKIE['Model']=='Subaru' && $_COOKIE['Color']=='blue'){
                      echo '<img src="img/sb.jpg">';
                  }
                  if($_COOKIE['Model']=='Subaru' && $_COOKIE['Color']=='yellow'){
                      echo '<img src="img/sy.jpg">';
                  }
                  ?>
             </div>
             <div class="centerText vertGap55">
                              <button>Home</button>
                              <br><br>
                <a href="?">Reload page</a>            
             </div>
          </form>

        </div>
        <?php
        
        ?>
    </body>
</html>