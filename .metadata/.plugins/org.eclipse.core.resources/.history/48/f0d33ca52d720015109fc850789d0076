var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformWidth;
var itemCount = 15;
var rowCount = 3;
var margin = 10;
var trueCanvasWidth = ;
var size = ;

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#fff"
	//layout: "horizontal"
});

var border = Ti.UI.createView({
	backgroundColor: "orange",
	heght: 1,
	width: pWidth,
	top: 20
});

var viewContainer = Ti.UI.createView({
	//top: 0
	width: pWidth,
	backgroundColor: "fef"
});

for( i = 0; i < itemCount; i++){
	var view = Ti.UI.createView({
		backgroundColor: "#33CCFF",
		top: margin,
		left: margin,
		width: size,
		height: size
	});
	var text = Ti.UI.createLabel({
		text: i+1,
		color:"#fff"
	});
	
	view.add(text);
	viewContainer.add(view);
}

mainWin.add(border);
mainWin.add(viewContainer);
mainWin.open();
