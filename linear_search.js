function findArrElement(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            console.log(`Element x is present at index ${i}`);
            return i;
        }
    }
    console.log(`Element x isn't present in arr[]`);
    return -1;
}

findArrElement([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 110);
findArrElement([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 175);


// Problem: Given an array arr[] of n elements, write a function to search a given element x in arr[].

// Examples :
// Input : arr[] = {10, 20, 80, 30, 60, 50, 
//                      110, 100, 130, 170}
//           x = 110;
// Output : 6
// Element x is present at index 6

// Input : arr[] = {10, 20, 80, 30, 60, 50, 
//                      110, 100, 130, 170}
//            x = 175;
// Output : -1
// Element x is not present in arr[].
