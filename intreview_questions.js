// Interview Questions (objects, arrays, numbers)


// What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA;
arrB[0]=42;
console.log(arrA)
//[42,1,2,3,4,5] ==> because arrB is a reference to the original arrA, a pointer. any change to arrB reflects on arrA.

// What would be the output of following code?
var arrA = [0,1,2,3,4,5];
var arrB = arrA.slice();
arrB[0]=42;
console.log(arrA)
//[0,1,2,3,4,5] ==> because .slice returns a new array. so the original arrA will not be affected by changes on arrB.

//  What would be the output of following code?
var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
var arrB = arrA;
arrB[0].prop1=42;
console.log(arrA);
//[{prop1: 42},  {someProp: "also value of array A!"}, 3,4,5]; ==> because arrB is a reference to the original arrA, a pointer. 
//any change to arrB reflects on arrA.

// What would be the output of following code?
var arrA = [{prop1: "value of array A!!"}, {someProp: "also value of array A!"},3,4,5];
var arrB = arrA.slice();
arrB[0].prop1=42;
arrB[3] = 20;
console.log(arrA);
//[{prop1: 42},  {someProp: "also value of array A!"}, 3,4,5]; ==> the value in the object inside arrA 
//will change, because we access it by reference (a pointer), but the number on index 3 won't change
//because it isn't the original arrA, but a copy we got with .slice().
//we can change object key/value by reference through a copy of the object, but can't change number values this way.
