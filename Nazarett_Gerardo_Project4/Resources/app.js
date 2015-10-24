//Main Window

//Background color     
Ti.UI.setBackgroundColor("#000");


// Main window 
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#b0b5b8",
	backgroundImage: "backgroundImage/United.jpg"
	
});

//Navigation Window
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});


	//Navigation View
var navView = Ti.UI.createView({
	height: "95%",
	width: "100%",
	top: 0,
});



//Main View
var topView = Ti.UI.createView({
	backgroundColor: "black",
	width:"100%",
    height: 50,
    top:0
    
});

//Main Title
var myTitle = Ti.UI.createLabel({
	text: "My Final Project",
	color: "orange",
	font: { fontSize: 30, familyFont : "arial", fontWeight: "bold"},
	top: 10,
	textAlign: "center"
	
});



//Image View
var imageView = Ti.UI.createView({
	backgroundColor: "#3b9239",
	borderRadius: 20,
	borderColor: "orange",
	borderWidth: 3,
	width: 300,
	height:60,
	top: 100 + topView.top,
	bottom: 10,
	
	
});

//Image Text
var imageText = Ti.UI.createLabel({
	text: "Images",
	color: "black",
	font: {fontSize: 30, familyFont: "arial", fontWeight: "bold"},
	textAlign: "center"

});


//Heroes View
var heroesView = Ti.UI.createView({
	backgroundColor: "#1482bb",
	borderRadius: 20,
	borderColor: "orange",
	borderWidth: 3,
	width: 300,
	height:60,
	top: 235 + topView.top,
	bottom: 10,

	
});

//Heroes Text
var heroesText = Ti.UI.createLabel({
	text: "Heroes",
	color: "black",
	font: {fontSize: 30, familyFont: "arial", fontWeight: "bold"},
	textAlign: "center"

});

//Balance View
var balanceView = Ti.UI.createView({
	backgroundColor: "#ffce00",
	borderRadius: 20,
	borderColor: "orange",
	borderWidth: 3,
	width: 300,
	height:60,
	top: 355 + topView.top,
	bottom: 10,
	
	
});

//Balance Text
var balanceText = Ti.UI.createLabel({
	text: "Balance",
	color: "black",
	font: {fontSize: 30, familyFont: "arial", fontWeight: "bold"},
	textAlign: "center"

});


//Bottom View
var bottomView = Ti.UI.createView({
	backgroundColor: "black",
    height: 50,
    bottom:0
 });
    
//Bottom Title
var bottomTitle = Ti.UI.createLabel({
	text: "1510 Gerardo Nazarett",
	color: "orange",
	font: { fontSize: 24, familyFont : "arial", fontWeight: "bold"},
	bottom: 10,
	textAlign: "center"
	
});

var loadfile = require("images");
var loadfile = require("heroes");
var loadfile = require("balance");

balanceView.add(balanceText);
bottomView.add(bottomTitle);
imageView.add(imageText);
topView.add(myTitle);
heroesView.add(heroesText);
mainWindow.add(navView,topView,heroesView,imageView,bottomView,balanceView);
navWindow.open();
