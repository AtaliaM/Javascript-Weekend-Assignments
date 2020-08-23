function trimFirstAndLastStrChars(str) {
    let newStr = "";
    for (let i = 1; i < str.length-1; i++) {
        newStr = newStr+str[i];
    }

    return newStr;
}

// const trimFirstAndLastStrChars2 = (str) => str.slice(1, str.length - 1);

console.log(trimFirstAndLastStrChars("atalia"));
console.log(trimFirstAndLastStrChars("Hello World"));
// console.log(trimFirstAndLastStrChars2("atalia"));
