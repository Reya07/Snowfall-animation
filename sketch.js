function preload() {
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow = new Snow(20, 20, 15, 15)

}

function draw() {
  background(bg);  
  drawSprites();

  if (keyPressed(SPACE)) {
    snow.display();
  }

}