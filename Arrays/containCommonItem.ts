// return if 2 array containes the same elements
//  [1,2,3] and [3,6,5] should return true
// [1,2,3] and [6,5] should return false



function containCommonItem(arr1: number[], arr2: number[]): boolean {
    const foundMap: Record<number, boolean> = {};

    for (const item of arr1) {
        if (!foundMap[item]) foundMap[item] = true;
    };

    for (const item of arr2) {
        if (foundMap[item]) {
            return true;
        }
    }


    return false;
}

console.log(containCommonItem([1,2,3], [3,6,5])); // should return true
console.log(containCommonItem([1,2,3], [6,5])); // should return false