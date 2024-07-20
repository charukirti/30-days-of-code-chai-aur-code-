// Task 1

let i = 1

do{
    console.log(i)
    i++
}while(i <= 5)

// Output :- 1, 2, 3, 4, 5

// Task 2

function factorial(n) {
    let result = 1;
    let i = n;
    do {
        result *= i;
        i--;
    } while (i > 1);
    return result;
}

console.log("Factorial of 5:", factorial(5)); 

// Output :- 120