console.log("RNA Reverse Complement");
function reverseComplement(rna) {
  const complementMap = {
    A: "U",
    U: "A",
    G: "C",
    C: "G",
  };

  const complement = rna
    .split("")
    .map((char) => complementMap[char])
    .join("");
  const reverseComp = complement.split("").reverse().join("");
  return reverseComp;
}

console.log(reverseComplement("GUGU")); // ➞ "ACAC"
console.log(reverseComplement("UCUCG")); // ➞ "CGAGA"
console.log(reverseComplement("CAGGU")); // ➞ "ACCUG"

console.log("Unusual Subtraction");
function notGoodMath(n, k) {
  while (k > 0) {
    if (n % 10 === 0) {
      n = n / 10;
    } else {
      n = n - 1;
    }
    k--;
  }
  return n;
}

console.log(notGoodMath(540, 5)); // ➞ 50
console.log(notGoodMath(1000000000, 9)); // ➞ 1
console.log(notGoodMath(42023110, 10)); // ➞ 4201

console.log("Which Number Is Not like the Others?");
function unique(arr) {
  const countMap = {};

  arr.forEach((num) => {
    countMap[num] = (countMap[num] || 0) + 1;
  });

  for (const num in countMap) {
    if (countMap[num] === 1) {
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

  const lowerLimit = 1;
  const upperLimit = Math.abs(n);

  for (let i = lowerLimit + 1; i < upperLimit; i++) {
    if (n % i !== 0) {
      if (i % 2 === 0) {
        if ((2 * n) % i === 0) {
          antiDivs.push(i);
        }
      } else {
        if ((2 * n - 1) % i === 0 || (2 * n + 1) % i === 0) {
          // Check if i is a divisor of 2n - 1 or 2n + 1
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

console.log("Round to the Nearest");
function roundNearest(num, multiple = 1) {
  if (multiple !== 1) {
    const remainder = num % multiple;
    const halfMultiple = multiple / 2;

    if (remainder < halfMultiple) {
      return num - remainder;
    } else {
      return num + (multiple - remainder);
    }
  }

  return Math.round(num);
}

console.log(roundNearest(17, 10)); // ➞ 20
console.log(roundNearest(36.3)); // ➞ 36
console.log(roundNearest(123, 5)); // ➞ 125