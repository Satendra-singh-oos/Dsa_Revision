/* 

const edges=[
 ['b','a'],
 ['c','a'],
 ['b','c'],
 ['q','r'],
 ['q','s'],
 ['q','u'],
 ['q','t'],
]



write a function , undirectedPath , that takes in an array of edges for an indirected graph and two node.
After that you can find and node path etc. take care of cycle via visted technque

*/

const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["q", "r"],
  ["q", "s"],
  ["q", "u"],
  ["q", "t"],
];

function createGraph(edges) {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) {
      graph[a] = [];
    }

    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

function hasPathDfs(edges, start, end) {
  const graph = createGraph(edges);

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

console.log(hasPathDfs(edges, "a", "b"));
console.log(hasPathDfs(edges, "a", "f"));
const graph = genrateGraph(edges);

console.log(graph);
