var imageList = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "photos");
var galleryImages = imageList.getDirectoryListing();

var heroes = [
	{
		"title": "Batman", 
		"description": "Bruce Wayne millonaire during the day and the dark knight by night also known as Batman.",
		"picture": "photos/Batman.png"
		},
	{
		"title": "Green Lantern", 
		"description": "Hal Jordan After an accident he was chosen to be The Green Lantern.", 
		"picture": "photos/GreenLantern.jpg"
		},
	{
		"title": "Hulk", 
		"description": "David Banner suffered a gamma exposure, so now when he gets angry he becomes The Hulk.",
		"picture": "photos/Hulk.jpg"
		},
	{
		"title": "Nightcrawler", 
		"description": "Mutant with the power of teleportation fights on the good side. And it is said that his mom is Mystic. ",
		"picture": "photos/Nightcrawler.png"
	},
	{
		"title": "Superman", 
		"description": "Clark Kent works as a reporter but when there is trouble the cryptonian becomes earth defender Superman.",
		"picture": "photos/Superman.jpg"
	},
	{
		"title": "Wolverine", 
		"description": "Mutuant with the power of self healing is considered one of the strongest mutant alive. ",
		"picture": "photos/Wolverine.jpg"
		}
];


var thirdView = Ti.UI.createTableView({
	backgroundColor:"#01aef0",
	separatorColor: "orange", 
	
});

if(Ti.Platform.name === "iPhone OS"){
	thirdView.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};


var heroeSection = Ti.UI.createTableViewSection({
	backgroundColor: "#1482bb",  
	headerTitle: "Marvel & DC",
	footerTitle: "Some of the Heroes",
});

var hMainWindow = function(){
	var heroeWindow = Ti.UI.createWindow({
		title: "Heroes Descriptions",
		backgroundColor: "#000" 
	});
		
	thirdView.add(heroeSection);
	heroeWindow.add(thirdView);
	navWindow.openWindow(heroeWindow);
};



//Description Function
var getDesc = function(){
	var descWindow = Ti.UI.createWindow({
		backgroundColor: "#000",
	});
	
	//  Description View 
	var descView = Ti.UI.createView({
		backgroundColor: "#01aef0", 
		
	});
	
	
		// Description Text Label
	var descTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 40, fontFamily: "Arial", fontWeight: "bold"},
		top: 20,
		textAlign: "center"
	});
	
	
	
		// //  Description Image Background
	var descImageView = Ti.UI.createImageView({
		image: this.picture,
		height: 200,
		width: "90%",
		top: 100,
		
	});

	
		//  Description Text Background
	var descTextView = Ti.UI.createView({
		top: 25,
		width: "90%",
		height: 100,
		//backgroundColor: "#444",
		bottom: 0
	});
	
		//  Description Info Text !!!
	var descText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 20, fontFamily: "Helvetica", fontWeight: "normal"},
		color: "#000", // text black
		textAlign: "center",
		bottom: 20
	});

	var returnWindow = function(){
		navWindow.closeWindow(descWindow);
	};

	
	
	
	descWindow.add(descView, descText, descTextView,descImageView,descTitleLabel); 
	
	navWindow.openWindow(descWindow);
};
//Function ends here

//For Loop
for(var i=0, j=heroes.length; i<j; i++){
	var heroeRow = Ti.UI.createTableViewRow({
		title: heroes[i].title,
		desc:  heroes[i].description,
		picture: heroes[i].picture,
		hasChild: true
	});
	heroeSection.add(heroeRow);
	heroeRow.addEventListener("click", getDesc);
}

var mySection = [heroeSection];

thirdView.setData(mySection);
heroesView.addEventListener("click", hMainWindow);