class Molecule {
    constructor(){
     this.posX=Math.round(Math.random()*500);
     this.posY=Math.round(Math.random()*500);
     this.speedX=Math.round(Math.random()*4 - 2);
     this.speedY=Math.round(Math.random()*4 - 2);
      this.radius=Math.round(Math.random()*5 + 5);
}

render(){
    ellipse(this.posX,this.posY,this.radius)
}

step(){
    this.posX = this.posX + this.speedX
    this.posY = this.posY + this.speedY
}
    }

