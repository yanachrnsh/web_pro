const spamCheck = prompt("Please input the text. We are checking spam");

console.log(spamCheck.includes("free"));

const isThereSpam = spamCheck.includes("free");

console.log(`Is there spam? ${isThereSpam}`);

alert(isThereSpam);

