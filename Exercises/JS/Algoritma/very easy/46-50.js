console.log("Sastry Numbers");
function isSastry(n) {
  const concatenated = parseInt(`${n}${n + 1}`);
  return Number.isInteger(Math.sqrt(concatenated));
}

console.log(isSastry(183)); // ➞ true
console.log(isSastry(184)); // ➞ false
console.log(isSastry(106755)); // ➞ true

console.log("Explosion Intensity");
function boomIntensity(n) {
  if (n < 2) {
    return "boom";
  }

  boom = "B" + "o".repeat(n) + "m";

  const divby2 = n % 2 === 0;
  const divby5 = n % 5 === 0;

  if (divby2) boom += "!";
  if (divby5) boom = boom.toUpperCase();

  return boom;
}

console.log(boomIntensity(4)); // ➞ "Boooom!"
console.log(boomIntensity(1)); // ➞ "boom"
console.log(boomIntensity(5)); // ➞ "BOOOOOM"
console.log(boomIntensity(10)); // ➞ "BOOOOOOOOOOM!"

console.log("The Fizz Buzz Test");
function fizzBuzz(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
}

console.log(fizzBuzz(10)); // ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]
console.log(fizzBuzz(15)); // ➞ [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

console.log("Transcribe to mRNA");
function dnaToRna(dna) {
  const transcription = {
    A: "U",
    T: "A",
    G: "C",
    C: "G",
  };

  let rna = "";
  for (let i = 0; i < dna.length; i++) {
    rna += transcription[dna[i]];
  }
  return rna;
}

console.log(dnaToRna("ATTAGCGCGATATACGCGTAC")); // ➞ "UAAUCGCGCUAUAUGCGCAUG"
console.log(dnaToRna("CGATATA")); // ➞ "GCUAUAU"
console.log(dnaToRna("GTCATACGACGTA")); // ➞ "CAGUAUGCUGCAU"

console.log("Even or Odd: Which is Greater?");
function evenOrOdd(str) {
  let even = 0;
  let odd = 0;

  for (let char of str) {
    let digit = parseInt(char);
    if (digit % 2 == 0) {
      even += digit;
    } else {
      odd += digit;
    }
  }

  if (even > odd) {
    return "Even is greater than Odd";
  } else if (odd > even) {
    return "Odd is greater than Even";
  } else {
    return "Even and Odd are the same";
  }
}

console.log(evenOrOdd("22471")); // ➞ "Even and Odd are the same"
console.log(evenOrOdd("213613")); // ➞ "Even and Odd are the same"
console.log(evenOrOdd("23456")); // ➞ "Even is greater than Odd"