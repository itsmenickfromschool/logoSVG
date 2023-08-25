const { describe } = require('node:test');
const {Triangle, Square, Circle, Shapes} = require('../lib/shapes.js')
const shape = new Triangle('blue', 'svg');
console.log(shape)

describe('shapesCheck', () => {
    
    describe('It should check the shapes:', () => {
        it('Should check shapes = blue', () => {
            const shapes = new Shapes('blue')
            expect(shapes.color).toEqual('blue')
        })
        it('Should check shapes text exists', () => {
            const shapes = new Shapes('blue','lol')
            expect(shapes.text).toEqual('lol')
        })
        it('Should check shapes textColor', () => {
            const shapes = new Shapes('blue','lol','purple')
            expect(shapes.textColor).toEqual('purple')
        })
    })
    describe('It should check the triangle:', () => {
        it('Should check triangle = blue', () => {
            const triangle = new Triangle('blue')
            expect(triangle.color).toEqual('blue')
        })
        it('Should check triangle text exists', () => {
            const triangle = new Triangle('blue','lol')
            expect(triangle.text).toEqual('lol')
        })
        it('Should check triangle textColor', () => {
            const triangle = new Triangle('blue','lol','purple')
            expect(triangle.textColor).toEqual('purple')
        })
    })
    describe('It should check the square:', () => {
        it('Should check square = blue', () => {
            const square = new Square('blue')
            expect(square.color).toEqual('blue')
        })
        it('Should check square text exists', () => {
            const square = new Square('blue','lol')
            expect(square.text).toEqual('lol')
        })
        it('Should check square textColor', () => {
            const square = new Square('blue','lol','purple')
            expect(square.textColor).toEqual('purple')
        })
    })
    describe('It should check the circle:', () => {
        it('Should check circle = blue', () => {
            const circle = new Circle('blue')
            expect(circle.color).toEqual('blue')
        })
        it('Should check circle text exists', () => {
            const circle = new Circle('blue','lol')
            expect(circle.text).toEqual('lol')
        })
        it('Should check circle textColor', () => {
            const circle = new Circle('blue','lol','purple')
            expect(circle.textColor).toEqual('purple')
        })
    })
})



