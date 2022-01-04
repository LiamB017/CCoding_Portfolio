
// Emitter class uses the particle class in order to create particles at it's location

class Emitter{
    constructor(x,y){
        this.position=createVector(x,y)
        this.particles=[]
       
        this.r = 2;
        this.counter = 0;

    }
// Function to create particles within the emitter

    createParticles(){
      if(this.counter <= 20) {
        for (let i = 0; i < 1; i++) {
          this.particles.push(new Particle(this.position.x, this.position.y));
          this.counter++
        }
      }
    
    }


    


    update(){
        
          // each particle has the force of gravity acting upon it 
           
          this.particles.forEach(particle => {
            let gravity = createVector(0,0.2);
            particle.applyForce(gravity);
            particle.update()
            this.lifespan -= 5;
          });
           

  // These lines of code are checking the length of the array of particles and deletes particles from the array based 
// on the objects lifetime

           for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].isFinished())  {
              this.particles.splice(i, 1);
              
            }
          
          }
    }


    render(){
        this.particles.forEach(particle => {
            particle.render();
          });
       

    }
}