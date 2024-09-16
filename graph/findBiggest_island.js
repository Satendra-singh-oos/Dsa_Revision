/*

Question findBiggest Island
 -> most of the time we get undirected graph

*/

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function connectedIsland(graph) {
  const visited = new Set();
  let largest = 0;

  function dfs(node) {
    if (visited.has(node)) {
      return 0;
    }

    visited.add(node);
    let size = 1;

    // find all the neighbout of the node
    for (const neighbour of graph[node]) {
      size = size + dfs(neighbour);
    }
    return size;
  }

  for (const node in graph) {
    if (!visited.has(node)) {
      const islandSize = dfs(node);
      if (islandSize > largest) {
        largest = size;
      }
    }
  }

  return count;
}

console.log(connectedIsland(graph));
