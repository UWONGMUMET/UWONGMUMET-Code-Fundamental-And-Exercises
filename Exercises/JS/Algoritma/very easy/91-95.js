console.log("Trace of a Square Matrix");
function getTrace(matrix) {
  const numRows = matrix.length;
  for (const row of matrix) {
    if (row.length !== numRows) {
      return 0;
    }
  }

  let trace = 0;
  for (let i = 0; i < numRows; i++) {
    trace += matrix[i][i];
  }

  return trace;
}

console.log(
  getTrace([
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 5],
  ])
); // ➞ 6

console.log(
  getTrace([
    [0, 1, 0, 0],
    [1, -1, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 5],
  ])
); // ➞ 4

console.log("Trace of a Square Matrix");
function toCamelCase(snakeStr) {
  return snakeStr
    .toLowerCase()
    .split("_")
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
}

console.log(toCamelCase("hello_edabit")); // ➞ "helloEdabit"
console.log(toCamelCase("is_modal_open")); // ➞ "isModalOpen"

function toSnakeCase(camelStr) {
  return camelStr
    .replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)
    .replace(/^_/, "");
}

console.log(toSnakeCase("helloEdabit")); // ➞ "hello_edabit"
console.log(toSnakeCase("getColor")); // ➞ "get_color"

console.log("Rows of ASCII");
function formatAscii(asciiString, width) {
    const rows = [];
    for (let i = 0; i < asciiString.length; i+= width) {
        rows.push(asciiString.slice(i, i+width));
    }

    return rows.join("\n")
}

console.log(formatAscii("0123456789", 2)); // ➞ "01\n23\n45\n67\n89"
console.log(formatAscii("................................", 8)); // ➞ "........\n........\n........\n........"
console.log(formatAscii("^^^^^^^^", 1)); // ➞ "^\n^\n^\n^\n^\n^\n^\n^"

console.log("Sales by Match");
function sockMerchant(socks) {
    const colorCounts = {};
    socks.forEach(sock => {
        colorCounts[sock] = (colorCounts[sock] || 0) + 1;
    });
    
    let pairs = 0;
    
    for (const count of Object.values(colorCounts)) {
        pairs += Math.floor(count / 2);
    }
    
    return pairs;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // ➞ 3
console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90])); // ➞ 4
console.log(sockMerchant([])); // ➞ 0

console.log("Choosing a Fuse");
function chooseFuse(fuses, deviceOutput) {
    const deviceCurrent = parseFloat(deviceOutput);

    const fuseRatings = fuses.map(fuse => parseFloat(fuse));

    let bestFuse = null;
    let smallestDifference = Infinity;

    fuseRatings.forEach(fuse => {
        if (fuse > deviceCurrent) {
            const difference = fuse - deviceCurrent;
            if (difference < smallestDifference) {
                smallestDifference = difference;
                bestFuse = fuse;
            }
        }
    });

    return bestFuse + 'V';
}

console.log(chooseFuse(["3V", "5V", "12V"], "4.5V")); // ➞ "5V"
console.log(chooseFuse(["5V", "14V", "2V"], "5.5V")); // ➞ "14V"
console.log(chooseFuse(["17V", "15V", "12V"], "9V")); // ➞ "12V"