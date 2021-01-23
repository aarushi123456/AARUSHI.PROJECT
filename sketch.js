var fixedRect, movingRect;
var o1, o2;
var r1, r2;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
 movingRect.velocityY = -5;
 fixedRect.velocityY = +5;

 
  r1 = createSprite(100, 100, 50, 50);
  r1.shapeColor = "pink";
  r2 = createSprite(300, 100, 50, 50);
  r2.shapeColor = "red";
  r1.velocityX = +3;
  r2.velocityX = -3;
}

function draw() {
  background(0,0,0); 
  
  movingRect.x = World.mouseX 
  movingRect.y = World.mouseY

  if(isTouching(movingRect, r2))  {
    movingRect.shapeColor = "blue";
    r2.shapeColor = "blue";
  }

  else{
    movingRect.shapeColor = "green";
    r2.shapeColor = "green";
  }
 bounceOff(r1, r2)
  drawSprites();
}

function isTouching( o1, o2)   {
  if( o1.x - o2.x < o2.width/2 + o1.width/2 &&
    o2.x - o1.x < o2.width/2 + o1.width/2 &&
    o1.y - o2.y < o2.height/2 + o1.height/2 &&
    o2.y - o1.y < o2.height/2 + o1.height/2 )
    {
      return true
    }

    else{
      return false
    }
}

function bounceOff(o1, o2)  {
if( o1.x - o2.x < o2.width/2 + o1.width/2 &&
  o2.x - o1.x < o2.width/2 + o1.width/2 )
  {
    o1.velocityX = o1.velocityX * (-1);
    o2.velocityX = o2.velocityX * (-1);
  }
 if( o1.y - o2.y < o2.height/2 + o1.height/2 &&
  o2.y - o1.y < o2.height/2 + o1.height/2 )
  
  o1.velocityY = o1.velocityY * (-1);
  o2.velocityY = o2.velocityY * (-1);
}
