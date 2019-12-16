// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = ''){
	if (n === row) {
		return;
	}
	if (n === stair.length) {
		console.log(stair);
		return steps(n, row + 1);
	}

	if (stair.length <= row) {
		stair += '#';
	} else {
		stair += ' ';
	}
	steps(n, row, stair);

	// consolidated version using ternary operator
	// const add = stair.length <= row ? '#' : ' ';
	// steps(n, row, stair + add);
}

// If (row === n) then we have hit the end of our problem
// If the 'stair' string has a length === n, then we are at the end of the row
// IF the length of the stair string is less than or equal to the row number
// we're working on, we add a '#', otherwise add a space.

module.exports = steps;

// Recursion Tips
// Figure out the bare minimum pieces of information to represent your problem
// Give reasonable defaults to the bare minimum pieces of info
// Check the base case. Is there any work left to do? If not, return
// Do some work. Call your functions again, making sure the arguments have changed in some fashion
