class Box {
    //construction of box using matter.js
    constructor(xInput, yInput, widthInput, heightInput) {
        var options = {
            'restitution': 0.8,
            'density': 1.0,
            'friction': 1.0,
        }
        this.width = widthInput;
        this.height = heightInput;
        this.body = Bodies.rectangle(xInput, yInput, this.width, this.height, options);
        this.image = loadImage("sprites/wood1.png");
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
}