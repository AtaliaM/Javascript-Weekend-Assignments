let arr = [0, 0, 0, 1];
let arr2 = [0, 0, 1, 0];
let arr3 = [0, 1, 0, 1];
let arr4 = [1, 0, 1, 1];

function convertBinaryArrToInt(array) {
    let binary = array.join("");
    let integer = parseInt(binary, 2);
    
    return integer;
}

console.log(convertBinaryArrToInt(arr3));
console.log(convertBinaryArrToInt(arr4));




