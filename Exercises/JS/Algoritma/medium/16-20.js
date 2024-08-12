console.log("Don't Roll Doubles!");
function diceGame(matrix) {
    let score = 0;

    for (let i = 0; i < matrix.length; i++) {
        const [die1, die2] = matrix[i];

        if (die1 === die2) {
            return 0;
        } else {
            score += die1 + die2
        }
    };

    return score;
}

console.log(diceGame([[1, 2], [3, 4], [5, 6]])); // Output: 21
console.log(diceGame([[1, 1], [5, 6], [6, 4]])); // Output: 0
console.log(diceGame([[4, 5], [4, 5], [4, 5]])); // Output: 27

console.log("Numbered Alphabet");
function alphNum(str) {
    return str.split('').map(char => char.charCodeAt(0) - 'A'.charCodeAt(0)).join(' ');
}

console.log(alphNum("XYZ"));        // Output: "23 24 25"
console.log(alphNum("ABCDEF"));     // Output: "0 1 2 3 4 5"
console.log(alphNum("JAVASCRIPT")); // Output: "9 0 21 0 18 2 17 8 15 19"

console.log("Chess Board Squares");
function chessBoard(square) {
    const column = square[0]; 
    const row = parseInt(square[1]); 
    const columnNumber = column.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
    const sum = columnNumber + row;
    return sum % 2 === 0 ? "black" : "white";
}

console.log(chessBoard("a1")); // Output: "black"
console.log(chessBoard("e5")); // Output: "black"
console.log(chessBoard("d1")); // Output: "white"

console.log("How Many Solutions Does This Quadratic Have?");
function solutions(a, b, c) {
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        return 2;
    } else if (discriminant === 0) {
        return 1; 
    } else {
        return 0; 
    }
}

console.log(solutions(1, 0, -1)); // Output: 2
console.log(solutions(1, 0, 0));  // Output: 1
console.log(solutions(1, 0, 1));  // Output: 0

console.log("Make a Vessel of Height");
function heightNeeded(volumeInLiters) {
    const radius = 5;
    const pi = Math.PI;
    
    const volumeInCm3 = volumeInLiters * 1000;

    const r2 = radius * radius;
    const height = (volumeInCm3 / (pi * r2)) * (3 / 4);
    
    return parseFloat(height.toFixed(2));
}

console.log(heightNeeded(0.5)); // Output: 19.10
console.log(heightNeeded(5));   // Output: 190.99
console.log(heightNeeded(10));  // Output: 381.97
