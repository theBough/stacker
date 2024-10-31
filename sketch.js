let engine;
let theStack = [];
let engineWidth;
let engineHeight
let engineSpeed
let gameOver;
let outputMessage;

function setup() {
  gameOver = false;
  engineWidth = 100
  engineHeight = 30
  engineSpeed = 10
  createCanvas(400, 400);
  engine = new Block(0,height-engineHeight*2,engineWidth,engineHeight,"#eb5e28",engineSpeed)
  theStack.push(new Block(100,
                          height-engineHeight,
                          engineWidth*2,
                          engineHeight*5,
                          "#ccc5b9"))
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
