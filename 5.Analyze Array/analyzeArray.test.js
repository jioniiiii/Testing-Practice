const analyzeArray = require('./analyzeArray');
const arr = [1, 8, 3, 4, 2, 6];

test('Sees if analyzeArray can average, min, max, length', () => {
    const analysis = analyzeArray(arr);
    expect(analysis.avg()).toBe(4);    
    expect(analysis.min()).toBe(1);    
    expect(analysis.max()).toBe(8);   
    expect(analysis.len()).toBe(6);    
});