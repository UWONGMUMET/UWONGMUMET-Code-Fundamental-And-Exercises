console.log("Convert Age to Days");

function calcAge(age) {
    return age * 365;
}

console.log(calcAge(65)); // ➞ 23725
console.log(calcAge(0));  // ➞ 0
console.log(calcAge(20)); // ➞ 7300

console.log("Maximum Edge of a Triangle");

function nextEdge(side1, side2) {
    return side1 + side2 - 1;
}

console.log(nextEdge(8, 10)); // ➞ 17
console.log(nextEdge(5, 7));  // ➞ 11
console.log(nextEdge(9, 2));  // ➞ 10

console.log("The Farm Problem");
function animals(chickens, cows, pigs) {
    return chickens * 2 + cows * 4 + pigs * 4
}
  
console.log(animals(2, 3, 5)); // ➞ 36
console.log(animals(1, 2, 3)); // ➞ 22
console.log(animals(5, 2, 8)); // ➞ 50
  
console.log("Frames Per Second");
function frames(minutes, fps) {
    return minutes * fps * 60;
}

console.log(frames(1, 1)); // ➞ 60
console.log(frames(10, 1)); // ➞ 600
console.log(frames(10, 25)); // ➞ 15000

console.log("Two Makes Ten");
function makesTen(a, b) {
    return a === 10 || b === 10 || a + b === 10
}

console.log(makesTen(9, 10)); // ➞ true
console.log(makesTen(9, 9));  // ➞ false
console.log(makesTen(1, 9));  // ➞ true