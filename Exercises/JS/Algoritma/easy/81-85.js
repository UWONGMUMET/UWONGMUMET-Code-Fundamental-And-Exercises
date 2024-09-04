console.log("Swapping Cards");
function swapCards(n1, n2) {
    let paulTens = Math.floor(n1 / 10);
    let paulOnes = n1 % 10;

    let oppTens = Math.floor(n2 / 10);
    let oppOnes = n2 % 10;

    let paulLowest = paulTens === paulOnes ? paulTens : Math.min(paulTens, paulOnes);

    if (paulLowest === paulTens) {
        n1 = oppTens * 10 + paulOnes;
        n2 = paulTens * 10 + oppOnes;
    } else {
        n1 = paulTens * 10 + oppTens;
        n2 = paulLowest * 10 + oppOnes;
    }
    return n1 > n2;
}

console.log(swapCards(41, 98)); // ➞ true
console.log(swapCards(12, 28)); // ➞ true
console.log(swapCards(67, 53)); // ➞ false
console.log(swapCards(77, 54)); // ➞ false

console.log("Count the Lone Ones");
function countLoneOnes(num) {
    const strNum = num.toString();
    let count = 0;

    for (let i = 0; i < strNum.length; i++) {
        if (strNum[i] === '1' && 
            (i === 0 || strNum[i - 1] !== '1') && 
            (i === strNum.length - 1 || strNum[i + 1] !== '1')) {
            count++;
        }
    }

    return count;
}

console.log(countLoneOnes(101)); // ➞ 2
console.log(countLoneOnes(1191)); // ➞ 1
console.log(countLoneOnes(1111)); // ➞ 0
console.log(countLoneOnes(462)); // ➞ 0

console.log("A Simple Check");
function simpleCheck(a, b) {
    let count = 0;

    while (a > 0 && b > 0) {
        if (a > b) {
            if (a % b === 0) {
                count++;
            }
        } else {
            if (b % a === 0) {
                count++;
            }
        }

        a--;
        b--;
    }

    return count;
}

console.log(simpleCheck(3, 5)); // ➞ 2
console.log(simpleCheck(8, 4)); // ➞ 3
console.log(simpleCheck(54, 17)); // ➞ 1

console.log("Mubashir Cipher");
function mubashirCipher(message) {
    const key = [
        ['m', 'c'], ['u', 'e'], ['b', 'g'], ['a', 'k'],
        ['s', 'v'], ['h', 'x'], ['i', 'z'], ['r', 'y'],
        ['p', 'w'], ['l', 'n'], ['o', 'j'], ['t', 'f'], ['q', 'd']
    ];

    const cipherMap = {};

    key.forEach(pair => {
        cipherMap[pair[0]] = pair[1];
        cipherMap[pair[1]] = pair[0];
    });

    let encodedMessage = message.split('').map(char => {
        const lowerChar = char.toLowerCase();
        return cipherMap[lowerChar] ? (char === lowerChar ? cipherMap[lowerChar] : cipherMap[lowerChar].toUpperCase()) : char;
    }).join('');

    return encodedMessage;
}

console.log(mubashirCipher("mubashir is not amazing")); // ➞ "cegkvxzy zv ljf kckizlb"
console.log(mubashirCipher("%$ &%")); // ➞ "%$ &%"
console.log(mubashirCipher("evgeny sh is amazing")); // ➞ "usbulr vx zv kckizlb"

console.log("The Antipodes Average");
function antipodesAverage(arr) {
    const len = arr.length;

    if (len % 2 !== 0) {
        arr.splice(Math.floor(len / 2), 1);
    }

    const halfLen = arr.length / 2;
    const leftPart = arr.slice(0, halfLen);
    const rightPart = arr.slice(halfLen).reverse();

    const result = leftPart.map((num, index) => (num + rightPart[index]) / 2);

    return result;
}

console.log(antipodesAverage([1, 2, 3, 4]));       // ➞ [2.5, 2.5]
console.log(antipodesAverage([1, 2, 3, 4, 5]));    // ➞ [3, 3]
console.log(antipodesAverage([-1, -2]));           // ➞ [-1.5]