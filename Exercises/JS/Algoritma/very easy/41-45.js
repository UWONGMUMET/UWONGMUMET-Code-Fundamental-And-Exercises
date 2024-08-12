console.log("Finding Adjacent Nodes");
function isAdjacent(matrix, node1, node2) {
    return matrix[node1][node2] === 1;
}

const matrix1 = [
  [ 0, 1, 0, 0 ],
  [ 1, 0, 1, 1 ],
  [ 0, 1, 0, 1 ],
  [ 0, 1, 1, 0 ]
];

console.log(isAdjacent(matrix1, 0, 1)); // ➞ true
console.log(isAdjacent(matrix1, 0, 2)); // ➞ false

const matrix2 = [
  [ 0, 1, 0, 1, 1 ],
  [ 1, 0, 1, 0, 0 ],
  [ 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1 ],
  [ 1, 0, 0, 1, 0 ]
];

console.log(isAdjacent(matrix2, 0, 3)); // ➞ true
console.log(isAdjacent(matrix2, 1, 4)); // ➞ false

console.log("Finding Adjacent Nodes");
function mean(num) {
    const digits = num.toString().split('')
    const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);
    return sum / digits.length;
}

console.log(mean(42));    // ➞ 3
console.log(mean(12345)); // ➞ 3
console.log(mean(666));   // ➞ 6

console.log("Find the Missing Number");
function missingNum(arr) {
    const sumAll = 55;
    const sumArr = arr.reduce((sum, num) => sum + num, 0);
    return sumAll - sumArr;
}

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); // ➞ 5
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]));  // ➞ 10
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); // ➞ 7

console.log("Equality of 3 Values");
function equal(a, b, c) {
    if (a === b && b === c) return 3;
    if (a === b || b === c || a === c) return 2;
    return 0;
}

console.log(equal(3, 4, 3)); // ➞ 2
console.log(equal(1, 1, 1)); // ➞ 3
console.log(equal(3, 4, 1)); // ➞ 0

console.log("Solving Exponential Equations With Logarithms");
function solveForExp(a, b) {
    return Math.log(b) / Math.log(a);
}

console.log(solveForExp(4, 1024));       // ➞ 5
console.log(solveForExp(2, 1024));       // ➞ 10
console.log(solveForExp(9, 3486784401)); // ➞ 10

