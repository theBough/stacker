let outputMessage;
function isWinOrIsLose(){
  if(engine.y<0 || engine.w <1){
    if(engine.y<0){
      outputMessage = "Congratulations\n you just won\n an iPod mini"
    }else{
      outputMessage = "Wow you suck!"
    }
    push()
    fill("#fffcf2");
    textSize(25)
    text(outputMessage,
        200,
        200)
    pop()
    //stop the engine 
    engine.speed = 0;
  }
}
