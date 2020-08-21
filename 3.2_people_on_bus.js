function returnNumPeopleOnBus(arr) {
    let sumPeople = 0;

    for (let i = 0; i < arr.length; i++) {
        sumPeople += arr[i][0];
        sumPeople -= arr[i][1];
    }

    console.log(`The number of people who stayed on the bus after the last stop is: ${sumPeople}`);
    return sumPeople;
}

returnNumPeopleOnBus([[5,0],[2,3],[1,0],[3,4],[2,0]]);
returnNumPeopleOnBus([[10,0],[3,5],[0,4],[0,0],[7,2],[5,2]]);