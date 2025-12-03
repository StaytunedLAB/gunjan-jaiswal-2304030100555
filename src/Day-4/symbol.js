// Creating Symbols
const id = Symbol("id");
const nameSymbol = Symbol("name");

// Using Symbols as object keys
const user = {
  [id]: 101,
  [nameSymbol]: "Gunjan",
  age: 19
};

console.log(user);

// Accessing symbol properties
console.log("User ID:", user[id]);
console.log("User Name:", user[nameSymbol]);

// Symbols are unique
const sym1 = Symbol("test");
const sym2 = Symbol("test");
console.log("Are symbols equal?", sym1 === sym2); // false

// Symbol in Object.keys() does not appear
console.log("Object keys:", Object.keys(user)); // only 'age'

// But you can get symbols using:
console.log("Object symbols:", Object.getOwnPropertySymbols(user));
