function returnShortestWordLength(str) {
    str = str.split(" ");
    let currShortest = str[0];

    for (let i = 1; i < str.length; i++) {
        if (str[i].length < currShortest.length) {
            currShortest = str[i];
        }
    }

    console.log(`The length of the shortest word is: ${currShortest.length} characters.`);
    return currShortest.length;
}

returnShortestWordLength("Behind every awesome programmer there is lack of sleep");
returnShortestWordLength("when you wish upon a star");

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.
