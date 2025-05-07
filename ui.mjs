/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/
var testVar = false;

function UISetup() {
    let BarrackButton = createButton('Barracks (10 wood)');
    BarrackButton.position(width, height-100);
    BarrackButton.mousePressed(helloworld);


}


// This is using p5play, which is dumb. Unfortunately we have nothing better.
function helloworld() {
    let barracks = new Group();
    barracks.placedDown = false;

    let barrack = new barracks.Sprite();
    barrack.width = 50;
    barrack.height = 50;
    console.log(barrack);
    testVar = true;

    // Return created barrack sprite
    return barrack;
}

