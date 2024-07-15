/* ------------ Task 3 ------------ */

const numOne = 12;
const numTwo = 14;
const numThree = 13;

if (numOne > numTwo && numOne > numThree) {
    console.log('numOne is greater than numTwo and numThree');
} else if (numTwo > numThree && numTwo > numOne) {
    console.log('numTwo is greater than numThree and numOne');
} else {
    console.log('numThree is greater than numOne and numTwo');
}

// Output :- numTwo is greater than numThree and numOne