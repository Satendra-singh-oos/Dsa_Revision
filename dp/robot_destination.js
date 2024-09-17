function robotDestination(grid, row = 0, col = 0, memo = {}) {
  const pos = row + "," + col;
  // position where not allowed to move
  if (
    row >= grid.length ||
    col >= grid[0].length ||
    grid[row][col] === "X" // X or Wall or Snake
  ) {
    return 0;
  }

  //check if you have arrived at given location  most of time it is bottom right
  if (row === grid.length - 1 && col === grid[0].length - 1) {
    return 1;
  }

  // return the cache result
  if (pos in memo) {
    return memo[pos];
  }

  memo[pos] =
    robotDestination(grid, row + 1, col, memo) +
    robotDestination(grid, row, col + 1, memo);

  // const rightPaths = robotDestination(grid, row+1, col, memo)
  // const downPaths = robotDestination(grid, row, col+1, memo)

  // memo[pos] = rightPaths + downPaths

  return memo[pos];
}

const grid1 = [
  ["O", "O", "O"],
  ["O", "O", "O"],
  ["O", "O", "O"],
];
console.log(robotDestination(grid1));
const grid2 = [
  ["O", "O", "O"],
  ["O", "X", "O"],
  ["O", "O", "O"],
];
console.log(robotDestination(grid2));
const grid3 = [
  ["O", "X", "O"],
  ["O", "X", "O"],
  ["O", "O", "O"],
];
console.log(robotDestination(grid3));
const grid4 = [
  ["O", "X", "O"],
  ["X", "X", "X"],
  ["O", "O", "O"],
];
console.log(robotDestination(grid4));

const grid5 = [
  ["O", "O", "X", "O"],
  ["O", "X", "O", "O"],
  ["O", "O", "O", "X"],
  ["O", "X", "O", "O"],
];
console.log(robotDestination(grid5));

// unique path1
// unique path2
