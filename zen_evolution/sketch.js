let ecosystem;

function setup() {
  ecosystem = new Ecosystem();
  frameRate(60);
  createCanvas(ecosystem.Size.width, ecosystem.Size.height);
}

function draw() {
  background(60);
  ecosystem.Life();
}
