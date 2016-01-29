var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/dept-army.png') {
		myImage.setAttribute('src', 'images/army-strong.jpg');
	} else {
		myImage.setAttribute('src', 'images/dept-army.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome to the center, ' + myName;
}

if (!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome to the center, ' + storedName;
}

myButton.onclick = function() {
	setUserName();
}