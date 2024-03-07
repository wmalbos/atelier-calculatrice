/**
 * Adds two numbers together.
 *
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @returns {number} The sum of the two numbers.
 */
const addition = (a, b) => {
    return a + b;
}

/**
 * Performs soustraction of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of soustraction the two numbers.
 */
const soustraction = (a, b) => {
    return a - b;
}

/**
 * Performs division of two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The result of dividing the two numbers.
 */
const multiplication = (a, b) => {
    if (a === 0 || b === 0) {
        return 0;
    }
    return a * b;
}

/**
 * Calculates the division of two numbers.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The quotient of the division.
 * @throws {Error} If the divisor is zero.
 */
const division = (a, b) => {
    if (b === 0) {
        return NaN;
    } else if (a === 0) {
        return 0;
    }
    return a / b;
}


/**
 * Returns the remainder of division between two numbers.
 *
 * @param {number} a - The dividend.
 * @param {number} b - The divisor.
 * @returns {number} The remainder of division a / b.
 */
const modulo = (a, b) => {
    if (b === 0) {
        return NaN;
    }
    return ((a % b) + Math.abs(b)) % Math.abs(b);
}

/**
 * Performs a calculation between two numbers using the given operator.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {string} operator - The operator to use for the calculation. Valid options are '+', '-', '*', '/', and '%'.
 * @returns {number} - The result of the calculation. If the operator is invalid or the calculation is not possible, NaN is returned.
 */
const calculate = (a, b, operator) => {
    switch (operator) {
        case '+':
            return addition(a, b);
        case '-':
            return soustraction(a, b);
        case '*':
            return multiplication(a, b);
        case '/':
            return division(a, b);
        case '%':
            return modulo(a, b);
        default:
            return NaN;
    }
}

module.exports = {
    addition,
    soustraction,
    multiplication,
    division,
    modulo,
    calculate
}
