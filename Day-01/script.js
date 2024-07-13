// Activity 1

/* Task 1 */
var number = 12;
// console.log(number) // Output:- 12

/* Task 2 */
let string = 'Hello Charles!';
// console.log(string); // Output:- Hello Charles!

// Activity 2 

/* Task 3 */
const isMale = true;
// console.log(isMale) // Output:- true


// Activity 3

/* Task 4 */
let numberVal = 15;
console.log(typeof numberVal); // Output:- number

let stringVal = 'Hello World :)';
console.log(typeof stringVal); // Output:- string

let booleanVal = true;
console.log(typeof booleanVal); // Output:- boolean

let objectVal = {
    name: 'John Doe'
};
console.log(typeof objectVal); // Output:- object

let arrayVal = ['red', 'orange', 'green'];
console.log(typeof arrayVal); // Output:- object

// Activity 4

/* Task 5 */

let firstAssign = 'Red Ranger';
console.log(firstAssign); // Output :- Red Ranger

firstAssign = 'Yellow Ranger';
console.log(firstAssign); // Output :- Yellow Ranger

// Activity 5

/* Task 6 */

const name = 'Mark';
console.log(name); // Output :- Mark

// name = 'Peter'
// console.log(name) // output :- error Assignment to constant variable.

// Feature request

/* 1 */

let numberVar = 42;
let stringVar = "Hello, world!";
let booleanVar = true;
let nullVar = null;
let undefinedVar;
let objectVar = { name: "Alice", age: 30 };
let arrayVar = [1, 2, 3];
let functionVar = function () { return "I'm a function"; };

console.log(`numberVar: ${numberVar}, type: ${typeof numberVar}`); // Output :- numberVar: 42, type: number
console.log(`stringVar: ${stringVar}, type: ${typeof stringVar}`); // Output :- stringVar: Hello, world!, type: string
console.log(`booleanVar: ${booleanVar}, type: ${typeof booleanVar}`); // Output :- booleanVar: true, type: boolean
console.log(`nullVar: ${nullVar}, type: ${typeof nullVar}`); //Output :- nullVar: null, type: object
console.log(`undefinedVar: ${undefinedVar}, type: ${typeof undefinedVar}`); // Output :- undefinedVar: undefined, type: undefined
console.log(`objectVar: ${JSON.stringify(objectVar)}, type: ${typeof objectVar}`); // Output :- objectVar: {"name":"Alice","age":30}, type: object
console.log(`arrayVar: ${arrayVar}, type: ${typeof arrayVar}`); // Output :- arrayVar: 1,2,3, type: object
console.log(`functionVar: ${functionVar()}, type: ${typeof functionVar}`); // Output :- functionVar: I'm a function, type: function


/* 2) Reassignment Demo :- */

// using let

let initialLetVar = 12;
console.log('Initial value of initialLetVar', initialLetVar); // Output :- 12

initialLetVar = 23;
console.log('Changed value of initialLetVar', initialLetVar); // Output :- 23

// Using const
const age = 12;
console.log('Initial value of age', age); // Output :- 12

age = 14;
console.log('Changed value of age', age); // error Assignment to constant variable.