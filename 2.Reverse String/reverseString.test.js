const reverseString = require('./reverseString');

test('Sees if string gets reversed', () => {
    expect(reverseString("str")).toBe("rts");
});