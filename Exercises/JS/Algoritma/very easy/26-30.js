console.log("Just Another Sum Problem But... 😰😱");
function justAnotherSumProblem(X, Y) {
    let start = Math.min(X,Y);
    let end = Math.max(X,Y);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i
    }
    return sum;
}

console.log(justAnotherSumProblem(-10, 1));  // Output: -54
console.log(justAnotherSumProblem(-20, 5));  // Output: -195
console.log(justAnotherSumProblem(90, 45));  // Output: 3105

console.log("Multiply by Length");
function multiplyByLength(arr) {
    const length = arr.length;
    return arr.map(num => num * length);
}

console.log(multiplyByLength([2, 3, 1, 0]));  // Output: [8, 12, 4, 0]
console.log(multiplyByLength([4, 1, 1]));    // Output: [12, 3, 3]
console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]));  // Output: [7, 0, 21, 21, 49, 14, 7]
console.log(multiplyByLength([0]));          // Output: [0]

console.log("Applying Discounts");
function getDiscounts(arr, discount) {
    const discountPercentage = parseFloat(discount) / 100;
    return arr.map(num => num * discountPercentage);
}

console.log(getDiscounts([2, 4, 6, 11], "50%"));  // Output: [1, 2, 3, 5.5]
console.log(getDiscounts([10, 20, 40, 80], "75%"));  // Output: [7.5, 15, 30, 60]
console.log(getDiscounts([100], "45%"));  // Output: [45]

console.log("Is Sam with Frodo?");
function middleEarth(arr) {
    const indexSam = arr.indexOf("Sam");
    const indexFrodo = arr.indexOf("Frodo");

    return Math.abs(indexSam - indexFrodo) === 1;
}

console.log(middleEarth(["Frodo", "Sam", "Gandalf"]));  // Output: true
console.log(middleEarth(["Frodo", "Saruman", "Sam"]));  // Output: false
console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"]));  // Output: true

console.log("How Many Digits?");
function sumDigits(n) {
    n = Math.abs(n);
    if (n === 0) return 1;

    let count = 0;
    while (n > 1){
        n = Math.floor(n / 10);
        count++;
    }

    return count;
}

console.log(sumDigits(100));  // Output: 3
console.log(sumDigits(1000)); // Output: 4
console.log(sumDigits(1));    // Output: 1
console.log(sumDigits(0));    // Output: 1
console.log(sumDigits(-12345)); // Output: 5

