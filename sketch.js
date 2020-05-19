var ob2, ob1;
var box1,box2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  box1 = createSprite(100,200,40,60);
  box1.shapeColor="white";
  box2 = createSprite(400,200,40,60);
  box2.shapeColor="white";
  box1.velocityX=4;
  box2.velocityX=-4;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
BounceOff(box1,box2);
 if (isTouching(fixedRect,movingRect)){
fixedRect.shapeColor="red";
movingRect.shapeColor="red";
 }
 else 
 {
   fixedRect.shapeColor="green";
   movingRect.shapeColor="green";
 }
  drawSprites();
}
