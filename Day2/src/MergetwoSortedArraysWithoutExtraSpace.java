public class MergetwoSortedArraysWithoutExtraSpace {
    /*
    Solution1: Brute Force-

Intuition: We can use a new array of size n+m and put all elements of arr1 and arr2 in it, and sort it.
 After sorting it, but all the elements in arr1 and arr2.

Approach:

1.Make an arr3 of size n+m.
2.Put elements arr1 and arr2 in arr3.
3.Sort the arr3.
4.Now first fill the arr1 and then fill remaining elements in arr2.
Time complexity: O(n*log(n))+O(n)+O(n)
Space Complexity: O(n)

Solution 2: Without using space-

Intuition: We can think of Iterating in arr1 and whenever we encounter an element that is greater than
the first element of arr2, just swap it. Now rearrange the arr2 in a sorted manner,
after completion of the loop we will get elements of both the arrays in non-decreasing order.

Approach:

Use a for loop in arr1.
Whenever we get any element in arr1 which is greater than the first element of arr2,swap it.
Rearrange arr2.
Repeat the process.
Time complexity: O(n*m)

Space Complexity: O(1)
     */
}
