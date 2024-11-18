/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/

//import Game from "./game.mjs";

function preload() {
  playerimg = loadImage("./sprites/green.png");
  enemyimg = loadImage("./sprites/red.png");
}

function setup() {
  //Use image center mode
  imageMode(CENTER);

  // Get and set random seed
  seed = Math.round(random(0, 25565));
  noiseSeed(seed);

  // Init setup
  createCanvas(1000, 1000);
  colorMode(HSB,360,100,100,100);
  noStroke();

  // Draw terrain and load the pixels into array
  drawTerrain();
  loadPixels();
  const d = pixelDensity();

  // Spawn player and enemy at positions
  spawnPlayerAndEnemies(d);

  // Find shortest path to player
  AIinitSetup();

  // Draw trees
  drawTrees();

  // Draw seed text AFTER drawing the canvas instead of drawing it before like an idiot
  fill(0, 0, 0, 100)
  textSize(26);
  text("seed: " + str(seed), 5, 25);
  
 


}

function draw() {

}
