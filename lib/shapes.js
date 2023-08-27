class Shapes {
    constructor(color, text, textColor,){
        this.color = color;
        this.text = text;
        this.textColor = textColor;
       
    }
}

class Triangle extends Shapes {
    constructor(color, text, textColor,){
        super(color,text, textColor);
    }
    render(){
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
<text x="150" y="140" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`}
}

class Circle extends Shapes {
    constructor(color, text, textColor,) {
        super(color, text, textColor)
    }

    render(){
    return `<circle cx="150" cy="100" r="100" fill="${this.color}" />
<text x="150" y="113" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Square extends Shapes {
    constructor(color, text, textColor,){
        super(color, text, textColor)
    }
    render(){
        return `<rect x="70" y="33" width="170" height="170" fill="${this.color}"/>
<text x="155" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}





module.exports = {Shapes, Triangle, Square, Circle};