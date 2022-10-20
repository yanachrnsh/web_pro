const lineToCheck = prompt("Please fill the line");

const numberOfLetters = lineToCheck.length;
console.log(numberOfLetters);


// первый вариант 

if (numberOfLetters >= 10) {
    console.log(lineToCheck.substr(0, 5));
} else {
    alert("Please input more than 10 symbols");
};


// второй вариант

if (numberOfLetters >= 10) {
    console.log(lineToCheck.substr(-5));
} else {
    alert("Please input more than 10 symbols");
};