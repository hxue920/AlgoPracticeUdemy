// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunkAlt(array, size) {
  const newArray = [];
  while(array.length) {
    let temp = array.splice(0, size);
    newArray.push(temp);
  }
  return newArray;
}
function chunk(array, size) {
  const chunked = [];
  for (let chunk of array) {
    if (!chunked[chunked.length-1] || chunked[chunked.length-1].length === size) {
      chunked.push([chunk]);
    } else {
      chunked[chunked.length-1].push(chunk);
    }
  }
  return chunked;
}
module.exports = chunk;
