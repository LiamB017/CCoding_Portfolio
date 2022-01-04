
let emitters = [];

// When the mouse is pressed, an emitter is created which then creates particles using the particle class

function mousePressed() {
  emitters.push(new Emitter(mouseX, mouseY));
}



function setup(){

createCanvas(500,500);
background(255,0,0);
rectMode(CENTER);
 emitter = new Emitter(250,250);



}

function draw() {
  
 background(0);
 
 emitters.forEach(emitter => {
  emitter.createParticles();
  emitter.update();
  emitter.render();
  if(this.counter >= 20) {
    this.emitters.splice(i, 1);
  }
 });


  



  
  }
