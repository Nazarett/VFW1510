var imageFile = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "photos");
var imageList = imageFile.getDirectoryListing();


//Image Background
var imageBackground = Ti.UI.createView({
	height: "50%",
	width: "90%",
	borderRadius: 5,
	bottom: 150
});
//Image View
var imagesView = Ti.UI.createImageView({
	image: "photos/" + imageList[0],
	width: "90%",
	height: "90%"

});

imageBackground.add(imagesView);

var imageFunction = function(){
	var theImage = imageFunction;
	var randomImage = Math.floor(Math.random()*imageList.length);
	while(theImage === randomImage){
		var randomImage = Math.floor(Math.random()*imageList.length);
	};
	imagesView.image = "photos/" + imageList[randomImage];
};

//Button

	// Next Button Background - white
var nextButton = Ti.UI.createView({
	backgroundColor:"black",
	height: 50,
	width:"80%",
	borderRadius: 20,
	borderColor: "black",
	borderWidth: 3,
	bottom: 20
});


	// Next Button Text
var nextButtonText = Ti.UI.createLabel({
	color: "orange",
	text: "Next Heroe",
	font: {fontSize: 40, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center"
});

var secondWindow = function(){
	var galleryWindow = Ti.UI.createWindow({
		title: "My Heroes",
		backgroundColor: "#3b9239",  // green
		
	});
	nextButton.add(nextButtonText);
	galleryWindow.add(nextButton, imageBackground);
	navWindow.openWindow(galleryWindow);
};


nextButton.addEventListener("click", imageFunction); // button that opens up the imageView function
imageView.addEventListener("click", secondWindow);  // button that opens up the imageView function





