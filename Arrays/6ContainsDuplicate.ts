// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



function containsDuplicate(arr: number[]): boolean {

    const map: Record<number, boolean> = {};

    for (const num of arr) {
        if (map[num] !== undefined) {
            return true;
        }
        map[num] = true;
    }

    return false;
}


// Example 1:
// Input: nums = [1, 2, 3, 1]
// Output: true
// Explanation:
// The element 1 occurs at the indices 0 and 3.

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false
// Explanation:
// All elements are distinct.

// Example 3:
// Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
// Output: true

// Test Cases
console.log(containsDuplicate([1, 2, 3, 1])); // Expected: true
console.log(containsDuplicate([1, 2, 3, 4])); // Expected: false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // Expected: true
console.log(containsDuplicate([1])); // Expected: false
console.log(containsDuplicate([1, 1])); // Expected: true
console.log(containsDuplicate([])); // Expected: false
console.log(containsDuplicate([0, 0, 0, 0])); // Expected: true
console.log(containsDuplicate([-1, -2, -3, -1])); // Expected: true
console.log(containsDuplicate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Expected: false
