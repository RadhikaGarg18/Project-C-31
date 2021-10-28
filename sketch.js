const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var drops = [];
var umbrella;
var thunder,thunderImage, thunderImage2,thunderImage3,thunderImage4;
var MaxDrops = 100;

function preload(){
  thunderImage = loadImage("1.png");
  thunderImage2 = loadImage("2.png");
  thunderImage3 = loadImage("3.png");
  thunderImage4 = loadImage("4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(500,700);
   
    if(frameCount % 150 === 0){
        for(var i=0; i<MaxDrops; i++){
            drops.push(new Drop(random(0,400), random(0,400),5));
        }
    }
    umbrella = new Umbrella(250,480,200,200)
}

function draw(){
    background("black")
    Engine.update(engine);

    umbrella.display();
    
    for(var i = 0;i<MaxDrops;i++){
        drops[i].showDrop();
        drops[i].updateY();
    }
    
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
