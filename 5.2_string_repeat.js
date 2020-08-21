function StrRepeat(numRepeats, str) {

    let newStr = "";

    for (let i = 0; i < numRepeats; i++) {
        newStr = newStr + str;
    }

    console.log(newStr);
}

StrRepeat(10, "Atalia");


// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
