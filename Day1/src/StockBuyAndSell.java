public class StockBuyAndSell {
    /*
Problem Statement: You are given an array of prices where prices[i] is the price of a given stock on an ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the
future to sell that stock. Return the maximum profit you can achieve from this transaction.
 If you cannot achieve any profit, return 0.


Solution 1: Brute Force

Intuition: We can simply use 2 loops and track every transaction and maintain a variable maxPro to contain the max value
 among all transactions.

Approach:

1.Use a for loop of ‘i’ from 0 to n.
2.Use another for loop from ‘i+1’ to n.
3.If arr[j] > arr[i] , take the difference and compare  and store it in the maxPro variable.
4.Return maxPro.

Time complexity: O(n^2)
Space Complexity: O(1)


Soltuion 2:Optimal solution

Intuition: We will linearly travel the array. We can maintain a minimum from the starting of the array and
compare it with every element of the array, if it is greater than the minimum then take the difference and
 maintain it in max, otherwise update the minimum.

Approach:

1.Create a variable maxPro and mark it as 0.
2.Create a variable minPrice and mark it as max_value.
3.Run a for loop from 0 to n.
4.Update the minPrice at if it greater than current element of the array
5.Take the difference of the minPrice with the current element of the array and compare and maintain it in maxPro.
6.Return the maxPro.

     */
}
