let firstBlock;
let theStack

function setup() {
  createCanvas(400, 400);
  firstBlock = new Block(0,390,100,10,"#eb5e28")
  theStack = new Block(0,0,10,10,"#ccc5b9")
}

function draw() {
  background("#252422");
  firstBlock.display()
  firstBlock.bounce()
  theStack.display()
  
}

function keyIsPressed(){
  if(key === 's'){
    
  }
}
