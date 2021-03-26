class Log {
  constructor(xInput, yInput,xInput, yInput) {
    var options = {
      'restitution': 0.8,
      'density': 1.0,
      'friction': 1.0,
  }
    this.body = Bodies.rectangle(xInput, yInput, 20, heightInput, options);
    this.image = loadImage("sprites/wood2.png");
    this.width = 20;
    this.height = heightInput;
    Matter.Body.setAngle(this.body, angleInput);
    World.add(userWorld, this.body);
  }
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};