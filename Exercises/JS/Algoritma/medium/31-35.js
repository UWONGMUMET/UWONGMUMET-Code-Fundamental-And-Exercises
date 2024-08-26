console.log("Sum Fractions");
function sumFractions(fractions) {
  let total = 0;
  for (let [numerator, denominator] of fractions) {
    total += numerator / denominator;
  }

  return Math.round(total);
}

console.log(
  sumFractions([
    [18, 13],
    [4, 5],
  ])
); // ➞ 2
console.log(
  sumFractions([
    [36, 4],
    [22, 60],
  ])
); // ➞ 9
console.log(
  sumFractions([
    [11, 2],
    [3, 4],
    [5, 4],
    [21, 11],
    [12, 6],
  ])
); // ➞ 11

console.log("Guess the Sequence");
function guessSequence(n) {
  return 30 * n * n + 60 * n;
}

console.log(guessSequence(1)); // ➞ 90
console.log(guessSequence(2)); // ➞ 240
console.log(guessSequence(3)); // ➞ 450

console.log("Intersecting Intervals");
function countOverlapping(intervals, point) {
  let count = 0;
  for (let [start, end] of intervals) {
    if (start <= point && point <= end) {
      count++;
    }
  }
  return count;
}

console.log(
  countOverlapping(
    [
      [1, 2],
      [2, 3],
      [1, 3],
      [4, 5],
      [0, 1],
    ],
    2
  )
); // ➞ 3
console.log(
  countOverlapping(
    [
      [1, 2],
      [2, 3],
      [3, 4],
    ],
    5
  )
); // ➞ 0
console.log(
  countOverlapping(
    [
      [1, 2],
      [5, 6],
      [5, 7],
    ],
    5
  )
); // ➞ 2
console.log(
  countOverlapping(
    [
      [1, 2],
      [5, 8],
      [6, 9],
    ],
    7
  )
); // ➞ 2

console.log("Musical Cadences");
function findCadence(progression) {
  const lastTwoChords = progression.slice(-2);
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
console.log(findCadence(["I", "IV", "vi"])); // ➞ "no cadence"

console.log("Back and Forth");
function calculateArrowhead(arrows) {
  let result = 0;

  for (let arrow of arrows) {
    if (arrow[0] === ">") {
      result += arrow.length;
    } else if (arrow[0] === "<") {
      result -= arrow.length;
    }
  }

  if (result > 0) {
    return ">".repeat(result);
  } else if (result < 0) {
    return "<".repeat(-result);
  } else {
    return "";
  }
}

console.log(calculateArrowhead([">>", "<<", "<<<"])); // ➞ "<<<"
console.log(calculateArrowhead([">>>>", "<", "<", "<"])); // ➞ ">"
console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"])); // ➞ "<<"
console.log(calculateArrowhead([">>>", "<<<"])); // ➞ ""
