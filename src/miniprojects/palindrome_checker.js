// Palindrome Checker

function isPalindrome(str) {
  // Remove spaces and convert to lowercase
  str = str.toLowerCase().replace(/ /g, "");

  // Reverse the string
  let reversed = str.split("").reverse().join("");

  // Compare original and reversed
  return str === reversed;
}

// Change the string here
let text = "madam";

if (isPalindrome(text)) {
  console.log(text + " is a Palindrome");
} else {
  console.log(text + " is NOT a Palindrome");
}
