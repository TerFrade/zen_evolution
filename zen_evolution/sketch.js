let ecosystem;

function setup() {
  ecosystem = new Ecosystem();
  createCanvas(ecosystem.Size.width, ecosystem.Size.height);
}

function draw() {
  background(60);
  ecosystem.life();
}
