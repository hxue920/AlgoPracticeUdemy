// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let newStringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  let newStringB = stringB.replace(/[^\w]/g, '').toLowerCase();
  if (newStringA.length !== newStringB.length) {
    return false;
  }
  const charMapA = {};
  const charMapB = {};
  for (let char of newStringA) {
    if (!charMapA[char]) {
      charMapA[char] = 1;
    } else {
      charMapA[char] += 1;
    }
  }
  for (let char of newStringB) {
    if (!charMapB[char]) {
      charMapB[char] = 1;
    } else {
      charMapB[char] += 1;
    }
  }
  for (let prop in charMapA) {
    if (charMapA[prop] !== charMapB[prop]) {
      return false;
    }
  }
  return true;

}

module.exports = anagrams;
