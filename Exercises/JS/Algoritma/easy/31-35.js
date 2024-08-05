console.log('Max Adjacent Product');
function adjacentProduct(arr) {
    let maxProduct = arr[0] * arr[1];

    for (let i = 1; i < arr.length - 1; i++) {
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

console.log('Simple Circle Collision Detection');
function isCircleCollision(circle1, circle2) {
    const [radius1, x1, y1] = circle1;
    const [radius2, x2, y2] = circle2;
    
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    const radiusSum = radius1 + radius2;
    
    return distance <= radiusSum;
}

console.log(isCircleCollision([10, 0, 0], [10, 10, 10])); // Output: true
console.log(isCircleCollision([1, 0, 0], [1, 10, 10])); // Output: false

console.log('Happy Birthday! 🍩');
function happyBirthday(age) {
    for (let base = 2; base <= 36; base++) {
        let ageInBase20 = parseInt(age.toString(base), base);
        let ageInBase21 = parseInt((age - 1).toString(base), base) + 1;
        
        if (ageInBase20 === 20) {
            return `Mubashir is just 20, in base ${base}!`;
        } else if (ageInBase21 === 21) {
            return `Mubashir is just 21, in base ${base}!`;
        }
    }
    return "";
}

console.log(happyBirthday(22)); // Output: "Mubashir is just 20, in base 11!"
console.log(happyBirthday(65)); // Output: "Mubashir is just 21, in base 32!"
console.log(happyBirthday(83)); // Output: "Mubashir is just 21, in base 41!"

console.log('Balancing Scales');
function scaleTip(arr) {
    const midIndex = Math.floor(arr.length / 2); 
    
    const leftSide = arr.slice(0, midIndex);
    const rightSide = arr.slice(midIndex + 1);
    
    const sumLeft = leftSide.reduce((sum, num) => sum + num, 0);
    const sumRight = rightSide.reduce((sum, num) => sum + num, 0);
    
    if (sumLeft > sumRight) {
        return "left";
    } else if (sumRight > sumLeft) {
        return "right";
    } else {
        return "balanced";
    }
}

console.log(scaleTip([0, 0, "I", 1, 1])); // Output: "right"
console.log(scaleTip([1, 2, 3, "I", 4, 0, 0])); // Output: "left"
console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1])); // Output: "balanced"

console.log('EdaBit Challenge');
function edaBit(start, end) {
    let result = [];

    for (let i = start; i <= end; i++) {
        if (i % 15 === 0) {
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

console.log(edaBit(0, 10));   // ["EdaBit", 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit"]
console.log(edaBit(14, 20));  // [14, "EdaBit", 16, 17, "Eda", 19, "Bit"]
console.log(edaBit(99, 106)); // ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106]