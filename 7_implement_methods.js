///// My Filter /////
let equalOrBiggerThanFive = (input) => input >=5;

const myFilter = (arr, testFunc) => {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if(testFunc(arr[i])) {
            output.push(arr[i]);
        }
    }
    return output;
}

////////////////////////////////////////
///// My ForEach /////
let printToScreen = (input) => console.log(input);

const myForEach = (arr,action) => {
    for (let i = 0; i < arr.length; i++) {
        action(arr[i]);
    }
}

////////////////////////////////////////
///// My Map /////
let double = (num) => num*2; 

const myMap = (arr, action) => {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(action(arr[i]));
    }
    return output;
}

////////////////////////////////////////

console.log(myFilter([20,5,4,2,1,3,8], equalOrBiggerThanFive));
myForEach("Hello world", printToScreen);
console.log(myMap([1,2,3,4,5], double));


// Implement the following methods -
// Filter
// ForEach
// Map
// Using only for(), array and objects (without other js methods) 
