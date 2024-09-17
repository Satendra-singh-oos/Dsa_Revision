function minCoin(coins, amount, memo = {}) {
  if (amount in memo) return memo[amount];
  if (amount === 0) return 0;
  if (amount < 0) return -1;

  let minCoinsCount = Infinity;

  for (const coin of coins) {
    const result = minCoin(coins, amount - coin, memo);
    if (result !== -1) {
      minCoinsCount = Math.min(minCoinsCount, result + 1);
    }
  }

  // for (const coin of coins) {
  //   let recentCount = 1 + minCoin(coins, amount-coin, memo)
  //   minCoinsCount = Math.min(recentCount, minCoinsCount)
  // }
  memo[amount] = minCoinsCount === Infinity ? -1 : minCoinsCount;

  return memo[amount];
}

console.log(minCoin([5, 12, 4], 8));
console.log(minCoin([6, 20, 1], 103));
console.log(minCoin([5, 3, 4], 8));
console.log(minCoin([4, 6, 10], 15));
