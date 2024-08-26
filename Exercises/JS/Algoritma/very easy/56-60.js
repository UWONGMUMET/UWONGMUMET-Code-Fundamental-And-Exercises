console.log("Sum of Digits of a Positive Integer");
function sumDigit(n) {
    if (n < 10) {
        return n;
    }
    return (n % 10) + sumDigit(Math.floor(n / 10));
}

console.log(sumDigit(111)); // ➞ 3
console.log(sumDigit(222)); // ➞ 6
console.log(sumDigit(333)); // ➞ 9

console.log("How Many Solutions Does This Quadratic Have?");
function solutions(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        return 2;
    } else if (discriminant === 0) {
        return 1;
    } else {
        return 0;
    }
}

console.log(solutions(1, 0, -1)); // ➞ 2
console.log(solutions(1, 0, 0));  // ➞ 1
console.log(solutions(1, 0, 1));  // ➞ 0

console.log("Make a Vessel of Height");
function heightNeeded(volumeLiters) {
    const radius = 5; 
    const volumeCm3 = volumeLiters * 1000; 
    const h_cone = (3 * volumeCm3) / (4 * Math.PI * radius * radius);
    const total_height = 11 * h_cone;
    return total_height.toFixed(2);
}

console.log(heightNeeded(0.5));  // ➞ 19.1
console.log(heightNeeded(5));    // ➞ 190.99
console.log(heightNeeded(10));   // ➞ 381.97

console.log("Face Interval");
function faceInterval(arr) {
    if (!Array.isArray(arr)) {
        return ":/";
    }
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    const interval = max - min;
    return arr.includes(interval) ? ":)" : ":(";
}

console.log(faceInterval([1, 2, 5, 8, 3, 9])); // ➞ ":)"
console.log(faceInterval([5, 2, 8, 3, 11]));  // ➞ ":("
console.log(faceInterval("bruh"));           // ➞ ":/"

console.log("The Collatz Conjecture");
function collatz(n) {
    let steps = 0;
    
    while (n !== 1) {
        if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        steps++;
    }
    
    return steps;
}

console.log(collatz(2));   // ➞ 1
console.log(collatz(3));   // ➞ 7
console.log(collatz(10));  // ➞ 6
