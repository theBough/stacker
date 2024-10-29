function isWin(){
  if(engine.y<0){
    push()
    fill("#fffcf2");
    textSize(25)
    text("Congratulations\n you just won\n an iPod mini",
        200,
        200)
    pop()
  }
}
