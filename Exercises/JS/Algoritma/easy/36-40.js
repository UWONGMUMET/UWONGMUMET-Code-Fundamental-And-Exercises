console.log("A Simple Equation");
function simpleEquation(a, b, c) {
    if (a + b === c) return `${a}+${b}=${c}`;
    if (a - b === c) return `${a}-${b}=${c}`;
    if (a * b === c) return `${a}*${b}=${c}`;
    if (b !== 0 && a / b === c && a % b === 0) return `${a}/${b}=${c}`;
    if (b + a === c) return `${b}+${a}=${c}`;
    if (b - a === c) return `${b}-${a}=${c}`;
    if (b * a === c) return `${b}*${a}=${c}`;
    if (a !== 0 && b / a === c && b % a === 0) return `${b}/${a}=${c}`;
    if (a + c === b) return `${a}+${c}=${b}`;
    if (a - c === b) return `${a}-${c}=${b}`;
    if (a * c === b) return `${a}*${c}=${b}`;
    if (c !== 0 && a / c === b && a % c === 0) return `${a}/${c}=${b}`;
    if (c + a === b) return `${c}+${a}=${b}`;
    if (c - a === b) return `${c}-${a}=${b}`;
    if (c * a === b) return `${c}*${a}=${b}`;
    if (a !== 0 && c / a === b && c % a === 0) return `${c}/${a}=${b}`;
    
    return "";
}

console.log(simpleEquation(1, 2, 3)); // Example output: "1+2=3"
console.log(simpleEquation(2, 2, 4)); // Example output: "2*2=4"
console.log(simpleEquation(6, 2, 3)); // Example output: "2*3=6"

console.log("Sum Fractions");
function sumFractions(fractions) {
    let sum = 0;

    for (let [num, denom] of fractions) {
        sum += num / denom;
    }

    return Math.round(sum);
}

console.log(sumFractions([[18, 13], [4, 5]])); // Output: 2
console.log(sumFractions([[36, 4], [22, 60]])); // Output: 9
console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]])); // Output: 11

console.log("Guess the Sequence");
function guessSequence(n) {
    return 30 * n ** 2 + 60 * n;
}

console.log(guessSequence(1)); // Output: 90
console.log(guessSequence(2)); // Output: 240
console.log(guessSequence(3)); // Output: 450
console.log(guessSequence(4)); // Output: 720
console.log(guessSequence(5)); // Output: 1050

console.log("Intersecting Intervals");
function countOverlapping(intervals, point) {
    let count = 0

    for (let i = 0; i < intervals.length; i++) {
        const [start, end] = intervals[i]
        if (point >= start && point <= end){
            count++;
        }
    }
    return count;
}

console.log(countOverlapping([[1, 2], [2, 3], [1, 3], [4, 5], [0, 1]], 2)); // Output: 3
console.log(countOverlapping([[1, 2], [2, 3], [3, 4]], 5)); // Output: 0
console.log(countOverlapping([[1, 2], [5, 6], [5, 7]], 5)); // Output: 2
console.log(countOverlapping([[1, 2], [5, 8], [6, 9]], 7)); // Output: 2

console.log("Musical Cadences");
function findCadence(chords) {
    if (chords.length < 2) {
        return "no cadence";
    }

    const last = chords[chords.length - 1];
    const secondLast = chords[chords.length - 2];

    if (secondLast === "V" && last === "I") {
        return "perfect";
    } else if (secondLast === "IV" && last === "I") {
        return "plagal";
    } else if (secondLast === "V" && last !== "I") {
        return "interrupted";
    } else if (last === "V") {
        return "imperfect";
    } else {
        return "no cadence";
    }
}

console.log(findCadence(["I", "IV", "V"])); // Output: "imperfect"
console.log(findCadence(["ii", "V", "I"])); // Output: "perfect"
console.log(findCadence(["I", "IV", "I", "V", "vi"])); // Output: "interrupted"