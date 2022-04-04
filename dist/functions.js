"use strict";
// functions and types
// return types. let TS infer the return type if possible
function add(n1, n2) {
    return n1 + n2;
}
// void type: doesn't return a value, doesn't have a return statement
function printResult(num) {
    console.log('Result: ' + num);
}
// callbacks and function types
function addAndHandle(n1, n2, callback) {
    const result = n1 + n2;
    callback(result);
}
printResult(add(5, 12));
//
// let combineValues;
// combineValues = add;
// console.log(combineValues(8, 8)); //executing the add function using a variable. This is a problem. 
// You want to be implicit in defining the return value type of the function. for this we can use the Function type, that defines that what the variable is being used for is a function and nothing else
// let combineValues: Function;
// more precise:
// combineValues will hold a function that takes two number arguments and returns a number
let combineValues;
combineValues = add;
// combineValues = 5;
// combineValues = printResult;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
