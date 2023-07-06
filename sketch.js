let pos;

function setup() {
  createCanvas(400, 400);
  pos = createVector(width/2, height/2);
}

function draw() {
  background(220);
  circle(pos.x, pos.y, 20);
}

function keyPressed() {
  if (keyCode == LEFT_ARROW)
    pos.add(-10,0);
  if (keyCode == RIGHT_ARROW)
    pos.add(10,0);
  if (keyCode == UP_ARROW)
    pos.add(0,-10);
  if (keyCode == DOWN_ARROW)
    pos.add(0,10);
    
}
