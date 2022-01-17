// ASYNCHRONOUS JAVASCRIPT -
// -> Hoisting in JS
// -> Scope Chain
// -> Lexical Scope
// -> Use Strict Mode
// -> This keyword
// -> Closure in JS
// -> What is ASYNCHRONOUS JAVASCRIPT Programming
// -> What is Event Loop?


// How JS works?// ->
// https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f


// ---------------------------------------------------------------------------------------------------// 1. HOISTING IN JS -

// -> We have a creation phase and execution phase in JS.
// -> Hoisting in Javascript is a mechanism where variables and functions declarations are moved to the top of their scope before the code executes in the creation phase.
// -> Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.


// For example -
// console.log(myName);
// var myName;
// myName = "John Smith";

// How the above code will execute it during the creation phase.
// 1. var myName = undefined;
// 2. console.log(myName);
// 3. myName = "John Smith";


// NOTE : In ECMAScript2016 or ES6, hoisting is avoided by using the let and const keyword instead of using the var keyword. So, If we use let or const for the declarations of a variable/function then the hoisting mechanism won't apply to that variable or function declaration and it will throw error.



// ---------------------------------------------------------------------------------------------------//2.  Scope Chain and Lexical Scope in JavaScript -

// -> The scope chain is used to resolve the value of variable names in JS.
// -> Scope Chain in JS is lexically defined, which means that we can see what the scope chain will be by looking at the code.
// -> At the top level, we have the global scope, which is the window object in the browser.
// -> Lexical Scoping means, the inner function can get access to their parent functions variables But vice versa is not true.




// ---------------------------------------------------------------------------------------------------//3. Closure in JavaScript -

// -> A closure is a combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). Basically, closure store the references of its parent variables and argument passed to its inner function so, that their values can be used later even its parent excution is completed.
// -> In other words, a closure gives you access to an outer function's scope from an inner function.
// -> A closure is a function having access to the parent scope, even after the parent function has closed.
// -> In JavaScript, closures are created every time a function is created, at function creation time.

// For example -

// -> Its same like Lexical Scoping.
// But what is difference between Lexical Scoping and Closure? Search online.

// Note : Run this code in browser console to see the closure values.

// const outerFun = (a) => {
//   let b = 10;
//   const innerFun = () => {
//     let sum = a + b;
//     console.log(sum);
//   };
//   return innerFun;
// };
//
// outerFun(5);
// let checkClosure = outerFun(5);
// console.dir(checkClosure); 
// It is console.log() with more details.




// ---------------------------------------------------------------------------------------------------// Function Curring -

// What is function Curring?
// -> Curring is a technique of evaluating functions with multiple arguments, into a sequence of functions with single arguments.
// -> In other words, when a functionm instead of taking all arguments at one single time, takes the first one and returns a new function that takes the second one and returns a new function that takes the third one, and so forth, untill all the arguments have been passed.
// -> That is when we turn a function call add(1,2,3) into add(1)(2)(3).

// ONE WAY -
// function sum(a) {
//   return function (b) {
//     return function (c) {
//       console.log(a + b + c);
//     };
//   };
// }

// ANOTHER WAY - Using fat arrow.
// const sum = (a) => (b) => (c) => console.log(a + b + c);
// sum(4)(5)(6);




//---------------------------------------------------------------------------------------------------// Synchronous and Asynchronous Javascript -

// -> JavaScript Functions are First-Class Citizens -
// -> In JavaScript, you can create and modify a function, use it as an argument, return it from another function, and assign it to a variable. All these abilities allow us to use functions everywhere to place a bunch of code logically.
// -> We need to tell the JavaScript engine to execute functions by invoking them. It'll look like this:

// Define a function
// function f1() {
    // Do something
    // Do something again
    // Again
    // So on...
// }

// Invoke the function
// f1();

// -> By default, every line in a function executes sequentially, one line at a time. The same is applicable even when you invoke multiple functions in your code. Again, line by line.

// Synchronous Programming - 
// -> In synchronous operations tasks are performed one at a time and only when one is completed, the following is unblocked. In other words, you need to wait for a task to finish to move to the next one.


// Asynchronous Programming - 
// -> In asynchronous operations, on the other hand, you can move to another task before the previous one finishes. This way, with asynchronous programming you’re able to deal with multiple requests simultaneously, thus completing more tasks in a much shorter period of time.  


// Working of Synchronous and Asynchronous JS - 
// https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/

// When to Use Asynchronous Programming and How to Design Asynchornous System - 
// https://www.outsystems.com/blog/posts/asynchronous-vs-synchronous-programming/#:~:text=In%20synchronous%20operations%20tasks%20are,before%20the%20previous%20one%20finishes.





// ---------------------------------------------------------------------------------------------------// EVENT LOOP -

// What is Event Loop?
// JavaScript is a single-threaded synchronous programming language. But what does it actually mean? What is this event loop in JavaScript that we all keep talking about? 

// What does it actually mean when we say JavaScript is single threaded?
// It means that the main thread where JavaScript code is run, runs in one line at a time manner and there is no possibility of running code in parallel.


// What is Execution Context and Execution Stack?

// Execution Context - 
// -> Execution context is a concept in the language spec that—in layman's terms—roughly equates to the 'environment' a function executes in; that is, variable scope (and the scope chain, variables in closures from outer scopes), function arguments, and the value of the this object
// -> Execution context is the concept for describing the internal working of a code. In JavaScript, the environment that enables the JavaScript code to get executed is what we call JavaScript Execution Context. It is the execution context that decides which code section has access to the functions, variables, and objects used in the code. During the execution context, the specific code gets parsed line by line then the variables and functions are stored in the memory. An execution context is similar to a container that stores variables, and the code gets evaluated and then executed. Thus, it is the execution context that provides an environment for the specific code to get executed.

// Execution Stack - 
// -> The execution stack is also known as Call Stack.

// -> The stack is the data structure that stores the values in the form of LIFO (last in, first out). Similarly, an execution stack is a stack that carries track of all the execution contexts developed during the script life cycle. A JavaScript developer must be known of the fact that JavaScript works as single-threaded where it is capable of executing a single task in the web browser at a time. Thus, for other actions, functions, and events, a stack is created and is known as the Execution Stack. At the bottom of the execution stack, GEC resides, and it is present by default in the stack. So, when beginning a JS code execution (i.e., during GEC execution), when any function is present in the code, and the JS engine searches it, it instantly creates a function execution context (FEC) for that function and pushes it on the top of the execution context stack. The particular execution context which is available at the top of the execution context stack will always get executed by the JS engine first. As soon as the execution of all the code is done, the JS engine pops out the function's execution context and then moves towards the next and so on. Generally, when the script loads in the browser, the first element will be the global execution context. But when a function execution is detected, the execution context is created and gets virtually placed on the top of the GEC. The process continues until the execution of the whole code gets completed.

// More details on these - 
// https://www.javatpoint.com/javascript-execution-context

// Working of Event Loop - 
// https://www.geeksforgeeks.org/what-is-an-event-loop-in-javascript/
// https://www.javascripttutorial.net/javascript-event-loop/
// https://flaviocopes.com/javascript-event-loop/



// ---------------------------------------------------------------------------------------------------// CALLBACK HELL -

// What is Callback Hell?
// -> Callback Hell, also known as Pyramid of Doom, is an anti-pattern seen in code of asynchronous programming.
// -> It is a slang term used to describe and unwieldy number of nested “if” statements or functions.
// -> If you are not expecting your application logic to get too complex, a few callbacks seem harmless. But once your project requirements start to swell, you will quickly find yourself piling layers of nested callbacks. Congrats! Welcome to Callback Hell.


// How promises helps us to resolve them?
// https://www.bmc.com/blogs/callback-hell/#:~:text=Callback%20Hell%2C%20also%20known%20as,a%20few%20callbacks%20seem%20harmless.
// http://callbackhell.com/






// ---------------------------------------------------------------------------------------------------