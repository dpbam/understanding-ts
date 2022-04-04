

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tuple type
// } = {
//     name: 'Max',
//     age: 30,
//     hobbies: ['Sports', 'Cooking', 'Biking'],
//     role: [2, 'author']
// };

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ['Skiing', 'Soccer']


// console.log(person.name)

// for (const hobby of person.hobbies) {
//     console.log(hobby.toUpperCase());
// }

// Enum type
// enum {NEW, OLD}
// added by TS: Automatically enumerated global constant identifiers

enum Role { ADMIN, READ_ONLY, AUTHOR}; //default is 0, 1, 2. Can also assign first to another number and 
// each subsequent position increments by one, also can assign each to its own number OR even string

const person = {
    name: 'Max',
    age: 30,
    hobbies: ['Sports', 'Cooking', 'Biking'],
    role: 1 //or Role.READ_ONLY, or whatever
};

if (person.role === Role.AUTHOR) {
    console.log('is author');
}
