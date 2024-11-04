let myFont
let level = 1
function interface(){
  
  push()
  fill("#ffffff")
  rect(0,0,width,50)
  fill("#eb5e28")
  rect(10,10,width-20,30)
  fill("#eb5e28")
  textFont(myFont)
  fill("#ccc5b9")
  textSize(25)
  text("STACKER",125,30)
  textSize(15)
  text("level:",305,30)
  text(level,355,30)
  pop()
}
