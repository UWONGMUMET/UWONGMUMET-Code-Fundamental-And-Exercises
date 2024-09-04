console.log("The Fibonacci Number");
function fibonacci(n) {
    if (n === 1 || n === 2) return 1;
    
    let a = 1; // F(1)
    let b = 1; // F(2)
    
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

console.log(fibonacci(3));  // ➞ 3
console.log(fibonacci(7));  // ➞ 21
console.log(fibonacci(12)); // ➞ 233

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

console.log("Unusual Subtraction");
function notGoodMath(n, k) {
    for (let i = 0; i < k; i++) {
        if (n % 10 === 0) {
            n = Math.floor(n / 10);
        } else {
            n -= 1
        }
        
        return n;
    }
}

console.log(notGoodMath(540, 5)); // ➞ 50
console.log(notGoodMath(1000000000, 9)); // ➞ 1
console.log(notGoodMath(42023110, 10)); // ➞ 4201

console.log("Which Number Is Not like the Others?");
function unique(arr) {
    const frequency = arr.reduce((map, num) => {
        map[num] = (map[num] || 0) + 1;
        return map;
    }, {});

    return Object.keys(frequency).find(key => frequency[key] === 1);
}

console.log(unique([3, 3, 3, 7, 3, 3])); // ➞ 7
console.log(unique([0, 0, 0.77, 0, 0])); // ➞ 0.77
console.log(unique([0, 1, 1, 1, 1, 1, 1, 1])); // ➞ 0

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
