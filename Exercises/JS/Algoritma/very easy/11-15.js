console.log("Four Passengers and a Driver");
function carsNeeded(n) {
    const people = 5
    return Math.ceil(n / people)
}

console.log(carsNeeded(5));  // ➞ 1
console.log(carsNeeded(11)); // ➞ 3
console.log(carsNeeded(0));  // ➞ 0

console.log("Return Types");
function arrayValuesTypes(arr) {
    return arr.map(value => typeof value);
}

console.log(arrayValuesTypes([1, 2, "null", []]));
// ➞ ["number", "number", "string", "object"]
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]

console.log("Stuttering Function");
function stutter(word) {
    const letters = word.slice(0,2);
    return `${letters}... ${letters}... ${word}`;
}

console.log(stutter("incredible"));    // ➞ "in... in... incredible?"
console.log(stutter("enthusiastic"));  // ➞ "en... en... enthusiastic?"
console.log(stutter("outstanding"));   // ➞ "ou... ou... outstanding?"

console.log("Char-to-ASCII");
function ctoa(char) {
    return char.charCodeAt(0);
}

console.log(ctoa("A")); // ➞ 65
console.log(ctoa("m")); // ➞ 109
console.log(ctoa("[")); // ➞ 91
console.log(ctoa("\\")); // ➞ 92

console.log("Free Coffee Cups");
function totalCups(cupsBought) {
    const cups = Math.floor(cupsBought / 6);
    return cups + cupsBought;
}

console.log(totalCups(6));   // ➞ 7
console.log(totalCups(12));  // ➞ 14
console.log(totalCups(213)); // ➞ 248
