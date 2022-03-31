function add(n1, n2, showResult, phrase) {
    // type checking with vanilla JS
    // if (typeof n1 === 'number' && typeof n2 === 'number') {
    // return n1 + n2;
    // }
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input');
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
var result = add(number1, number2, printResult, resultPhrase);
console.log(result);
var person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities;
favoriteActivities = ['Skiing', 'Soccer'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
