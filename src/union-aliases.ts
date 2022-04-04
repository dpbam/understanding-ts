// Union types, to accept TWO or MORE different types, kind of like any, but more restricted

function combine(
    input1:number | string, 
    input2:number | string, 
    resultConversionType: 'as-number' | 'as-text'
    ) {
    // extra runtime check to make it clear to TS
    let result;
   if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversionType === 'as-number') {
    result = +input1 + +input2;

   } else {
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
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames)

// Literal types
// where you're very clear of the exact VALUE it should hold, not just the type
// we want the caller of the function to determine HOW the thing should be returned, force a conversion from number to string and vice versa


// Type aliases
// type keyword

type Combinable = number | string; // then refer to Combinable instead of writing 'number | string' or any type setup
type ConversionDescriptor = 'as-number' | 'as-text'

function combination(
    input1: Combinable, 
    input2: Combinable, 
    resultConversionType: ConversionDescriptor
    ) {}