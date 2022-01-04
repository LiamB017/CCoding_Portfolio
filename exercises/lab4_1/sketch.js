let myBall;

function setup() {
 
  createCanvas(500,500);
  background(255);
  myBall = new BallRGB(0,0,0,0,3,255,0,0, 0.02, 0.08)
  
}


function draw() {
  background(255);
  myBall.drawBall();
  myBall.accelerateBall();
  myBall.moveBall();
 

  
}
