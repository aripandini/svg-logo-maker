class Shape {
    constructor (text, textColor, shapeColor) {
        this.text = text; 
        this.textColor = textColor; 
        this.shapeColor = shapeColor;
    }
    setColor(color) {
        this.shapeColor = color; 
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `<polygon points='150, 18 244, 182 56, 182' fill='${this.shapeColor}' />`;  
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `<circle cx='25' cy='75' r='20' fill='${this.shapeColor}' />`;  
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }
    render() {
        return `<rect x='10' y='10' widht='30' height='30' fill='${this.shapeColor}' />`;  
    }
}

module.exports = {Triangle, Circle, Square};