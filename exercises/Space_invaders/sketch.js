let screenWidth = 500;
let screenHeight = 500;
let aliens = [];
let alienWidth = 10;
let alienHeight = 10;
let alienVelocity = 1;
let numCols = 10;
let numRows = 10;
let hSpace = 30;
let vSpace = 30;
// Next line moves the objects to the centre of the canvas,
// this is done by multiplying the number of cols(-1) by the horizontal space,
// then taking this number away from the screenwidth and dividing by 2
let xOffset = (screenWidth - (numCols-1) * hSpace) / 2;
let yOffset = 10;
let shiftDown = 50;
let alienImg;

let shooterWidth = 100;
let shooterHeight = 20;
let shooter;
let bullets = [];
let bulletWidth = 10;
let bulletHeight = 10;
let bulletVelocity = 3;

let emitters = [];

function preload() {
    alienImg = loadImage('assets/spaceInvaders.png');
}

function setup() {
    populateAliens();
    shooter = new Shooter(screenWidth / 2, screenHeight - shooterHeight / 2);
    createCanvas(screenWidth,screenHeight);
    background(255);
    
}

function draw() {
    background(0);

    emitters.forEach(emitter => {
        emitter.createParticles();
        emitter.update();
        emitter.render();
    })
    
    shooter.render();
    shooter.move();
    let shift= false;
    
     // Shift function shifts aliens down once their x pos is greater than screenWidth and 0

    aliens.forEach(alien => {
        alien.move();
        alien.render();
        alien.pos.x >= screenWidth ? shift=true: null;
        alien.pos.x <= 0 ? shift=true: null;
    });
    if (shift) {
        aliens.forEach(alien=> {
            alien.shift();
        })
    }

    // these lines of code check the lenght of the bullets array and uses the hit function to delete an alien from the array using splice

    for(let i = bullets.length - 1; i>=0; i--) {
bullets[i].move();
bullets[i].render();
   for(let j = aliens.length-1; j >=0; j--){
       if(bullets[i].hits(aliens[j])){
           //capture pos of alien
        //   let TempPos = aliens[i].pos
        emitters.push(new Emitter(aliens[j].pos.x,aliens[j].pos.y))
           aliens.splice(j, 1);
           bullets.splice(i, 1);
        //   emitter.push(new Emitter(tempPos.x, tempPos.y))
           //create an emitter at pos
           // Breaks the loop
           break;
       }
   }
    }
        
    checkGameStatus()
}

function checkGameStatus(){
    let GameOver=false;
    aliens.forEach(alien => {
        if(alien.pos.y>100){
            gameOver = true;
            console.log("Game Over")
        }
    });
    if (gameOver) {
        noLoop();
        textSize(120);
        textLeading(110);
        fill(255,0,0)
        textAlign(CENTER,CENTER)
        text("Game\nOver", 250,230)
    }
}



// If right or left arrow key is pressed, the setDirection function is called and used with the inputted parameter
function keyPressed(){
 if (keyCode === 32) {
    bullets.push(new Bullet(shooter.pos.x,
   screenHeight - shooterHeight
    ,shooter.barrelAngle
    ))
 }

if (keyCode=== RIGHT_ARROW) {
 
    shooter.barrelAngle += 0.2;
} else if (keyCode=== LEFT_ARROW) {
    shooter.barrelAngle -+ 0.2;

}
}

// Creates rows and cols and pushes aliens into an array
function populateAliens(){
    for(let row =0; row < numRows; row++){
    for(let col =0; col < numCols; col++){
    aliens.push(new Alien(col * hSpace + xOffset, row * vSpace + yOffset))
    }   
} 
}