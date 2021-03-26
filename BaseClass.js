class BaseClass{
    constructor(xInput, yInput, widthInput, heightInput, angleInput){
        var options = {
            'restitution': 0.8,
            'density': 1.0,
            'friction': 1.0,
          }
        
          this.image = loadImage("sprites/base.png");
          this.width = widthInput;
          this.height = heightInput;
          this.body = Bodies.rectangle(xInput, yInput, widthInput, heightInput, options);
          World.add(userWorld, this.body);
    }

    display(){

    }
}