var randomNum = 0;
var tries = 10;

function newGame() {
	randomNum = Math.floor(Math.random() * 100) + 1;
	tries = 10;
	writeMessage('feedback', '');
}

function writeMessage(elementId, message, appendMessage) {
	var newMessage = document.getElementById(elementId);
	if (appendMessage) {
		newMessage.innerHTML = newMessage.innerHTML + message;
	} else {
		newMessage.innerHTML = message;
	}
}

function guessInRange(guess) {
	return (guess > 0 && guess < 101);
}

function userGuess() {
	var userGuess = document.getElementById('guess').value;
	var message = document.getElementById('message');
	var feedback = document.getElementById('feedback');
	if (userGuess.length == 0 || ! guessInRange(userGuess)) {
		writeMessage('message', '<p>Guess a number between 1 and 100</p>');
	} 
    else if (userGuess.indexOf('.') != -1) {
		writeMessage('message', '<p>Guess a number between 1 and 100</p>');
	} 
    else {
		tries--;
		if (userGuess == randomNum) {
			writeMessage('message', '<p>' + randomNum + ' is CORRECT. Play again! You have 10 tries!</p>');
            writeMessage('feedback', '<p> Nice! You had ' + tries +' left</p>');
			newGame();
		}
        else if (userGuess < randomNum) {
			writeMessage('message', '<p>'+ userGuess + ' is too LOW. Guess again!</p>');
			writeMessage('feedback', '<p> You have ' + tries +' tries left</p>');
		}
        else {
			writeMessage('message', '<p>'+ userGuess + ' is too HIGH. Guess again!</p>');
			writeMessage('feedback', '<p> You have ' + tries +' tries left</p>');
		}
        if (tries == 0){
            writeMessage('feedback', '<p> You have ' + tries +' tries left</p>');
            alert ("Ran out of tries");
            location.reload();
        }
	}
	document.getElementById('guess').value = '';	
}

window.onload = function() {
	newGame();
	document.getElementById('submit').addEventListener('click', userGuess);
}