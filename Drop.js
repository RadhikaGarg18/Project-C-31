class Drop{
    constructor(x,y,r){
        var options = {
            friction:0.1,
            restitution: 0.3,
            density: 0.04
        }
            this.x = x;
            this.y = y;
            this.r = r;
            this.body=Bodies.circle(this.x, this.y, this.r, options)
            World.add(world, this.body);
    }
    showDrop(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse( this.body.position.x,this.body.position.y,this.r,this.r);
                
       
    }
    updateY(){
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x: random(0,500),y:random(0,0)})
    }
}
}