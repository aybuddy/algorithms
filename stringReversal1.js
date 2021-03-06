// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverse(str) {
  // turn string into an array
  const arr = str.split("");
  // call reverse method on the array
  arr.reverse();
  // join the array back into a string
  arr.join("");
  // return the result
  return arr;
}

function reverse1(str) {
  return str
    .split("")
    .reverse()
    .join("");
}
