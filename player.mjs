/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/

// A way to describe a player (the player and the enemy in this case)
function Player(i, j, amIPlayer) {

    //What's my location?
    this.i = i;
    this.j = j;

    //Stats
    this.health = 100;

    //Resources
    this.wood = 0;
    this.stone = 0;
    
    //My buildings
    this.barracks = [];

    this.playable = false;
    //Am I controlled by the player?
    if(amIPlayer === true) {
        this.playable = true;
    }

    //Draw my image
    if(this.playable === true) {
        image(playerimg, this.i, this.j, 50, 50);
    } else {
        image(enemyimg, this.i, this.j, 50, 50);
    }

    //Am I dead?
    this.dead = false;
}