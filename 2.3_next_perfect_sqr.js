function findNextSquare(perfectSqr) {

    //checking if the parameter is not a perfect square
    if (Math.sqrt(perfectSqr) !== Math.round(Math.sqrt(perfectSqr))) {
        return -1;
    }

    let nextPerfectSqr = perfectSqr+1;

    while (Math.sqrt(nextPerfectSqr) !== Math.round(Math.sqrt(nextPerfectSqr))) { //while the next sqr isn't round
    nextPerfectSqr++;
    }

    console.log(`The next perfect square after ${perfectSqr} is: ${nextPerfectSqr}`);
    return nextPerfectSqr;

}

findNextSquare(121);
findNextSquare(625);
console.log(findNextSquare(114));

// Complete the findNextSquare method that finds the next integral 
// perfect square after the one passed as a parameter. 
// Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. 
// You may assume the parameter is positive.

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect
