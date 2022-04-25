/**
//Example graph as adjacency list
const graph = {
  "A": ["B","D"],
  "B": ["A"],
  "C": ["D", "I"],
  "D": ["A", "C", "E", "F"],
  "E": ["D", "G"],
  "F": ["D"],
  "G": ["E", "H"],
  "H": ["G"],
  "I": ["C"]
};

//Output
["A", "B", "D", "C", "E", "F", "I", "G", "H"]
*/

/**
 * @param {Object} graph
 * @return {string[]}
 */
const traversal = function (graph) {
  const seen = {};
  const queue = [Object.keys(graph)[0]];
  const values = [];

  while (queue.length) {
    const vertex = queue.shift();

    values.push(vertex);
    seen[vertex] = true;

    const connections = graph[vertex];
    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }

  return values;
};

