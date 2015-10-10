//Project 2

//Background color     
Ti.UI.setBackgroundColor("#000");

//Data

var characters = {
	"heroes":{
		"theName": "Heroes",
		"charactersList": [
			{
				"name": "Superman", 
				"description": "Also known as the man of steel lives in Metropolis as clark Kent reporter, but when trouble comes he becomes SUPERMAN.",
	
			},
			{
				"name": "Hulk", 
				"description": "David Banner suffered an accident and was exposed to gamma rays. so ever since the accident, you can say that you won't like him when his angry.",
			},
			{
				"name": "Green Lantern", 
				"description": "Hal Jordan a pilot that doesn't believe in fear. Was choosen to be the defender of earth with a ring that gave reality to his imagination."
	
			}
		]	
	},
	"villans":{
		"theName": "Villans",
		"charactersList": [
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
	title: "Characters",
	backgroundColor: "#b0b5b8"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var getDescription = function(){
	var  descriptionWindow = Ti.UI.createWindow({
		 title: this.text,
		 backgroundColor:"#fff"
	});
	var descriptionText = Ti.UI.createLabel({
		text: this.detail,
		top: 30,
		left:15,
		right: 15
	});
	descriptionWindow.add(descriptionText);
	navWindow.openWindow(descriptionWindow);
};

var makeUI = function(){
	var spacing = 80;
	for(n in characters){
		var titleLabel = Ti.UI.createLabel({
			text: characters[n].theName,
			textAlign: "center",
			left: 1,
			right: 1,
			top: spacing,
			height: 30,
			backgroundColor: "000",
			borderColor:"#fff",
			borderWidth:3,
			font: {fontSize: 22, familiFont: "Times Roman"},
			color: "#fff",
			
		});
		spacing = titleLabel.top + titleLabel.height + 10;
		//console.log(spacing)
		for(m in characters[n].charactersList){
			var itemLabel =Ti.UI.createLabel({
				text: characters[n].charactersList[m].name,
				details: characters[n].charactersList[m].description,
				left: 4,
				right: 4,
				top: spacing,
				height: 25,
				backgroundColor: "#fff",
				font: {fontSize: 22, familiFont: "Times Roman"},
				color: "#000"
			});
			mainWindow.add(itemLabel);
			spacing = itemLabel.top + itemLabel.height + 10;
			itemLabel.addEventListener("click", getDescription);
		}
		mainWindow.add(titleLabel);
		spacing: titleLabel.top + titleLabel.height + 40;
		
	}
		
};

makeUI();

navWindow.open();