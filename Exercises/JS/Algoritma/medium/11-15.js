console.log("Find the Largest Even Number");
function largestEven(nums) {
    largest = - 1

    for (let num of nums) {
        if (num % 2 === 0) {
            if (num > largest) {
                largest = num;
            }
        }
    }
    return largest;
}

console.log(largestEven([3, 7, 2, 1, 7, 9, 10, 13])); // ➞ 10
console.log(largestEven([1, 3, 5, 7]));              // ➞ -1
console.log(largestEven([0, 19, 18973623]));         // ➞ 0

console.log("Don't Roll Doubles!");
function diceGame(rolls) {
    let score = 0;
    
    for (let roll of rolls) {
        if (roll[0] === roll[1]) {
            return 0;
        }
        score += roll[0] + roll[1]; 
    }
    return score;
}

console.log(diceGame([[1, 2], [3, 4], [5, 6]])); // ➞ 21
console.log(diceGame([[1, 1], [5, 6], [6, 4]])); // ➞ 0
console.log(diceGame([[4, 5], [4, 5], [4, 5]])); // ➞ 27

console.log("Numbered Alphabet");
function alphNum(str) {
    let result = [];

    for (let char of str) {
        let num = char.charCodeAt(0) - 'A'.charCodeAt(0);
        result.push(num);
    }

    return result.join(' ');
}

console.log(alphNum("XYZ")); // ➞ "23 24 25"
console.log(alphNum("ABCDEF")); // ➞ "0 1 2 3 4 5"
console.log(alphNum("JAVASCRIPT")); // ➞ "9 0 21 0 18 2 17 8 15 19"

console.log("Find the Largest Even Number");
function chessBoard(coordinate) {
    let file = coordinate[0];
    let rank = parseInt(coordinate[1]);

    let fileNumber = file.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    let sum = fileNumber + rank;

    return sum % 2 === 0 ? "white" : "black";
}

console.log(chessBoard("a1")); // ➞ "black"
console.log(chessBoard("e5")); // ➞ "black"
console.log(chessBoard("d1")); // ➞ "white"

console.log("Sum of Digits of a Positive Integer");
function sumDigit(n) {
    if(n === 0){
        return 0;
    }
    return (n % 10) + sumDigit(Math.floor(n / 10));
}

console.log(sumDigit(111)); // ➞ 3
console.log(sumDigit(222)); // ➞ 6
console.log(sumDigit(333)); // ➞ 9
