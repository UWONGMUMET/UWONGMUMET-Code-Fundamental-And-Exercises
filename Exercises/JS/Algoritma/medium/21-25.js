console.log("The Collatz Conjecture");
function collatz(n) {
    let steps = 0;

    while (n !== 1){
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = n * 3 + 1;
        }
        steps++;
    }
    return steps;
}

console.log(collatz(2));  // ➞ 1
console.log(collatz(3));  // ➞ 7
console.log(collatz(10)); // ➞ 6

console.log("Face Interval");
function faceInterval(arr) {
    if (!Array.isArray(arr)) {
        return ":/";
    }

    if (arr.length === 0) {
        return ":(";
    }

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const interval = max - min;

    if (arr.includes(interval)) {
        return ":)"
    };

    return ":(";
}

console.log(faceInterval([1, 2, 5, 8, 3, 9])); // ➞ ":)"
console.log(faceInterval([5, 2, 8, 3, 11]));   // ➞ ":("
console.log(faceInterval("bruh"));              // ➞ ":/"

console.log("Ping Pong!");
function pingPong(pings, win) {
    let result = [];

    for (let i = 0; i < pings.length; i++) {
        result.push(pings[i]);
        if (i < pings.length - 1) {
            result.push("Pong!");
        }
    }

    if (win) {
        result.push("Pong!"); 
    } else {
        result.push("Ping!"); 
    }

    return result;
}

console.log(pingPong(["Ping!"], true));  // ➞ ["Ping!", "Pong!"]
console.log(pingPong(["Ping!", "Ping!"], false));  // ➞ ["Ping!", "Pong!", "Ping!"]
console.log(pingPong(["Ping!", "Ping!", "Ping!"], true));  // ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]

console.log("Max Adjacent Product");
function adjacentProduct(arr) {
    let maxProduct = arr[0] * arr[1];

    for (let i = 0; i < arr.length; i++) {
        let product = arr[i] * arr[i+1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}

console.log(adjacentProduct([3, 6, -2, -5, 7, 3])); // ➞ 21
console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23])); // ➞ 30
console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10])); // ➞ 80

console.log("Simple Circle Collision Detection");
function isCircleCollision(circle1, circle2) {
    const [radius1, x1, y1] = circle1;
    const [radius2, x2, y2] = circle2;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const distanceSquared = dx * dx + dy * dy;

    const radiusSum = radius1 + radius2;
    const radiusSumSquared = radiusSum * radiusSum;

    return distanceSquared <= radiusSumSquared;
}

console.log(isCircleCollision([10, 0, 0], [10, 10, 10])); // ➞ true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10])); // ➞ false
