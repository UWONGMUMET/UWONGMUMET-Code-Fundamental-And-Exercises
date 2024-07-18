console.log("Add up the Numbers from a Single Number");
function addUp(num) {
    return (num * (num +1)) / 2
}

console.log(addUp(4));   // ➞ 10
console.log(addUp(13));  // ➞ 91
console.log(addUp(600)); // ➞ 180300

console.log("Sort an Array by String Length");
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Google", "Apple", "Microsoft"])); // ➞ ["Apple", "Google", "Microsoft"]
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])); // ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
console.log(sortByLength(["Turing", "Einstein", "Jung"])); // ➞ ["Jung", "Turing", "Einstein"]

console.log("Algorithms I: Introduction to Recursion");
function factorial(num) {
    if (num === 0) {
        return 1;
    } else {
        return num * factorial(num-1);
    }
}

console.log(factorial(5)); // ➞ 120
console.log(factorial(3)); // ➞ 6
console.log(factorial(2)); // ➞ 2

console.log("Omnipresent Value")
function isOmnipresent(arr, val) {
    for (let subarr of arr){
        if (!subarr.includes(val)) {
            return false;
        }
    };
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // ➞ true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // ➞ false
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); // ➞ true
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); // ➞ false

console.log("Return the Highest and Lowest Numbers");
function highLow(str) {
    let number = str.split(" ").map(Number);

    let highest = Math.max(...number);
    let lowest = Math.min(...number);

    return `${highest} ${lowest}`;
}

console.log(highLow("1 2 3 4 5"));    // ➞ "5 1"
console.log(highLow("1 2 -3 4 5"));   // ➞ "5 -3"
console.log(highLow("1 9 3 4 -5"));   // ➞ "9 -5"
console.log(highLow("13"));           // ➞ "13 13"
