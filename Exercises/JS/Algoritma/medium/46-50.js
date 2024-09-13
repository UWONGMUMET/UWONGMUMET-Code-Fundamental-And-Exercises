console.log("Anti-Divisors of a Number");
function antiDivisors(n) {
  let antiDivisorsList = [];

  for (let x = 2; x < n; x++) {
    if (n % x !== 0) {
      if (x % 2 !== 0) {
        if ((n * 2 - 1) % x === 0 || (n * 2 + 1) % x === 0) {
          antiDivisorsList.push(x);
        }
      } else {
        if ((n * 2) % x === 0) {
          antiDivisorsList.push(x);
        }
      }
    }
  }

  return antiDivisorsList;
}

console.log(antiDivisors(10)); // ➞ [3, 4, 7]
console.log(antiDivisors(12)); // ➞ [5, 8]
console.log(antiDivisors(20)); // ➞ [3, 8, 13]

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
