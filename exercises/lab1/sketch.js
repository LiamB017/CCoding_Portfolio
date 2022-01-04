//Arrow class
class Arrow {
	constructor(x, y, rotation) {
		//x and y properties of arrow
		this.x = x;
		this.y = y;
		//rotation of arrow
		this.rotation = rotation;
	}

	

	drawArrow() {
		//translate 
		translate(this.x, this.y);
		//rotate
		rotate(this.rotation);
		line(-50, -25, 0, -25);
		line(0, -25, 0, -50);
		line(0, -50, 50, 0);
		line(50, 0, 0, 50);
		line(0, 50, 0, 25);
		line(0, 25, -50, 25);
		line(-50, 25, -50, -25);

        
		
	}
} 



  
let myArrow;
function setup() {
	createCanvas(720, 400);
	myArrow = new Arrow(50,50,0)
	
  }

function draw(){
    background(255);
	myArrow.drawArrow();
    
}

function mouseMoved() {
    let dx = mouseX - myArrow.x;
    let dy = mouseY - myArrow.y;
    let myAngle;
    myAngle = atan2(dy,dx);

    console.log(myAngle)
    myArrow.rotation = myAngle
   


}