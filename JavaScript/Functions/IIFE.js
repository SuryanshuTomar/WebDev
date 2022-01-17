// Immediatly Invoked Function Expressions or IIFE

// An IIFE is javascript function that runs as soon as it is defined. 
// It is design pattern which also known Self Executing Anonymous Function and contains 
// two parts -

// 1. The first is the anonymous function with lexical scope enclosed within the grouping 
// operator. This prevents accessing variables within within the IIFE idiom as well as
// polluting the global scope.
// 2. The second part creates the immediatly invoked function expression() through which the 
// javascript engine immediatly interprets the function.


(function() {
    console.log("This is an IIFE Function");
})();

(function(name) {
    console.log("Hi " + name);
})("DeathSlayer");







// What is Lexical Scope in JavaScript?

// Lexical scope is the definition area of an expression.

// In other words, an item's lexical scope is the place in which the item got created.

// Note:

//     Another name for lexical scope is static scope.
//     The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope.

// Example of Lexical Scope

// Consider the code below:

// // Define a variable in the global scope:
// const myName = "Oluwatobi";

// // Call myName variable from a function:
// function getName() {
//   return myName;
// }

// In the snippet above, notice that we defined the myName variable in the global scope and called it in the getName() function.

// Question: Which of the two spaces is myName’s lexical scope? Is it the global scope or the getName() function’s local scope?

// Answer: Remember that lexical scope means definition space — not invocation space. Therefore, myName’s lexical scope is the global scope because we defined myName in the global environment.