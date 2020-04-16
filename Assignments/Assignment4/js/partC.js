var one = "<img src='img/1.jpg' width='50' height='50'>;
var two = "<img src='img/2.jpg' width='50' height='50'>";
var three = "<img src='img/3.jpg' width='50' height='50'>";
var four = "<img src='img/4.jpg' width='50' height='50'>";
var five = "<img src='img/5.jpg' width='50' height='50'>";
var six = "<img src='img/6.jpg' width='50' height='50'>";
var seven = "<img src='img/7.jpg' width='50' height='50'>";
var eight = "<img src='img/8.jpg' width='50' height='50'>";
var nine = "<img src='img/9.jpg' width='50' height='50'>";
var ten = "<img src='img/10.jpg' width='50' height='50'>";
var eleven = "<img src='img/11.jpg' width='50' height='50'>";
var twelve = "<img src='img/12.jpg' width='50' height='50'>";
var thirteen = "<img src='img/13.jpg' width='50' height='50'>";
var fourteen = "<img src='img/14.jpg' width='50' height='50'>";
var fifteen = "<img src='img/15.jpg' width='50' height='50'>";
var sixteen = "<img src='img/16.jpg' width='50' height='50'>";

function createTable(){
    var picSize = document.getElementById();
    if (picSize == "eightSelect"){
        
    }
    else if (picSize == "tenSelect"){
        
    }
    else if (picSize == "twelveSelect"){
        
    }
}

function writeMessage(elementId, message, appendMessage) {
	var newMessage = document.getElementById(elementId);
	if (appendMessage) {
		newMessage.innerHTML = newMessage.innerHTML + message;
	} else {
		newMessage.innerHTML = message;
	}
}

window.onload = function() {
	document.getElementById('submit').addEventListener('click', createTable);
}