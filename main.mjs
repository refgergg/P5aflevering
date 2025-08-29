/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/

//import Game from "./game.mjs";
let d;

// Set to false when game is done
var DebugAIDraw = true;
var DebugRenderStats = true;

function preload() {
  playerimg = loadImage("./sprites/green.png");
  enemyimg = loadImage("./sprites/red.png");
}

function spawnPlayerAndEnemyMain(indeed) {

  if(indeed === false) {
    return spawnPlayerAndEnemies(d);
  } else {
    drawPnEImages();
  }
}

function setup() {

  // Render Stats
  //p5play.renderStats = DebugRenderStats;
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
  d = pixelDensity();

  // Find shortest path to player
  AIinitSetup(DebugAIDraw);

  // Draw trees
  drawTrees();

  // Draw seed text AFTER drawing the canvas instead of drawing it before like an idiot
  fill(0, 0, 0, 100)
  textSize(26);
  text("seed: " + str(seed), 5, 25);
  

  // UI Setup
  UISetup();
}