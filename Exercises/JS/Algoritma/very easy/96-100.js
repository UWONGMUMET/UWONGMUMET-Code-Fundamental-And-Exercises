console.log("Decimal to Binary Using Stack");
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

function toBinary(n) {
  if (n === 0) return "0";

  let stack = new Stack();
  let binaryString = "";

  while (n > 0) {
    stack.push(n % 2);
    n = Math.floor(n / 2);
  }

  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString;
}

console.log(toBinary(12)); // Output: 1100
console.log(toBinary(0)); // Output: 0
console.log(toBinary(101)); // Output: 1100101

console.log("Triple + Double = So Much Trouble");
function trouble(num1, num2) {
  const str1 = num1.toString();
  const str2 = num1.toString();

  for (let digit = 0; digit < 9; digit++) {
    const triple = digit.toString().repeat(3);
    const double = digit.toString().repeat(2);

    if (str1.includes(triple) && str2.includes(double)) {
      return true;
    }
  }
  return false;
}

console.log(trouble(451999277, 41177722899)); // Output: true
console.log(trouble(1222345, 12345)); // Output: false
console.log(trouble(666789, 12345667)); // Output: true
console.log(trouble(33789, 12345337)); // Output: false

console.log("Plant Trees 🌲");
function plantTrees(w, l, g) {
  if (g >= w || g >= l) return 0;
  let widthSideTrees = Math.floor((w - 1) / (g + 1)) + 1;
  let lengthSideTrees = Math.floor((l - 1) / (g + 1)) + 1;
  let totalTrees = 2 * widthSideTrees + 2 * lengthSideTrees - 4;

  return totalTrees;
}

console.log(plantTrees(3, 3, 1)); // Output: 4
console.log(plantTrees(3, 3, 3)); // Output: 2
console.log(plantTrees(3, 3, 2)); // Output: 0
console.log(plantTrees(3, 3, 0)); // Output: 8

console.log("Tower of Hanoi");
function towerHanoi(discs) {
  return Math.pow(2, discs) - 1;
}

console.log(towerHanoi(3)); // Output: 7
console.log(towerHanoi(5)); // Output: 31
console.log(towerHanoi(0)); // Output: 0

console.log("A Normal Sequence");
function normalSequence(n) {
  const cycle = [0, 1, 1, 2, 0, 2, 2, 1];

  return cycle[(n - 1) % 8];
}

console.log(normalSequence(1)); // Output: 0
console.log(normalSequence(2)); // Output: 1
console.log(normalSequence(3)); // Output: 1
console.log(normalSequence(20)); // Output: 2
