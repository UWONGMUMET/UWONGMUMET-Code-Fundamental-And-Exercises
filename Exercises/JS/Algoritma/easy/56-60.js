console.log("Robot Path 🤖");
function robotPath(commands) {
  const destination1 = ["e", "n", "e", "e", "n"];
  const destination2 = ["w", "n", "w", "n", "w", "w", "n"];
  const path = commands.join(",");
  return (
    path.includes(destination1.join(",")) ||
    path.includes(destination2.join(","))
  );
}

console.log(robotPath(["s", "e", "e", "n", "n", "e", "n"])); // ➞ true
console.log(
  robotPath(["n", "e", "s", "w", "n", "e", "s", "w", "w", "s", "n", "e"])
); // ➞ false
console.log(
  robotPath(["n", "s", "n", "n", "e", "n", "w", "w", "s", "w", "w", "w", "n"])
); // ➞ true

console.log("Algorithms II: The Euclidean Algorithm");
function euclidean(a, b) {
  if (a < b) {
    [a, b] = [b, a];
  }

  const remainder = a % b;

  if (remainder === 0) {
    return b;
  }

  return euclidean(b, remainder);
}

console.log(euclidean(8, 6)); // ➞ 2
console.log(euclidean(25, 5)); // ➞ 5
console.log(euclidean(49, 14)); // ➞ 7

console.log("The Perrin Sequence");
function perrin(n) {
  if (n === 0) return 3;
  if (n === 1) return 0;
  if (n === 2) return 2;

  let p0 = 3,
    p1 = 0,
    p2 = 2;

  for (let i = 3; i <= n; i++) {
    let pNext = p0 + p1;
    p0 = p1;
    p1 = p2;
    p2 = pNext;
  }

  return p2;
}

console.log(perrin(1)); // ➞ 0
console.log(perrin(8)); // ➞ 10
console.log(perrin(26)); // ➞ 1497

console.log("Be Your Own Minifier");
const isPrime = (n) =>
  n > 1 &&
  Array.from({ length: Math.sqrt(n) - 1 }, (_, i) => i + 2).every(
    (i) => n % i !== 0
  );
console.log(isPrime(11)); // ➞ true
console.log(isPrime(4)); // ➞ false
console.log(isPrime(29)); // ➞ true
console.log(isPrime(25)); // ➞ false

console.log("Trace of a Square Matrix");
function getTrace(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;

  if (numRows !== numCols) {
    return 0;
  }

  let trace = 0;
  for (let i = 0; i < numRows; i++) {
    trace += matrix[i][i];
  }

  return trace;
}

console.log(
  getTrace([
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 5],
  ])
); // Output: 6

console.log(
  getTrace([
    [0, 1, 0, 0],
    [1, -1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 5],
  ])
); // Output: 4

console.log(
  getTrace([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // Output: 0 