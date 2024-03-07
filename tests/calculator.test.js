const {
    addition,
    soustraction,
    multiplication,
    division,
    modulo,
    calculate
} = require('../assets/js/calculator');

describe('Calculator functions', () => {
    describe('addition', () => {
        test('deux nombres positifs ou null', () => {
            expect(addition(3, 5)).toBeCloseTo(8);
            expect(addition(100, 5)).toBeCloseTo(105);
            expect(addition(89, 0)).toBeCloseTo(89);
        });

        test('un nombre positif et un nombre négatif ou null', () => {
            expect(addition(3, -5)).toBeCloseTo(-2);
            expect(addition(0, -5)).toBeCloseTo(-5);
            expect(addition(-5, 5)).toBeCloseTo(0);
            expect(addition(-5, 0)).toBeCloseTo(-5);
        });

        test('deux nombres négatifs ou null', () => {
            expect(addition(-3, -5)).toBeCloseTo(-8);
            expect(addition(0, 0)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre entier', () => {
            expect(addition(3.5, 2)).toBeCloseTo(5.5);
            expect(addition(0, 2.99)).toBeCloseTo(2.99);
        });

        test('un nombre décimal et un nombre négatif', () => {
            expect(addition(3.5, -2)).toBeCloseTo(1.5);
            expect(addition(0, -2.99)).toBeCloseTo(-2.99);
        });

        test('un nombre décimal et un nombre décimal', () => {
            expect(addition(3.5, 2.5)).toBeCloseTo(6);
            expect(addition(0.5, 2.99)).toBeCloseTo(3.49);
        });
    });
    describe('soustraction', () => {
        test('deux nombres positifs ou null', () => {
            expect(soustraction(5, 3)).toBeCloseTo(2);
            expect(soustraction(100, 5)).toBeCloseTo(95);
            expect(soustraction(89, 0)).toBeCloseTo(89);
        });

        test('un nombre positif et un nombre négatif ou null', () => {
            expect(soustraction(3, -5)).toBeCloseTo(8);
            expect(soustraction(0, -5)).toBeCloseTo(5);
            expect(soustraction(-5, 5)).toBeCloseTo(-10);
            expect(soustraction(-5, 0)).toBeCloseTo(-5);
        });

        test('deux nombres négatifs ou null', () => {
            expect(soustraction(-3, -5)).toBeCloseTo(2);
            expect(soustraction(0, 0)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre entier', () => {
            expect(soustraction(3.5, 2)).toBeCloseTo(1.5);
            expect(soustraction(0, 2.99)).toBeCloseTo(-2.99);
        });

        test('un nombre décimal et un nombre négatif', () => {
            expect(soustraction(3.5, -2)).toBeCloseTo(5.5);
            expect(soustraction(0, -2.99)).toBeCloseTo(2.99);
        });

        test('un nombre décimal et un nombre décimal', () => {
            expect(soustraction(3.5, 2.5)).toBeCloseTo(1);
            expect(soustraction(0.5, 2.99)).toBeCloseTo(-2.49);
        });
    });
    describe('multiplication', () => {
        test('deux nombres positifs ou null', () => {
            expect(multiplication(5, 3)).toBeCloseTo(15);
            expect(multiplication(100, 5)).toBeCloseTo(500);
            expect(multiplication(89, 0)).toBeCloseTo(0);
        });

        test('un nombre positif et un nombre négatif ou null', () => {
            expect(multiplication(3, -5)).toBeCloseTo(-15);
            expect(multiplication(0, -5)).toBeCloseTo(0);
            expect(multiplication(-5, 5)).toBeCloseTo(-25);
            expect(multiplication(-5, 0)).toBeCloseTo(0);
        });

        test('deux nombres négatifs ou null', () => {
            expect(multiplication(-3, -5)).toBeCloseTo(15);
            expect(multiplication(0, 0)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre entier', () => {
            expect(multiplication(3.5, 2)).toBeCloseTo(7);
            expect(multiplication(0, 2.99)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre négatif', () => {
            expect(multiplication(3.5, -2)).toBeCloseTo(-7);
            expect(multiplication(0, -2.99)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre décimal', () => {
            expect(multiplication(3.5, 2.5)).toBeCloseTo(8.75);
            expect(multiplication(0.5, 2.99)).toBeCloseTo(1.495);
        });
    });
    describe('division', () => {
        test('deux nombres positifs ou null', () => {
            expect(division(15, 3)).toBeCloseTo(5);
            expect(division(100, 5)).toBeCloseTo(20);
            expect(division(89, 1)).toBeCloseTo(89);
        });

        test('un nombre positif et un nombre négatif ou null', () => {
            expect(division(20, -5)).toBeCloseTo(-4);
            expect(division(0, -5)).toBeCloseTo(0);
            expect(division(-25, 5)).toBeCloseTo(-5);
            expect(division(-5, 1)).toBeCloseTo(-5);
        });

        test('deux nombres négatifs ou null', () => {
            expect(division(-15, -3)).toBeCloseTo(5);
            expect(division(0, 0)).toBe(NaN); // La division par zéro renvoie NaN
        });

        test('un nombre décimal et un nombre entier', () => {
            expect(division(7, 2)).toBeCloseTo(3.5);
            expect(division(0, 2.99)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre négatif', () => {
            expect(division(3.5, -2)).toBeCloseTo(-1.75);
            expect(division(0, -2.99)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre décimal', () => {
            expect(division(8.75, 2.5)).toBeCloseTo(3.5);
            expect(division(1.495, 0.5)).toBeCloseTo(2.99);
        });
    });
    describe('modulo', () => {
        test('deux nombres positifs ou null', () => {
            expect(modulo(15, 4)).toBeCloseTo(3);
            expect(modulo(100, 5)).toBeCloseTo(0);
            expect(modulo(89, 7)).toBeCloseTo(5);
        });

        test('un nombre positif et un nombre négatif ou null', () => {
            expect(modulo(20, -3)).toBeCloseTo(2);
            expect(modulo(0, -5)).toBeCloseTo(0);
            expect(modulo(-25, 6)).toBeCloseTo(5);
            expect(modulo(-5, 1)).toBeCloseTo(0);
        });

        test('deux nombres négatifs ou null', () => {
            expect(modulo(-15, -3)).toBeCloseTo(0);
            expect(modulo(0, 0)).toBe(NaN); // Le modulo par zéro renvoie NaN
        });

        test('un nombre décimal et un nombre entier', () => {
            expect(modulo(7, 2)).toBeCloseTo(1);
            expect(modulo(0, 3)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre négatif', () => {
            expect(modulo(3.5, -2)).toBeCloseTo(1.5);
            expect(modulo(0, -2)).toBeCloseTo(0);
        });

        test('un nombre décimal et un nombre décimal', () => {
            expect(modulo(8.75, 2.5)).toBeCloseTo(1.25);
            expect(modulo(1.495, 0.5)).toBeCloseTo(0.495);
        });
    });
    describe('calculate', () => {
        test('addition', () => {
            expect(calculate(3, 5, '+')).toBeCloseTo(8);
            expect(calculate(100, 5, '+')).toBeCloseTo(105);
            expect(calculate(89, 0, '+')).toBeCloseTo(89);
        });

        test('soustraction', () => {
            expect(calculate(5, 3, '-')).toBeCloseTo(2);
            expect(calculate(100, 5, '-')).toBeCloseTo(95);
            expect(calculate(89, 0, '-')).toBeCloseTo(89);
        });

        test('multiplication', () => {
            expect(calculate(5, 3, '*')).toBeCloseTo(15);
            expect(calculate(100, 5, '*')).toBeCloseTo(500);
            expect(calculate(89, 0, '*')).toBeCloseTo(0);
        });

        test('division', () => {
            expect(calculate(15, 3, '/')).toBeCloseTo(5);
            expect(calculate(100, 5, '/')).toBeCloseTo(20);
            expect(calculate(89, 1, '/')).toBeCloseTo(89);
        });

        test('modulo', () => {
            expect(calculate(15, 4, '%')).toBeCloseTo(3);
            expect(calculate(100, 5, '%')).toBeCloseTo(0);
            expect(calculate(89, 7, '%')).toBeCloseTo(5);
        });

        test('opérateur non valide', () => {
            // Vérifie que la fonction renvoie NaN pour un opérateur non valide
            expect(calculate(5, 3, '&')).toBeNaN();
        });
    });
});
