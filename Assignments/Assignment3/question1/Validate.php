<html>
    <head>
        <title>Validate</title>
        <link href="style.css" rel="stylesheet" type="text/css">
    </head>
    <body>
        <div class="pageContainer centerText">
            <p></p>
            <h2 class="centerText">Select Color</h2>
            <div class="pageContainer">
                <form action="" class="formLayout">
                    
                    <div class="formGroup">
                        <label>Email:</label>
                        <input type="text" name="email" class="textbox" autofocus required  
                      placeholder="Email" title="email" maxlength="64" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                    </div>
                    <div class="formGroup">
                        <label>First name:</label>
                        <input type="text" name="fname" class="textbox" autofocus required  
                      placeholder="First name" title="first name" maxlength="20" pattern="[A-Za-z'-]{2,20}" />
                    </div>
                    <div class="formGroup">
                        <label>Birthday:</label>
                        <input type="date" name="bday" class="textbox" autofocus required  
                      placeholder="mm/dd/yyyy" title="birthday" maxlength="20" pattern="[0-9][0-9]\/[0-9][0-9]\/[0-9][0-9][0-9][0-9]{2,}" />
                    </div>
                    <div class="formGroup">
                        <label>Age:</label>
                        <input type="text" name="age" class="textbox" autofocus required  
                      placeholder="Age" title="age" maxlength="3" pattern="[1-9]{1,3}" />
                    </div>
                    <div class="formGroup">
                        <label>State:</label>
                        <input type="text" name="state" class="textbox" autofocus required  
                      placeholder="ST" title="state" maxlength="2" pattern="[A-Z]{2,2}" />
                    </div>
                    <div class="formGroup">
                        <label>Zip Code:</label>
                        <input type="text" name="zip" class="textbox" autofocus required  
                      placeholder="Zip" title="zip" maxlength="5" pattern="[0-9]{2,5}" />
                    </div>
                    
                    <div class="formGroup">
                        <label></label>
                        <button type="submit">Submit Form</button>
                    </div>
                    
                    <div class="centerText vertGap55">
                        <button type="submit" formnovalidate>Submit without HTML5 validation</button><br><br>
                        <a href="?">Reload page</a>
                    </div>
                    
                </form>
            </div>
        </div>
    </body>
</html>