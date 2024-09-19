console.log("Trace of a Square Matrix");
function getTrace(matrix) {
  if (matrix.length === 0 || matrix.length !== matrix[0].length) return 0;
  return matrix.reduce((sum, row, i) => sum + row[i], 0);
}

console.log(
  getTrace([
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 5],
  ])
); // Output: 6

console.log(
  getTrace([
    [0, 1, 0, 0],
    [1, -1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 5],
  ])
); // Output: 4

console.log("camelCase ⇄ snake_case");
function toCamelCase(str) {
  return str
    .split("_")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
}

function toSnakeCase(str) {
  return str.replace(/[A-Z]/g, (letter) => "_" + letter.toLowerCase());
}

console.log(toCamelCase("hello_edabit")); // Output: "helloEdabit"
console.log(toSnakeCase("helloEdabit")); // Output: "hello_edabit"
console.log(toCamelCase("is_modal_open")); // Output: "isModalOpen"
console.log(toSnakeCase("getColor")); // Output: "get_color"

console.log("Rows of ASCII");
function formatAscii(str, width) {
  let result = [];
  for (let i = 0; i < str.lengt; i++) {
    result.push(str.slice(i, i + width));
  }
  return result.join("\n");
}

console.log(formatAscii("0123456789", 2)); // Output: "01\n23\n45\n67\n89"
console.log(formatAscii("................................", 8)); // Output: "........\n........\n........\n........"
console.log(formatAscii("^^^^^^^^", 1)); // Output: "^\n^\n^\n^\n^\n^\n^\n^"

console.log("Sales by Match");
function sockMerchant(socks) {
  const colorCount = {};
  let pairs = 0;

  for (const sock of socks) {
    colorCount[sock] = (colorCount[sock] || 0) + 1;
  }

  for (const count of Object.values(colorCount)) {
    pairs += Math.floor(count / 2);
  }

  return pairs;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // Output: 3
console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90])); // Output: 4
console.log(sockMerchant([])); // Output: 0

console.log("Choosing a Fuse");
function chooseFuse(fuses, output) {
  const outputValue = parseFloat(output); 
  let bestFuse = null;

  for (const fuse of fuses) {
    const fuseValue = parseFloat(fuse);
    if (fuseValue > outputValue) {
      if (bestFuse === null || fuseValue < parseFloat(bestFuse)) {
        bestFuse = fuse; 
      }
    }
  }

  return bestFuse;
}

console.log(chooseFuse(["3V", "5V", "12V"], "4.5V")); // Output: "5V"
console.log(chooseFuse(["5V", "14V", "2V"], "5.5V")); // Output: "14V"
console.log(chooseFuse(["17V", "15V", "12V"], "9V")); // Output: "12V"
