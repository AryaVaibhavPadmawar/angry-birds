class Pig {
  constructor(xInput, yInput) {
    var options = {
      'restitution': 0.8,
      'density': 1.0,
      'friction': 1.0,
  }
    this.body = Bodies.rectangle(xInput, yInput, 50, 50, options);
    this.image = loadImage("sprites/enemy.png");
    this.width = 50;
    this.height = 50;

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