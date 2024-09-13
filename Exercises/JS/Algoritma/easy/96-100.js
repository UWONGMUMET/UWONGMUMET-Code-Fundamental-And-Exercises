console.log("Next Happy Year");
function hasDistinctDigits(year) {
    const yearStr = year.toString();
    const digits = new Set(yearStr);
    return digits.size === yearStr.length;
}

function happyYear(year) {
    let nextYear = year + 1;
    while (!hasDistinctDigits(nextYear)) {
        nextYear++;
    }
    return nextYear;
}

console.log(happyYear(2017)); // ➞ 2018
console.log(happyYear(1990)); // ➞ 2013
console.log(happyYear(2021)); // ➞ 2031

console.log("Algorithms: Binary Search");
function isPrime(primes, target) {
    let left = 0;
    let right = primes.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (primes[mid] === target) {
            return "yes";
        } else if (primes[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return "no";
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

console.log(isPrime(primes, 3));  // ➞ "yes"
console.log(isPrime(primes, 4));  // ➞ "no"
console.log(isPrime(primes, 67)); // ➞ "yes"
console.log(isPrime(primes, 36)); // ➞ "no"

console.log("Digital Cipher");
function digitalCipher(message, key) {
    const keyDigits = key.toString().split('').map(Number);
    const keyLength = keyDigits.length;

    const letterToNumber = {};
    for (let i = 0; i < 26; i++) {
        letterToNumber[String.fromCharCode(97 + i)] = i + 1; // a = 1, b = 2, ..., z = 26
    }
    
    const encodedMessage = [];
    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const letterValue = letterToNumber[char];
        const keyDigit = keyDigits[i % keyLength]; 
        encodedMessage.push(letterValue + keyDigit);
    }
    
    return encodedMessage;
}

console.log(digitalCipher("scout", 1939));  // ➞ [20, 12, 18, 30, 21]
console.log(digitalCipher("mubashir", 1990)); // ➞ [14, 30, 11, 1, 20, 17, 18, 18]
console.log(digitalCipher("edabit", 100));  // ➞ [6, 4, 1, 3, 9, 20]

console.log("Fret Frequencies on the Guitar");
function fretFreq(stringNumber, fretNumber) {
    const stringFrequencies = {
        1: 329.63, // high E
        2: 246.94, // B
        3: 196.00, // G
        4: 146.83, // D
        5: 110.00, // A
        6: 82.41   // low E
    };

    const baseFrequency = stringFrequencies[stringNumber];

    const frequency = baseFrequency * Math.pow(2, fretNumber / 12);
    
    return Math.round(frequency * 100) / 100;
}

console.log(fretFreq(5, 12));  // ➞ 220.00
console.log(fretFreq(4, 6));   // ➞ 207.65
console.log(fretFreq(2, 23));  // ➞ 932.32

console.log("Matrix Transpose");
function makeTranspose(matrix) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    const transposed = [];
    for (let i = 0; i < numCols; i++) {
        transposed[i] = [];
    }
    
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            transposed[col][row] = matrix[row][col];
        }
    }
    
    return transposed;
}

console.log(makeTranspose([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])); // ➞ [ [1, 4, 7], [2, 5, 8], [3, 6, 9] ]

console.log(makeTranspose([
  [1, 2],
  [3, 4],
  [5, 6]
])); // ➞ [ [1, 3, 5], [2, 4, 6] ]

console.log(makeTranspose([
  ["a", "b"]
])); // ➞ [ ["a"], ["b"] ]
