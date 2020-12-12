var car, wall
var speed, weight



function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50)
  speed = random(55, 90)
  weight = random(400, 1500)
  wall = createSprite(1500, 200, 60, 200)
  car.velocityX = speed

}

function draw() {
  background(255,255,255);  
  drawSprites();
  deformation(car,wall)

}

function defomation (car, wall){
if (wall.x - car.x < (car.width + wall.width)/2){
  car.velocityX = 0
  speed = random(55, 90)
  weight = random(400, 1500)
  var deformation = 0.5 * weight * speed * speed /22500
  if (deformation<100){
    car.shapeColor("green")
  }
  if (deformation<180 && deformation>100){
    car.shapeColor("yellow")
  }
  if (deformation>180){
    car.shapeColor("red")
  }
}
}