/* Copyright by YOUR MOM HAHAHHAHAHAHHA
*
*   yeah thats right cry
*
*/
// Terrain Generation variables
let alph = 15;
let huey;
let sat;
let noiseLevel = 0.038;
let seed;
let rez = 0.005;


function drawTerrain() {
  //pg = createGraphics(width, height);
  // Loop over canvas, set noise, map to bigger number, then define hue and sat based on noise, then fill
  for(i = 0; i < width; i+=3){
    for(j = 0; j < height; j+=3){
        noiseDetail(6, 0.6);
        m = noise(i*rez,j*rez) + noiseLevel;
        n = map(m,0.2,1,0,10);
        if (n<1){huey = 235; sat = 100; brightness = 85} //Shore water
        else if (n<2){huey = 235; sat = 90; brightness = 85} // Normal water
        else if (n<4){huey = 235; sat = 80; brightness = 85} //Deep water
        else if (n<4.3){huey = 68; sat = 90; brightness = 85} //
        else if (n<7){huey = 109; sat = 90; brightness = 85} //Green
        else if (n<8){huey = 0; sat = 0; brightness = 16;}
        else if (n<9){huey = 0; sat = 0; brightness = 85;}
        else {huey = 235}
        fill(huey,sat,brightness,alph);
        rect(i,j,7);
    }
  }
}

function drawTrees() {
  // Draw trees
  for(i = 0; i < width; i+=3){
    for(j = 0; j < height; j+=3){
      m = noise(i*rez,j*rez) + noiseLevel;
      n = map(m,0.2,1,0,10);
      if (n<7 && n>4.3){huey = 36; sat = 90;}
      else {continue;}

      if(Math.round(random(0, 5)) == 1)
      {
        fill(huey,sat,85,alph);
        rect(i,j,7);
      }
    }
  }
}
