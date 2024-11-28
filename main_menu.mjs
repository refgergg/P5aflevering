function setup() {
  createCanvas(1000, 1000);
  background("gray");
  textAlign(CENTER, CENTER)
  text("Tactical [redacted] deployment",500,400)
  let gapsize = width / 3;
  button1 = createButton('Start game');
  button1.position(gapsize - button1.width / 2, 700);
  button1.mousePressed(StartGame)


  button2 = createButton('Settings');
  button2.position(gapsize * 2 - button2.width / 2, 700);
  button2.mousePressed(Settings)
}

function StartGame() {
    window.location.href = "Game.html";
}
function Settings() {
  window.location.href = "Settings.html"
}