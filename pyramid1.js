// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n){
	const midpoint = Math.floor((2 * n - 1) / 2);
	// From 0 to n (iterate through rows)
	for (let row = 0; row < n; row++) {
		// Create an empty string, 'level'
		let level = '';
		// From 0 to ??? (columns)
		for (let column = 0; column < 2 * n - 1; column++) {
			// IF the column should have a #
			if (midpoint - row <= column && midpoint + row >= column) {
				// Add a '#' to 'level'
				level += '#';
				// ELSE
			} else {
				// Add a space to 'level'
				level += ' ';
			}
		}
		// Console log 'stair'
		console.log(level);
	}
}

module.exports = pyramid;
