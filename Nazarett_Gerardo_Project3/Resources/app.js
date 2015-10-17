//Main Window

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#55abe5"
});

	//Front page title view
var topView = Ti.UI.createView({ 
	backgroundColor: "#fff",
	height: 50,
	width: "99%",
	top : 20,
	border: 4,
	borderWidth: 2,
	borderRadius:10,
	borderColor: "orange" 
});

	//Front page title text
var topTitle = Ti.UI.createLabel({ 
	text: "Welcome To My Gallery",
	color:"#000",
	font: {fontSize: 26, fontFamily: "Times New Roman", fontWeight: "bold"},
	textAlign: "center",
	top : 10
	
});

	//Front page collage button view
var collageView = Ti.UI.createView({
	backgroundColor: "orange",
	height: 50,
	width: "60%",
	border: 4,
	borderWidth: 2,
	borderRadius: 20,
	borderColor: "#fff"
});
	
	//Front page Collage button text
	var collageText = Ti.UI.createLabel({
	text: "COLLAGE",
	backgroundColor: "orange",
	color: "#000",
	height: 50,
	font: {fontSize: 30, fontFamily: "Times New Roman", fontStyle: "normal", fontWeight: "bold"},
	width: "80%",
	textAlign: "center"
});




var loadFile = require("layout");
	
topView.add(topTitle);
collageView.add(collageText);
mainWindow.add(collageView,topView);
mainWindow.open();
