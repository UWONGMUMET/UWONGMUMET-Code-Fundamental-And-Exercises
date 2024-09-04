console.log("Switching Between Pencils");
function colorPatternTimes(cols) {
  let time = 0;

  time += cols.length * 2;

  for (let i = 0; i < cols.length; i++) {
    if (cols[i + 1] !== cols[i]) {
      time += 1;
    }
  }
  return time;
}

console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"])); // ➞ 14
console.log(colorPatternTimes(["Blue"])); // ➞ 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])); // ➞ 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])); // ➞ 13

console.log("C*ns*r*d Str*ngs");
function uncensor(censoredString, vowels) {
  let vowel = 0;
  let result = "";

  for (let char of censoredString) {
    if (char === "*") {
      result += vowels[vowel];
      vowel++;
    } else {
      result += char;
    }
  }
  return result;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")); // ➞ "Where did my vowels go?"
console.log(uncensor("abcd", "")); // ➞ "abcd"
console.log(uncensor("*PP*RC*S*", "UEAE")); // ➞ "UPPERCASE"

console.log("Pile of Cubes");
function pileCubes(m) {
  let sum = 0;
  let n = 0;

  while (sum < m) {
    n++;
    sum += Math.pow(n, 3);
  }

  return sum === m ? n : null;
}

console.log(pileCubes(1071225)); // ➞ 45
console.log(pileCubes(4183059834009)); // ➞ 2022
console.log(pileCubes(16)); // ➞ null

console.log("Temperature Converter");
function convert(temp) {
  if (temp.endsWith("°C")) {
    let celsius = parseFloat(temp);
    let fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return fahrenheit + "°F";
  } else if (temp.endsWith("°F")) {
    let fahrenheit = parseFloat(temp);
    let celsius = Math.round(((fahrenheit - 32) * 5) / 9);
    return celsius + "°C";
  } else {
    return "Error";
  }
}

console.log(convert("35°C")); // ➞ "95°F"
console.log(convert("19°F")); // ➞ "-7°C"
console.log(convert("33")); // ➞ "Error"

console.log("The Karaca's Encryption Algorithm");
function encrypt(word) {
  let reversedWord = word.split("").reverse().join("");

  let encryptedWord = reversedWord.replace(/[aeiou]/g, function (vowel) {
    switch (vowel) {
      case "a":
        return "0";
      case "e":
        return "1";
      case "i":
        return "2";
      case "o":
        return "2";
      case "u":
        return "3";
    }
  });

  return encryptedWord + "aca";
}

console.log(encrypt("banana")); // ➞ "0n0n0baca"
console.log(encrypt("karaca")); // ➞ "0c0r0kaca"
console.log(encrypt("burak")); // ➞ "k0r3baca"
console.log(encrypt("alpaca")); // ➞ "0c0pl0aca"
