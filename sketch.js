var hr, mn, sc
function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(255);  
  translate(200, 200)
  rotate(-90)
  hr = hour()
  mn = minute()
  sc = second()
  secAngle = map(sc, 0, 60, 0, 360);
  minAngle = map(mn, 0, 60, 0, 360)
  hourAngle = map(hr % 12, 0, 12, 0, 360)

  push();
  rotate(secAngle)
  stroke("black");
  strokeWeight(7);
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(minAngle)
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 80, 0)
  pop();

  push();
  rotate(hourAngle)
  stroke("aqua");
  strokeWeight(7);
  line(0, 0, 50, 0)
  pop();

  strokeWeight(10);
  noFill();
  stroke("aqua")
  arc(0, 0, 305, 305, 0, hourAngle)
  strokeWeight(10);
  noFill();
  stroke("blue")
  arc(0, 0, 280, 280, 0, minAngle)
  strokeWeight(10);
  noFill();
  stroke("black")
  arc(0, 0, 250, 250, 0, secAngle)
  
  
}