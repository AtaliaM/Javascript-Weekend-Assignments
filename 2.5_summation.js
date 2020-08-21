function sumFromOneToN(N) {
    let sum = 0;

    for (let i = 1; i <= N; i++) {
        sum+=i;
    }

    console.log(`The sum of all the numbers between 1 and N is: ${sum}`);
    return sum;
}

sumFromOneToN(8);