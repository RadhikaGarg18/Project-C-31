const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var umbrella;
var thunder,thunderImage, thunderImage2,thunderImage3,thunderImage4;
var drop;
function preload(){
  thunderImage = loadImage("1.png");
  thunderImage2 = loadImage("2.png");
  thunderImage3 = loadImage("3.png");
  thunderImage4 = loadImage("4.png");

 
}

function setup(){
   createCanvas(500,700);
   engine = Engine.create();
   
   world = engine.world;
   drop  =new Drop(200,0,10);
   umbrella = new Umbrella(250,480,200,200)
   
   
}

function draw(){
    background("black")
    Engine.update(engine);
    umbrella.display();
    drop.display();
    thunderframe();
    drawSprites();
}   

function thunderframe(){
    var rand = Math.round(random(1,4))
    if(frameCount % 80 === 0){
        var ThunderCreatedFrame = frameCount;
        thunder = createSprite(random(10,400),random(20,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunderImage)
            break;
            case 2: thunder.addImage(thunderImage2)
            break;
            case 3: thunder.addImage(thunderImage3)
            break;
            case 4: thunder.addImage(thunderImage4)
            default: break;
        }
        thunder.scale = random(0.3,0.6)
        thunder.lifetime = 80;
    }
}
