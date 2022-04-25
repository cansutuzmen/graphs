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
["A", "B", "D", "C", "I", "E", "G", "H", "F"]
*/

/**
 * @param {number} index
 * @param {number[][]} graph
 * @param {string[]} nodes
 * @param {string[]} values
 * @param {Object} seen
 * @return {string[]}
 */
const traversal = function(index, graph, nodes, values, seen) {
  values.push(nodes[index]);
  seen[index] = true;

  const connections = graph[index];
  for(let i = 0; i < connections.length; i++) {
    if(connections[i] > 0 && !seen[i]) {
      traversal(i, graph, nodes, values, seen);
    }
  }
}

