//Slider
var sliderWindow = Ti.UI.createWindow({
	backgroundColor:"black"//Yellow
});

var slider = Ti.UI.createSlider({
	height: "auto",
	width:"100%",
	bottom: 10,
	rightTrackImage:"backgroundImage/ marvel.jpg",
	leftTrackImage:"backgroundImage/ dc.png",
	min:0,
	max:100,
	value: 50
});

var label = Ti.UI.createLabel({
	backgroundColor:"ffce00",//Yellow
	text:"Choose A Side",
	font: {fontSize: 25, fontFamily: "Helvetica", fontWeight: "bold"},
	textAlign: "center",
	bottom:0
});

slider.addEventListener("change", function(e){
	label.text;
});

sliderWindow.add(slider,label);
sliderWindow.open();

var data = function(){
	var dataWindow = Ti.UI.createWindow({
		title: "Balance",
		backgroundColor: "ffce00",//Yellow
		
	});
	
	navWindow.openWindow(dataWindow);
};

balanceView.addEventListener("click", data);

