let myBall;

function setup() {
 
  createCanvas(500,500);
  background(255);
  myBall = new BallRGB(250,250,0,0,3,255,0,0, 0, 0)
  
}


function draw() {
  background(255);
  myBall.drawBall();
  myBall.accelerateBall();
  myBall.moveBall();
 

  
}
