console.log("Common Divisor of Array");
function gcd(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function gcdArray(arr) {
    return arr.reduce((acc, num) => gcd(acc, num), arr[0]);
}

console.log(gcdArray([10, 20, 40]));      // ➞ 10
console.log(gcdArray([1, 2, 3, 100]));   // ➞ 1
console.log(gcdArray([1024, 192, 2048, 512])); // ➞ 64

console.log("The Fibonacci Number");
function fibonacci(n) {
    if (n <= 0) return 0; 
    if (n === 1) return 1; 
    
    let a = 1; 
    let b = 1; 
    
    for (let i = 2; i < n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

console.log(fibonacci(3));  // ➞ 3
console.log(fibonacci(7));  // ➞ 21
console.log(fibonacci(12)); // ➞ 233

console.log("RNA Reverse Complement");
function reverseComplement(rna) {
    const complementMap = {
        'A': 'U',
        'U': 'A',
        'G': 'C',
        'C': 'G'
    };

    let complementSequence = rna.split('').map(char => complementMap[char]).join('');
    let reverseComplementSequence = complementSequence.split('').reverse().join('');
    return reverseComplementSequence;
}

console.log(reverseComplement("GUGU"));  // ➞ "ACAC"
console.log(reverseComplement("UCUCG")); // ➞ "CGAGA"
console.log(reverseComplement("CAGGU")); // ➞ "ACCUG"

console.log("Digital Decipher");
function digitalDecipher(eMessage, key) {
    const keyDigits = key.toString().split('').map(Number);

    const decodedNumbers = eMessage.map((num, index) => {
        const keyDigit = keyDigits[index % keyDigits.length];
        return num - keyDigit;
    });
    const numberToLetter = num => String.fromCharCode(num + 96); 
    const decodedMessage = decodedNumbers.map(numberToLetter).join('');

    return decodedMessage;
}

console.log(digitalDecipher([20, 12, 18, 30, 21], 1939)); // ➞ "scout"
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)); // ➞ "mubashir"
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100)); // ➞ "edabit"

console.log("Car Timer 🏎️");
function carTimer(n) {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;

    const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;

    const digitSum = timeStr.split('').reduce((sum, char) => {
        if (char >= '0' && char <= '9') { 
            return sum + parseInt(char, 10);
        }
        return sum;
    }, 0);

    return digitSum;
}

console.log(carTimer(240));  // ➞ 4
console.log(carTimer(14));   // ➞ 5
console.log(carTimer(808));  // ➞ 14