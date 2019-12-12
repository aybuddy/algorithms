// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
const string = 'Hello There!';
const chars = {};

function maxChar(str){
	for (let char of string) {
		chars[char] = chars[char] + 1 || 1;
	}
}

module.exports = maxChar;

// What is the most common character in the string?
// Does string A have the same characters as string B (is it in an anagram?)
// Does the given string have any repeated characters in it?
