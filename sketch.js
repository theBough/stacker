let engine;
let theStack = [];
let engineWidth;
let engineHeight
let engineSpeed

function setup() {
  engineWidth = 100
  engineHeight = 30
  engineSpeed = 1
  createCanvas(400, 400);
  engine = new Block(0,height-engineHeight*6,engineWidth,engineHeight,"#eb5e28",engineSpeed)
  theStack.push(new Block(100,height-engineHeight*5,engineWidth,engineHeight*5,"#ccc5b9"))
}

function draw() {
  background("#252422");
  engine.display()
  engine.bounce()
  for(i=0; i< theStack.length; i++){
    theStack[i].display()  
  }
  
}

function keyPressed(){
  if(key === 's'){
    engine.w -= theStack[theStack.length -1].x - engine.x
    engine.x = theStack[theStack.length -1].x
    engine.y -= engineHeight;
    //theStack.h += engineHeight;
    //theStack.y -= engineHeight;
    
  }
}
