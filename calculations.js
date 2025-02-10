function add(x,y) {
    const result = x + y;
    return result;
}

function subtract(x,y) {
    const result =  x - y
    return result
}

function multiplyNumbers (x,y) {
    return x * y;
}

function divideNumbers(x,y) {
    return x / y;
}

function doWhateverCalculation(operation, [x, y]){
    return operation(x,y);
}

const product = doWhateverCalculation(multiplyNumbers, [3,4]);
const quotient = doWhateverCalculation(divideNumbers, [6,4])

module.exports = { add, subtract, multiplyNumbers, divideNumbers, doWhateverCalculation };