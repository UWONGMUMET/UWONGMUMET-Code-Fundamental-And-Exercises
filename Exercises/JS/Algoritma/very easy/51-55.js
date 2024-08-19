console.log("Reverse Coding Challenge #6");
function mysteryFunc(n) {
  let digits = String(n).split("");
  let products = 1;

  for (let digit of digits) {
    products *= parseInt(digit);
  }

  return products;
}

console.log(mysteryFunc(152)); // ➞ 10
console.log(mysteryFunc(832)); // ➞ 48
console.log(mysteryFunc(19)); // ➞ 9
console.log(mysteryFunc(133)); // ➞ 9

console.log("Find the Largest Even Number");
function largestEven(nums) {
  const even = nums.filter((num) => num % 2 === 0);

  if (even.length === 0) {
    return -1;
  }

  return Math.max(...even);
}

console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])); // ➞ 10
console.log(largestEven([1, 3, 5, 7])); // ➞ -1
console.log(largestEven([0, 19, 18973623])); // ➞ 0

console.log("Don't Roll Doubles!");
function diceGame(rolls) {
  let score = 0;

  for (let i = 0; i < rolls.length; i++) {
    let [die1, die2] = rolls[i];

    if (die1 === die2) {
      return 0;
    } else {
      score += die1 + die2;
    }
  }
  return score;
}

console.log(
  diceGame([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // ➞ 21
console.log(
  diceGame([
    [1, 1],
    [5, 6],
    [6, 4],
  ])
); // ➞ 0
console.log(
  diceGame([
    [4, 5],
    [4, 5],
    [4, 5],
  ])
); // ➞ 27

console.log("Numbered Alphabet");
function alphNum(s) {
  return s
    .split("")
    .map((char) => char.charCodeAt(0) - 65)
    .join(" ");
}

console.log(alphNum("XYZ")); // ➞ "23 24 25"
console.log(alphNum("ABCDEF")); // ➞ "0 1 2 3 4 5"
console.log(alphNum("JAVASCRIPT")); // ➞ "9 0 21 0 18 2 17 8 15 19"

console.log("Chess Board Squares");
function chessBoard(square) {
  const column = square[0];
  const row = square[1];

  const columnIndex = column.charCodeAt(0) - "a".charCodeAt(0) + 1;
  const rowIndex = parseInt(row, 10);
  return (columnIndex + rowIndex) % 2 === 0 ? "black" : "white";
}

console.log(chessBoard("a1")); // ➞ "black"
console.log(chessBoard("e5")); // ➞ "black"
console.log(chessBoard("d1")); // ➞ "white"
