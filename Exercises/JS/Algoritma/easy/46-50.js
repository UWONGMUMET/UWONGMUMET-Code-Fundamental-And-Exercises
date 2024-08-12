console.log("RNA Reverse Complement");
function reverseComplement(rna) {
    const complement = {
        'A': 'U',
        'U': 'A',
        'G': 'C',
        'C': 'G'
    };

    let complemented = rna.split('').map(nucleotide => complement[nucleotide]).join('');
    let reversedComplement = complemented.split('').reverse().join('');
    return reversedComplement;
}

console.log(reverseComplement("GUGU")); // ➞ "ACAC"
console.log(reverseComplement("UCUCG")); // ➞ "CGAGA"
console.log(reverseComplement("CAGGU")); // ➞ "ACCUG"

console.log("The Fibonacci Number");
function fibonacci(n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 1, b = 1
    for (let i = 2; i < n; i++) {
        let temp = a
        a = b
        b = b + temp
    }
    return b;
}

console.log(fibonacci(3));   // ➞ 3
console.log(fibonacci(7));   // ➞ 21
console.log(fibonacci(12));  // ➞ 233

console.log("Digital Decipher");
function digitalDecipher(eMessage, key) {
    const keyDigits = key.toString().split('').map(Number);
    let decodedMessage = '';

    for (let i = 0; i < eMessage.length; i++) {
        const keyDigit = keyDigits[i % keyDigits.length];
        const originalNumber = eMessage[i] - keyDigit;
        const letter = String.fromCharCode(originalNumber + 96);
        decodedMessage += letter;
    }

    return decodedMessage;
}

console.log(digitalDecipher([20, 12, 18, 30, 21], 1939)); // ➞ "scout"
console.log(digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990)); // ➞ "mubashir"
console.log(digitalDecipher([6, 4, 1, 3, 9, 20], 100)); // ➞ "edabit"

console.log("Car Timer 🏎️");
function carTimer(n) {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    const formattedTime = `${String(hours).padStart(2, '0')}${String(minutes).padStart(2, '0')}`;
    const sumOfDigits = formattedTime.split('').reduce((sum, char) => {
        return sum + (char >= '0' && char <= '9' ? Number(char) : 0);
    }, 0);

    return sumOfDigits;
}

console.log(carTimer(240));  // ➞ 4
console.log(carTimer(14));   // ➞ 5
console.log(carTimer(808));  // ➞ 14

console.log("Just Find the Vertex");
function findVertex(equation) {
    const regex = /(-?\d*)x\s*([+-]\s*\d*)x\s*([+-]\s*\d+)/;
    const [, aStr, bStr, cStr] = equation.match(regex);
    const a = parseFloat(aStr.replace(/\s/g, '')) || 0;
    const b = parseFloat(bStr.replace(/\s/g, '')) || 0;
    const c = parseFloat(cStr.replace(/\s/g, '')) || 0;
    const vertexX = -b / (2 * a);
    return Math.round(vertexX);
}

console.log(findVertex("-5x + 50x -120")); // ➞ 5
console.log(findVertex("-6x +36x -72"));   // ➞ 3
console.log(findVertex("7x + 14x +28"));   // ➞ -1

