// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function reverse(str) {
  // create an empty string called 'reversed'
  let reversed = "";
  // for each character in the provided string
  for (let character of str) {
    // take the character and add it to the start of 'reversed'
    reversed = character + reversed;
    debugger;
  }
  // return the variable 'reversed'
  return reversed;
}

reverse("asdfghjkl");

// TO run debugger:
// Add a debugger statement in your function, i.e. inside for loop
// Call the function manually, i.e. reverse('asdf')
// In terminal, run 'node inspect <filename>'
// It will show debug> which means youre in debug mode
// To continue execution, press 'c' then 'enter'
// to launch a 'repl' session, type 'repl' then 'enter'
// to exit 'repl' press CTRL + C
// to exit 'debug' mode press CTRL+C or type .exit
