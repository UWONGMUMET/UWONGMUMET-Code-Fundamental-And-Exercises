console.log("Ping Pong!");
function pingPong(pings, win) {
    let result = [];
    for (let i = 0; i < pings.length; i++) {
        result.push(pings[i]);
        result.push("Pong!")
    }

    if(!win) {
        result.pop();
    }
    return result;
}

console.log(pingPong(["Ping!"], true)); // ➞ ["Ping!", "Pong!"]
console.log(pingPong(["Ping!", "Ping!"], false)); // ➞ ["Ping!", "Pong!", "Ping!"]
console.log(pingPong(["Ping!", "Ping!", "Ping!"], true)); // ➞ ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]

console.log("Simple Circle Collision Detection");
function isCircleCollision(circle1, circle2) {
    let [r1, x1, y1] = circle1;
    let [r2, x2, y2] = circle2;

    let distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
    let radiusSum = r1 + r2;

    return distance <= radiusSum;
}

console.log(isCircleCollision([10, 0, 0], [10, 10, 10])); // ➞ true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10]));   // ➞ false

console.log("Max Adjacent Product");
function adjacentProduct(arr) {
    let maxProduct = arr[0] * arr[1];
    for (let i = 0; i < arr.length; i++){
        let product = arr[i] * arr[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }
    return maxProduct;
}

console.log(adjacentProduct([3, 6, -2, -5, 7, 3])); // ➞ 21
console.log(adjacentProduct([5, 6, -4, 2, 3, 2, -23])); // ➞ 30
console.log(adjacentProduct([0, -1, 1, 24, 1, -4, 8, 10])); // ➞ 80

console.log("Balancing Scales");
function scaleTip(arr) {
    const mid = Math.floor(arr.length / 2);

    const left = arr.slice(0, mid).reduce((sum, num) => sum + num, 0);
    const right = arr.slice(mid+1).reduce((sum, num) => sum + num, 0);

    if (left > right) {
        return "left";
    } else if (left < right) {
        return "right";
    } else {
        return "balanced";
    }
}

console.log(scaleTip([0, 0, "I", 1, 1])); // ➞ "right"
console.log(scaleTip([1, 2, 3, "I", 4, 0, 0])); // ➞ "left"
console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1])); // ➞ "balanced"

console.log("Happy Birthday! 🍩");
function happyBirthday(age) {
    for (let base = 2; base < age; base++) {
        if (parseInt(20, base) === age) {
            return `Mubashir is just 20, in base ${base}!`;
        }
        if (parseInt(21, base) === age) {
            return `Mubashir is just 21, in base ${base}!`;
        }
    }
}

console.log(happyBirthday(22)); // ➞ "Mubashir is just 20, in base 11!"
console.log(happyBirthday(65)); // ➞ "Mubashir is just 21, in base 32!"
console.log(happyBirthday(83)); // ➞ "Mubashir is just 21, in base 41!"
