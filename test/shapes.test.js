const { describe } = require('node:test');
const {Triangle, Square, Circle, Shapes} = require('../lib/shapes.js')


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
        it('Should check triangle render()', () => {
            const triangle = new Triangle('blue','lol','purple')
            expect(triangle.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="blue" />
<text x="150" y="140" font-size="45" text-anchor="middle" fill="purple">lol</text>`)
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
        it('Should check square render()', () => {
            const square = new Square('blue','lol','purple')
            expect(square.render()).toEqual(`<rect x="70" y="33" width="170" height="170" fill="blue"/>
<text x="155" y="130" font-size="60" text-anchor="middle" fill="purple">lol</text>`)
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
        it('Should check circle render()', () => {
            const circle = new Circle('blue','lol','purple')
            expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="blue" />
<text x="150" y="113" font-size="60" text-anchor="middle" fill="purple">lol</text>`)
        })
    })
})



