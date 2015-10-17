// code everything out = cmd  + /

//Layout
var galleryFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "pics");
var galleryFiles = galleryFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
var picCount = 30;
var rowCount = 4;
var margin = 10;
var deviceWidth = (pWidth - margin*5); //Width of the device minus all of the space
var size = deviceWidth / rowCount;


var galleryFunction = function(){
    
		//Second WINDOW
	var secondWin = Ti.UI.createWindow({
		backgroundColor: "#fff",
		
	});
	
	//Gallery Title
	var secondView = Ti.UI.createView({ 
	backgroundColor: "orange", 
	height: 50,
	width: "100%",
	top : 20,
	border: 4,
	borderWidth: 2,
	borderColor: "#000" 
});

	//Second page title text
var secondTitle = Ti.UI.createLabel({ 
	text: "Naz's Gallery",
	color:"#000",
	font: {fontSize: 26, fontFamily: "Times New Roman", fontWeight: "bold"},
	textAlign: "center",
	top : 10
});
	
	//Border
	var border = Ti.UI.createView({
		backgroundColor: "cecece",
		height: 1,
		width: pWidth,
		top: 20
	});
	
	//View/ Scroll
	var viewContainer = Ti.UI.createScrollView({
		top: 70,
		layout: "horizontal",
		width: pWidth,
		contentWidth: pWidth,
		height: pHeight - border.height - border.top,
		showVerticalScrollIndicator: true,
		backgroundColor: "#33CCFF",// this is the blue between margins
		
	});
	
	//Loop
	for( i = 0; i < galleryFiles.length; i++){
		var view = Ti.UI.createView({
			backgroundColor: "orange",
			top: margin,
			left: margin,
			width: size,
			height: size
		});
		
		//This adds numbers to empty boxes
		
		//var text = Ti.UI.createLabel({
			//text: i+1,
			//color:"#fff"
		//});
		
		//Previous button
	var backButton = Ti.UI.createLabel({
		text: "Previous",
		backgroundColor: "#000",
		color: "#orange",
		height: 50,
		font: {fontSize: 30, fontFamily: "Times New Roman", fontStyle: "normal"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
		//Function for previous button
	var firstWindow =function(){
		secondWin.close();
	};
	
	backButton.addEventListener("click", firstWindow);
	
		//Image view for entire gallery
		var gallery = Ti.UI.createImageView({
			image: "pics/" + galleryFiles[i],
			top:0,
			width: view.width*2
		});
		
		view.add(gallery);
		viewContainer.add(view);
	}
	
	//Add and open 
	secondView.add(secondTitle);
	backButton.add(firstWindow);
	secondWin.add(viewContainer,border, secondView, backButton);
	secondWin.open();
};

			//Third WINDOW
var thirdFunction = function(getImageDetails){
    
	//Third Window
	var thirdWin = Ti.UI.createWindow({
		backgroundColor: "#fff",
		
	});
	
	//Image Title
	var thirdView = Ti.UI.createView({ 
	backgroundColor: "orange", 
	height: 50,
	width: "100%",
	bottom: 35,
	border: 4,
	borderWidth: 2,
	borderColor: "#000" 
});

	//Third page title text
var thirdTitle = Ti.UI.createLabel({ 
	text: getImageDetails,
	color:"#000",
	font: {fontSize: 26, fontFamily: "Times New Roman", fontWeight: "bold"},
	textAlign: "center",
	top : 10
});
	
	//Border
	var thirdBorder = Ti.UI.createView({
		backgroundColor: "cecece",
		height: 1,
		width: pWidth,
		top: 20
	});
	//Zoom of image
	var zoomView = Ti.UI.createImageView({
		image: getImageDetails,
		top :"25%",
		bottom: "25%",
		left:25,
		right: 25
	});

		
		//This adds numbers to empty boxes
		
		//var text = Ti.UI.createLabel({
			//text: i+1,
			//color:"#fff"
		//});
		
		//Previous button
	var thirdBackButton = Ti.UI.createLabel({
		text: "Previous",
		backgroundColor: "#000",
		color: "#orange",
		height: 50,
		font: {fontSize: 30, fontFamily: "Times New Roman", fontStyle: "normal"},
		width: "100%",
		bottom: 0,
		textAlign: "center"
	});
		//Function for previous button
	var thirdWindow =function(){ //**INCOMPLETE ATENTION!!!!!!!!
		thirdWin.close();
		
	};
	
	thirdBackButton.addEventListener("click", thirdWindow);
	
		//Image view for entire gallery
		var gallery = Ti.UI.createImageView({
			image: "pics/" + galleryFiles[i],
			top:0,
			width: view.width*2
		});
		
	
	//Add and open 
	thirdView.add(thirdTitle);
	thirdBackButton.add(thirdWindow);
	thirdWin.add(thirdBorder, thirdView, thirdBackButton,zoomView);
	thirdWin.open();
};







collageView.addEventListener("click", galleryFunction);










