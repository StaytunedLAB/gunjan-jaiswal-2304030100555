// Leap Year Checker

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;  // Leap year
  } else {
    return false; // Not a leap year
  }
}

// Change the year here
let year = 2024;

if (isLeapYear(year)) {
  console.log(year + " is a Leap Year");
} else {
  console.log(year + " is NOT a Leap Year");
}