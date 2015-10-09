//Project 2

//Background color     
Ti.UI.setBackgroundColor("#000");

//Data

var heroes = [
	{title: "Superman", description: "Also known as the man of steel lives in Metropolis as clark Kent reporter, but when trouble comes he becomes SUPERMAN.",},
	{title: "Hulk", description: "David Banner suffered an accident and was exposed to gamma rays. so ever since the accident, you can say that you won't like him when his angry."},
	{title: "Green Lantern", description: "Hal Jordan a pilot that doesn't believe in fear. Was choosen to be the defender of earth with a ring that gave reality to his imagination."}];
  
  
var villans = [
	{title: "Lex Luther", description: "Evil billionaire with great intelligence main purpose is to rule the world. Also arch enemy of Superman."},
	{title: "The Joker", description: "Super villan has a clown look and his goal in life is to destroy Batman or as he will call him the bat."}, 
	{title: "Green Goblin", description: "Public enemy number one for a great heroe known as Spiderman. After an experiment going wrong in OsCorp, Mr. Osborne never was the same again."}];		


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
	footerTitle: "My favorites"
});

villansSection = Ti.UI.createTableViewSection({
	headerTitle: "Villans",
	footerTitle: "My favorites"
});

//Heroes Display, Loop and Event Listener
var hBio = function(){
	var bioDisplay = Ti.UI.createWindow({
		backgroundColor: "#c9c3c3"
	});
	
	var displayTitleView = Ti.UI.createView({
		backgroundColor: "#f2731d",
		height: 60,
		top: 0
	});
	
	var displayBorder = Ti.UI.createView({
		backgroundColor : "#1b1e1e",
		height: 1,
		top: displayTitleView.height + displayTitleView.top
	});
	
	
	
	var displayTitleLabel = Ti.UI.createLabel({
		text:this.title,
		color: "#f5f5f5",
		font: {fontSize: 30, familyFont: "Times Roman", fontStyle: "bold"},
		textAlign: "center",
		width: "100%",
		top: 20
		
	});
	
	//Heroes description display and buttons
	var displayText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 26, familyFont: "Times Roman"},
		top: displayBorder.height + displayBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var backButton = Ti.UI.createLabel({
		text: "Previous",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fontSize: 24, familyFont: "Times Roman"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	var backWindow =function(){
		bioDisplay.close();
	};
	
	backButton.addEventListener("click", backWindow);
	
	displayTitleView.add(displayTitleLabel);
	bioDisplay.add(displayTitleView, displayBorder,displayText, backButton);
	
	bioDisplay.open();

};

for(var i = 0, j = heroes.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: heroes[i].title,
		desc: heroes[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
	theRow.hasChild = false;
	theRow.hasDetail =true;
}
	
	heroesSection.add(theRow);
	theRow.addEventListener("click", hBio);
	
}

var vBio = function(){
	var bioDisplay = Ti.UI.createWindow({
		backgroundColor: "#c9c3c3"
	});
	
	var displayTitleView = Ti.UI.createView({
		backgroundColor: "#f2731d",
		height: 60,
		top: 0
	});
	
	var displayBorder = Ti.UI.createView({
		backgroundColor : "#1b1e1e",
		height: 1,
		top: displayTitleView.height + displayTitleView.top
	});
	
	
	
	var displayTitleLabel = Ti.UI.createLabel({
		text: this.title,
		color: "#f5f5f5",
		font: {fontSize: 30, familyFont: "Times Roman", fontStyle: "bold"},
		textAlign: "center",
		width: "100%",
		top: 20
		
	});
	
		//Villans description display and buttons
	var displayText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 26, familyFont: "Times Roman"},
		top: displayBorder.height + displayBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var backButton = Ti.UI.createLabel({
		text: "Previous",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fontSize: 24, familyFont: "Times Roman"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
	
	var backWindow =function(){
		bioDisplay.close();
	};
	
	backButton.addEventListener("click", backWindow);
	
	
	displayTitleView.add(displayTitleLabel);
	bioDisplay.add(displayTitleView, displayBorder,displayText, backButton);
	
	bioDisplay.open();

};


for(var i = 0, j = villans.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: villans[i].title,
		desc: villans[i].description,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
	theRow.hasChild = false;
	theRow.hasDetail =true;
}
	
	villansSection.add(theRow);
	theRow.addEventListener("click", vBio);
	
}
	

var charactersSection = [heroesSection, villansSection];


//**optional way for data
characters.setData(charactersSection);

//add and open
titleView.add(titleLabel);
mainWindow.add(titleView, border, characters);
mainWindow.open();