function accum(str) {
    let accumStr = str[0].toUpperCase() + "-";

    for (let i = 1; i < str.length; i++) {
        accumStr = accumStr+str[i].toUpperCase();
        
        for (let j = 1; j <= i; j++) {
            accumStr = accumStr + str[i].toLowerCase(); 
        }

        if (i+1 !== str.length)
        {
            accumStr = accumStr + "-";
        }
    }
    return accumStr;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
