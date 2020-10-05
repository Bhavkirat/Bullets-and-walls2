


var bullet,speed,weight;

var wall, thickness


function setup() {
  createCanvas(1600,400);
  //createSprite(400, 200, 150, 50);
  
  bullet=createSprite(10,200,50,50);
  bullet.shapeColor = "white";

thickness=(22,83);


  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80); 
  
  speed=random(50,50)
  weight=random(30,52);

  bullet.velocityX = speed;
}


function draw() {
  background("black");  

  
//console.log (MovingRect.x-fixedRect.x);
//console.log(MovingRect.width/2+fixedRect.width/2);


if(isTouching(bullet,wall)){
bullet.velocityX=0;



  deformation = 0.5 * weight * speed* speed/22500
  
  if(deformation<100){
 
  bullet.shapeColor=color(0,255,0)




}
  else
  if(deformation >100 && deformation<180){
bullet.shapeColor=color(230,230,0)

  }
  else
  if(deformation>180){

    bullet.shapeColor=color(255,0,0);
  }

 // console.log(deformation)
  



}
drawSprites();
}



function isTouching(object1,object2){

  if(object1.x-object2.x <object1.width/2+object2.width/2 
   
    && object2.x - object1.x  <object1.width/2+object2.width/2
    && object2.y - object1.y   <object1.height/2+object2.height/2
    && object1.y - object2.y   <object1.width/2+object2.width/2
     ){
      return  true;
    
      
  }   
  else {
   
  return false;




  }
   
  

}
