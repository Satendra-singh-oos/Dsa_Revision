function maxCostPath(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;

  // return the cache result
  if (pos in memo) {
    return memo[pos];
  }

  // position where not allowed to move
  if (
    row >= grid.length ||
    col >= grid[0].length
    // grid[row][col] === "X" // X or Wall or Snake
  ) {
    return -Infinity; // for max path
  }

  //check if you have arrived at given location most of time it is bottom right
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return grid[row][col];
  }

  // memo[pos] = countPaths(grid, row + 1, col, memo) + countPaths(grid, row, col + 1, memo)

  const rightPaths = maxCostPath(grid, row + 1, col, memo);
  const downPaths = maxCostPath(grid, row, col + 1, memo);

  memo[pos] = grid[row][col] + Math.max(rightPaths + downPaths);

  return memo[pos];
}

// Minimum Path Sum
