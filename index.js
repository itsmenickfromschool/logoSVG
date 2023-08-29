
const {Triangle, Square, Circle,} = require('./lib/shapes.js')
const inquirer = require('inquirer')
const fs = require('fs')
let shapeString = ``

const questions = [
    {
        type: 'maxLengthInput',
        name: 'text',
        message: '\n\nWhat is your 3 character Acronym?:',
        validate: function(text){
            if (!text.length) return "Nothing entered, Please enter a 3 Character Acronym!"
            if (text.length > 3) {return "Please enter an acronym with a maximum of 3 characters!! example: SVG"}
            return true
        }
        
        },
        {
        type: 'input',
        name: 'textColor',
        message: '\n\nWhat color do you want the text to be?\n(for hex use #)\n(keywords work too!):',
        validate: function(textColor){
            if (!textColor.length) return "Error! Nothing entered,  Please enter a color!"
            return true
        },
        },
        {
        type: 'list',
        name: 'shape',
        message: '\n\nWhat shape do you want for your SVG logo?:',
        choices: ['Circle','Square','Triangle'],
        },
        {
        type: 'input\n',
        name: 'color',
        message: '\n\nWhat color do you want your shape to be?\n(for hex use #)\n(keywords work too!):',
        validate: function(textColor){
            if (!textColor.length) return "Error! Nothing entered,  Please enter a color!"
            return true
        },
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
fs.writeFile(`logo.svg`, shapeFile, (err) =>
    err ? console.log(err) : console.log("\nGenerated logo.svg")
  );
})
