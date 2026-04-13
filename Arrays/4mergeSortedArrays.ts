// given 2 sorted arrays, merge them into a single sorted array
// [1,3,5] and [2,4,6] should return [1,2,3,4,5,6]
// [1,2] and [3,4] should return [1,2,3,4]
// [0,3,4,31] and [4,6,30] should return [0,3,4,4,6,30,31]


function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArr: number[] = [];
    if (arr1.length === 0) return arr2;
    if (arr2.length === 0) return arr1;

    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) {
            mergedArr.push(arr1[i]);
            i++;
        } else {
            mergedArr.push(arr2[j]);
            j++;
        }
    }

    // Add remaining elements from arr1
    while (i < arr1.length) {
        mergedArr.push(arr1[i]);
        i++;
    }

    // Add remaining elements from arr2
    while (j < arr2.length) {
        mergedArr.push(arr2[j]);
        j++;
    }

    return mergedArr;
}


console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
console.log(mergeSortedArrays([1, 2], [3, 4]));
console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
console.log(mergeSortedArrays([], [1, 2, 3])); // Empty arr1
console.log(mergeSortedArrays([1, 2, 3], [])); // Empty arr2
console.log(mergeSortedArrays([], [])); // Both empty
console.log(mergeSortedArrays([1, 1, 2, 2], [1, 3, 3])); // Duplicates
console.log(mergeSortedArrays([-5, -2, 0], [1, 2, 5])); // Negative numbers
console.log(mergeSortedArrays([5], [1, 2, 3, 4])); // Single element in arr1
console.log(mergeSortedArrays([1, 2, 3, 4], [5])); // Single element in arr2
