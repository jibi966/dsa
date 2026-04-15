// You are given an integer array height of length n.There are n vertical lines drawn such that the two endpoints of the ith line are(i, 0)
// and(i, height[i]).

// Find two lines that together with the x - axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.



// Example 1:
// Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
// Output: 49
// Explanation: The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].In this case, the max area of water(blue section) 
// the container can contain is 49.

// Example 2:
// Input: height = [1, 1]
// Output: 1


function containerWithMostWater(nums: number[]): number {
    let maximuxWater = 0;
    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        let currentWater = (end - start) * Math.min(nums[start], nums[end]);
        maximuxWater = Math.max(maximuxWater, currentWater);

        if (nums[start] < nums[end]) {
            start++;
        } else if (nums[start] > nums[end]) {
            end--;
        } else {
            start++;
            end--;
        }
    }


    return maximuxWater;
}

// Test Cases
console.log(containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Expected: 49
console.log(containerWithMostWater([1, 1])); // Expected: 1
console.log(containerWithMostWater([1, 2, 1])); // Expected: 2
console.log(containerWithMostWater([2, 3, 4, 5, 18, 17, 6])); // Expected: 17
console.log(containerWithMostWater([0, 2])); // Expected: 0


console.log(containerWithMostWater([1, 2, 3, 4, 5])); // Expected: 6 (indices 1 and 4: min(2,5)*3=6) ✓
console.log(containerWithMostWater([5, 4, 3, 2, 1])); // Expected: 6 (indices 0 and 2: min(5,3)*2=6) ✓
console.log(containerWithMostWater([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // Expected: 25 (indices 0 and 5: min(10,5)*5=25) ✓
console.log(containerWithMostWater([2, 0, 2])); // Expected: 4 (indices 0 and 2: min(2,2)*2=4) ✓

