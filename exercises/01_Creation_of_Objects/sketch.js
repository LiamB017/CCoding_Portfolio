let molecules=[];





 
for(let counter = 0; counter<100;counter++){
    let tempObj = new Molecule()
     molecules.push(tempObj);
 }



 function setup(){
    createCanvas(500,500);
    background(255,0,0);
}
 function draw(){
 
    for(let i=0;i<molecules.length;i++){
        ellipse(molecules[i].posX,
            molecules[i].posY,
            molecules[i].radius,
            molecules[i].radius);
    }


 }