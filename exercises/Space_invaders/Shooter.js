class Shooter{
    constructor(x,y) {
   this.pos = createVector(x,y);

   this.direction = 1;
   this.barrelAngle = -PI / 2
    }
    render(){
        push()
        translate(this.pos.x, this.pos.y);
        fill(255,0,0);
        rectMode(CENTER);
        rect(0,0, shooterWidth, shooterHeight)
         rotate(this.barrelAngle)
        rectMode(CORNER);
        fill(255,100,200)
        noStroke();
     rect(-5,5,100,10)
        pop()


    }

    move(){
  
    if (this.pos.x < 0 || this.pos.x >500) {
        this.direction *= -1
    }
    this.pos.x += this.direction;
    }

    
    // this line of code makes it that so whatever parameter is in setDirection() decided which direction the shooter moves, -1 = left, 1 = right
    setDirection(direction){
    this.direction = direction;
    }
    
   
}