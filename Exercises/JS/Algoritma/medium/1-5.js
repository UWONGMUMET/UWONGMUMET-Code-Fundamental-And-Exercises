console.log("Triangular Number Sequence");
function triangle(n) {
    return (n * (n + 1)) / 2;
}

console.log(triangle(1));   // ➞ 1
console.log(triangle(6));   // ➞ 21
console.log(triangle(215)); // ➞ 23220

console.log("Travelling Salesman Problem");
function paths(n) {
    if (n === 0) {
        return 1
    }

    let factorial = 1;
    for (let i = 2; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(paths(4)); // ➞ 24
console.log(paths(1)); // ➞ 1
console.log(paths(9)); // ➞ 362880

console.log("Square Every Digit");
function squareDigits(num) {
    let numStr = num.toString();
    let result = '';

    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);
        let squaredDigit = digit * digit;
        result += squaredDigit.toString();
    }

    return parseInt(result);
}

console.log(squareDigits(9119)); // ➞ 811181
console.log(squareDigits(2483)); // ➞ 416649
console.log(squareDigits(3212)); // ➞ 9414

console.log("How Many Rectangles?");
function rectangles(n) {
    return Math.pow((n * (n + 1) / 2), 2);
}

console.log(rectangles(1)); // ➞ 1
console.log(rectangles(2)); // ➞ 9
console.log(rectangles(3)); // ➞ 36

console.log("Find the Mean of All Digits");
function mean(num) {
    let numStr = num.toString();
    let sum = 0;

    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);
        sum += digit;
    }

    let count = numStr.length;
    let mean = Math.floor(sum / count); 
    return mean;
}

// Examples
console.log(mean(42));     // ➞ 3
console.log(mean(12345));  // ➞ 3
console.log(mean(666));    // ➞ 6
