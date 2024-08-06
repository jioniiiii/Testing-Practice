const caesarCipher = require('./ceasarCipher');

test('Sees if function that takes a string and a shift factor and returns it with each character “shifted”', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});