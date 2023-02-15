function setup() {
  createCanvas(400, 400);
}

function draw() {
background(220);
triangles();
}
 function triangles() {
 fill("gold");
  scale(2);
  translate(40, 5);
  triangle(30, 75, 58, 15, 86, 75);
  triangle(5, 140, 30, 75, 60, 140);
  triangle(60, 140, 86, 75, 115, 140);
  if (mouseX > 200) stroke("gold");
  else if (mouseX < 200) stroke(50);
 

 }

