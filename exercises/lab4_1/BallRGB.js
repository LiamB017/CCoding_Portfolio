class BallRGB {
	constructor(x, y, vx, vy, radius, r, g, b, ax, ay) {
		//properties
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.radius = radius;
		this.r = r;
		this.g = g;
		this.b = b;
        this.ax = ax;
        this.ay = ay;
		//this.rotation = 0;
	
   }
   updateVals(newX, newY, newVx, newVy, newRadius, newR, newG, newB, newax, neway)
   {
	    this.x = newX;
		this.y = newY;
		this.vx = newVx;
		this.vy = newVy;
		this.radius = newRadius;
		this.r = newR;
		this.g = newG;
		this.b = newB;
        this.ax = newax;
        this.ay = neway;
   }
   
   //function to draw the ball
   drawBall() {
	  
		//translate(this.x, this.y);
		//rotate(this.rotation);
		fill(this.r, this.g, this.b);
		ellipse(this.x, this.y, this.radius*2, this.radius*2);
		
	} 
	//function to move the ball
	moveBall() {
		this.x = this.x + this.vx;
		this.y = this.y + this.vy;
	}

    accelerateBall() {
        
       this.vx= this.vx + this.ax;
       this.vy= this.vy + this.ay;
    }

	
}




