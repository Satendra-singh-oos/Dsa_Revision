/*

Given Two nodes (start and dest ) in a directed acyclic graph (DAG)
return true if there is a directed path from start to dest, otherwise return fasle.

Example 1:

Input : start=1,dest=3
Output:true
Explanation THere is directed path 1->2->3




Example 1:

Input : start=1,dest=4
Output:false
Explanation THere is directed path 1->2->3->5<-4



*/

// dfs

const graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function hasPathDfs(graph, start, end) {
  const stack = [start];
  const visited = new Set();

  while (stack.length > 0) {
    let node = stack.pop();
    if (node === end) {
      return true;
    } else {
      if (!visited.has(node)) {
        visited.add(node);
        for (const neighbour of graph[node]) {
          if (!visited.has(neighbour)) {
            stack.push(neighbour);
          }
        }
      }
    }
  }
  return false;
}
console.log(hasPathDfs(graph, "a", "f"));

function hasPathBFS(graph, start, end) {
  const queue = [start];
  const visited = new Set();

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === end) {
      return true;
    } else {
      if (!visited.has(node)) {
        visited.add(node);
        for (const neighbour of graph[node]) {
          queue.push(neighbour);
        }
      }
    }
  }
  return false;
}
console.log(hasPathBFS(graph, "a", "f"));

function hasPathRec(graph, start, end, visited = new Set()) {
  if (node === start) {
    return true;
  }

  // for cycle
  if (visited.has(start)) {
    return false;
  }

  visited.add(start);
  for (const neighbour of graph[start]) {
    if (hasPathRec(graph, neighbour, end) === true) {
      return true;
    }
  }
  return false;
}
