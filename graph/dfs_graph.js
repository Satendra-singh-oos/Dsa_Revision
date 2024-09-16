const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function dfs_itratice(graph, start) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (!visited.has(node)) {
      visited.add(node);
      // to get the neighbour like a:["b","c"] it an array so loop lagalo
      for (const neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }

  return Array.from(visited);
}

console.log(dfs_itratice(graph, "a"));

function dfs_recursive(graph, node, visited = new Set()) {
  if (!visited.has(node)) {
    visited.add(node);
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        dfs_recursive(graph, neighbour, visited);
      }
    }
  }
  return Array.from(visited);
}

console.log(dfs_recursive(graph, "a"));
