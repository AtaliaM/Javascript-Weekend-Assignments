
function toWeirdCase(str) {
    let weirdStr = "";

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            weirdStr = weirdStr + str[i].toUpperCase();
        }
        else {
            weirdStr = weirdStr + str[i].toLowerCase();
        }
    }

    return weirdStr;
}

console.log(toWeirdCase("String"));
console.log(toWeirdCase("Weird string case"));


// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg cAsE"
