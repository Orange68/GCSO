var car,wall,speed,weight;
function setup() {
  createCanvas(1600,400);
  speed=random(50,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1200,200,60,height/2);
  car.velocityX=speed;
}

function draw() {
  background(255,255,255); 
  var deformation=0.5 * weight * speed * speed/22500;
  if(car.isTouching(wall)){
  car.velocityX=0;
  }
  if(deformation<100){
  car.shapeColor=color(0,255,0);
  }
  if(deformation<180 || deformation>100){
  car.shapeColor=color(230,230,0);
  }
  if(deformation>180){
  car.shapeColor=color(255,0,0);
  }
  drawSprites();
}