let engine;
let theStack
let engineWidth;
let engineHeight

function setup() {
  engineWidth = 200
  engineHeight = 10
  createCanvas(400, 400);
  engine = new Block(0,height-engineHeight,engineWidth,engineHeight,"#eb5e28")
  theStack = new Block(100,height-engineHeight,engineWidth,10,"#ccc5b9")
}

function draw() {
  background("#252422");
  engine.display()
  engine.bounce()
  theStack.display()  
}

function keyPressed(){
  if(key === 's'){
    theStack.x = engine.x
    theStack.y = engine.y
    theStack.w = engine.w
    engine.y -= 10
    theStack.h += 10
  }
}
