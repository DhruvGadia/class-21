var fixedRect1, movingRect;
var fixedRect2;

function setup() {
  createCanvas(800,400);
  fixedRect1 = createSprite(400, 200, 50, 50);
  fixedRect1.shapeColor = "cyan";

  movingRect = createSprite(600, 300, 80, 30);
  movingRect.shapeColor = "cyan";

  fixedRect2 = createSprite(600,200,50,50);
  fixedRect2.shapeColor = "cyan";
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log(movingRect.x - fixedRect1.x);

  if(isTouching(movingRect, fixedRect1)){
    fixedRect1.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  else if(isTouching(movingRect, fixedRect2)){
    fixedRect2.shapeColor = "orange";
    movingRect.shapeColor = "orange";
  }
  else {
    fixedRect1.shapeColor = "cyan";
    movingRect.shapeColor = "cyan";
    fixedRect2.shapeColor = "cyan";
  }

  drawSprites();
}

// movingRect.isTouching(fixedRect1);

