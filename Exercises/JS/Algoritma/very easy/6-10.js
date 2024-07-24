console.log("Movie Theatre Admittance");
function acceptIntoMovie(age, isSupervised) {
    return age >= 15 || isSupervised
}

console.log(acceptIntoMovie(14, true));  // ➞ true
console.log(acceptIntoMovie(14, false)); // ➞ false
console.log(acceptIntoMovie(16, false)); // ➞ true

console.log("Century Crisis");
function futurePeople(population, n) {
    const months = 30 * 12
    const newPeople = n * months
    return population + newPeople
}

console.log(futurePeople(256, 2));  // ➞ 976
console.log(futurePeople(3248, 6)); // ➞ 5408
console.log(futurePeople(5240, 3)); // ➞ 6320

console.log("Find Out the Leap Year");
function leapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(leapYear(2020)); // ➞ true
console.log(leapYear(2021)); // ➞ false
console.log(leapYear(1968)); // ➞ true

console.log("Stack the Boxes");
function stackBoxes(n) {
    return n * n;
}

console.log(stackBoxes(1)); // ➞ 1
console.log(stackBoxes(2)); // ➞ 4
console.log(stackBoxes(0)); // ➞ 0


console.log("Triangle and Parallelogram Area Finder");
function areaShape(base, height, shape) {
    if (shape === "triangle") {
        return 0.5 * base * height
    } else if (shape === "parallelogram") {
        return base * height
    } else {
        return null;
    }
}

console.log(areaShape(2, 3, "triangle"));       // ➞ 3
console.log(areaShape(8, 6, "parallelogram"));  // ➞ 48
console.log(areaShape(2.9, 1.3, "parallelogram")); // ➞ 3.77
