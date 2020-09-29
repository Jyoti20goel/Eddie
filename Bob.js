class Bob{
    constructor(x, y, r) {
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        
        this.x = x
        this.y = y
        this.r = r

        

        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0, 0, this.r,this.r);
        pop();
      }
}