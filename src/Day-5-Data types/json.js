// json.js
"use strict";

let student = {
    name: "Gunjan",
    age: 19,
    course: "BCA"
};

// Convert object to JSON string
let jsonString = JSON.stringify(student);
console.log("JSON String:", jsonString);

// Convert JSON string back to object
let parsedObj = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObj);
