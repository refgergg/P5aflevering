/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/

// Player enemy variables
let playerimg;
let enemyimg;

function spawnPlayerAndEnemies(d) {
    let playerPixelLocation = [];
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
  
    let enemyPixelLocation = [];
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
  
    // Draw player and opponent
    image(playerimg, playerPixelLocation[0], playerPixelLocation[1], 50, 50);
    image(enemyimg, enemyPixelLocation[0], enemyPixelLocation[1], 50, 50);
}
