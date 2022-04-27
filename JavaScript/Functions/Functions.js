// => FUNCTIONS -
// What is a Function?// - A function is a process which takes some input, called arguments, and produces some output called a return value. Functions may serve the following purposes:// - Mapping: Produce some output based on given inputs. A function maps input values to output values.// - Procedures: A function may be called to perform a sequence of steps. The sequence is known as a procedure, and programming in this style is known as procedural programming.// - I/O: Some functions exist to communicate with other parts of the system, such as the screen, storage, system logs, or network.
// --------------------------------------------------------------------------------------------------// => TYPES OF FUNCTIONS IN JS -
// 1. Function Definition or Function Statementfunction avg(a, b) {  return (a + b) / 2; //return statement}
// => Function with Default Parameters -const bookingData = [];
// ES6 way of setting default parametersfunction createBooking(  flightNum = "A320",  numPassenger = 1,  price = 199 * numPassenger) {  // ES5 way of setting default parameters.  // flightNum = flightNum || "A320";  // numPassenger = numPassenger || 1;  // price = price || 199
  const booking = {    flightNum,    numPassenger,    price,  };
  console.log(booking);  bookingData.push(booking);}
createBooking("Boing 737");createBooking("Airline 59", undefined, 2);
// --------------------------------------------------------------------------------------------------// 2. Function Expressions -
// In this functions are declared and defined as variables.const average = function (...nums) {  return nums.reduce((sum, num) => (sum = sum + num)) / nums.length;};
// console.log(`The averages are : ${average(1, 2, 3, 4, 5)}`);
// -----------------------------------------------------------------------------------------------// 3. Anonymous Functions -
// Anonymous Function is a function that does not have any name associated with it.// Normally we use the function keyword before the function name to define// a function in JavaScript, however, in anonymous functions in JavaScript,// we use only the function keyword without the function name.
let sum = function (a, b) {  return a + b;};
// console.log(sum(56, 76));
// ------------------------------------------------------------------------------------------------// 4. Immediatly Invoked Function Expressions or IIFE
// An IIFE is javascript function that runs as soon as it is defined.// It is design pattern which also known Self Executing Anonymous Function and contains// two parts -
// 1. The first is the anonymous function with lexical scope enclosed within the grouping// operator. This prevents accessing variables within within the IIFE idiom as well as// polluting the global scope.// 2. The second part creates the immediatly invoked function expression() through which the// javascript engine immediatly interprets the function.
(function () {  //   console.log("This is an IIFE Function");})();
(function (name) {  //   console.log("Hi " + name);})("DeathSlayer");
(() => console.log("This will also never run again !!!"))();
// --------------------------------------------------------------------------------------------------// 5. Arrow Functions -
// --------------------------------------------------------------------------------------------------// => Functions Returning Functions -// - EXAMPLE -
// const greet = function (greeting) {//   return function (name) {//     console.log(`${greeting} ${name}`);//   };// };// const greeterHey = greet('Hey');// greeterHey('Jonas');// greeterHey('Steven');// greet('Hello')('Jonas');// // Challenge// const greetArr = greeting => name => console.log(`${greeting} ${name}`);// greetArr('Hi')('Jonas');
// --------------------------------------------------------------------------------------------------// => LEXICAL SCOPING IN JS -
// - Lexical scope is the definition area of an expression.// - In other words, an item's lexical scope is the place in which the item got created.
// Note:// - Another name for lexical scope is static scope.// - The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.
// - Example of Lexical Scope -// Consider the code below:
// // Define a variable in the global scope:// const myName = "Oluwatobi";
// // Call myName variable from a function:// function getName() {//   return myName;// }
// - In the snippet above, notice that we defined the myName variable in the global scope and called it in the getName() function.
// - Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?// Answer: Remember that lexical scope means definition space — not invocation space. Therefore, myName’s lexical scope is the global scope because we defined myName in the global environment.
// -----------------------------------------------------------------------------------------------// => FIRST CLASS FUNCTIONS VS HIGHER ORDER FUNCTIONS -
// - First Class Functions -// 1. JS treats functions as First-Class Citizens// 2. This means that functions are "Simply values"// 3. Functions are just another "type of object"// 4. We can store functions in variables or properties// 5. We can also pass functions as arguments to another function which are called CallBack Functions// 6. We can also return a value as functions.// 7. We can call methods also on functions like bind() method.
// - Higher Order Functions -// 1. A higher-order function is a function that recieves a function as arguments or returns a function or do both.// 2. This can only be possible because of the first-class functions.
// Note -// 1. First class function is just a feature which a programming language either has or does not have. There are no first-class functions in practice.// 2. Whereas Higher Order Functions are used in practice which is possible because a programming supports first-class function.// 3. CallBack functions allows us to implement abstraction in the code.
// Example 1 -// const firstWordUpperCase = function (str) {//   const [first, ...others] = str.split(" ");//   return [first.toUpperCase(), ...others].join(" ");// };
// const tranformer = function (str, fn) {//   console.log("Original string : ", str);//   console.log("Tranformed string : ", fn(str));//   console.log("Transformed By : ", fn.name);// };
// tranformer("JavaScript is the best language", firstWordUpperCase);
// Example 2 -// // Using function expressions// const greet1 = function (greetings) {//   return function (name) {//     console.log(`${greetings} ${name}`);//   };// };// // Using arrow functions// const greet2 = (greetings) => (name) => console.log(`${greetings} ${name}`);
// // One Way// const greeter = greet1("Hey");// greeter("Jonas");// greeter("Alice");
// // Another Way// greet2("Hey")("Emily");
