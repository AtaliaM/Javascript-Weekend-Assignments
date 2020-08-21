function findUniqe(array) {
    for (let i = 1; i < array.length; i++) {
        if (array[i] !== array[i-1] && array[i] !== array[i+1]) {
            console.log(`The unique element is ${array[i]}`);
            return;
        }
    }
}

//It’s guaranteed that array contains at least 3 numbers.
findUniqe([ 1, 1, 1, 2, 1, 1 ]);
findUniqe([ 0, 0, 0.55, 0, 0 ]);
findUniqe([ 3, 3, 3, 3, 0 ]);