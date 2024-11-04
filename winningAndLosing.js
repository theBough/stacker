
function isWinOrIsLose(){
  let lastStack = theStack.length - 1;
  if(engine.y<0){
      outputMessage = "Congratulations\n you just won\n an iPod mini"
    //stop the engine 
    engine.speed = 0;
    gameOver = true
  }else if(
      (engine.x < theStack[lastStack].x &&
      engine.x + engine.w < theStack[lastStack].x
       ) ||
      (
      engine.x > theStack[lastStack].x + theStack[lastStack].w &&
        engine.x + engine.w > theStack[lastStack].x + theStack[lastStack].w
      )
    ){
     outputMessage = "Wow you suck!"
  
    //stop the engine 
    engine.speed = 0;
    gameOver = true
  }
}

function gameIsOver(){
  push()
    fill("#fffcf2");
    textSize(25)
    text(outputMessage,
        200,
        200)
    pop()
}
