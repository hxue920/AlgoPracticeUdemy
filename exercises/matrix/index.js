// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const result = new Array(n);
  let left = 0;
  let top = 0;
  let right = n-1;
  let bottom = n-1;
  let dir = 1;
  let count = 1;

  for (let i = 0; i < n; i++) {
    result[i] = new Array(n);
  }
  while (left <= right && top <= bottom) {
    if (dir === 1) {
      for (let j = left; j <= right; j++) {
        result[top][j] = count++;
      }
      top += 1;
      dir = 2;
    }
    if (dir === 2) {
      for (let k = top; k <= bottom; k++) {
        result[k][right] = count++;
      }
      right -= 1;
      dir = 3;
    }
    if (dir === 3) {
      for (let l = right; l >= left; l--) {
        result[bottom][l] = count++;
      }
      bottom -= 1;
      dir = 4;
    }
    if (dir === 4) {
      for (let m = bottom; m >= top; m--) {
        result[m][left] = count++;
      }
      left += 1;
      dir = 1;
    }
  }
  return result;
}

module.exports = matrix;
