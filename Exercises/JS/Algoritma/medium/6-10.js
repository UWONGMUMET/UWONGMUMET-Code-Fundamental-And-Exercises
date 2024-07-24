console.log("The Fizz Buzz Test");
function fizzBuzz(n) {
    let result = [];
    for (let i = 0; i <= n; i++) {
        if (i % 15 === 0){
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        }
    }
    return result;
}

console.log(fizzBuzz(10)); // ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
console.log(fizzBuzz(15)); // ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

console.log("Explosion Intensity");
function boomIntensity(n) {
    if (n < 2){
        return "boom"
    }

    let boomString = "B" + "o".repeat(n) + "m";

    if (n % 2 === 0) {
        boomString += "!";
    }

    if (n % 5 === 0) {
        boomString = boomString.toUpperCase();
    }
    
    return boomString;
}

console.log(boomIntensity(4));  // ➞ "Boooom!"
console.log(boomIntensity(1));  // ➞ "boom"
console.log(boomIntensity(5));  // ➞ "BOOOOOM"
console.log(boomIntensity(10)); // ➞ "BOOOOOOOOOOM!"

console.log("Even or Odd: Which is Greater?");
function evenOrOdd(str) {
    let evenSum = 0;
    let oddSum = 0;

    for (let char of str) {
        let num = parseInt(char);
        if (num % 2 === 0) {
            evenSum += num
        } else {
            oddSum += num
        }
    }

    if (evenSum > oddSum) {
        return "Even is greater than Odd";
    } else if (oddSum > evenSum) {
        return "Odd is greater than Even";
    } else {
        return "Even and Odd are the same";
    }
}

console.log(evenOrOdd("22471"));  // ➞ "Even and Odd are the same"
console.log(evenOrOdd("213613")); // ➞ "Even and Odd are the same"
console.log(evenOrOdd("23456"));  // ➞ "Even is greater than Odd"

console.log("Transcribe to mRNA");
function dnaToRna(dna) {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
        switch(dna[i]) {
            case 'A':
                rna += 'U';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
        }
    }
    return rna;
}

console.log(dnaToRna("ATTAGCGCGATATACGCGTAC")); // ➞ "UAAUCGCGCUAUAUGCGCAUG"
console.log(dnaToRna("CGATATA")); // ➞ "GCUAUAU"
console.log(dnaToRna("GTCATACGACGTA")); // ➞ "CAGUAUGCUGCAU"

console.log("Reverse Coding Challenge #6");
function mysteryFunc(num) {
    let result = 1;
    digits = num.toString().split("");
    for (let digit of digits) {
        result *= digit
    }
    return result;
}

console.log(mysteryFunc(152)); // ➞ 10
console.log(mysteryFunc(832)); // ➞ 48
console.log(mysteryFunc(19)); // ➞ 9
console.log(mysteryFunc(133)); // ➞ 9