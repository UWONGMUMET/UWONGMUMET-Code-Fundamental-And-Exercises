console.log("Multiplication Table");
function multiplicationTable(n) {
    const table = [];
    for (let i = 0; i < n; i++) {
        const row = []
        for (let j = 0; j < n; j++) {
            row.push(i * j);
        }
        table.push(row);
    }

    return table;

}

// Examples
console.log(multiplicationTable(1)); // ➞ [[1]]
console.log(multiplicationTable(3)); // ➞ [[1, 2, 3], [2, 4, 6], [3, 6, 9]]
console.log(multiplicationTable(5)); // ➞ [[1, 2, 3, 4, 5], [2, 4, 6, 8, 10], [3, 6, 9, 12, 15], [4, 8, 12, 16, 20], [5, 10, 15, 20, 25]]

console.log("Triple Letter Groupings");
function threeLetterCollection(str) {
    const result = [];
    const length = str.length;

    if (length < 3) {
        return result;
    }

    for (let i=0; i<length -1; i++){
        result.push(str.slice(i, i + 3));
    }

    return result.sort();
}

console.log(threeLetterCollection("edabit")); // ➞ ["abi", "bit", "dab", "eda"]
console.log(threeLetterCollection("slap")); // ➞ ["lap", "sla"]
console.log(threeLetterCollection("click")); // ➞ ["cli", "ick", "lic"]
console.log(threeLetterCollection("cat")); // ➞ ["cat"]
console.log(threeLetterCollection("hi")); // ➞ []

console.log("Any Prime Number in Range");
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
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

console.log(primeInRange(10, 15)); // ➞ true
console.log(primeInRange(62, 66)); // ➞ false
console.log(primeInRange(3, 5)); // ➞ true

console.log("Instances of the Fibonacci Sequence");
function fibSeq(n) {
    if (n === undefined) return undefined; 
    if (n === 0) return [];

    const fib = [0, 1]; 

    while (fib.length < n) {
        const nextNumber = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextNumber);
    }
    
    return fib.slice(0, n);
}

console.log(fibSeq(4)); // ➞ [0, 1, 1, 2]
console.log(fibSeq(7)); // ➞ [0, 1, 1, 2, 3, 5, 8]
console.log(fibSeq(0)); // ➞ []
console.log(fibSeq());  // ➞ undefined

console.log("Sorting Time");
function sortArray(arr) {
    const n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    
    return arr;
}

console.log(sortArray([2, -5, 1, 4, 7, 8])); // ➞ [-5, 1, 2, 4, 7, 8]
console.log(sortArray([23, 15, 34, 17, -28])); // ➞ [-28, 15, 17, 23, 34]
console.log(sortArray([38, 57, 45, 18, 47, 39])); // ➞ [18, 38, 39, 45, 47, 57]

