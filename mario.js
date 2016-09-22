
drawPyramid(5);


/**
* drawPyramid
*
* Renders, in the HTML document, a Mario pyramid of the specified height
*/
function drawPyramid(height) {

    // for each row....
    for (var row = 0; row < height; row++) {

        // figure out number of bricks and spaces
        var numBricks = row + 2;
        var numSpaces = height - row - 1;

        // build up a string for this row
        var rowStr = "";
        for (var i = 0; i < numSpaces; i++) {
            rowStr += ".";
        }
        for (var i = 0; i < numBricks; i++) {
            rowStr += "#";
        }

        // create a <p> element
        rowElem = document.createElement("p");

        // set rowStr to be the inner text of the <p>
        rowElem.innerHTML = rowStr;

        // insert the paragraph as a child of the <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}
