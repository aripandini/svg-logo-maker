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
        return `<polygon points='150 1, 250 150, 50 150' fill='${this.shapeColor}' />`;  
    }
}

class Circle extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }
    render() {
        return `<circle cx='50%' cy='50%' r='50' fill='${this.shapeColor}' />`;  
    }
}

class Square extends Shape {
    constructor(shapeColor){
        super(shapeColor);
    }
    render() {
        return `<rect x='100' y='50' width='100' height='100' fill='${this.shapeColor}' />`;  
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
    return `<svg version='1.1' xmlns='http://www.w3.org/2000/svg' width='300' height='200'>
    <g>
    ${pickShape(shape, shapeColor)}
    <text x='50%' y='50%' font-size='50px' dominant-baseline='middle' text-anchor='middle' fill='${textColor}'>${text}</text>
    </g>
  </svg>`;
  }

// module.exports = generateSVG;
module.exports = generateSVG, { Triangle, Circle, Square }