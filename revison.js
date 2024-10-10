// coin sun problew

/*

"coin change problem", where you need to determine if it's possible to form a specific amount using any combination of elements
  from a given set, which can be used an unlimited number of times."

sumPossible(8, [5, 12, 4]); -> true
sumPossible(103, [6, 20, 1]); // -> true
sumPossible(8, [5, 3, 4]) -> true
sumPossible(15, [4, 6, 10]) -> false

*/

// function coinSumPossible(amount, coins, memo = {}) {
//   if (amount in memo) {
//     return memo[amount];
//   }

//   if (amount === 0) {
//     return true;
//   }

//   if (amount < 0) {
//     return false;
//   }

//   for (const coin of coins) {
//     if (coinSumPossible(amount - coin, coins, memo)) {
//       memo[amount] = true;
//       return true;
//     }
//   }
//   memo[amount] = false;
//   return memo[amount];
// }

// console.log(coinSumPossible(5, [1, 2, 5]));
// console.log(coinSumPossible(8, [5, 12, 4]));
// console.log(coinSumPossible(103, [6, 20, 1]));
// console.log(coinSumPossible(8, [5, 3, 4]));
// console.log(coinSumPossible(15, [4, 6, 10]));

// function coinSumMiniumRequiredCoins(coins, amount, memo = {}) {
//   if (amount in memo) {
//     return memo[amount];
//   }

//   if (amount === 0) {
//     return 0;
//   }

//   if (amount < 0) {
//     return -1;
//   }

//   let minumCoinsRequired = Infinity;

//   for (const coin of coins) {
//     let currentPath = coinSumMiniumRequiredCoins(coins, amount - coin, memo);
//     if (currentPath !== -1) {
//       minumCoinsRequired = Math.min(currentPath + 1, minumCoinsRequired);
//     }
//   }

//   memo[amount] = minumCoinsRequired === Infinity ? -1 : minumCoinsRequired;
//   return memo[amount];
// }

// console.log(coinSumMiniumRequiredCoins([1, 2, 5], 11));
// console.log(coinSumMiniumRequiredCoins([5, 12, 4], 8));
// console.log(coinSumMiniumRequiredCoins([6, 20, 1], 103));
// console.log(coinSumMiniumRequiredCoins([5, 3, 4], 8));
// console.log(coinSumMiniumRequiredCoins([4, 6, 10], 15));

// function coinSumMaxiumRequiredCoins(coins, amount, memo = {}) {
//   if (amount in memo) {
//     return memo[amount];
//   }

//   if (amount === 0) {
//     return 0;
//   }
//   if (amount < 0) {
//     return -1;
//   }

//   let maximumCoinsRequired = -Infinity;

//   for (const coin of coins) {
//     const currentPathCost = coinSumMaxiumRequiredCoins(
//       coins,
//       amount - coin,
//       memo
//     );

//     if (currentPathCost !== -1) {
//       maximumCoinsRequired = Math.max(
//         maximumCoinsRequired,
//         currentPathCost + 1
//       );
//     }
//   }

//   memo[amount] = maximumCoinsRequired === -Infinity ? -1 : maximumCoinsRequired;

//   return memo[amount];
// }

// console.log(coinSumMaxiumRequiredCoins([1, 2, 5], 5));
// console.log(coinSumMaxiumRequiredCoins([5, 12, 4], 8));
// console.log(coinSumMaxiumRequiredCoins([6, 20, 1], 103));
// console.log(coinSumMaxiumRequiredCoins([5, 3, 4], 8));
// console.log(coinSumMaxiumRequiredCoins([4, 6, 10], 15));

function coinSumTotalPath(coins, amount, startIndex = 0, memo = {}) {
  const key = `${amount}-${startIndex}`;
  if (key in memo) {
    return memo[key];
  }

  if (amount === 0) {
    return 1;
  }
  if (amount < 0) {
    return 0;
  }

  let totalPath = 0;

  //   for (const coin of coins) {
  //     const currentPath = coinSumTotalPath(coins, amount - coin, memo);

  //     if (currentPath !== -1) {
  //       totalPath = totalPath + currentPath;
  //     }
  //   }

  for (let i = startIndex; i < coins.length; i++) {
    const currentPath = coinSumTotalPath(coins, amount - coins[i], i, memo);
    totalPath = totalPath + currentPath;
  }

  memo[key] = totalPath;

  console.log("Cached ", memo);

  return memo[key];
}

console.log(coinSumTotalPath([1, 2, 5], 5));

console.log(typeof []);
