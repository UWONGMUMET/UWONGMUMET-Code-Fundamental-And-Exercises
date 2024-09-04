console.log("Just Find the Vertex");
function findVertex(equation) {
  const regex = /([-+]?\d*)x(?:\s*[-+]\s*(\d*)x)?(?:\s*[-+]\s*(\d+))?/;
  const matches = equation.match(regex);

  const a = parseInt(matches[1] || 0, 10);
  const b = parseInt(matches[2] || 0, 10);
  const c = parseInt(matches[3] || 0, 10);

  const vertexX = -b / (2 * a);

  return Math.round(vertexX);
}

console.log(findVertex("-5x + 50x -120")); // ➞ 5
console.log(findVertex("-6x + 36x -72")); // ➞ 3
console.log(findVertex("7x +14x +28")); // ➞ -1

console.log("RNA Reverse Complement");
function reverseComplement(rna) {
  const complementMap = {
    A: "U",
    U: "A",
    G: "C",
    C: "G",
  };

  let complement = rna
    .split("")
    .map((nucleotide) => complementMap[nucleotide])
    .join("");
  let reversedComplement = complement.split("").reverse().join("");
  return reversedComplement;
}

console.log(reverseComplement("GUGU")); // ➞ "ACAC"
console.log(reverseComplement("UCUCG")); // ➞ "CGAGA"
console.log(reverseComplement("CAGGU")); // ➞ "ACCUG"

console.log("Unusual Subtraction");
function notGoodMath(n, k) {
  for (let i = 0; i < k; i++) {
    if (n % 10 === 0) {
      n = Math.floor(n / 10);
    } else {
      n -= 1;
    }
  }
  return n;
}

console.log(notGoodMath(540, 5)); // ➞ 50
console.log(notGoodMath(1000000000, 9)); // ➞ 1
console.log(notGoodMath(42023110, 10)); // ➞ 4201

console.log("Which Number Is Not like the Others?");
function unique(arr) {
  const frequency = {};

  arr.forEach((num) => {
    frequency[num] = (frequency[num] || 0) + 1;
  });

  for (const num in frequency) {
    if (frequency[num] === 1) {
      return Number(num);
    }
  }
}

console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0

console.log("Anti-Divisors of a Number");
function antiDivisors(n) {
  const antiDivs = [];
  const n2 = n * 2;
  const n2m1 = n2 - 1;
  const n2p1 = n2 + 1;

  for (let i = 2; i < Math.abs(n); i++) {
    if (n % i !== 0) {
      if (i % 2 === 0) {
        if (n2 % i === 0) {
          antiDivs.push(i);
        }
      } else {
        if (n2m1 % i === 0 || n2p1 % i === 0) {
          antiDivs.push(i);
        }
      }
    }
  }

  return antiDivs.sort((a, b) => a - b);
}

console.log(antiDivisors(10)); // ➞ [3, 4, 7]
console.log(antiDivisors(12)); // ➞ [5, 8]
console.log(antiDivisors(20)); // ➞ [3, 8, 13]
