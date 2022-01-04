//Here I created the firework class to create firework objects

class Firework{
    constructor() {
        // Sparkle objects are created with each firework object
    this.firework = new Sparkle(random(width), height, params.col, true)
    // This boolean variable is used to check if a firework has exploded
    this.exploded = false;
    // The sparkles array is initialised
    this.sparkles = [];
    // Created a counter to track 
    this.counter = 0;
    // Col variable initialised to create a random color
    this.col = random(0,500);
  
    }

        // The update function moves the objects when the sketch is drawn

    update(){
        // If the exploded boolean is true, apply the gravity force and move the firework object
        if ( !this.exploded) {
        this.firework.applyForce(gravity);
        this.firework.applyForce(wind);

        this.firework.update();

        // If the firework is at a y position higher than 0, set exploded to true
        // and explode the firework using the explode function
        if (this.firework.velo.y >= 0) {
            this.exploded = true;
            this.explode();
        }
    }
    // Instantiate through the array of sparkles, apply the force of gravity 
    // and move each sparkle using the created functions
    // If isFinished is true, remove the sparkle from the array using the splice function
    for (let i = this.sparkles.length - 1; i >= 0; i--) {
        this.sparkles[i].applyForce(gravity);
        this.sparkles[i].applyForce(wind);
        this.sparkles[i].update();
       
        if (this.sparkles[i].isFinished())  {
            this.sparkles.splice(i, 1);
}

for (let i = this.sparkles.length - 1; i >= 0; i--) {
   
      
    }
}

    }

  
    
  explode(){
      // When explode is used, create a number of specified new sparkles
      // using the sparkle class and push them into an array called p
      // The sparkles are created at the position of the firework where it explodes
     
      for (let i = 0; i < params.nosparkles; i++) {
          let p = new Sparkle(this.firework.pos.x, this.firework.pos.y, this.col, false)
          this.sparkles.push(p);
      }
  }
  
//   checkIntersections(){
//     this.sparkles.forEach(sparkle =>{
      
// let distance = p5.Vector.sub(this.pos,sparkle.pos).mag();
// if (distance < 20 && distance > 0) {
//     this.Intersecting=true;
//     console.log("intersect");
// }


//     });
// }

// Created a finished function to check if a firework is exploded and the length of an array of sparkles
  finished() {
    if (this.sparkles.length && this.exploded === 0){
    return true;
 } else {
     return false;
 }
  }

  // If exploded is false, draw the fireworks 
  // Draw sparkle objects from the array of sparkles
   show(){
       if (!this.exploded) {
       this.firework.show();
   }
   for (let i = 0; i < this.sparkles.length; i++) {
       this.sparkles[i].show();

   }
}
// This function bounces sparkles off of the walls of the canvas
   bounce() {
    for (let i = 0; i < this.sparkles.length; i++) {
        this.sparkles[i].bounce();
    }
}
   

   


    
}


