// given an array and a sum, determine if there is a pair that equals the sum
// [1,2,3] and 5 should return true
// [1,2,3] and 6 should return false



function hasPairWithSum(arr: number[], sum: number): boolean {

    const foundSet = new Set<number>();

    for (const item of arr) {
        if (foundSet.has(item)) {
            return true;
        }
        foundSet.add(sum - item);
    }

    return false;
};

console.log(hasPairWithSum([1,2,3], 5)); // should return true
console.log(hasPairWithSum([1,2,3], 6)); // should return false