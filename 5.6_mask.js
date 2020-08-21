function maskify(textToMask) {
    let maskedText = "";

    if (textToMask.length <= 4) {
        console.log(textToMask)
        return textToMask;
    }

    for (let i = 0; i < textToMask.length-4; i++) {
        maskedText = maskedText+"#";
    }

    for (let i = textToMask.length-4; i < textToMask.length; i++) {
        maskedText = maskedText+textToMask[i];
    }

    console.log(maskedText);
    return maskedText;
}

maskify("Skippy");
maskify("4556364607935616");
maskify(                "");
maskify(               "1");
maskify("Nananananananananananananananana Batman!");

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"
