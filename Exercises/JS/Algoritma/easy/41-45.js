console.log("Back and Forth");
function calculateArrowhead(arrows) {
    let rightArr = 0;
    let leftArr = 0;

    arrows.forEach(arrow => {
        if (arrow[0] === '>') {
            rightArr += arrow.length;
        } else if (arrow[0] === '<') {
            leftArr += arrow.length;
        }
    })

    const result = rightArr - leftArr;

    if (result > 0) {
        return '>'.repeat(result);
    } else if (result < 0) {
        return '<'.repeat(-result);
    } else {
        return '';
    }
}

console.log(calculateArrowhead([">>>>", "<", "<", "<"]));        // ➞ ">"
console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"]));    // ➞ "<<"
console.log(calculateArrowhead([">>>", "<<<"]));                  // ➞ ""

console.log("Hall Monitor");
function possiblePath(path) {
    let isValid = true;
    
    for (let i = 0; i < path.length; i++) {
        if (typeof path[i] === 'number') {
            if (i > 0 && typeof path[i - 1] === 'number') {
                isValid = false;
                break;
            }
            if (i < path.length - 1 && typeof path[i + 1] === 'number') {
                isValid = false;
                break;
            }
        }
    }

    return isValid;
}

console.log(possiblePath([1, "H", 2, "H", 3, "H", 4])); // ➞ true
console.log(possiblePath(["H", 3, "H"]));               // ➞ true
console.log(possiblePath([1, 2, "H", 3]));             // ➞ false

console.log("Character Code Math");
function calc(str) {
    const num1 = str.split('').map(char => char.charCodeAt(0)).join('');
    const num2 = num1.replace(/7/g, '1');
    const sumOfDigits = (num) => num.split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    const sum1 = sumOfDigits(num1);
    const sum2 = sumOfDigits(num2);

    return sum1 - sum2;
}

console.log(calc("ABCDabcd")); // ➞ 12
console.log(calc("cdefgh"));    // ➞ 0
console.log(calc("ifkhchlhfde")); // ➞ 6

console.log("Sum of Negative Integers");
function negativeSum(str) {
    const numbers = str.match(/-?\d+/g);
    const sum = numbers.map(Number).filter(num => num < 0).reduce((acc, num) => acc + num, 0);
    return sum
}

console.log(negativeSum("-12 13%14&-11"));       // ➞ -23
console.log(negativeSum("22 13%14&-11-22 13 12")); // ➞ -33

console.log("Common Divisor of Array");
function gcdTwo(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function gcd(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        result = gcdTwo(result, arr[i]);
        if (result === 1) return 1;
    }
    
    return result;
}

console.log(gcd([10, 20, 40]));         // ➞ 10
console.log(gcd([1, 2, 3, 100]));       // ➞ 1
console.log(gcd([1024, 192, 2048, 512])); // ➞ 64
