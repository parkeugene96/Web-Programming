var index = 0;
var totalPay = 0;

function writeMessage(elementId, message, appendMessage) {
	var newMessage = document.getElementById(elementId);
	if (appendMessage) {
		newMessage.innerHTML = newMessage.innerHTML + message;
	} else {
		newMessage.innerHTML = message;
	}
}

function input(){
    var hours = document.getElementById('hours').value;
    var pay = hours * 15;
    var overtime = pay + (((hours - 40)*1.5)*15);
    
    if (hours >= 0 && hours <= 40){
        index++;
        totalPay += pay;
        writeMessage('total', 'Total pay: $'+totalPay);
        writeMessage('payrollTable', '<tr><td>'+index+'</td><td>'+hours+' hours</td><td>$'+pay+'</td></tr>', true);
    }
    else if (hours > 40){
        index++;
        totalPay +=overtime;
        writeMessage('total', 'Total pay: $'+totalPay);
        writeMessage('payrollTable', '<tr><td>'+index+'</td><td>'+hours+' hours</td><td>$'+overtime+'</td></tr>', true);
    }
}

window.onload = function() {
	document.getElementById('submit').addEventListener('click', input);
}