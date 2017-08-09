"use strict"

// Set
let myArray = [54, 43, 54, 54, 32, 54];
let mySet = new Set(myArray);
console.log(mySet) // print {54, 43, 32}
mySet.add('100')
mySet.add({a: 100, b: 2})
console.log(mySet) // print {54, 43, 32, '100', {a: 100, b: 2}}

mySet.forEach(function(val){
  console.log(val);
})


// Map
let myMap = new Map([['a1', 'g1'], ['b1', 'h1']]);
console.log(myMap); // {"a1" => "g1", "b1" => "h1"}
myMap.set("c1", "i1");
myMap.delete("a1");
console.log(myMap); // {"b1" => "h1", "c1" => "i1"}


// WeakSet
let carWeakSet = new WeakSet();
let car1 = {
  make: 'Honda',
  model: 'Civic'
}
carWeakSet.add(car1);
let car2 = {
  make: 'Toyota',
  model: 'Camry'
}
carWeakSet.add(car2);
carWeakSet.delete(car1);
console.log(carWeakSet) // {{make: 'Toyota', model: 'Camry'}}
