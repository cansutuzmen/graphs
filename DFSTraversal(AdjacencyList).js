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
["A", "B", "D", "C", "I", "E", "G", "H", "F"]
*/

/**
 * @param {string} vertex
 * @param {Object} graph
 * @param {string[]} values
 * @param {Object} seen
 * @return {string[]}
 */
const traversal = function(vertex, graph, values, seen) {
  values.push(vertex);
  seen[vertex] = true;

  const connections = graph[vertex];
  for(let i = 0; i < connections.length; i++) {
    const connection = connections[i];

    if(!seen[connection]) {
      traversal(connection, graph, values, seen);
    }
  }
}


