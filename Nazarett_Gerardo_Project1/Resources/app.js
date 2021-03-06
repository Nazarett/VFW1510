//Project 1

//Background color     
Ti.UI.setBackgroundColor("#000");

//My Topic
var superHeroes = ["Captain America", "Ironman", "Hulk", "Thor", "Black Widow", "Hawkeye" ]; 

var index = 0;

// Main window 
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#b4b7b9"
	
});



//Main View
var topView = Ti.UI.createView({
	backgroundColor: "#1284bf",
    height: 50,
    top:20
    
});

//Main Title
var myTitle = Ti.UI.createLabel({
	text: "The Avengers",
	color: "white",
	font: { fontSize: 24, familyFont : "arial", fontWeight: "bold"},
	top: 15,
	textAlign: "center"
	
});

//Previous View
var prevView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 4,
	borderWidth: 2,
	width: 100,
	height: 40,
	bottom: 25,
	left: 30
	
});

//Previous Text
var prevText = Ti.UI.createLabel({
	text: "Previous",
	color: "#000",
	font: {fontSize: 22, familyFont : "Arial", fontWeight: "Bold"},
	textAlign: "center"
	
});

//Next View
var nextView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 4,
	borderWidth: 2,
	width: 100,
	height: 40,
	bottom: 25,
	right: 30
	
});

//Next Text
var nextText = Ti.UI.createLabel({
	text: "Next",
	color: "#000",
	font: {fontSize: 22, familyFont : "Arial", fontWeight: "Bold"},
	textAlign: "center"
	
});

//Heroes View
var heroesView = Ti.UI.createView({
	backgroundColor: "#fff",
	borderRadius: 5,
	borderColor: "#1284bf",
	borderWidth: 3,
	width: 300,
	height:75,
	top: 200 + topView.top,
	bottom: 10,
	left: 10
	
});

//Heroes Text
var heroesText = Ti.UI.createLabel({
	text: superHeroes[0],
	color: "black",
	font: {fontSize: 30, familyFont: "arial", fontWeight: "bold"},
	textAlign: "center"

});

var loadFile = require("eventListeners");

//Output
mainWindow.add(topView, prevView, nextView, heroesView);
topView.add(myTitle);
prevView.add(prevText);
nextView.add(nextText);
heroesView.add(heroesText);
mainWindow.open();
