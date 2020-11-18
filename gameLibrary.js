function isTouching(touch1, touch2 ){
  

    if(touch1.y-touch2.y<touch2.height/2+touch1.height/2
      &&
      touch2.y-touch1.y<touch2.height/2+touch1.height/2
      &&
      touch1.x-touch2.x<touch2.width/2+touch1.width/2 
      &&
      touch2.x-touch1.x<touch2.width/2+touch1.width/2 )
    {
      return true
    }
    else {    
      return false
    }
  }

  function bounceOff() {
    if (movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2
      &&
      fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2)
    {
        movingRect.velocityY=movingRect.velocityY*(-1)
        fixedRect.velocityY=fixedRect.velocityY*(-1)
  
    }
    if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 
      &&
      fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 
      )
      {
        movingRect.velocityX=movingRect.velocityX*(-1)
        fixedRect.velocityX=fixedRect.velocityX *(-1)
      }
  }
      
