console.log("Add up the Numbers from a Single Number");
function addUp(num) {
    return num * (num + 1) / 2;
}

console.log(addUp(4));    // Output: 10
console.log(addUp(13));   // Output: 91
console.log(addUp(600));  // Output: 180300

console.log("Sort an Array by String Length");
function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Google", "Apple", "Microsoft"]));  // Output: ["Apple", "Google", "Microsoft"]
console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));  // Output: ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
console.log(sortByLength(["Turing", "Einstein", "Jung"]));  // Output: ["Jung", "Turing", "Einstein"]

console.log("Algorithms I: Introduction to Recursion");
function factorial(num) {
    if (num === 0){
        return 1
    } else {
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));  // Output: 120
console.log(factorial(3));  // Output: 6
console.log(factorial(2));  // Output: 2
console.log(factorial(1));  // Output: 1
console.log(factorial(0));  // Output: 1

console.log("Omnipresent Valuer");
function isOmnipresent(arr, val) {
    for (let subArray of arr) {
        if (!subArray.includes(val)) {
            return false;
        }
    }
    return true;
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));  // Output: true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));  // Output: false
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5));           // Output: true
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6));           // Output: false

console.log("Return the Highest and Lowest Numbers");
function highLow(numbers) {
    const numArray = numbers.split(' ').map(Number);
    const max = Math.max(...numArray);
    const min = Math.min(...numArray);
    return `${max} ${min}`;
}

console.log(highLow("1 2 3 4 5"));    // Output: "5 1"
console.log(highLow("1 2 -3 4 5"));   // Output: "5 -3"
console.log(highLow("1 9 3 4 -5"));   // Output: "9 -5"
console.log(highLow("13"));           // Output: "13 13"

