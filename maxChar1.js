// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
const string = 'Hello There!';
const chars = {};

function maxChar(str){
	const charMap = {};
	let max = 0;
	let maxChar = '';

	for (let char of str) {
		if (charMap[char]) {
			charMap[char]++;
		} else {
			charMap[char] = 1;
		}
	}

	for (let char in charMap) {
		if (charMap[char] > max) {
			max = charMap[char];
			maxChar = char;
		}
	}

	return maxChar;
}

module.exports = maxChar;

// What is the most common character in the string?
// Does string A have the same characters as string B (is it in an anagram?)
// Does the given string have any repeated characters in it?
