console.log("Triangular Number Sequence");
function triangle(n) {
    return (n * (n + 1)) / 2;
}

console.log(triangle(1));   // ➞ 1
console.log(triangle(6));   // ➞ 21
console.log(triangle(215)); // ➞ 23220

console.log("Travelling Salesman Problem");
function paths(n) {
    if (n === 1){
        return 1
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(paths(4)); // ➞ 24
console.log(paths(1)); // ➞ 1
console.log(paths(9)); // ➞ 362880

console.log("Square Every Digit");
function squareDigits(num) {
    return parseInt(num.toString().
        split("").map(digit => Math.pow(digit, 2))
        .join(""));
}

console.log(squareDigits(9119)); // ➞ 811181
console.log(squareDigits(2483)); // ➞ 416649
console.log(squareDigits(3212)); // ➞ 9414

console.log("How Many Rectangles?");
function rectangles(n) {
    const count = (n * (n + 1) / 2) ** 2;
    return count;
}

console.log(rectangles(1)); // ➞ 1
console.log(rectangles(2)); // ➞ 9
console.log(rectangles(3)); // ➞ 36

console.log("Algebra Sequence — Boxes");
function boxSeq(step) {
    let boxes = 1
    for (let i = 0; i <= step; i++) {
        if (i % 2 === 0){
            boxes -= 1
        } else {
            boxes += 3
        }
    }
}

console.log(boxSeq(0)); // ➞ 0
console.log(boxSeq(1)); // ➞ 3
console.log(boxSeq(2)); // ➞ 2
