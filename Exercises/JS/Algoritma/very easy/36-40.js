console.log('Triangular Number Sequence');
function triangle(n) {
    return n * (n + 1) / 2;
}

console.log(triangle(1));   // ➞ 1
console.log(triangle(6));   // ➞ 21
console.log(triangle(215)); // ➞ 23220

console.log('Travelling Salesman Problem');
function paths(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return n * paths(n-1);
}

console.log(paths(4));  // ➞ 24
console.log(paths(1));  // ➞ 1
console.log(paths(9));  // ➞ 362880

console.log('Square Every Digit');
function squareDigits(num) {
    return parseInt(num.toString().split('').map(digit => digit * digit).join(''));
}

console.log(squareDigits(9119)); // ➞ 811181
console.log(squareDigits(2483)); // ➞ 416649
console.log(squareDigits(3212)); // ➞ 9414

console.log('How Many Rectangles?');
function rectangles(n) {
    return (n * (n + 1) / 2) ** 2;
}

console.log(rectangles(1)); // ➞ 1
console.log(rectangles(2)); // ➞ 9
console.log(rectangles(3)); // ➞ 36

console.log('Algebra Sequence — Boxes');
function boxSeq(step) {
    if (step === 0) {
        return 0;
    }
    return step % 2 === 0 ? step : step + 2;
}

console.log(boxSeq(0)); // ➞ 0
console.log(boxSeq(1)); // ➞ 3
console.log(boxSeq(2)); // ➞ 2
console.log(boxSeq(3)); // ➞ 5
console.log(boxSeq(4)); // ➞ 4