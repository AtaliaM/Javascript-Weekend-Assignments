function trimFirstAndLastStrChars(str) {
    let newStr = "";
    for (let i = 1; i < str.length-1; i++) {
        newStr = newStr+str[i];
    }

    return newStr;
}

console.log(trimFirstAndLastStrChars("atalia"));
console.log(trimFirstAndLastStrChars("Hello World"));
