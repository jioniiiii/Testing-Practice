const capitalize = require('./capitalize');

test('Sees if string gets capitalized', () => {
    expect(capitalize("str")).toBe("Str");
});