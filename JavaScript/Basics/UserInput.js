// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Who are you? ', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

// The below method require to install the prompt-synch module to be installed first.
// Otherwise it wont work

"use strict";

const ps = require("prompt-sync");
const prompt = ps();
let name = prompt("Enter your name: ");
console.log("Welcome " + name);