

var heightElem = document.getElementById("height");
var formElem = document.getElementById("draw-form");

formElem.onsubmit = function(event) {

    event.preventDefault();

    clearError();

    // figure out the height the user typed
    heightStr = heightElem.value;

    // if they didn't type anything, yell at them and exit early
    if (heightStr == "") {
        displayError("Please provide a height");
        return;
    }

    // convert the string to an int
    height = parseInt(heightStr);

    // if the height is negative or not-a-number, yell at them and exit early
    if (isNaN(height) || height < 0) {
        displayError("That's not a valid height.");
        return;
    }

    // if the height is absurdly tall, yell at them and exit early
    var tooTall = 100;
    if (height > tooTall) {
        displayError("Are you cray? I can't build a pyramid that tall.");
        return;
    }

    // draw pyramid with the specified height
    drawPyramid(height);
}


function displayError(message) {
    heightElem.className = "invalid-field";
    document.querySelector(".error-message").innerHTML = message;
}

function clearError(message) {
    heightElem.className = "";
    document.querySelector(".error-message").innerHTML = "";
}



/**
 * drawPyramid
 *
 * Renders, in the HTML document, a Mario pyramid of the specified height
 */
function drawPyramid(height) {

    // first, clear the old content
    document.getElementById("pyramid").innerHTML = "";

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
         var spaceChar = "&nbsp";
         rowStr += spaceChar;
        }
        for (var i = 0; i < numBricks; i++) {
         rowStr += "#";
        }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.innerHTML = rowStr;

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
