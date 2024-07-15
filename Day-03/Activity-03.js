/* -------------- Task 4 --------------- */

let dayOfWeek = 1;
let dayName;

switch (dayOfWeek) {
    case 1:
        dayName = 'Monday';
        break;
    case 2:
        dayName = 'Tuesday';
        break;
    case 3:
        dayName = 'Wednesday';
        break;
    case 4:
        dayName = 'Thursday';
        break;
    case 5:
        dayName = 'Friday';
        break;
    case 6:
        dayName = 'Saturday';
        break;
    case 7:
        dayName = 'Sunday';
        break;
    default:
        console.log('You entered wrong dayOfWeek');
}

console.log('Day name is', dayName); // Output:- Day name is Monday



/* -------------- Task 5 --------------- */

let score = 85;  
let grade;

switch (true) {
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  default:
    grade = 'F';
}

console.log('The grade is', grade); // Output :- The grade is B
