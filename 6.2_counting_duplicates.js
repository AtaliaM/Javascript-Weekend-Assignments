function returnNumOfDuplicateDigits(str) {
    let duplicateLetters = [];
    let numDuplicates = [];
    let tempCount = 0;
    str = str.toLowerCase();
    let goOn = 1;

    for (let i = 0; i < str.length; i++) {

        for (let j = 0; j < duplicateLetters.length; j++) {
            if (str[i] === duplicateLetters[j]) {
                goOn = 0;
            }

        }

        if (goOn) {

            tempCount=1;

            for (let j = i+1; j < str.length; j++) {
                if (str[i] === str[j]) {
                    tempCount++;
                }
            }
            
            if (tempCount>1) {

                duplicateLetters.push(str[i]);
                numDuplicates.push(tempCount);
            }

        }

        tempCount = 0;
        goOn = 1;
        
    }

    if(duplicateLetters.length>0) {
        for(let i = 0; i < duplicateLetters.length; i++) {
            console.log(`${duplicateLetters[i]} appears ${numDuplicates[i]}`);
        }
    }
    else {
        console.log("There are no recurring characters.");
    }
}

returnNumOfDuplicateDigits("aabbcde"); // -> 2 # 'a' and 'b'
console.log("");
returnNumOfDuplicateDigits("aA11"); // -> 2 # 'a' and '1'
console.log("");
returnNumOfDuplicateDigits("Indivisibilities"); // -> 2 # 'i' occurs seven times and 's' occurs twice
console.log("");
returnNumOfDuplicateDigits("abcde"); // -> 0 # no characters repeat more than once



// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic 
// characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeat more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice
