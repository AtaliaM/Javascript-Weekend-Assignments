function toCamelCase(str) {
    let camelCaseStr = "";
    let camelNextLetter = 0;

    for (let i = 0; i < str.length; i++) {

        if (camelNextLetter) {
            camelCaseStr = camelCaseStr + str[i].toUpperCase();
            camelNextLetter = 0;
        }

        else {

            if (str[i] === "-" || str[i] === "_") {
                camelNextLetter = 1;
            }

            else {
                camelCaseStr = camelCaseStr + str[i];
            }
        }
    }

    console.log(camelCaseStr);
}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
