class Ball {
    constructor(x,y,vx,vy,radius,c) {
        //properties
        this.x = x;
        this.y = y;
        this.vx = vx
        this.vy = vy
        this.radius = radius;
        this.c = c;
        this.c1 = random(0,150);
        this.c2 = random(0,150);
        this.c3 = random(0,150);
      

        //this rotation = 0
    }

    drawBall() {
        translate(this.x, this.y);
        rotate(this.rotation);
        fill(this.c);
        ellipse(0,0, this.radius*2, this.radius*2, this.xspeed, this.yspeed, this.angle);
    }
moveBall() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

    

}

}