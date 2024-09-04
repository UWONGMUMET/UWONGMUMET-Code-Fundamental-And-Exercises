console.log("Hall Monitor");
function possiblePath(path) {
  for (let i = 0; i < path.length - 1; i++) {
    if (typeof path[i] === "number" && typeof path[i + 1] === "number") {
      return false;
    }
  }

  return true;
}
console.log(possiblePath([1, "H", 2, "H", 3, "H", 4])); // ➞ true
console.log(possiblePath(["H", 3, "H"])); // ➞ true
console.log(possiblePath([1, 2, "H", 3])); // ➞ false

console.log("Character Code Math");
function calc(str) {
  let num1 = "";
  for (let char of str) {
    num1 += char.charCodeAt(0);
  }

  let num2 = num1.replace(/7/g, "1");

  const sumDigits = (num) =>
    num.split("").reduce((acc, digit) => acc + parseInt(digit), 0);

  let sum1 = sumDigits(num1);
  let sum2 = sumDigits(num2);

  return sum1 - sum2;
}

console.log(calc("ABCDabcd")); // ➞ 12
console.log(calc("cdefgh")); // ➞ 0
console.log(calc("ifkhchlhfde")); // ➞ 6

console.log("Sum of Negative Integers");
function negativeSum(str) {
  let numbers = str.match(/-?\d+/g);
  let negativeNum = numbers.filter((num) => parseInt(num) < 0);
  return negativeNum.reduce((acc, num) => acc + parseInt(num), 0);
}

console.log(negativeSum("-12 13%14&-11")); // ➞ -23
console.log(negativeSum("22 13%14&-11-22 13 12")); // ➞ -33

console.log("Common Divisor of Array");
function gcdTwoNumbers(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function gcd(arr) {
  return arr.reduce((acc, curr) => gcdTwoNumbers(acc, curr));
}

console.log(gcd([10, 20, 40])); // ➞ 10
console.log(gcd([1, 2, 3, 100])); // ➞ 1
console.log(gcd([1024, 192, 2048, 512])); // ➞ 64

console.log("RNA Reverse Complement");
function reverseComplement(rna) {
    const complementMap = {
        'A': 'U',
        'U': 'A',
        'G': 'C',
        'C': 'G'
    };
    
    let complement = rna.split('').map(nucleotide => complementMap[nucleotide]).join('');

    let reverseComplement = complement.split('').reverse().join('');
    
    return reverseComplement;
}

console.log(reverseComplement("GUGU"));  // ➞ "ACAC"
console.log(reverseComplement("UCUCG")); // ➞ "CGAGA"
console.log(reverseComplement("CAGGU")); // ➞ "ACCUG"

