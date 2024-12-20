function Block(x,y,w,h,colour,speed){
  this.x = x;
  this.y = y
  this.w = w
  this.h = h
  this.colour = colour;
  this.speed  = speed;
  
  this.display = function(){
    push()
    fill(random(255),random(255),random(255))
    rect(this.x, this.y, this.w, this.h)
    pop()
  }//end display
  
  this.bounce=function(){
    //move the block left and right.
    this.x += this.speed
    if(this.x <= 0 || this.x + this.w >= width){
      //if either of these conditions above are true
      //then it means the block has hit an edge
      this.speed *= -1
    }
  }
}
