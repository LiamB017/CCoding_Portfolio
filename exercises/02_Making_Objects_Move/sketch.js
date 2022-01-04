let molecules=[];





 
for(let counter = 0; counter<50;counter++){
    let tempObj = new Molecule()
     molecules.push(tempObj);
 }



 function setup(){
    createCanvas(500,500);
    background(255,0,0);
}
 function draw(){
    background(255,0,0);
    for(let i=0;i<molecules.length;i++){
        molecules[i].step();
        molecules[i].render();
    }
 }