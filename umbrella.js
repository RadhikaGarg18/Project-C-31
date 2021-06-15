class Umbrella{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            Airfriction: 1,
            density :0.5
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.image = loadImage("walking_1.png")
        this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			fill("white")
			imageMode(CENTER);
			image(this.image, 0,0,500,500)
			pop()
            
            
            
    }
}