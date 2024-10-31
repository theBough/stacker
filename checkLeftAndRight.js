function checkLeft(){
    engine.w -= theStack[theStack.length -1].x - engine.x
    engine.x = theStack[theStack.length -1].x
    engine.y -= engineHeight;
    //theStack.h += engineHeight;
    //theStack.y -= engineHeight;
    
    theStack.push (new Block(theStack[0].x,
                  engine.y+engineHeight,
                  Math.abs(theStack[theStack.length -1].x - (engine.x+engine.w)),
                  engineHeight,
                  "#ccc5b9"
                 ))
    
}
function checkRight(){
  //check to see if the engine is on the stack but hanging over rightside
  let lastStack = theStack.length -1;
  if(engine.x > theStack[lastStack].x &&
     engine.x < theStack[lastStack].x + theStack[lastStack].w &&
    engine.x + engine.w > theStack[lastStack].x + theStack[lastStack].w)
  {
   engine.w = engine.w-((engine.x+engine.w) -(theStack[lastStack].x + theStack[lastStack].w) )
    engine.y -= engineHeight;
    theStack.push (new Block(engine.x,
                  engine.y+engineHeight,
                  engine.w,
                  engineHeight,
                  "#ccc5b9"
                 ))
  }
}
