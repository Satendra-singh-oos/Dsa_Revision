/*

LC-> 2352
Given a 0-indexed n x n integer matrix grid, return the number of pairs (ri, cj) such that row ri and column cj are equal.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

 
Input: grid = [[3,2,1],[1,7,6],[2,7,7]]
Output: 1
Explanation: There is 1 equal row and column pair:
- (Row 2, Column 1): [2,7,7]


Input: grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
Output: 3
Explanation: There are 3 equal row and column pairs:
- (Row 0, Column 0): [3,1,2,2]
- (Row 2, Column 2): [2,4,2,2]
- (Row 3, Column 2): [2,4,2,2]
 

*/

//traver throw cols only
const arr = [
  [3, 2, 1],
  [1, 7, 6],
  [2, 7, 7],
];
let cols = [];
for (let col = 0; col < arr.length; col++) {
  for (let row = 0; row < arr.length; row++) {
    cols.push(arr[row][col]);
  }
}
console.log(cols);
/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function (grid) {
  /*
       step1-> traverse throw row and convert each row in string 
       Step2-> now we create a map and check the frequency of each row 
       Step3-> now traverse in cols and check dose row map contains that or not if yes then increse the freq 
      */

  const n = grid.length;

  const rowMap = new Map();

  for (let row = 0; row < grid.length; row++) {
    const rowStr = grid[row].join(",");

    rowMap.set(rowStr, (rowMap.get(rowStr) || 0) + 1);
  }

  let count = 0;

  for (let col = 0; col < grid.length; col++) {
    let colArr = [];
    for (let row = 0; row < grid.length; row++) {
      colArr.push(grid[row][col]);
    }
    let colStr = colArr.join(",");

    if (rowMap.has(colStr)) {
      count += rowMap.get(colStr);
    }
  }
  return count;
};

console.log();
