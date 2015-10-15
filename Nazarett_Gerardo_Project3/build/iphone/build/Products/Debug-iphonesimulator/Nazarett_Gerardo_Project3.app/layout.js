//Layout
var galFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "pics");
var galFiles = galFolder.getDirectoryListing();
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformWidth;
var picCount = 30;
var rowCount = 4;
var margin = 10;
var canvasWidth = (pWidth - margin*5); //Width of the device minus all of the space
var size = 8*8;

//Second Window

var secWin = Ti.UI.createWindow({
	backgroundColor: "#fff",
	//layout: "horizontal"
});

//Border

var border = Ti.UI.createView({
	backgroundColor: "cecece",
	heght: 1,
	width: pWidth,
	top: 20
});

//View/ Scroll

var viewContainer = Ti.UI.createScrollView({
	//top: 0,
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight - border.height - border.top,
	showVerticalScrollIndicator: true,
	backgroundColor: "#33CCFF",
	
});

//Loop

for( i = 0; i < galFiles.length; i++){
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
	
	var gallery = Ti.UI.createImageView({
		image: "pics/" + galFiles[i],
		top:0,
		width: view.width*2
	});
	
	view.add(gallery);
	viewContainer.add(view);
}

secWin.add(border);
secWin.add(viewContainer);
secWin.open();