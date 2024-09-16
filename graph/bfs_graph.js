const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

// bfs me hum node pa jata hain rather then thinking about depth

function bfs_itratice(graph, start) {
  const queue = [start];
  // added set after the visted give me wrong order of traversal
  const visited = new Set([start]);

  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
  console.log(visited);
  return Array.from(visited);
}

console.log(bfs_itratice(graph, "a"));
