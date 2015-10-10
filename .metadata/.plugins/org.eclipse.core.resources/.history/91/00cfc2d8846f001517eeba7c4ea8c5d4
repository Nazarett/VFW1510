//variables
var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight; 
//var itemCount = 30;
var images = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"gallery");
var myPics = images.getDirectoryListing();
var perRow = 4;
var margin = 10;
var actualWidth = (pWidth - margin*5) / perRow;
var size = actualWidth ;

var win = Ti.UI.createWindow({
	backgroundColor: "#f2f2f2",	
	layout: "horizontal"
	
});

var border = Ti.UI.createView({
	backgroundColor: "orange",
	height: 1,
	width: pWidth, 
	top: 20
});

var viewBox = Ti.UI.createScrollView({
	top: 0,
	layout: "horizontal",
	width: pWidth,
	contentWidth: pWidth,
	height: pHeight - border.height - border.top,
	showVerticalScrollIndicator: true,
	backgroundColor: "#44d7d5"
	
});



for(var i = 0; i<myPics.length; i ++){
	var view = Ti.UI.createView({
		backroundColor: "orange",
		top: margin,
		left: margin,
		width: size,
		height: size
		
	});
	var look = Ti.UI.createImageView({
		image: "gallery/" + myPics[i]
		});
	view.add(look);
	viewBox.add(view);
}

var zoomPic = function(){
	myPics = images.getDirectoryListing();
};

view.addEventListener("click", zoomPic);

win.add(border);
win.add(viewBox);
win.open();
