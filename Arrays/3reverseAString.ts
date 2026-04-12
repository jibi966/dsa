function reverseString(str: string): string {
    let reversedStr = '';

    const arr = str.split('');

    for (let i = arr.length - 1; i >= 0; i--) {
        reversedStr += arr[i];
    }


    return reversedStr;
};


// Example usage:
const input = "Hello, World!";
const output = reverseString(input);
console.log(output); // Output: "!dlroW ,olleH"

// Example 2:
const input2 = "TypeScript";
const output2 = reverseString(input2);
console.log(output2); // Output: "tpircSepyT"