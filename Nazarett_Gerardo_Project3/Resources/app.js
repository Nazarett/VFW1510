//Intro Window
var introWindow = Ti.UI.createWindow({
	backgroundColor: "#bbb"  // lt grey
});

//Welcome View
var welcome = Ti.UI.createView({
	backgroundColor: "#f7b92a",  // yellow
	height: 500,
	width: "100%",
	top: 20
});


//Title Label

var titleText = Ti.UI.createLabel({
	text: "Julie's Gallery",
	color: "#fff",  // White
	font: {fontSize: 30, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center",
	top: 25
});

//Welcome Label
var welcomeText = Ti.UI.createLabel({
	
	text: "This is my gallery.",
	color: "#fff",  // white
	font: {fontSize: 12, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center",
	left: 20,
	right: 20,
	top: 85
});

//Intro Button View
var introButton = Ti.UI.createView({
	backgroundColor: "#f7f5f4", // whitish
	height: 100,
	width: 300,
	borderRadius: 50,
	//top: welcome.top + welcome.height + 20
	bottom: 30
});

//Intro Button Label
var buttonText = Ti.UI.createLabel({
	text: "Touch Me",
	color: "#000", // black
	font: {fontSize: 40, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

//Loading gallerycode.js
//var loadFile = require("content");

welcome.add(titleText, welcomeText);
introWindow.add(welcome, introButton);
introButton.add(buttonText);
introWindow.open();