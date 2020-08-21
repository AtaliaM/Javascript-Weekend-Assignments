const arr = [19, 5, 42, 2, 77];
const arr2 = [10, 343445353, 3453445, 3453545353453];

function returnSumOfTwoLowestNums(array) {
    
    array.sort(function(a,b)
    {
        return a-b;
    });
    
    let sumOfTwoLowest = array[0] + array[1];
    return sumOfTwoLowest;
}

console.log(returnSumOfTwoLowestNums(arr));

console.log(returnSumOfTwoLowestNums(arr2));

