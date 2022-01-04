



 // declare fireworks array and the variable of gravity and wind which is used in the setup

let fireworks = [];
let gravity;
let wind;
//Here I created the variables to be used in the gui
let params ={
   col:0,
   nosparkles:0,
   winddirect:0,
   r:0

}
//Declared the gui variable
var gui;
// sss
 function setup(){

   // Created the gui using quicksettings, I set the position, name, range and used the varialbes from params
  // This gui allows users to change the color of the fireworks
   gui=QuickSettings.create(500,25, "Firework Color")
   .addRange("Color",0,500,params.col,1,
   function(value){
      params.col = value
      sparkles=[];
      this.firework;
   })
   // This gui allows users to change the number of sparkles created when fireworks explode
   gui=QuickSettings.create(500,120, "No of sparkles")
   .addRange("Number of Sparkles",0,30,params.nosparkles,1,
   function(value){
      params.nosparkles = value
      sparkles=[];
      this.firework;
   })
   // This gui allows users to change the direction of the wind
   gui=QuickSettings.create(500,220, "Direction of Wind")
   .addRange("Wind Direction",-2,+2,params.winddirect,1,
   function(value){
      params.winddirect = value
      fireworks=[];
      this.firework;
   })
   // This gui allows users to change the radius of the fireworks
   gui=QuickSettings.create(500,320, "Radius")
   .addRange("Radius of firework",0,20,params.r,1,
   function(value){
      params.r = value
      sparkles=[];
      this.firework;
   });
 
    createCanvas(400, 400);
    // gravity pushes objects down with a force of 0.2
    // Wind pushes objects to the left or right randomly with a force of 0.2
    gravity = createVector(0, 0.2);
    wind = createVector(params.winddirect);
  
  
 background(0);
 }

 function draw(){
    // background is redrawn, creating a trail effect
background(0, 25);
// Fireworks are created every frame randomly and are pushed into the array
if (random(1) < 0.04) {
fireworks.push(new Firework());
}
// for each firework object, use the update and show functions, iterate through the array backwards, this means that when spliced 
for ( let i = fireworks.length - 1; i >= 0; i--) {
   fireworks[i].update();
   fireworks[i].show();

   // if firework is exploded and an array of sparkles is made, remove the firework object from the array
   if (fireworks[i].finished()) {
      fireworks.splice(i, 1);
   }

}
console.log(fireworks.length)
   

      
   
 }

 
