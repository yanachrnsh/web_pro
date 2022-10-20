

// let number = 1; 
// const str = number.toFixed(1);
// console.log(isFinite(number));


// пример, 100px, 2rem 

// parseInt, parseFloat - вывод числа из строки

const str = '100px';
console.log(parseInt(str))

const str2 = '10.5px';
console.log(parseInt(str2))

const str3 = '10.5px';
console.log(parseFloat(str3))

const str4 = '20rem';
console.log(parseInt(str4))

const age = 30;
const str5 = age.toString();
console.log(typeof str5);


function getRandomInt(max) {
    return (Math.random() * 10);
}

console.log(getRandomInt());

const max = Math.max(1, 2, 4, 67, 999999);
console.log(max);

const min = Math.min(1, 2, 4, 67, 999999);
console.log(min);

userName = "Marusya"
console.log(userName.charAt(0));
