function collisionDetect (object1, object2) {
    if (object1.x-object2.x < object1.width/2+object2.width/2 && 
        object2.x-object1.x < object2.width/2+object1.width/2){
          return true
      }
      else {
        return false
      }
    
    }

function defomation (object1, object2){
  if (object2.x - object1.x < (object1.width + object2.width)/2){
    object1.velocityX = 0
    speed = random(55, 90)
    weight = random(400, 1500)
    var deformation = 0.5 * weight * speed * speed /22500
    if (deformation<100){
      object1.shapeColor("green")
    }
    if (deformation<180 && deformation>100){
      object1.shapeColor("yellow")
    }
    if (deformation>180){
      object1.shapeColor("red")
    }
  }
}

//car = object1, wall = object2