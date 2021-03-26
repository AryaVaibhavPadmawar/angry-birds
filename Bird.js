class Bird extends BaseClass {
  constructor(xInput, yInput) {
    super(xInput, yInput, 50, 50);
    this.image = loadImage("sprites/bird.png");

  };
  display() {
    var pos = this.body.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  };
};