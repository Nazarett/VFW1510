/*
 * @author Julie Berry
 * Visual Frameworks 1 
 * Section 1510
 * Due: Oct. 10, 2015
 * 
 * Project 2
 */




// background color for master UI - set to black   
Ti.UI.setBackgroundColor("#000");

// JSON Objects - arrays
 var cars = [
    {"title": "Big John", "desc": "1997 Ford F150. Pulls horse trailer and off roads when necessary. Crunches enemies dead."},
    {"title": "Baby Doll", "desc": "1997 Saab Talledega. Solid built convertible, great for summer fun. Luxurious on long road trips" },
    {"title": "Guts", "desc": "2001 Lumina. Ugly but a great work horse for every day city driving. No fiberglass so hit it and eat dirt"}
 ];
  
var toys = [
    {"title": "Juju Doll", "desc": "21' Islander sailboat. Sleeps 2, great for fishing and general aqueous debauchery. Pirates welcome."},
    {"title": "The Baron", "desc": "17' Devlin all wood sailboat on trailer. Born in 1953. Great toy for beginners. Gets tired quickly."}, 
    {"title": "Charlie", "desc": "2-horse side-load trailer. Best towed with 'Big John'. Tolerates head butts and master kicks from Kohl."}
];


// MAIN WINDOW

// creates Main Widow
var mainWindow = Ti.UI.createWindow({
    backgroundColor: "#e3e3e3"  // bg color set to gray
});

// creates Title View for Main Widow
var titleView = Ti.UI.createView({
    backgroundColor: "#00a0b0",  // title bg set to lt blue
    height: 60,
    top: 0
});

// creates decorative border
var border = Ti.UI.createView({
    backgroundColor : "cc2a36", // border color set to red
    height: 2,  // sets border height to 2px
    top: titleView.height + titleView.top
});


// creates Label for Title View
var titleLabel = Ti.UI.createLabel({
    text:"My Vehicles",  // title text
    color: "#4f372d",  // title font color set to brown
    font: {fontSize: 30, familyFont: "Helvetica", fontStyle: "bold"},
    textAlign: "center",
    width: "100%",
    top: 15  // sets title top padding 
});

// creates Table View to display array of vehicles
var vehicles = Ti.UI.createTableView({
    top: border.top + border.height
});

    if(Ti.Platform.name === "iPhone OS"){ // for iPhone only
        vehicles.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
    }
    // creates Table Section for Cars
    var carsSection = Ti.UI.createTableViewSection({
        headerTitle: "Cars",  // section header text
        footerTitle: "These are my cars"  // section footer text
    });
    // creates Table Section for Toys
    var toySection = Ti.UI.createTableViewSection({
        headerTitle: "Toys",  // section header text
        footerTitle: "These are my toys"  // section footer text
    });


var vehiclesSection = [carsSection, toySection]; // puts carsSection and toySection in a new array vehicleSection

// data dislay option
vehicles.setData(vehiclesSection);  // displays objects in vehiclesSection

var loadFile = require("logic");  // loads logic.js

titleView.add(titleLabel);  // adds titleLebel to titleView
mainWindow.add(titleView, border, vehicles); // adds titleView, border, vehicles to mainWindow
mainWindow.open(); // opens mainWindow

