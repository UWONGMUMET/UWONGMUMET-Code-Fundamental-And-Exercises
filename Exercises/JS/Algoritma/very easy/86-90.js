console.log("Round to the Nearest");
function roundNearest(num, nearest = 1) {
  return Math.round(num / nearest) * nearest;
}

console.log(roundNearest(17, 10)); // ➞ 20
console.log(roundNearest(36.3)); // ➞ 36
console.log(roundNearest(123, 5)); // ➞ 125

console.log("Robot Path 🤖");
function robotPath(commands) {
  const destination1 = ["e", "n", "e", "e", "n"];
  const destination2 = ["w", "n", "w", "n", "w", "w", "n"];

  const matchesDestination = (path, destination) => {
    let index = 0;
    for (let i = 0; i < path.length; i++) {
      if (path[i] === destination[index]) {
        index++;
        if (index === destination.length) {
          return true;
        }
      }
    }
    return false;
  };

  return (
    matchesDestination(commands, destination1) ||
    matchesDestination(commands, destination2)
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
  if (a < b) [a, b] = [b, a];

  if (b === 0) {
    return a;
  }

  return euclidean(b, a % b);
}

console.log(euclidean(8, 6)); // ➞ 2
console.log(euclidean(25, 5)); // ➞ 5
console.log(euclidean(49, 14)); // ➞ 7

console.log("The Perrin Sequence");
function perrin(n) {
  if (n === 0) return 3;
  if (n === 1) return 0;
  if (n === 2) return 2;

  let perrinSeq = [3, 0, 2];

  for (let i = 3; i <= n; i++) {
    perrinSeq[i] = perrinSeq[i - 2] + perrinSeq[i - 3];
  }

  return perrinSeq[n];
}

console.log(perrin(1)); // ➞ 0
console.log(perrin(8)); // ➞ 10
console.log(perrin(26)); // ➞ 1497

console.log("Be Your Own Minifier");
const isPrime = n => n > 1 && ![...Array(Math.sqrt(n)).keys()].map(i => i + 2).some(i => n % i === 0);

console.log(isPrime(2));   // true (2 is prime)
console.log(isPrime(3));   // true (3 is prime)
console.log(isPrime(4));   // false (4 is not prime)
console.log(isPrime(17));  // true (17 is prime)
console.log(isPrime(18));  // false (18 is not prime)
console.log(isPrime(19));  // true (19 is prime)
