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

function pyramid(n) {
  let colCount = Math.floor((2*n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let stair = '#';
    let count = colCount;
    let temp = 0;
    while (count < 2*n - 1 - 1) {
      if (temp <= row - 1) {
        stair = '#' + stair + '#';
        temp++;
      } else {
        stair = ' ' + stair + ' ';
      }
      count++;
    }
    console.log(stair);
  }
}

module.exports = pyramid;
