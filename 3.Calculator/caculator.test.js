const calculator = require('./calculator');

test('Sees if caculator can add, subtract, divide, multiply', () => {
    const calc = calculator();
    expect(calc.add(1, 2)).toBe(3);
    expect(calc.sub(3, 1)).toBe(2);
    expect(calc.div(4, 2)).toBe(2);
    expect(calc.mul(2, 3)).toBe(6);
});