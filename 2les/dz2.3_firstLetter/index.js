const userName = prompt("Please input your name");

const userFirstLetter = userName.toUpperCase()[0];


const modifiedName = `${userFirstLetter}${userName.slice(1)}`;
console.log(modifiedName);

console.log(typeof modifiedName);

