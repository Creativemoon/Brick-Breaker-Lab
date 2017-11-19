var ellipseX, ellipseY, xSpeed;

var ySpeed = 5;

var paddleWidth = 80;
var paddleHeight = 15;
var bottomGap = 550;

function setup() {
  createCanvas(400, 600);
  ellipseX = width/2;
  ellipseY = height/2;
  xSpeed = random(-5, 5);
}


var playing = false;

function draw() {
  background(250);
  rect(mouseX - paddleWidth/2, bottomGap, paddleWidth, paddleHeight);

  if (playing) {
  ellipseX += xSpeed;
  ellipseY += ySpeed;
  } else {
  ellipseX = width/2;
  ellipseY = height/2;
  }
  
  fill(0);
  ellipse(ellipseX, ellipseY, 30, 30);
  
  if (ellipseX > 385) {
    xSpeed = xSpeed * -1;
  }
  
  if(ellipseX < 15) {
    xSpeed = xSpeed * -1;
  }
  
  if(ellipseY < 15) {
    ySpeed = ySpeed * -1;
  }
  
  if(ellipseY > 540 && ellipseY < 546 && ellipseX > mouseX - paddleWidth/2 && ellipseX < mouseX + paddleWidth/2){
    ySpeed = ySpeed * -1;
  }
  
  if (ellipseY >= 650) {
    playing = false;
  }
}

function mouseClicked(){
  if (!playing) {
  ellipseX += xSpeed;
  ellipseY += ySpeed;
  
  xSpeed = random(-5, 5);
  ySpeed = 5;

  playing = true;
  }
}
/*
Do Now 10/11/17
1. con cat e nation
2.
var hour = 30
var day = "wed"

if (hour > 15.5 || hour < 8){
  console.log("School is out!")
}
*/