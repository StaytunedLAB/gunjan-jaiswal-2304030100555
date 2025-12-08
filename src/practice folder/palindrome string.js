function isPalindrome(str) {
  // Convert string to lowercase & remove spaces
  let cleanStr = str.toLowerCase().replace(/ /g, "");

  // Reverse the string
  let reversed = cleanStr.split("").reverse().join("");

  // Compare
  if (cleanStr === reversed) {
    return `"${str}" is a Palindrome`;
  } else {
    return `"${str}" is NOT a Palindrome`;
  }
}

// Example:
console.log(isPalindrome("madam"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("nurses run"));
