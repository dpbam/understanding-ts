"use strict";
// Union types, to accept TWO or MORE different types, kind of like any, but more restricted
function combine(input1, input2, resultConversionType) {
    // extra runtime check to make it clear to TS
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversionType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //    if (resultConversionType === 'as-number') {
    //        return +result;
    //    } else {
    //        return result.toString();
    //    }
    //     return result;
}
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
function combination(input1, input2, resultConversionType) { }
