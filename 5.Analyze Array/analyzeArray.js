function analyzeArray(arr) {
    return {
        avg: () => {
            const sum = arr.reduce((acc, val) => acc + val, 0);
            return sum / arr.length;
        },
        min: () => {
            return Math.min(...arr);
        },
        max: () => {
            return Math.max(...arr);
        },
        len: () => {
            return arr.length;
        }
    };
}

module.exports = analyzeArray;