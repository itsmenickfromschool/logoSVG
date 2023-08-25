const Shapes = require('./shapes.js')

class Circle extends Shapes {
    constructor(color, x, y, radius) {
        super(color, x, y);
        this.radius = radius;
    }

    render(){
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />;`
    }
}