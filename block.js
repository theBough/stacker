function Block(x,y,w,h,colour){
  this.x = x;
  this.y = y
  this.w = w
  this.h = h
  this.colour = colour;
  
  this.display = function(){
    push()
    fill(this.colour)
    rect(this.x, this.y, this.w, this.h)
    pop()
  }//end display
  
  this.bounce  =function(){
    
  }
}
