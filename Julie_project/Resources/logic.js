/*
 * @author Julie Berry
 * Visual Frameworks 1 
 * Section 1510
 * Due: Oct. 10, 2015
 * 
 * Project 2
 */

// Function to display CARS desc
var carsDisplay = function(){   
    // creates a new window to display descs
    var descDisplay = Ti.UI.createWindow({   // creates a new window to display descs
        backgroundColor: "#edc951"  // sets main window bg to yellow
    });
    // creates title view for desc display window
    var displayTitleView = Ti.UI.createView({   
        backgroundColor: "#00a0b0",  // sets title bg to lt blue
        height: 60,
        top: 0
    });
    // creates decorative border
    var displayBorder = Ti.UI.createView({
        backgroundColor : "#cc2a36",  // sets title border to lt red
        height: 2,
        top: displayTitleView.height + displayTitleView.top
    });
    // creates label for title
    var displayTitleLabel = Ti.UI.createLabel({
        text:this.title,
        color: "#f372d",  // sets title text to brown
        font: {fontSize: 30, familyFont: "Helvetica", fontStyle: "bold"},
        textAlign: "center",
        width: "100%",
        top: 20
    });

    // creates label for desc text
    var displayText = Ti.UI.createLabel({
        text: this.desc,  // displays desription for the row that is selected
        font: {fontSize: 22, familyFont: "Helvetica"},
        top: displayBorder.height + displayBorder.top + 40,  // sets placement for text
        color: "#f372d",  // sets title text to brown
        left: 10,
        right: 10
    });
    
    // creates label for back button
    var backButton = Ti.UI.createLabel({
        text: "Previous",
        backgroundColor: "#eb6841",  // back button bg set to brown
        color: "#edc951", // back button text color set to yellow
        height: 50,
        font: {fontSize: 24, familyFont: "Helvetica"},
        width: "100%",
        bottom: 0,
        textAlign: "center"
    });
    // function to close window
    var backWindow =function(){
        descDisplay.close();
    };
    backButton.addEventListener("click", backWindow);  // opens back window on click
    displayTitleView.add(displayTitleLabel); // adds displayTitleLabel to displayTitleView
    descDisplay.add(displayTitleView, displayBorder, displayText, backButton); // adds displayTitleView, displayBorder, displayText, backButton to descDisplay
    descDisplay.open(); // opens descDisplay window
};

// for loop to get cars data
for(var i = 0, j = cars.length; i<j; i++){
    var theRow = Ti.UI.createTableViewRow({
        title: cars[i].title,
        desc: cars[i].desc,
        hasChild: true  // displays nav arrow to each row item
    });

    if(Ti.Platform.name === "iPhone OS"){  // for iOS only
        theRow.hasChild = false;  // removes arrow
        theRow.hasDetail =true;  // displays (i) icon
    }
    carsSection.add(theRow);  // adds cars section to the table row
    theRow.addEventListener("click", carsDisplay); // adds event listenter to the Row that will display cars when clicked
    }
    

// function to get TOYS display
var toysDisplay = function(){
    var descDisplay = Ti.UI.createWindow({  // creates a new window to display descs
    backgroundColor: "#edc951"  // sets main window bg to yellow
    });
    
    // creates title view for toys display
    var displayTitleView = Ti.UI.createView({
        backgroundColor: "#00a0b0",  // sets title bg to lt blue
        height: 60,
        top: 0
    });
    
    // creates decorative border
    var displayBorder = Ti.UI.createView({
        backgroundColor : "#cc2a36",  // sets title border to lt red
        height: 2,
        top: displayTitleView.height + displayTitleView.top
    });
    
    // creates title label for toys display
    var displayTitleLabel = Ti.UI.createLabel({
        text: this.title,
        ccolor: "#f372d",  // sets title text to brown
        font: {fontSize: 30, familyFont: "Helvetica", fontStyle: "bold"},
        textAlign: "center",
        width: "100%",
        top: 20
    });

    // creates label view to display desc text
    var displayText = Ti.UI.createLabel({
        text: this.desc,
        font: {fontSize: 26, familyFont: "Helvetica"},
        top: displayBorder.height + displayBorder.top + 40,
        color: "#222",  // sets text color to dark gray
        left: 10,
        right: 10
    });
    
    // creates label for back button
    var backButton = Ti.UI.createLabel({
        text: "Previous",
        backgroundColor: "#eb6841",  // back button bg set to brown
        color: "#edc951", // back button text color set to yellow
        height: 50,
        font: {fontSize: 24, familyFont: "Helvetica"},
        width: "100%",
        bottom: 0,
        textAlign: "center"
    });
    // function that closes back window
    var backWindow =function(){
        descDisplay.close();
    };
    // event listener that closes back window when back button is clicked
    backButton.addEventListener("click", backWindow);

    displayTitleView.add(displayTitleLabel); // adds displayTitleLabel to displayTitleView
    descDisplay.add(displayTitleView, displayBorder, displayText, backButton); // adds displayTitleView, displayBorder,displayText, backButton to descDisplay
    descDisplay.open(); // opens descDisplay

};

// for loop to get toys data
for(var i = 0, j = toys.length; i<j; i++){  
    var theRow = Ti.UI.createTableViewRow({
    title: toys[i].title,
    desc: toys[i].desc,
    hasChild: true
    });
    // for iOS only
    if(Ti.Platform.name === "iPhone OS"){
        theRow.hasChild = false;
        theRow.hasDetail =true;
    }
    toySection.add(theRow); // adds theRow to toy section
    theRow.addEventListener("click", toysDisplay); // event listener to display toys when the row is clicked

}
