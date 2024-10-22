let firstBlock;

function setup() {
  createCanvas(400, 400);
  firstBlock = new Block(0,390,10,10,"#eb5e28")
}

function draw() {
  background("#252422");
  firstBlock.display()
}
