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
  background("#252422");
  engine.display()
  engine.bounce()
  for(i=0; i< theStack.length; i++){
    theStack[i].display()  
  }
  if(gameOver){
     push()
    fill("#fffcf2");
    textSize(25)
    text(outputMessage,
        200,
        200)
    pop()
  }
 
}

function keyPressed(){
  if(key === 's'){
    checkLeft();
    checkRight();
    isWinOrIsLose();
  }
}
