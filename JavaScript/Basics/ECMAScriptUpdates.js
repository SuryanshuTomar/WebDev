// Major changes in ECMA Script (ES6) / 2015
// 1. Let and Const
// 2. Deconstructing
// 3. Template strings
// 4. Object Properties
// 5. Default Arguments
// 6. Arrow Functions
// 7. Rest Operators
// 8. Spread Operators
// 9. For in and For of loop

// 1 -> let and const:
// var => Global scope/ Function scope
// let and const => Block scope

// 2. Template literals:
// -> Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
// let text1 = `Hello World!`;
// console.log(text1);

// -> With template literals, you can use both single and double quotes inside a string:
// let text2 = `He's often called "Johnny"`;
// console.log(text2);

// -> Template literals allows multiline strings also.
// let text3 =
// `The quick
// brown fox
// jumps over
// the lazy dog`;
// console.log(text3);

// -> Template literals provide an easy way to interpolate variables and expressions into strings.
// The method is called string interpolation.
// It also allows us to use variable and expression susbstitution.
// let price = 10;
// let VAT = 0.25;
// let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
// console.log(total);

// 3. Default Arguments:
// function sum(a=0, b=0){
//     return a + b;
// }
// console.log(sum(34, 54));

// 4. Fat Arrow Function:
// -> Arrow functions allow us to write shorter function syntaxhello = () => {  return "Hello World!";};console.log(hello());

// -> It gets shorter! If the function has only one statement, and
// the statement returns a value, you can remove the brackets and the return keyword:hello = () => "Hello World!";console.log(hello());

// -> If you have parameters, you pass them inside the parentheseshello = (val = "DeathSlayer") => "Hello " + val;console.log(hello());

// ->Arrow functions are all anonymous functions
// -> Unlike traditional function we cannot call arrow function before their definition

// -----------------------------------------------------------------------------
// ECMAScript 2020 -
// All from freecodecamp
// 1. BigInt
// 2. Dynamic Import
// 3. Nullish Coalescing

// ECMAScript 2014 -
// 1. 'use strict' mode
// from online definition
