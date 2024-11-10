// Get all the buttons by their respective IDs
const ac = document.getElementById('AC');
const del = document.getElementById('DEL');
const mod = document.getElementById('mod');
const div = document.getElementById('div');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const mul = document.getElementById('mul');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const add = document.getElementById('add');
const sub = document.getElementById('sub');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const plus = document.getElementById('plus');
const doubleZero = document.getElementById('double-zero');
const zero = document.getElementById('zero');
const dot = document.getElementById('dot');
const equal = document.getElementById('equal');

// Reference to the display
const display = document.querySelector('.display');

// Variable to store the current expression
let currentExpression = '';

// Function to update the display
function updateDisplay() {
    display.value = currentExpression;
}

// Function to handle button clicks
function handleButtonClick(value) {
    currentExpression += value;
    updateDisplay();
}

// Function to handle the AC button (clear the expression)
ac.addEventListener('click', () => {
    currentExpression = '';
    updateDisplay();
});

// Function to handle the DEL button (delete the last character)
del.addEventListener('click', () => {
    currentExpression = currentExpression.slice(0, -1);
    updateDisplay();
});

// Function to handle the equal button (evaluate the expression)
equal.addEventListener('click', () => {
    try {
        currentExpression = eval(currentExpression).toString();
    } catch (error) {
        currentExpression = 'Error';
    }
    updateDisplay();
});

// Add event listeners to number buttons
seven.addEventListener('click', () => handleButtonClick('7'));
eight.addEventListener('click', () => handleButtonClick('8'));
nine.addEventListener('click', () => handleButtonClick('9'));
four.addEventListener('click', () => handleButtonClick('4'));
five.addEventListener('click', () => handleButtonClick('5'));
six.addEventListener('click', () => handleButtonClick('6'));
one.addEventListener('click', () => handleButtonClick('1'));
two.addEventListener('click', () => handleButtonClick('2'));
three.addEventListener('click', () => handleButtonClick('3'));
zero.addEventListener('click', () => handleButtonClick('0'));
doubleZero.addEventListener('click', () => handleButtonClick('00'));
dot.addEventListener('click', () => handleButtonClick('.'));

// Add event listeners to operator buttons
add.addEventListener('click', () => handleButtonClick('+'));
sub.addEventListener('click', () => handleButtonClick('-'));
mul.addEventListener('click', () => handleButtonClick('*'));
div.addEventListener('click', () => handleButtonClick('/'));
mod.addEventListener('click', () => handleButtonClick('%'));
