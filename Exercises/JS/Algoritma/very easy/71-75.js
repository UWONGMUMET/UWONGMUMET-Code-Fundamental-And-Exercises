console.log("Musical Cadences");
function findCadence(chords) {
  const lastTwoChords = chords.slice(-2);

  const [penultimate, last] = lastTwoChords;

  if (penultimate === "V" && last === "I") {
    return "perfect";
  } else if (penultimate === "IV" && last === "I") {
    return "plagal";
  } else if (penultimate === "V" && last !== "I") {
    return "interrupted";
  } else if (last === "V") {
    return "imperfect";
  } else {
    return "no cadence";
  }
}

console.log(findCadence(["I", "IV", "V"])); // ➞ "imperfect"
console.log(findCadence(["ii", "V", "I"])); // ➞ "perfect"
console.log(findCadence(["I", "IV", "I", "V", "vi"])); // ➞ "interrupted"
console.log(findCadence(["I", "IV", "I"])); // ➞ "no cadence"

console.log("Back and Forth");
function calculateArrowhead(arrows) {
  let right = 0;
  let left = 0;

  for (let arrow of arrows) {
    for (let char of arrow) {
      if (char === ">") {
        right++;
      } else if (char === "<") {
        left++;
      }
    }
  }

  const result = right - left;

  if (result > 0) {
    return ">".repeat(result);
  } else if (result < 0) {
    return "<".repeat(Math.abs(result));
  } else {
    return "";
  }
}

console.log(calculateArrowhead([">>>>", "<", "<", "<"])); // ➞ ">"
console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"])); // ➞ "<<"
console.log(calculateArrowhead([">>>", "<<<"])); // ➞ ""
console.log(calculateArrowhead([">>", "<<", "<<<"])); // ➞ "<<<"

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
console.log(possiblePath(["H", 1, "H", 2, "H", 4])); // ➞ true
console.log(possiblePath([1, "H", 2, 3, "H", 4])); // ➞ false

console.log("Character Code Math");
function calc(str) {
    let num1 = '';
    for (let char of str) {
        num1 += char.charCodeAt(0);
    }

    let num2 = num1.replace(/7/g, '1');

    const sumDigits = (num) => num.split('').reduce((acc, digit) => acc + parseInt(digit), 0);
    
    let sum1 = sumDigits(num1);
    let sum2 = sumDigits(num2);

    return sum1 - sum2;
}

console.log(calc("ABCDabcd")); // ➞ 12
console.log(calc("cdefgh"));    // ➞ 0
console.log(calc("ifkhchlhfde")); // ➞ 6

console.log("Sum of Negative Integers");
function negativeSum(str) {
    let numbers = str.match(/-?\d+/g);
    let negativeNum = numbers.filter(num => parseInt(num) < 0);
    return negativeNum.reduce((acc, num) => acc + parseInt(num), 0);
}

console.log(negativeSum("-12 13%14&-11")); // ➞ -23
console.log(negativeSum("22 13%14&-11-22 13 12")); // ➞ -33