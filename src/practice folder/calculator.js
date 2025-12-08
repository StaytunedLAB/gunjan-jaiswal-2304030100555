// Function to calculate Simple Interest
// Formula: (P × R × T) / 100
function simpleInterest(P, R, T) {
  return (P * R * T) / 100;
}

function compoundInterest(P, R, T) {
  const amount = P * Math.pow((1 + R / 100), T);
  return amount - P;
}

// Example:
let principal = 10000;
let rate = 7.5;
let time = 3;

console.log("Simple Interest =", simpleInterest(principal, rate, time));
console.log("Compound Interest =", compoundInterest(principal, rate, time));
