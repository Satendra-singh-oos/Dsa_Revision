public class KadanesAlgorithm {
    /*
    Problem Statement: Given an integer array arr, find the contiguous subarray (containing at least one number) which
has the largest sum and return its sum and print the subarray.

Examples:

Example 1:

Input: arr = [-2,1,-3,4,-1,2,1,-5,4]

Output: 6

Explanation: [4,-1,2,1] has the largest sum = 6.

Examples 2:

Input: arr = [1]

Output: 1

Explanation: Array has only one element and which is giving positive sum of 1.

    Solution 1: Naive Approach

Approach: Using three for loops, we will get all possible subarrays in two loops and their sum in another loop,
and then return the maximum of them.
Time Complexity: O(N^3)
Space Complexity: O(1)

Solution 2: A better approach

Approach :

We can also do this problem using only two for loop, starting the function with ( max_sum ) variable which will have the
final answer. We can get the sum of all possible subarrays in this way and then return the maximum so far.
Time Complexity: O(N^2)
Space Complexity: O(1)

Solution : 3 Optimal Solution: Kadane’s Algorithm

Intuition: Basically this problem can be done in linear time complexity with Kadane’s algorithm along with that
 will also get the subarray which is giving the largest positive-sum.

Approach:

-> We will have the following variables in the beginning :

msf – max so far, meh – max end here, start – to get the starting index of ans’s subarray,
end – to get the ending index of ans’s subarray.

-> Traverse the array starting with adding the ith element with max_end_here(meh) ,
now we will check that adding the element gives greater value than max_so_far(msf) ,
 if yes then we will update our meh and also update the starting and ending index .

for(int i=0;i<nums.size();i++){

meh+=nums[i];

if(meh>msf){ msf=meh; start=s; end=i; }

if(meh<0){meh=0; s=i+1;}

}

->Now in this step, we will print the answer subarray using the start and end variables.

->Return the largest subarray sum that is:- msf.


Time Complexity: O(N)
Space Complexity:O(1)


     */
}
