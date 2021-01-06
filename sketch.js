var wall

var speed,weight,thickness,bullet
function setup() {
  createCanvas(1600,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
  
  bullet.velocityX=speed;
  bullet.shapeColor="blue"
  wall.shapeColor="orange"
  
}

function draw() {
  background(255,255,255); 
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5 * weight * speed * speed/(thickness *thickness*thickness) 
  
if(damage>10)
 {
   wall.shapeColor=color(255,0,0)
 } 

if(damage<10)
{
  wall.shapeColor=color(0,255,0)
} 
  }


  
  drawSprites();



}
function hasCollided(lbullet,lwall)
{
    bulletrightEdge=lbullet.x+lbullet.width
    wallleftEdge=lwall.x
    if (bulletrightEdge>=wallleftEdge)
    {
      return true
    }  
    return false

  }
