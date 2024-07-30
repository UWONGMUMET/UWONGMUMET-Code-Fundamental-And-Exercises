console.log("Binary Addition + 0 1 0 1");
function addBinary(a, b) {
    let sum = a + b;
    // toString(2) => biner
    return sum.toString(2);
}

console.log(addBinary(1, 1)); // ➞ "10"
console.log(addBinary(1, 2)); // ➞ "11"
console.log(addBinary(4, 5)); // ➞ "1001"

console.log("The 3 Programmers Problem");
function programmers(wage1, wage2, wage3) {
    let maxWage = Math.max(wage1,wage2,wage3);
    let minWage = Math.min(wage1,wage2,wage3);

    return maxWage - minWage;
}

console.log(programmers(147, 33, 526)); // ➞ 493
console.log(programmers(33, 72, 74));   // ➞ 41
console.log(programmers(1, 5, 9));      // ➞ 8

console.log("Even or Odd?");
function evenOrOdd(arr) {
    // reduce => operation method
    let sum = arr.reduce((arr, curr) => arr + curr, 0);
    return sum % 2 === 0 ? "even" : "odd";
}

console.log(evenOrOdd([0]));      // ➞ "even"
console.log(evenOrOdd([1]));      // ➞ "odd"
console.log(evenOrOdd([]));       // ➞ "even"
console.log(evenOrOdd([0, 1, 5])); // ➞ "even"

console.log("How Many D's Are There?");
function countDs(sentence) {
    let count = 0;
    for (let char of sentence.toLowerCase()) {
        if(char === 'd'){
            count++;
        }
    }
    return count;
}

console.log(countDs("My friend Dylan got distracted in school.")); // ➞ 4
console.log(countDs("Debris was scattered all over the yard."));   // ➞ 3
console.log(countDs("The rodents hibernated in their den."));      // ➞ 3

console.log("Sum of Cubes");
function sumCubes(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i ** 3;
    }
    return sum;
}

console.log(sumCubes(3)); // ➞ 36
console.log(sumCubes(7)); // ➞ 784
console.log(sumCubes(8)); // ➞ 1296
console.log(sumCubes(9)); // ➞ 2025
