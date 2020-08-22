function returnSortedStrFromTwoStrs(str1, str2) {
    let concatStr = str1+str2;
    concatStr = concatStr.toLowerCase().split("").sort();
    let newSortedStr = concatStr[0];

    // console.log(concatStr);
    
    for(let i = 1; i < concatStr.length; i++) {
        if (concatStr[i] !== concatStr[i-1]) {
            newSortedStr = newSortedStr+concatStr[i];
        }
    }

   console.log(`The new sorted string: ${newSortedStr}`);
   return newSortedStr;
}

returnSortedStrFromTwoStrs("xyaabbbccccdefww","xxxxyyyyabklmopq");
returnSortedStrFromTwoStrs("abcdefghijklmnopqrstuvwxyz","abcdefghijklmnopqrstuvwxyz");

// Take 2 strings s1 and s2 including only letters from a to z. 
// Return a new sorted string, the longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
