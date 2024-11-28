function setup() {
    createCanvas(1000, 1000);
    background("gray");
    textAlign(CENTER, CENTER)
    text("Tactical [redacted] deployment",500,400)
    let gapsize = width / 2;
    button1 = createButton('Back');
    button1.position(gapsize - button1.width / 2, 700);
    button1.mousePressed(Back)

  function Back() {
      window.location.href = "Index.html";
  }
}