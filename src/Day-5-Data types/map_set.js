// map-set.js
"use strict";

// Map Example
let userMap = new Map();
userMap.set("name", "Gunjan");
userMap.set("age", 19);
console.log("Map:", userMap);
console.log("Map keys:", [...userMap.keys()]);
console.log("Map values:", [...userMap.values()]);

// Set Example
let numbersSet = new Set([1, 2, 2, 3, 4]);
console.log("Set:", numbersSet);
numbersSet.add(5);
console.log("After add:", numbersSet);
numbersSet.delete(3);
console.log("After delete:", numbersSet);
