//Project 2

//Project 2

//Background color     
Ti.UI.setBackgroundColor("#000");

//Data

var heroes = [{title: "Superman"}, {title: "Hulk"}, {title: "Green Lantern"}];
var villans = [{title: "Lex Luther"}, {title: "The Joker"}, {title: "Green Goblin"}];		


//variables

var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#c9c3c3"
});

var titleView = Ti.UI.createView({
	backgroundColor: "#f2731d",
	height: 60,
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
	font: {fontSize: 30, familyFont: "Times Roman", fontStyle: "bold"},
	textAlign: "center",
	width: "100%",
	top: 20
	
});

var characters = Ti.UI.createTableView({
	//**data: heroes,
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	characters.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

heroesSection = Ti.UI.createTableViewSection({
	headerTitle: "Heroes",
	footerTitle: "Name"
});

villansSection = Ti.UI.createTableViewSection({
	headerTitle: "Villans",
	footerTitle: "Name"
});

var charactersSection = [heroesSection, villansSection];


//**optional way for data
characters.setData(charactersSection);

//add and open
titleView.add(titleLabel);
mainWindow.add(titleView, border, characters);
mainWindow.open();

