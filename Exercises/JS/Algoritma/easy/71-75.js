console.log("Decimal to Binary Using Stack");
function toBinary(n) {
  if (n === 0) return "0";

  const stack = [];

  let number = n;
  while (number > 0) {
    stack.push(number % 2);
    number = Math.floor(number / 2);
  }

  let binary = "";
  while (stack.length > 0) {
    binary += stack.pop();
  }

  return binary;
}

console.log(toBinary(12)); // "1100"
console.log(toBinary(0)); // "0"
console.log(toBinary(101)); // "1100101"

console.log("Triple + Double = So Much Trouble");
function trouble(num1, num2) {
  const num1Str = num1.toString();
  const num2Str = num2.toString();

  function findRepeatingDigits(numStr, count) {
    const repeatingDigits = new Set();
    for (let i = 0; i <= numStr.length - count; i++) {
      if (
        numStr
          .slice(i, i + count)
          .split("")
          .every((digit) => digit === numStr[i])
      ) {
        repeatingDigits.add(numStr[i]);
      }
    }
    return repeatingDigits;
  }

  const tripleRepeats = findRepeatingDigits(num1Str, 3);

  const doubleRepeats = findRepeatingDigits(num2Str, 2);

  for (const digit of tripleRepeats) {
    if (doubleRepeats.has(digit)) {
      return true;
    }
  }

  return false;
}

console.log(trouble(451999277, 41177722899)); // true
console.log(trouble(1222345, 12345)); // false
console.log(trouble(666789, 12345667)); // true
console.log(trouble(33789, 12345337)); // false

console.log("Plant Trees 🌲");
function plantTrees(w, l, g) {
  function calculateTrees(sideLength, gap) {
    return Math.floor((sideLength + gap) / (gap + 1));
  }

  const treesOnWidth = calculateTrees(w, g);
  const treesOnLength = calculateTrees(l, g);

  if (treesOnWidth !== treesOnLength) {
    return 0;
  }

  return 2 * treesOnWidth + 2 * (treesOnLength - 2);
}

console.log(plantTrees(3, 3, 1)); // 4
console.log(plantTrees(3, 3, 3)); // 2
console.log(plantTrees(3, 3, 2)); // 0
console.log(plantTrees(3, 3, 0)); // 8

console.log("Tower of Hanoi");
function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}

// Examples
console.log(towerHanoi(3)); // 7
console.log(towerHanoi(5)); // 31
console.log(towerHanoi(0)); // 0

console.log("Combinations");
function combinations(...groups) {
  return groups.reduce((total, groupSize) => total * groupSize, 1);
}

console.log(combinations(2, 3)); // 6
console.log(combinations(3, 7, 4)); // 84
console.log(combinations(2, 3, 4, 5)); // 120
