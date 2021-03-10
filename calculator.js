/*
    Creates UI
*/
const BODY = document.querySelector('body')

const MAIN = document.createElement('main')
MAIN.classList.add('calculator')
BODY.appendChild(MAIN)

const TITLE = document.createElement('h1')
TITLE.classList.add('title')
TITLE.textContent = 'Calculator'
MAIN.appendChild(TITLE)

const HEADER = document.createElement('div')
HEADER.classList.add('header')
MAIN.appendChild(HEADER)

const SCREEN = document.createElement('div')
SCREEN.classList.add('screen')
HEADER.appendChild(SCREEN)

const DELETE = document.createElement('button')
DELETE.id = 'delete'
DELETE.classList = 'button misc'
DELETE.innerHTML = '<i class = "fas fa-backspace" ></i>'
HEADER.appendChild(DELETE)

const HISTORY = document.createElement('div')
HISTORY.classList.add('history')
HISTORY.textContent = 'calculate something!'
SCREEN.appendChild(HISTORY)

const INPUT = document.createElement('div')
INPUT.classList.add('input')
INPUT.textContent = ''
SCREEN.appendChild(INPUT)

const BUTTON__CONTAINER = document.createElement('div')
BUTTON__CONTAINER.classList.add('button-container')
MAIN.appendChild(BUTTON__CONTAINER)

const CLEAR = document.createElement('button')
CLEAR.id = 'clear'
CLEAR.classList = 'button misc'
CLEAR.innerHTML = '<i class = "fas fa-copyright" ></i>'
BUTTON__CONTAINER.appendChild(CLEAR)

const POWER = document.createElement('button')
POWER.id = 'power'
POWER.classList = 'button operator'
POWER.textContent = '^'
BUTTON__CONTAINER.appendChild(POWER)

const FACTORIAL = document.createElement('button')
FACTORIAL.id = 'factorial'
FACTORIAL.classList = 'button operator'
FACTORIAL.textContent = '!'
BUTTON__CONTAINER.appendChild(FACTORIAL)

const DIVIDE = document.createElement('button')
DIVIDE.id = 'divide'
DIVIDE.classList = 'button operator'
DIVIDE.textContent = '÷'
BUTTON__CONTAINER.appendChild(DIVIDE)

const MULTIPLY = document.createElement('button')
MULTIPLY.id = 'multiply'
MULTIPLY.classList = 'button operator'
MULTIPLY.textContent = 'x'
BUTTON__CONTAINER.appendChild(MULTIPLY)

const MINUS = document.createElement('button')
MINUS.id = 'minus'
MINUS.classList = 'button operator'
MINUS.textContent = '-'
BUTTON__CONTAINER.appendChild(MINUS)

const PLUS = document.createElement('button')
PLUS.id = 'plus'
PLUS.classList = 'button operator'
PLUS.textContent = '+'
BUTTON__CONTAINER.appendChild(PLUS)

const EQUAL = document.createElement('button')
EQUAL.id = 'equal'
EQUAL.classList = 'button operator'
EQUAL.textContent = '='
BUTTON__CONTAINER.appendChild(EQUAL)

const DOT = document.createElement('button')
DOT.id = 'dot'
DOT.classList = 'button dot'
DOT.textContent = '.'
BUTTON__CONTAINER.appendChild(DOT)

const SIGNTOGGLER = document.createElement('button')
SIGNTOGGLER.id = 'sign-toggler'
SIGNTOGGLER.classList = 'button operator'
SIGNTOGGLER.textContent = '+/-'
BUTTON__CONTAINER.appendChild(SIGNTOGGLER)

const ZERO = document.createElement('button')
ZERO.id = 'zero'
ZERO.classList = 'button number'
ZERO.textContent = '0'
BUTTON__CONTAINER.appendChild(ZERO)

const ONE = document.createElement('button')
ONE.id = 'one'
ONE.classList = 'button number'
ONE.textContent = '1'
BUTTON__CONTAINER.appendChild(ONE)

const TWO = document.createElement('button')
TWO.id = 'two'
TWO.classList = 'button number'
TWO.textContent = '2'
BUTTON__CONTAINER.appendChild(TWO)

const THREE = document.createElement('button')
THREE.id = 'three'
THREE.classList = 'button number'
THREE.textContent = '3'
BUTTON__CONTAINER.appendChild(THREE)

const FOUR = document.createElement('button')
FOUR.id = 'four'
FOUR.classList = 'button number'
FOUR.textContent = '4'
BUTTON__CONTAINER.appendChild(FOUR)

const FIVE = document.createElement('button')
FIVE.id = 'five'
FIVE.classList = 'button number'
FIVE.textContent = '5'
BUTTON__CONTAINER.appendChild(FIVE)

const SIX = document.createElement('button')
SIX.id = 'six'
SIX.classList = 'button number'
SIX.textContent = '6'
BUTTON__CONTAINER.appendChild(SIX)

const SEVEN = document.createElement('button')
SEVEN.id = 'seven'
SEVEN.classList = 'button number'
SEVEN.textContent = '7'
BUTTON__CONTAINER.appendChild(SEVEN)

const EIGHT = document.createElement('button')
EIGHT.id = 'eight'
EIGHT.classList = 'button number'
EIGHT.textContent = '8'
BUTTON__CONTAINER.appendChild(EIGHT)

const NINE = document.createElement('button')
NINE.id = 'nine'
NINE.classList = 'button number'
NINE.textContent = '9'
BUTTON__CONTAINER.appendChild(NINE)


/* 
    Calculator's Logic & events
*/

// Some objects
let operation = {
    firstNumber: null,
    secondNumber: null,
    operator: null
}

let number = {
    sign: 'positive'
}

let inputArr = null
let screenShowingResult = false

// NodeList of buttons
const NUMBERS_BUTTONS = document.querySelectorAll('.number')
const OPERATORS_BUTTONS = document.querySelectorAll('.operator')

// Shows the result of an operation
function showResult() {
    operation.secondNumber = variableDeclarator()
    // Letting know to the user that he can't divide by 0, so calculator does't collapse
    if (operation.operator == '÷' && operation.secondNumber == '0') {
        INPUT.textContent = '0'
        HISTORY.textContent = `${operation.firstNumber} ${operation.operator} ${operation.secondNumber}`
        alert("You can't divide by 0")
    } else {
        INPUT.textContent = operate(operation.firstNumber, operation.secondNumber, operation.operator)
        HISTORY.textContent = `${operation.firstNumber} ${operation.operator} ${operation.secondNumber}`
    }
    screenShowingResult = true
    clearVars()
}

// Puts a number into a variable depending the sign
function variableDeclarator() {
    return Number(INPUT.textContent) 
}

// Clears the variables
function clearVars() {
    operation.firstNumber = null
    operation.secondNumber = null
    operation.operator = null
    number.sign = 'positive'
}

// Clears the screen 
function clearInputScreen() {
    INPUT.textContent = ''
}

// Clears the screen totally
function clearScreenTotally() {
    INPUT.textContent = ''
    HISTORY.textContent = ''
}

// Finds the last item of input array
function lastItemArray() {
    inputArr = INPUT.textContent.split('')
    return inputArr[inputArr.length - 1]
}

// Clear button
CLEAR.addEventListener('click', () => {
    clearVars()
    clearScreenTotally()
})

// Delete button
DELETE.addEventListener('click', () => {
    // Deletes the last digit
    if (INPUT.textContent != '' && INPUT.textContent != '0' && screenShowingResult == false) {
        INPUT.textContent = parseInt(Number(INPUT.textContent) / 10)
    }
})

// Checks the input and returns the sign of it
function updateVariableSign() {
    if (Number(INPUT.textContent) > 0 || INPUT.textContent == '') {
        return 'positive'
    } else if (INPUT.textContent == '0') {
        return 'zero'
    }
    return 'negative'
}

// Checks the input and return if it is decimal or not
function isItDecimal() {
    // Declares inputArr as a string 'arrayed', then searchs for a dot in it
    inputArr = INPUT.textContent.split('')
    for (let i = 0; i < inputArr.length; i++) {
        if (inputArr[i] == '.') {
            return true
        }
    }
    return false
}

// Decimal button
DOT.addEventListener('click', () => {
    // Only works if the number on the screen is not a decimal
    if (isItDecimal() == false) {
        inputArr = INPUT.textContent.split('')
        inputArr.push('.')
        inputArr = inputArr.join('')
        INPUT.textContent = inputArr
    }
})

// Event Listener for each number button
NUMBERS_BUTTONS.forEach((number) => {
    number.addEventListener('click', () => {

        // Adding a limit to the display's input
        if (INPUT.textContent.length == 13) {
            alert('The digits have reached the limit allowed!')
            return 1
        }

        // If showing the result, then clear
        if (screenShowingResult == true) {
            // Check if the result is decimal or not, so the user can make operations with it without losing it
            if (isItDecimal() == true && lastItemArray() == '.') {
                screenShowingResult = false
            } else {
                clearInputScreen()
                screenShowingResult = false
            }
        }

        // Delete any 0 without value
        if (INPUT.textContent == '0') {
            clearInputScreen()
        }

        // Disallows writing many zeros without any value
        if (number.textContent == '0') {
            if (INPUT.textContent != '0') {
                INPUT.textContent += number.textContent
            }
        } else {
            INPUT.textContent += number.textContent
        }
    })
})

// Event Listener for each operator button
OPERATORS_BUTTONS.forEach((operator_button) => {
    operator_button.addEventListener('click', () => {

        // If equal button pressed
        if (operator_button.textContent == '=') {
            if (operation.firstNumber != null && operation.operator != null && screenShowingResult == false) {
                showResult()
            }
        }

        // If factorial button pressed
        if (INPUT.textContent != '' && operator_button.textContent == '!') {
            // If it is the first operator
            if (operation.operator == null) {
                operation.firstNumber = variableDeclarator()
                operation.operator = operator_button.textContent
                HISTORY.textContent = `${operation.firstNumber}${operation.operator}`
                INPUT.textContent = factorial(operation.firstNumber)
                screenShowingResult = true
                clearVars()
            // If the user wants to do more than one operation wihout pressing '='
            } else {
                showResult()
                operation.firstNumber = variableDeclarator()
                operation.operator = operator_button.textContent
                HISTORY.textContent = `${operation.firstNumber}${operation.operator}`
                INPUT.textContent = factorial(operation.firstNumber)
                screenShowingResult = true
                clearVars()
            }
        }

        // If any other operator button pressed
        if (operator_button.textContent != '=' && operator_button.textContent != '!' && operator_button.textContent != '+/-') {

            // If we have no numbers into variables & there is no operator
            if (operation.firstNumber == null && operation.operator == null) {
                operation.firstNumber = variableDeclarator()
                operation.operator = operator_button.textContent
                HISTORY.textContent = `${operation.firstNumber} ${operation.operator}`
                clearInputScreen()
            // If user wants to do more than one operation without pressing '='
            } else {
                showResult()
                clearVars()
                operation.firstNumber = variableDeclarator()
                operation.operator = operator_button.textContent
            }
        }

        // If toggler button pressed
        if (operator_button.textContent == '+/-') {
            // Only works if there is no result beign shown on the screen, or if that result is positive
            if (INPUT.textContent != '') {
                number.sign = updateVariableSign()
                // Makes the number negative
                if (number.sign == 'positive') {
                    inputArr = INPUT.textContent.split('')
                    inputArr.unshift('-')
                    inputArr = inputArr.join('')
                    INPUT.textContent = inputArr
                    number.sign = 'negative'
                // Makes the number positive
                } else if (number.sign == 'negative'){
                    inputArr = INPUT.textContent.split('')
                    inputArr.shift()
                    inputArr = inputArr.join('')
                    INPUT.textContent = inputArr
                    number.sign = 'positive'
                }
            }
        }
    })
})

// Depending on the operator, call math functions
function operate(firstNumber, secondNumber, operator) {
    switch (operator) {
        case '+':
            return add(firstNumber, secondNumber)
            break
        case '-':
            return subtract(firstNumber, secondNumber)
            break
        case 'x':
            return multiply(firstNumber, secondNumber)
            break
        case '÷':
            return divide(firstNumber, secondNumber)
            break
        case '^':
            return power(firstNumber, secondNumber)
            break
    }
}

// Math functions
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber
}

function power(firstNumber, secondNumber) {
    return firstNumber ** secondNumber
}

function factorial(number) {
    // solution for not having errors
    if (number > 170) {
        alert('number too much big to display!')
        return 0
    }
    else if (number < 0) {
        alert('You cant factorial a negative number')
        return 0
    }
    //
    if (number == 0 || number == 1) {
        return 1;
    } else {
        return number * factorial(number - 1);
    }
}
