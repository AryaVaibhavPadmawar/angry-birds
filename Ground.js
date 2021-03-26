class Ground {
    constructor(xInput, yInput, widthInput, heightInput) {
        //construction of ground using matter.js
        var options = {
            isStatic: true,
        };
        this.width = widthInput;
        this.height = heightInput;

        this.body = Bodies.rectangle(xInput, yInput, this.width, this.height, options);
        this.image = loadImage("sprites/ground.png");
        World.add(userWorld, this.body);
    }

    display() {
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);

        //imageMode(CENTER);
        //image(this.image, 0, 0, this.width, this.height);
    }

}