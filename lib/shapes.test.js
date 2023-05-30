const { Triangle, Circle, Square } = require('./shapes.js');

describe('Triangle', () => {
    it('Generates a circle and fills it with chosen color', () => {
        const shape = new Triangle('green')
        expect(shape.render()).toEqual(`<polygon points='150 1, 250 150, 50 150' fill='${this.shapeColor}' />`)
    })
})

describe('Circle', () => {
    it('Generates a circle and fills it with chosen color', () => {
        const shape = new Circle('blue')
        expect(shape.render()).toEqual(`<circle cx='50%' cy='50%' r='50' fill='${this.shapeColor}' />`)
    })
})

describe('Square', () => {
    it('Generates a circle and fills it with chosen color', () => {
        const shape = new Square('purple')
        expect(shape.render()).toEqual(`<rect x='100' y='50' width='100' height='100' fill='${this.shapeColor}' />`)
    })
})






// const shape = new Triangle(Shapes);
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');