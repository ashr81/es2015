"use strict"

let theString = 'Hello ,this is testing sentence.'

console.log(theString.startsWith('Hello')) // true
console.log(theString.endsWith('sentence.')) // true
console.log(theString.includes(' is')) // true

//Hex
console.log(0xFF); // 255
// Binary
console.log(0b10100); // 20
// Octal
console.log(0o543); // 355
console.log(Number.isFinite(12)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isInteger(2)) // true
console.log(Number.isInteger(Infinity)) // false
