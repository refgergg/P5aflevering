/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/

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

    // Return created barrack sprite
    return barrack;

    /*while(!barrack.placedDown) {
        barrack.x = mouseX;
        barrack.y = mouseY;

        if(mouse.presses('left')) {
            barrack.placedDown = true;
        }
    }*/
}


/*function draw() {
    if(testVar) {
        barrack.x = mouseX;
        barrack.y = mouseY;
    }
    //clear();
    //testFunction();
}*/
