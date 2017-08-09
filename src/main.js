"use strict"

// Default Parameters
function greet(greeting= 'Hello World'){
  console.log(greeting)
}
greet();

// Spread operator.

let args = [1, 2, 3];

function test(){
  console.log(args);
}
test.apply(args);
test(...args);
