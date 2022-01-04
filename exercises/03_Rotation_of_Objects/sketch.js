

let molecules = [];
let numOfMolecules = 40;





function setup(){

  for(let counter = 0; counter < numOfMolecules; counter++){
    molecules.push(new Molecule())
  }
createCanvas(500,500);
background(255,0,0);
rectMode(CENTER);


 //d = dist(0, 0, this.posX, this.posY);
 // this.distanceToCentre = d;
}

function draw(){
 
background(255,0,0);
for(let counter = 0; counter < numOfMolecules; counter++){
	molecules[counter].move();
	molecules[counter].render();
  // console.log(d);
  
  }
}