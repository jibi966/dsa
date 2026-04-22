// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:
// Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 6
// Explanation: The subarray[4, -1, 2, 1] has the largest sum 6.

// Example 2:
// Input: nums = [1]
// Output: 1
// Explanation: The subarray[1] has the largest sum 1.

// Example 3:
// Input: nums = [5, 4, -1, 7, 8]
// Output: 23
// Explanation: The subarray[5, 4, -1, 7, 8] has the largest sum 23.


// Constraints:
// 1 <= nums.length <= 105 - 104 <= nums[i] <= 104


// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, 
// which is more subtle.

function maxSubArray(nums: number[]): number {

    let maxSum = nums[0];
    let curSum = nums[0];
    let j = 1;

    while (j < nums.length) {
        if (curSum < 0) {
            curSum = nums[j];
        } else {
            curSum += nums[j];
        }
        maxSum = Math.max(curSum, maxSum);
        j++;
    }


    return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected: 6
console.log(maxSubArray([1])); // Expected: 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // Expected: 23
console.log(maxSubArray([-1, -2, -3, -4])); // Expected: -1
console.log(maxSubArray([1, 2, 3, 4, 5])); // Expected: 15
console.log(maxSubArray([-5, 4, -3, 3, -3, 6, -2])); // Expected: 7
console.log(maxSubArray([0, -3, 5, -2, 3])); // Expected: 6
console.log(maxSubArray([2, -1, 2, -1, 4, -5])); // Expected: 6