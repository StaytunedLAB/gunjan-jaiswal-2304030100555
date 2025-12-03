// array.js
"use strict";

let fruits = ["Apple", "Banana", "Mango"];
console.log("Fruits:", fruits);

// Add element
fruits.push("Orange");
console.log("After push:", fruits);

// Remove element
fruits.pop();
console.log("After pop:", fruits);

// Loop through array
fruits.forEach((item, index) => {
    console.log(`${index}: ${item}`);
});     