var X;
var Y;
var scl;
var flr;
var Grav;
var img;
var Sta;

function setup() {
  createCanvas(windowWidth, windowHeight);
  X = 50
  Y = 50
  scl = 50
  flr = height/2
  img = loadImage("Start.png")
  Grav = 1
  Sta = true
}

function draw() {
  background(220);
  fill(255,0,0)
  ellipse(X,Y,scl,scl)
  fill(0,255,0)
  rect(0,height/2,width,height/2)
  if (Y < flr-scl/2){
    Y = Y+Grav
  }
  if (dist(mouseX,Y,X,Y)<=100){
    X = X + random(0,20)
  }
  if (dist(mouseX,Y,X,Y)<1){
    Y = 50
    Sta = true
  }
  if (X > width){
    X=0+scl
  }
  fill(0,0,255)
  rect(mouseX,Y,scl,scl/2)
  if (Sta == true) {
    image(img,0,0,width,height)
  }
}

function mousePressed() {
  Sta = false
}