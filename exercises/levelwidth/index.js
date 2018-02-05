// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const queue = [[root, 0]];
  const counter = [];
  while (queue.length) {
    let node = queue.shift();
    if (!counter[node[1]]) {
      counter[node[1]] = 1;
    } else {
      counter[node[1]] += 1;
    }
    for (let child of node[0].children) {
      queue.push([child, node[1]+1]);
    }
  }
  return counter;
}

module.exports = levelWidth;
