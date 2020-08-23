
function convertNameToInitials(name) {
    let initials = name[0].toUpperCase();

    for (let i = 1; i < name.length; i++) {
        if (name[i] === " ") {
            initials = initials + "." + name[i+1].toUpperCase();
            break;
        }
    }

    console.log(initials);
    return initials;
}

convertNameToInitials("atalia mucharsky");

// Write a function to convert a name into initials. This kata strictly takes two 
//words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F
