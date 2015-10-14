//Practice for video week 3 
var win = Ti.UI.createWindow({
	backgroundColor: "#fff",
	layout:"vertical"
});

//var myPic = Ti.UI.createImageView({
	//image: "pics/scorpion.jpg",
	//width: "70%"
//});


//var myPics = ["scorpion.jpg", "oreo.jpg"];

var fotos = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"pics" );
var myPics = fotos.getDirectoryListing();

for(var i=0; i<myPics.length;i++){
	var thePic = Ti.UI.createImageView({
		image: "pics/" + myPics [i],
		width : "50%",
		
	});
	win.add(thePic);
}

win.add(myPics);
win.open();