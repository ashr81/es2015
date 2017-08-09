"use strict";

// Default Parameters

function greet() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello World';

  console.log(greeting);
}
greet();

// Spread operator.

var args = [1, 2, 3];

function test() {
  console.log(args);
}
test.apply(args);
test.apply(undefined, args);