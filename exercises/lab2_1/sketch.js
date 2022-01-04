function setup() {
  angleMode(DEGREES);
createCanvas(500,500);
background(255);
  b1 = new Ball(width/5,height/15, 5 * cos(45), 5 * sin(45),20,50);
 
  b2 = new Ball(width/5,height/5,50,10,50,50)

}


function draw() {
     background(255);
     translate(200,200)
b1.drawBall();
b2.drawBall();
b1.moveBall(2);
b2.moveBall(2);

}