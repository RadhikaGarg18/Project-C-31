class Drop{
    constructor(x,y,r){
        var options = {
            friction:0.1
        }
         this.x = x;
        this.y = y;
        this.r = r;
        this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill("blue")
			ellipseMode(CENTER);
			ellipse( 0,0,this.r);
       
            var MaxDrops = 100;
            var drops = [];

             if(pos.y > height){
                 Matter.Body.setPosition(this.body,{x: random(0,500),y:random(0,0)})
             }

            for(var i=0; i<MaxDrops; i++){
                drops.push(new Drop(random(0,500), random(0,500)));
            }
            
            pop()
    }
}