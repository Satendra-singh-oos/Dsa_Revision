/*
Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

OR 

Input: grid = [
  ["L","L","L","L","W"],
  ["L","L","W","L","W"],
  ["L","L","W","W","W"],
  ["W","W","W","W","W"]
]
Output: 1

*/

// Function to count the number of islands in a grid
function islandCount(grid) {
  // STEP 1: Initialize variables and grid properties
  const rows = grid.length;
  const cols = grid[0].length;
  const visited = new Set();
  let count = 0;

  // STEP 3: Define DFS function for island exploration
  function dfs(r, c) {
    const pos = r + "," + c;

    // Base case: return if out of bounds, water, or already visited
    if (
      r < 0 ||
      r >= rows ||
      c < 0 ||
      c >= cols ||
      grid[r][c] === "0" ||
      visited.has(pos)
    ) {
      return;
    }

    // Mark as visited
    visited.add(pos);

    // Recursively explore adjacent cells
    dfs(r + 1, c); // Down
    dfs(r - 1, c); // Up
    dfs(r, c + 1); // Right
    dfs(r, c - 1); // Left
  }

  // STEP 2: Iterate through the grid and count islands
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === "1" && !visited.has(r + "," + c)) {
        // New island found
        count++;
        // Explore the entire island
        dfs(r, c);
      }
    }
  }

  // STEP 4: Return the total count of islands
  return count;
}

// Example usage
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
];

// Call the function and log the result
console.log("Number of islands:", islandCount(grid));
