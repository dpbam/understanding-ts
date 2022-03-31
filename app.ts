function add(n1:number, n2:number, showResult: boolean, phrase: string) {
    // type checking with vanilla JS
    // if (typeof n1 === 'number' && typeof n2 === 'number') {
    // return n1 + n2;
    // }
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //     throw new Error('Incorrect input');
    // }
    const result = n1 + n2

    if  (showResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2;
    }
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = 'Result is: ';

const result = add(number1, number2, printResult, resultPhrase);
console.log(result)

const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking', 'Biking'],
    role: [2, 'author']
};

// person.role.push('admin');
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ['Skiing', 'Soccer']


console.log(person.name)

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}