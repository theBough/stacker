let engine;
let theStack = [];
let engineWidth;
let engineHeight
let engineSpeed
let gameOver;


function setup() {
   createCanvas(400, 400);
   gameStart()
}

function draw() {
  background("#14213d");
  interface();
  engine.display()
  engine.bounce()
  for(i=0; i< theStack.length; i++){
    theStack[i].display()  
  }
  if(gameOver){
     gameIsOver();
  }
 
}

function keyPressed(){
  if(key === 's'){
    checkPerfect();
    checkLeft();
    checkRight();
    isWinOrIsLose();
    if(engine.speed > 0){
      engine.speed+=1
    }else{
      engine.speed-=1
    }
    
  }
}
