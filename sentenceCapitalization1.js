// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  // Make an empty array 'words'
  const words = [];
  // Split the input string by spaces to get an array
  // For each word in the array
  for (let word of str.split(' ')) {
    // uppercase the first letter of the word
    // join first letter with the rest of the string using slice
    // push result into 'words' array
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  // join 'words' into a string and return it
  return words.join(' ')
}

module.exports = capitalize;
