class Shape {
    constructor (text, textColor, shape, shapeColor) { 
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    setColor(color) {
        this.shapeColor = color; 
    }

}

class Triangle extends Shape {
    constructor(shapeColor){
        super(shapeColor);

    }
    render() {
        return `<polygon points='150, 18 244, 182 56, 182' fill='${this.shapeColor}' />`;  
    }
}

class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }
    render() {
        return `<circle cx='25' cy='75' r='20' fill='${this.shapeColor}' />`;  
    }
}

class Square extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }
    render() {
        return `<rect x='10' y='10' widht='30' height='30' fill='${this.shapeColor}' />`;  
    }
}

function pickShape(shape, shapeColor) {
    if(shape === 'Triangle') {
        const triangle = new Triangle(); 
        triangle.setColor(shapeColor);
        return triangle.render();
    } else if (shape === 'Circle') {
        const circle = new Circle(); 
        circle.setColor(shapeColor);
        return circle.render();
    }
    else {
        const square = new Square(); 
        square.setColor(shapeColor);
        return square.render(); 
    }
}

function generateSVG({text, textColor, shape, shapeColor}) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${pickShape(shape, shapeColor)}
    <text x='100' y='100' text-anchor='middle' alignment-baseline='middle' fill='${textColor}'>${text}</text>
  </svg>`;
  }

module.exports = generateSVG;