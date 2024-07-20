// Traditional Solve for Fizzbuzz, using a loop.

function FizzBuzzA(value1, value2) {
    let returnValue = "";
    for (let i = 1; i <= 100; i++) { // loops i from 1 to 100 and increments by 1
        if (i % value1 === 0 && i % value2 === 0) {
            returnValue += 'Fizzbuzz ';
        } else if (i % value1 === 0) {
            returnValue += 'Fizz ';
        } else if (i % value2 === 0) {
            returnValue += 'Buzz ';
        } else {
            returnValue += i + ' ';
        }
    }
    return returnValue;
    // Moved return returnValue; outside the loop, so the full string is returned after the loop completes
}

// Call and use our Fizzbuzz

function buzzIt() {
    let output = "";
    let val1 = document.getElementById('Fizzvalue').value;
    let val2 = document.getElementById('Buzzvalue').value;
    output = FizzBuzzA(val1, val2);
    document.getElementById('results').innerHTML = output;
}
