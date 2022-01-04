class Ball {
    constructor(x,y,vx,vy,radius,c) {
        //properties
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.radius = radius;
        this.c = c;
        
        
      

        //this rotation = 0
    }

    drawBall() {
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(this.c);
        ellipse(0,0, this.radius*2, this.radius*2,this.angle);
    }
    moveBall() {

    if(this.x > width || this.x < 0) {
        this.vx = this.vx * -1;
     
        
        }
        if(this.y > height || this.y < 0){
        this.vy = this.vy * -1;
   
        }    
    this.x = this.x + this.vx
    this.y = this.y + this.vy
  
    }
    
}