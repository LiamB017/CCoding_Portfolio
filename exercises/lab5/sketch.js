let myShip;
let force = 0;
function setup() {
 
  createCanvas(500,500);
  background(255);
  myShip = new Ship(250,250, 0, 0, 0, 0, 0, false)
  
}


function draw() {
  background(255);

  myShip.drawShip();
 
 myShip.keyPressed();

 
  myShip.moveShip();
  myShip.keyReleased();

 

  
}

