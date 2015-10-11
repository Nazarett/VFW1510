//Heroes Display, Loop and Event Listener
var hBio = function(){
	var bioDisplay = Ti.UI.createWindow({
		backgroundColor: "fff"
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

//Villans Display, Loop and Event Listener
var vBio = function(){
	var bioDisplay = Ti.UI.createWindow({
		backgroundColor: "#000"
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
		color: "#fff",
		font: {fontSize: 26, familyFont: "Times Roman"},
		top: displayBorder.height + displayBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var backButton = Ti.UI.createLabel({
		text: "Previous",
		backgroundColor: "#fff",
		color: "#000",
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