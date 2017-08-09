"use strict";

var theString = 'Hello ,this is testing sentence.';

console.log(theString.startsWith('Hello')); // true
console.log(theString.endsWith('sentence.')); // true
console.log(theString.includes(' is')); // true

//Hex
console.log(0xFF); // 255
// Binary
console.log(20); // 20
// Octal
console.log(355); // 355
console.log(Number.isFinite(12)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isNaN(NaN)); // true
console.log(Number.isInteger(2)); // true
console.log(Number.isInteger(Infinity)); // false