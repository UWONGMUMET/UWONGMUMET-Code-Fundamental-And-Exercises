console.log("A Normal Sequence");
function normalSequence(n) {
  const sequence = [0, 1, 1, 2, 0, 2, 2, 1];
  const index = (n - 1) % 8;
  return sequence[index];
}

console.log(normalSequence(1)); // 0
console.log(normalSequence(2)); // 1
console.log(normalSequence(3)); // 1
console.log(normalSequence(20)); // 2

console.log("camelCase ⇄ snake_case");
function toCamelCase(str) {
  return str
    .toLowerCase()
    .split("_")
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join("");
}

function toSnakeCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

console.log(toCamelCase("hello_edabit")); // "helloEdabit"
console.log(toCamelCase("is_modal_open")); // "isModalOpen"

console.log(toSnakeCase("helloEdabit")); // "hello_edabit"
console.log(toSnakeCase("getColor")); // "get_color"

console.log("Rows of ASCII");
function formatAscii(str, width) {
  let result = "";
  for (let i = 0; i < str.length; i += width) {
    result += str.substring(i, i + width) + "n";
  }
  return result.trim();
}

console.log(formatAscii("0123456789", 2)); // "01\n23\n45\n67\n89"
console.log(formatAscii("................................", 8)); // "........\n........\n........\n........"
console.log(formatAscii("^^^^^^^^", 1)); // "^\n^\n^\n^\n^\n^\n^\n^"

console.log("Sales by Match");
function sockMerchant(socks) {
  const colorCount = {};

  for (const sock of socks) {
    if (colorCount[sock]) {
      colorCount[sock]++;
    } else {
      colorCount[sock] = 1;
    }
  }

  let pairs = 0;
  for (const count of Object.values(colorCount)) {
    pairs += Math.floor(count / 2);
  }

  return pairs;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20])); // 3
console.log(sockMerchant([50, 20, 30, 90, 30, 20, 50, 20, 90])); // 4
console.log(sockMerchant([])); // 0

console.log("Choosing a Fuse");
function chooseFuse(fuses, deviceOutput) {
  const deviceVoltage = parseFloat(deviceOutput.replace("V", ""));

  let bestFuse = null;
  let closestDifference = Infinity;

  for (const fuse of fuses) {
    const fuseVoltage = parseFloat(fuse.replace("V", ""));

    if (fuseVoltage > deviceVoltage) {
      const difference = fuseVoltage - deviceVoltage;
      if (difference < closestDifference) {
        closestDifference = difference;
        bestFuse = fuse;
      }
    }
  }

  return bestFuse;
}

console.log(chooseFuse(["3V", "5V", "12V"], "4.5V")); // "5V"
console.log(chooseFuse(["5V", "14V", "2V"], "5.5V")); // "14V"
console.log(chooseFuse(["17V", "15V", "12V"], "9V")); // "12V"
