console.log("Find the Area of a (Regular) Hexagon");
function areaOfHexagon(x) {
    if (typeof x !== 'number' || x <= 0) {
        return null;
    }
    let area = (3 * Math.sqrt(3) / 2) * Math.pow(x, 2);
    return Math.round(area * 10) / 10;
}

console.log(areaOfHexagon(1)); // ➞ 2.6
console.log(areaOfHexagon(2)); // ➞ 10.4
console.log(areaOfHexagon(3)); // ➞ 23.4
console.log(areaOfHexagon(-1)); // ➞ null
console.log(areaOfHexagon("a")); // ➞ null

console.log("Father and Son Ages");
function ageDifference(fAge, sAge) {
    let difference = fAge - 2 * sAge;
    return Math.abs(difference);
}

console.log(ageDifference(36, 7));  // ➞ 22
console.log(ageDifference(55, 30)); // ➞ 5
console.log(ageDifference(42, 21)); // ➞ 0

console.log("N Tables + 1");
function nTablesPlusOne(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        result.push(n * i + 1);
    }
    return result.join(",")
}

console.log(nTablesPlusOne(7));  // ➞ "8,15,22,29,36,43,50,57,64,71"
console.log(nTablesPlusOne(1));  // ➞ "2,3,4,5,6,7,8,9,10,11"
console.log(nTablesPlusOne(3));  // ➞ "4,7,10,13,16,19,22,25,28,31"

console.log("Largest Numbers");
function largestNumbers(n, arr) {
    let sortedArray = arr.sort((a,b) => b - a);
    let largest = sortedArray.slice(0, n).sort((a,b) => a - b)
    return largest;
}

console.log(largestNumbers(2, [4, 3, 2, 1])); // ➞ [3, 4]
console.log(largestNumbers(1, [7, 19, 4, 2])); // ➞ [19]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])); // ➞ [16, 18, 57]
console.log(largestNumbers(0, [1, 3, 4, 2])); // ➞ []

console.log("Convert Year to Century");
function centuryFromYear(year) {
    return Math.ceil(year / 100);
}

console.log(centuryFromYear(2005)); // ➞ 21
console.log(centuryFromYear(1950)); // ➞ 20
console.log(centuryFromYear(1900)); // ➞ 19