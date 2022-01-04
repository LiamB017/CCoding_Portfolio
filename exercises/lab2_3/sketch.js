function setup() {
  angleMode(DEGREES);
createCanvas(500,500);
background(0);
  b1 = new Ball(200, 230, 15 * cos(25), 15 * sin(25),20,300);
 
  b2 = new Ball(100, 240, 15 * cos(47),15 * sin(47),20,100, 100);

}


function draw() {
     background(0);

     push();
     //translate(200,240);
     b1.drawBall();
     b1.moveBall(2);
pop();

push();
//translate(100,240)
b2.drawBall();
b2.moveBall(2);
pop();

x1 = b1.x;
y1 = b1.y;
x2 = b2.x;
y2 = b2.y;

let result = distance(b1.x, b1.y, b2.x, b2.y,)  
console.log(result)
if( b1.radius + b2.radius > result){
  console.log('collision')
}
      
  function distance (x1, y1,x2,y2 ){
 
    dx = x1-x2;
    dy = y1-y2;

    let distance = Math.sqrt(dx*dx + dy*dy);
     return distance;
  }
 
         

}
