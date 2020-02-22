<html>
    <head>
    </head>
    <body>
        <h1 style="text-align: center">In Class Assignment 5</h1>
        <p style="text-style: italics">
            1&#41; <i>&quot;Good morning, Dave,&quot; said HAL.</i>
        </p>
        <form action="index.php" method="get">
            2) Circle Radius: <input type="text" name="radius">
            <input type="submit" value="Submit" name="2submit">
        </form>
        
        <form action="index.php" method="get">
            3) Fahrenheit to Celsius: <input type="text" name="fahrenheit">
            <input type="submit" value="Submit" name="3submit">
        </form>
        <p> 4&#41;
            <?php
                $text="  PHP is fun  ";
                $trimmed=trim($text);
                $trimlen=strlen($trimmed);
                echo "String has $trimlen characters"
            ?>
        </p>
        <p>
            5&#41; Answer is 
            <?php
                $word="WDWWLWWWLDDWDLL";
                $occur=strpos($word,"WWW");
                echo $word[$occur];
            ?>
        </p>
        <form action="index.php" method="get">
            6) Enter a string: <input type="text" name="statement">
            <input type="submit" value="Submit" name="6submit">
        </form>
        <p> 7&#41;
            <?php
                $num=7;
                if($num%2==0){
                    echo "The number is even";
                }
                else{
                    echo"The number is odd";
                }
            ?>
        <p> 8&#41;
            <?php
                if(date(L)==0){
                    echo "It is leap year";
                }
                else{
                    echo "It is NOT leap year";
                }
            ?>
        
        
        <?php
            function circleArea(){
                $r=$_GET["radius"];
                $area=$r*$r*pi();
                echo $area;
            }
            if(isset($_GET['2submit'])){
                circleArea();
            }
            function celFahr(){
                $f=$_GET["fahrenheit"];
                $%celFahr=(5/9)($f-32);
                echo $%celFahr;
            }
            if(isset($_GET['3submit'])){
                celFahr();
            }
            function isPalindrome(){
                $statement=$_GET["statement"];
                $statement=strtolower($statement);
                $reverse=strrev($statement);
                if ($statement == $reverse){
                    echo "The string is a Palindrome";
                }
                else{
                    echo "The string is NOT a Palindrome";
                }
            }
            if(isset($_GET['6submit'])){
                isPalindrome();
            }
        ?>
    </body>
</html>