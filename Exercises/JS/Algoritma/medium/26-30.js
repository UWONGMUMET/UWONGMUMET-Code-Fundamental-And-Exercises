console.log("Max Adjacent Product");
function adjacentProduct(arr) {
  let maxProduct = arr[0] * arr[1];
  for (let i = 0; i <= arr.length; i++) {
    let product = arr[i] * arr[i + 1];
    if (product > maxProduct) {
      maxProduct = product;
    }
  }
  return maxProduct;
}

console.log(adjacentProduct([3, 6, -2, -5, 7, 3])); // Output: 21
console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23])); // Output: 30
console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10])); // Output: 80

console.log("Happy Birthday! 🍩");
function happyBirthday(age) {
  for (let base = 2; base <= age; base++) {
    const valueInBase20 = 20 * Math.pow(base, 0);
    const valueInBase21 = 21 * Math.pow(base, 0);

    if (age === valueInBase20) {
      return `Mubashir is just 20, in base ${base}!`;
    }
    if (age === valueInBase21) {
      return `Mubashir is just 21, in base ${base}!`;
    }
  }

  return "No suitable base found.";
}

console.log(happyBirthday(22)); // "Mubashir is just 20, in base 11!"
console.log(happyBirthday(65)); // "Mubashir is just 21, in base 32!"
console.log(happyBirthday(83)); // "Mubashir is just 21, in base 41!"

console.log("Balancing Scales");
function scaleTip(arr) {
  const mid = arr.indexOf("I");
  let left = 0;
  let right = 0;

  for (let i = 0; i < mid; i++) {
    left += arr[i];
  }

  for (let i = mid + 1; i < arr.length; i++) {
    right += arr[i];
  }

  if (left > right) {
    return "left";
  } else if (right > left) {
    return "right";
  } else {
    return "balanced";
  }
}

console.log(scaleTip([0, 0, "I", 1, 1])); // "right"
console.log(scaleTip([1, 2, 3, "I", 4, 0, 0])); // "left"
console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1])); // "balanced"

console.log("'EdaBit' Challenge");
function edaBit(start, end) {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("EdaBit");
    } else if (i % 3 === 0) {
      result.push("Eda");
    } else if (i % 5 === 0) {
      result.push("Bit");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(edaBit(0, 10)); // ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit"]
console.log(edaBit(14, 20)); // [14, "EdaBit", 16, 17, "Eda", 19, "Bit"]
console.log(edaBit(99, 106)); // ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106]

console.log("A Simple Equation");
function simpleEquation(a, b, c) {
  const operations = [
    `${a}+${b}=${c}`,
    `${b}+${a}=${c}`,
    `${a}-${b}=${c}`,
    `${b}-${a}=${c}`,
    `${a}*${b}=${c}`,
    `${b}*${a}=${c}`,
    `${a}/${b}=${c}`,
    `${b}/${a}=${c}`,
    `${c}+${b}=${a}`,
    `${b}+${c}=${a}`,
    `${c}-${b}=${a}`,
    `${b}-${c}=${a}`,
    `${c}*${b}=${a}`,
    `${b}*${c}=${a}`,
    `${c}/${b}=${a}`,
    `${b}/${c}=${a}`,
    `${a}+${c}=${b}`,
    `${c}+${a}=${b}`,
    `${a}-${c}=${b}`,
    `${c}-${a}=${b}`,
    `${a}*${c}=${b}`,
    `${c}*${a}=${b}`,
    `${a}/${c}=${b}`,
    `${c}/${a}=${b}`,
  ];

  for (let operation of operations) {
    if (
      eval(operation.split("=")[0]) === c ||
      eval(operation.split("=")[0]) === a ||
      eval(operation.split("=")[0]) === b
    ) {
      return operation;
    }
  }

  return "";
}

console.log(simpleEquation(1, 2, 3)); // "1+2=3" or other valid equation
console.log(simpleEquation(2, 2, 4)); // "2+2=4" or other valid equation
console.log(simpleEquation(6, 2, 3)); // "2*3=6" or other valid equation