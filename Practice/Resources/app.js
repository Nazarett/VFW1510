//Slider
var slider = Ti.UI.createSlider({
	height: "auto",
	width:"100%",
	bottom: 10,
	rightTrackImage:"backgroundImage/marvel.jpg",
	leftTrackImage:"backgroundImage/dc.png",
	min:0,
	max:100,
	value: 50
});

var label = Ti.UI.createLabel({
	backgroundColor:"black",
	text:"Choose A Side",
	color:"#ffce00",
	font: { fontSize: 30, familyFont : "arial", fontWeight: "bold"},
	width:"100%",
	height:50,
	textAlign: "center",
	bottom:0
});

slider.addEventListener("change", function(e){
	label.text;
});

// sliderWindow.add(slider,label);
// sliderWindow.open();


var data = function(){
	var dataWindow = Ti.UI.createWindow({
		title: "Balance",
		backgroundColor: "ffce00",//Yellow
		
	});
	dataWindow.add(slider,label);
	navWindow.openWindow(dataWindow);
};

balanceView.addEventListener("click", data);
