var fixedRect, movingRect;
var sumX, sumY; 
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);


fixedRect = createSprite(400,200,80,50); 
fixedRect.debug = true; 
fixedRect.shapeColor = "green";

movingRect = createSprite(100,100,50,80);
movingRect.debug = true;
movingRect.shapeColor = "green";

}

function draw() {
  background(255,255,255);  
 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  myOwnIsTouching();

  drawSprites();
}

function myOwnIsTouching(){

  sumX = fixedRect.width/2 + movingRect.width/2; 
  sumY = fixedRect.height/2 + movingRect.height/2; 

  text(sumX, 20,20); 
  text(fixedRect.x,20,30);
  text(movingRect.x,20,40); 
  text(fixedRect.x - movingRect.x,20,50);

  if (fixedRect.x - movingRect.x < sumX && movingRect.x - fixedRect.x < sumX && 
    fixedRect.y - movingRect.y < sumY && movingRect.y - fixedRect.y < sumY){
    movingRect.shapeColor = "red"; 
    
  } else{
    movingRect.shapeColor = "green"; 
  }
}