let myArrow, myAngle;

function setup() {
 
  createCanvas(500,500);
  background(255);
  myArrow = new ArrowUpdated(50,50, 4 * cos(60*PI/180), 4 * sin(60*PI/180), 0, "#ff000")
  
}


function draw() {
  background(255);
  myAngle = atan2(myArrow.vy, myArrow.vx);
  myArrow.rotation = myAngle
   myArrow.drawArrow();
   myArrow.moveArrow();

  
  
   
}
/* function angle() {
  let myAngle;
  myAngle = atan2(vx,vy);
  console.log(myAngle)
  myArrow.rotation = myAngle
  } */