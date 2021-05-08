var fixedRect,movingRect;
var gameObj1,gameObj2,gameObj3;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor="yellow";
  movingRect=createSprite(400,200,80,50);
  movingRect.shapeColor="yellow";
  gameObj1=createSprite(300,350,40,60);
  gameObj1.shapeColor="blue";
  gameObj1.velocityY=2;
  gameObj2=createSprite(300,430,40,60);
  gameObj2.shapeColor="blue";
  gameObj2.velocityY=-2;
  gameObj3=createSprite(800,600,40,60);
  gameObj3.shapeColor="blue";
}

function draw() {
  background(255,255,255);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  console.log(movingRect.x-fixedRect.x);
  if( isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="green";
    fixedRect.shapeColor="red";

  }
  else{

    movingRect.shapeColor="yellow";
    fixedRect.shapeColor="yellow";


  }
 bounceOff(gameObj1,gameObj2);
  drawSprites();
  
}
