class Enemy{
  constructor(x, y, radius) {
      var options = {
          'restitution':0.8,
          'friction':0.2,
          'density':1.0,
          
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      //this.image = loadImage("sprites/base.png");
      World.add(world, this.body);
    }
    display(){
      //var angle = this.body.angle;
      push();
      //translate(this.body.position.x, this.body.position.y);
      //rotate(angle);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
      ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius);
      
      pop();
    }
}