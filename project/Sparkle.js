//here I created the class for the sparkle object, which will be used as a blueprint for all sparkle objects

class Sparkle {
    constructor (x,y,col,firework){

    // I made the position of a sparkle a vector
    this.pos = createVector(x,y);
    if (firework) {
        //The velocity of the original is a random vector 
        this.velo = createVector(random(-12,12),random(-12,-25));
      
    } else {
        // The velocity of the sparkle created from the firework is also a random vector
        this.velo = p5.Vector.random2D();
        this.velo.mult(random(6, 2));
        
    }
       
    this.acc = createVector(0,0);
    // Every Sparkle has a radius of 4
    this.r = 4;
    // The lifetime variable dictates how long a sparkle is onscreen before it fades out
   this.lifetime = 200;
   this.col = 255;
   
   let params ={
       col:0
    
    }
}
     // This function checks if the lifetime is less than 0, if it is, true is returned, if not, false is returned
    isFinished() {
      if (this.lifetime < 0) {
          return true;
      } else {
          return false;
      }
      }

       // The forces of gravity and wind are applied to the acceleration of the object

    applyForce = function(force) {
        this.acc.add(force);
       
    }
 
    // The update function moves the objects when the sketch is drawn

 update() {
     if (!this.firework) {
         this.velo.mult(0.96)
     }
     // Movement is created by adding velocity to the position of the object and by adding accleration 
     // to the velocity
    this.velo.add(this.acc);
    this.pos.add(this.velo);
     this.acc.mult(0);
     // Lifetime of the object is gradually decreased 
     this.lifetime -= 2.5;
   
// If sparkles hit the edges of the canvas, bounce them back by adding or subtracting velocity

     if(this.pos.x > width )
     this.velo.add(-10)
     if(this.pos.x < 0 )
     this.velo.add(+5)
    
      
     
     }
    
    
    
    
    





checkIntersections(){
     this.sparkles.forEach(sparkle =>{
       
// //  console.log(p5.Vector.sub(this.pos, sparkle.pos)).mag();

let distance = p5.Vector.sub(this.pos, sparkle.pos).mag();

 if (distance < 20 && distance > 0){
     this.Intersecting = true;
     console.log(distance);
 }


     });
 }

   
 // The show function draws the sparkle objects
     
    show() {
        // Sparkles are drawn using the col variable to create color
        stroke(params.col, params.col, params.col, this.lifetime)
       
        if(this.Intersecting === true ){
             
           
        } else {
            console.log("intersect")
            
        }
        fill(params.col,500,this.lifetime);
        // Sparkles are ellipses with an x and y position
        // aswell as a radius which is multiplied by the radius variable
        ellipse(this.pos.x, this.pos.y, params.r * 2)
    }

}

