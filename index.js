const {Triangle, Square, Circle, Shapes} = require('./lib/shapes.js')
const inquirer = require('inquirer')
const fs = require('fs')
let shapeString = ``

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What is your 3 character Acronym?',
        },
        {
        type: 'input',
        name: 'textColor',
        message: 'What color do you want the text to be?',
        },
        {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want for your SVG logo?',
        choices: ['Circle','Square','Triangle'],
        },
        {
        type: 'input',
        name: 'color',
        message: 'What color do you want your shape to be?'
        }
]
inquirer.prompt(questions).then((answers) => { 
const {text, textColor, shape, color} = answers
if (shape === 'Triangle'){
    const shape = new Triangle(color, text, textColor)
    shapeString = shape.render()
} 
if (shape === 'Square'){
    const shape = new Square(color, text, textColor)
    shapeString = shape.render()
} 
if (shape === 'Circle'){
    const shape = new Circle(color, text, textColor)
    shapeString = shape.render()
}
let shapeFile = `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${shapeString}
</svg>` 
console.log(shapeFile);
fs.writeFile(`logo.svg`, shapeFile, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
})
