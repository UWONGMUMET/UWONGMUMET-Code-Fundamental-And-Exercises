console.log("Return Duplicate Numbers");
function duplicateNums(nums) {
    const duplicates = [];
    const seen = new Set();

    for (let num of nums) {
        if (seen.has(num) && !duplicates.includes(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);
        }
    }

    return duplicates.length > 0 ? duplicates.sort((a, b) => a - b) : null;
}

console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6])); // ➞ [3]
console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])); // ➞ [72, 81, 99]
console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // ➞ null

console.log("Multiplication Table");
function multiplicationTable(n) {
    const table = [];

    for (let i = 1; i <= n; i++) {
        const row = [];
        for (let j = 1; j <= n; j++) {
            row.push(i * j);
        }
        table.push(row);
    }
    return table;
}

console.log(multiplicationTable(1)); // ➞ [[1]]
console.log(multiplicationTable(3)); // ➞ [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
console.log(multiplicationTable(5)); // ➞ [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]

console.log("Return Duplicate Numbers");
function threeLetterCollection(s) {
    const result = [];

    if (s.length < 3) {
        return result;
    }

    for (let i = 0; i <= s.length - 3; i++) {
        result.push(s.slice(i, i + 3));
    }

    return result.sort();
}

console.log(threeLetterCollection("slap"));  // ➞ ["lap", "sla"]
console.log(threeLetterCollection("click")); // ➞ ["cli", "ick", "lic"]
console.log(threeLetterCollection("cat"));   // ➞ ["cat"]
console.log(threeLetterCollection("hi"));    // ➞ []

console.log("Any Prime Number in Range");
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function primeInRange(n1, n2) {
    for (let i = n1; i <= n2; i++) {
        if (isPrime(i)) {
            return true;
        }
    }
    return false;
}

console.log(primeInRange(10, 15)); // ➞ true (11, 13)
console.log(primeInRange(62, 66)); // ➞ false
console.log(primeInRange(3, 5));   // ➞ true (3, 5)

console.log("Return Duplicate Numbers");
function fibSeq(n) {
    if (n === undefined) return undefined;
    if (n === 0) return [];

    const fibArray = [0, 1];

    for (let i = 2; i < n; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);
    }

    return fibArray.slice(0, n);
}

console.log(fibSeq(4)); // ➞ [0, 1, 1, 2]
console.log(fibSeq(7)); // ➞ [0, 1, 1, 2, 3, 5, 8]
console.log(fibSeq(0)); // ➞ []
console.log(fibSeq());  // ➞ undefined