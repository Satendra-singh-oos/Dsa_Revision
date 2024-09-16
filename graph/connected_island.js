/*
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
  let count = 0;

  function dfs(node) {
    if (!visited.has(node)) {
      visited.add(node);
      for (const neighbour of graph[node]) {
        dfs(neighbour);
      }
    }
  }
  //   function dfs(node) {
  //     const stack = [node];
  //     while (stack.length > 0) {
  //       const currentNode = stack.pop();
  //       if (!visited.has(currentNode)) {
  //         visited.add(currentNode);
  //         for (const neighbour of graph[currentNode]) {
  //           if (!visited.has(neighbour)) {
  //             stack.push(neighbour);
  //           }
  //         }
  //       }
  //     }
  //   }

  for (const node in graph) {
    if (!visited.has(node)) {
      console.log("node" + node);
      dfs(node);
      count++;
    }
  }

  return count;
}

console.log(connectedIsland(graph));
