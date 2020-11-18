// 
 function setup() {
  createCanvas(800,400);
  ob1 = createSprite(200, 200, 80, 50);
  ob2 = createSprite(400, 200, 80, 50);
  ob3 = createSprite(600, 200, 80, 50);
  ob1.shapeColor="turquoise"
  ob2.shapeColor="turquoise"
  ob3.shapeColor="turquoise"
  ob1.debug = true 
  ob2.debug = true
  ob3.debug = true

  ob2.depth=ob1.depth;
}

function draw() {
  background(255,255,255);  
  ob2.x= mouseX
  ob2.y= mouseY
 // console.log(movingRect.x-fixedRect.x)
  if(isTouching(ob2, ob3)){
    ob1.shapeColor="green"
  }
  else {
    ob1.shapeColor = "turquoise"
}
drawSprites();
}


