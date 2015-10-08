//Project 2

//Background color     
Ti.UI.setBackgroundColor("#000");

//JSON
var characters= {
	"heroes":{
		"theTitle": "heroes",
		"heroesList": [
		{ 
			"name": "Superman", 
			"description": "Also known as the man of steel lives in Metropolis as clark Kent reporter, but when trouble comes he becomes SUPERMAN.",
		
		},
		{
			"name": "Hulk", 
			"description": "David Banner suffered an accident and was exposed to gamma rays. so ever since the accident, you can say that you won't like him when his angry."
		},
		{
			"name": "Green Lantern",
			"description": "Hal Jordan a pilot that doesn't believe in fear. Was choosen to be the defender of earth with a ring that gave reality to his imagination."
		}
				
	]
},

	"villans":{
		"theTitle": "villans",
		 "villansList": [
		 {
		 
			"name": "Lex Luther", 
			"description": "Evil billionaire with great intelligence main purpose is to rule the world. Also arch enemy of Superman."
		
		}, 
		{
				
			"name": "The Joker", 
			"description": "Super villan has a clown look and his goal in life is to destroy Batman or as he will call him the bat."
		}, 
		{
			
			"name": "Green Goblin", 
			"description": "Public enemy number one for a great heroe known as Spiderman. After an experiment going wrong in OsCorp, Mr. Osborne never was the same again."
			}
			
		]
	}
	
};

//variables

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#c9c3c3"
});

var titleView = Ti.UI.createView({
	backgroundColor: "#f2731d",
	height: 65,
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor : "#1b1e1e",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text:"Heroes & Villians",
	color: "#f5f5f5",
	font: {fontSize: 20, familyFont: "Times Roman", fontStyle: "bold"},
	textAlign: "center",
	width: "100%",
	top: 30
	
});

var content = Ti.UI.createTableView({
	top: border.height + border.top
});

if(Ti.Platform.name === "iPhone OS"){
	content.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var heroesSection = Ti.UI.createTableViewSection({
	headerTitle: "Heores",
	footerTitle: "Names"
});

var villansSection = Ti.UI.createTableViewSection({
	headerTitle: "Villans",
	footerTitle: "Names"
});


var characterSections = [heroesSection, villansSection];

content.setData(characterSections);

//var bringFile = require("eventListener");

//add and open
titleView.add(titleLabel);
mainWindow.add(titleView, border, content);
mainWindow.open();