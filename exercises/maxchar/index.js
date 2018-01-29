// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let max = -1;
  let result = '';
  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }
  for (let prop in charMap) {
    if (charMap[prop] > max) {
      result = prop;
      max = charMap[prop];
    }
  }
  return result;
}

module.exports = maxChar;
