/**
//Example graph as adjacency matrix
const nodes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
const adjMatrix = [
  [0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0]
];

//Output
["A", "B", "D", "C", "E", "F", "I", "G", "H"]
*/

/**
 * @param {number[][]} adjMatrix
 * @param {string[]} nodes
 * @return {string[]}
 */
const traversal = function (adjMatrix, nodes) {
  const queue = [0];
  const values = [];
  const seen = {};

  while(queue.length) {
    const index = queue.shift();

    values.push(nodes[index]);
    seen[index] = true;

    const connections = adjMatrix[index];
    for(let i = 0; i < connections.length; i++) {
      if(connections[i] > 0 && !seen[i]) {
        queue.push(i);
      }
    }
  }

  return values;
}

