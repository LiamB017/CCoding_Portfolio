class Ship {
	constructor(x, y, vx, vy, ax, ay,  rotation, showFlame) {
	this.x = x;
	this.y = y;
	this.vx = vx;
	this.vy = vy;
	this.rotation = rotation;
	this.showFlame = showFlame;
    this.ax = ax;
    this.ay = ay;
    
}

	drawShip()
	{
		push();
		translate(this.x, this.y);
		rotate(this.rotation);
		//lineWidth = 1;
		//context.strokeStyle = "#ffffff";
		beginShape();
		vertex(10, 0);
		vertex(-10, 10);
		vertex(-5, 0);
		vertex(-10, -10);
		vertex(10, 0);
		endShape();
 
		if (this.showFlame) {
		beginShape();
		vertex(-7.5, -5);
		vertex(-15, 0);
		vertex(-7.5, 5);
		endShape();
		//context.stroke();
		}
		pop();
	}
	accelerateShip(ax,ay)
	{
		this.vx = this.vx + ax;
		this.vy = this.vy + ay;
	}
	
	
		
	moveShip()
	{
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;

      
    
        } 
	

    keyPressed() 
    {
        if (keyCode=== RIGHT_ARROW) {
			
            this.rotation += 0.01;
    
        } else if (keyCode=== LEFT_ARROW)
        this.rotation += -0.01;
    
        if (keyCode=== UP_ARROW) {
                
            force += 0.05;
            this.vx += this.vx + force;
            this.showFlame = true;

    }
}
keyReleased() 
{
    if (keyCode === 0) {
        force = 0;
        this.showFlame = false;

    }
}
}