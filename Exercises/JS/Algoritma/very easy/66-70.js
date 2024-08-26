console.log("'EdaBit' Challenge");
function edaBit(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        if (i % 15 === 0) {
            result.push("EdaBit");
        } else if (i % 3 === 0) {
            result.push("Eda");
        } else if (i % 5 === 0) {
            result.push("Bit");
        } else {
            result.push(i);
        }
    }
    return result;
}

console.log(edaBit(0, 10));  // ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit"]
console.log(edaBit(14, 20)); // [14, "EdaBit", 16, 17, "Eda", 19, "Bit"]
console.log(edaBit(99, 106)); // ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106]

console.log("A Simple Equation");
function simpleEquation(a, b, c) {
    if (a + b === c) return `${a}+${b}=${c}`;
    if (b + a === c) return `${b}+${a}=${c}`;
    
    if (a - b === c) return `${a}-${b}=${c}`;
    if (b - a === c) return `${b}-${a}=${c}`;
    
    if (a * b === c) return `${a}*${b}=${c}`;
    if (b * a === c) return `${b}*${a}=${c}`;
    
    if (a / b === c) return `${a}/${b}=${c}`;
    if (b / a === c) return `${b}/${a}=${c}`;
    
    return "";
}

console.log(simpleEquation(1, 2, 3)); // "1+2=3" or "2+1=3" or "3-2=1" or "3-1=2"
console.log(simpleEquation(2, 2, 4)); // "2+2=4" or "2*2=4" or "4/2=2" or "4-2=2"
console.log(simpleEquation(6, 2, 3)); // "2*3=6" or "3*2=6" or "6/2=3" or "6/3=2"

console.log("Sum Fractions");
function sumFractions(fractions) {
    let sum = fractions.reduce((acc, [numerator, denominator]) => {
        return acc + (numerator / denominator);
    }, 0);

    return Math.round(sum);
}

console.log(sumFractions([[18, 13], [4, 5]])); // 2
console.log(sumFractions([[36, 4], [22, 60]])); // 9
console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]])); // 11

console.log("Guess the Sequence");
function guessSequence(n) {
    return 30 * n * n + 60 * n;
}

console.log(guessSequence(1)); // 90
console.log(guessSequence(2)); // 240
console.log(guessSequence(3)); // 450
console.log(guessSequence(4)); // 720
console.log(guessSequence(5)); // 1050

console.log("Intersecting Intervals");
function countOverlapping(intervals, point) {
    let count = 0;

    for (let [start, end] of intervals) {
        if (point >= start && point <= end) {
            count++;
        }
    }
    return count;
}

console.log(countOverlapping([[1, 2], [2, 3], [3, 4]], 5)); // 0
console.log(countOverlapping([[1, 2], [5, 6], [5, 7]], 5)); // 2
console.log(countOverlapping([[1, 2], [5, 8], [6, 9]], 7)); // 2
console.log(countOverlapping([[1, 2], [2, 3], [1, 3], [4, 5], [0, 1]], 2)); // 3
