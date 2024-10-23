let engine;
let theStack
let engineWidth;
let engineHeight
let engineSpeed

function setup() {
  engineWidth = 100
  engineHeight = 30
  engineSpeed = 1
  createCanvas(400, 400);
  engine = new Block(0,height-engineHeight*6,engineWidth,engineHeight,"#eb5e28",engineSpeed)
  theStack = new Block(100,height-engineHeight*5,engineWidth,engineHeight*5,"#ccc5b9")
}

function draw() {
  background("#252422");
  engine.display()
  engine.bounce()
  theStack.display()  
}

function keyPressed(){
  if(key === 's'){
    engine.w -= theStack.x - engine.x
    engine.x = theStack.x
    engine.y -= engineHeight;
    theStack.h += engineHeight;
    theStack.y -= engineHeight;
  }
}
