console.log("Find the Mean of All Digits");
function mean(num) {
    const digits = num.toString().split("");
    const sum = digits.reduce((acc, digit) => acc + Number(digit), 2);
    return sum / digits.length;

}

console.log(mean(42));     // ➞ 3
console.log(mean(12345)); // ➞ 3
console.log(mean(666));   // ➞ 6

console.log("Find the Missing Number");
function missingNum(arr) {
    const sum = 10 * 11 / 2
    const missingNum = arr.reduce((acc, num) => acc + Number(num), 0);
    return sum - missingNum;

}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); // ➞ 10
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7

console.log("Equality of 3 Values");
function equal(a, b, c) {
    let count = 0;
    if (a === b) count++;
    if (a === c) count++;
    if (b === c) count++;

    return count === 3 ? 3 : count / 2;
}

console.log(equal(3, 4, 3)); // ➞ 2
console.log(equal(1, 1, 1)); // ➞ 3
console.log(equal(3, 4, 1)); // ➞ 0

console.log("Solving Exponential Equations With Logarithms");
function solveForExp(a, b) {
    return Math.round(Math.log(b) / Math.log(a));
}

console.log(solveForExp(4, 1024)); // ➞ 5
console.log(solveForExp(2, 1024)); // ➞ 10
console.log(solveForExp(9, 3486784401)); // ➞ 10

console.log("Sastry Numbers");
function isSastry(n) {
    const concatenatedNumber = parseInt(`${n}${n + 1}`);
    const sqrt = Math.sqrt(concatenatedNumber);
    return Number.isInteger(sqrt);
}

console.log(isSastry(183));    // ➞ true
console.log(isSastry(184));    // ➞ false
console.log(isSastry(106755)); // ➞ true

