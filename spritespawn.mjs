/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/

// Enemy locations
let playerPixelLocation = [];
let enemyPixelLocation = [];

function spawnPlayerAndEnemies(d) {

    // Find player location by first green pixel from top left corner
    player:
    for(x = 100; x < width-100; x++) {
      for(y = 100; y < height-100; y++) {
        const i = 4 * d * (y * d*width + x);
        const [r, g, b] = [pixels[i], pixels[i+1], pixels[i+2]];
        //console.log(x, y, [r, g, b]);
        if(r >= 50 && r <= 59) {
          playerPixelLocation = [x, y];
          break player;
        }
      }
    }
  
    // Find enemy location by first green pixel from bottom right corner
    enemy:
    for(x = 900; x > width-900; x--) {
      for(y = 900; y > height-900; y--) {
        const i = 4 * d * (y * d*width + x);
        const [r, g, b] = [pixels[i], pixels[i+1], pixels[i+2]];
        //console.log(x, y, [r, g, b]);
        if(r >= 50 && r <= 59) {
          enemyPixelLocation = [x, y];
          break enemy;
        }
      }
    }

    return [playerPixelLocation, enemyPixelLocation];
}

function drawPnEImages() {
  // Create player and opponent and draw their images
  play = new Player(playerPixelLocation[0], playerPixelLocation[1], true);
  enem = new Player(enemyPixelLocation[0], enemyPixelLocation[1], false);
}
