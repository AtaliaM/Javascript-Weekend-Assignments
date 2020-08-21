function returnNelementinFibonacciSequence(N) {
    let prevFiboNum = 0;
    let currFiboNum = 1;
    let sumOfTwoPreviousNums = 1;
    let count = 2;

    if (N === 0) {
        console.log(`The 1 Fibonacci number is: 0`);
        return;
    }
    else if (N === 1) {
        console.log(`The 2 Fibonacci number is: 1`);
        return;
    }

    while (count !== N) {
        prevFiboNum = currFiboNum;                           //1     //1    //2
        currFiboNum = sumOfTwoPreviousNums;                  //1     //2   //3
        sumOfTwoPreviousNums = prevFiboNum + currFiboNum;    //2    //3   //5
        
        count++;
    }
    console.log(`The ${N} Fibonacci number is: ${currFiboNum}`);
}
returnNelementinFibonacciSequence(3);
returnNelementinFibonacciSequence(1);
returnNelementinFibonacciSequence(7);
returnNelementinFibonacciSequence(10);
// (0,1,1,2,3,5,8,13)


