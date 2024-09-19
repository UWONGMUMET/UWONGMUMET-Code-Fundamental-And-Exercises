console.log("Combinations");
function combinations(...groups) {
  return groups.reduce((total, count) => total * count, 1);
}

console.log(combinations(2, 3)); // Output: 6
console.log(combinations(3, 7, 4)); // Output: 84
console.log(combinations(2, 3, 4, 5)); // Output: 120
console.log(combinations(2, 0, 4)); // Output: 0

console.log("Switching Between Pencils");
function colorPatternTimes(cols) {
  if (cols.length === 0) {
    return 0;
  }

  let colorTime = 2 * cols.length;
  let switchTime = 0;

  for (let i = 1; i < cols.length; i++) {
    if (cols[i] !== cols[i - 1]) {
      switchTime += 1;
    }
  }

  return colorTime + switchTime;
}

console.log(colorPatternTimes(["Blue"])); // Output: 2
console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])); // Output: 11
console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])); // Output: 13
console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"])); // Output: 14

console.log("C*ns*r*d Str*ngs");
function uncensor(censored, vowels) {
  let index = 0;
  let result = "";

  for (const char of censored) {
    if (char === "*") {
      result += vowels[index];
      index++;
    } else {
      result += char;
    }
  }

  return result;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo")); // Output: "Where did my vowels go?"
console.log(uncensor("abcd", "")); // Output: "abcd"
console.log(uncensor("*PP*RC*S*", "UEAE")); // Output: "UPPERCASE"

console.log("Pile of Cubes");
function pileCubes(m) {
  let n = 1;
  let sum = 0;

  while (true) {
    sum += n ** 3;
    if (sum === m) {
      return n;
    }
    if (sum > m) {
      return null;
    }
    n++;
  }
}

console.log(pileCubes(1071225)); // Output: 45
console.log(pileCubes(4183059834009)); // Output: 2022
console.log(pileCubes(16)); // Output: null

console.log("Temperature Converter");
function convert(temp) {
  const celsiusRegex = /^-?\d+°C$/; 
  const fahrenheitRegex = /^-?\d+°F$/; 

  if (celsiusRegex.test(temp)) {
    const celsius = parseInt(temp);
    const fahrenheit = Math.round((celsius * 9) / 5 + 32);
    return `${fahrenheit}°F`;
  } else if (fahrenheitRegex.test(temp)) {
    const fahrenheit = parseInt(temp);
    const celsius = Math.round(((fahrenheit - 32) * 5) / 9);
    return `${celsius}°C`;
  } else {
    return "Error"; 
  }
}

console.log(convert("35°C")); // Output: "95°F"
console.log(convert("19°F")); // Output: "-7°C"
console.log(convert("33")); // Output: "Error"
