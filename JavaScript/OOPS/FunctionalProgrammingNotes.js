// WHAT IS FUNCTIONAL PROGRAMMING ?



// 1. Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects.
// 2. Functional programming is declarative (What needs to be done) rather than imperative (how it needs to be done, example: OOPS) and the state flows through pure functions.



// IMPERITIVE VS DECLARATIVE CODE - 

// const passwords = [
//   "123456",
//   "password",
//   "admin",
//   "helloworld",
//   "mypassword123",
// ];

//Imperetive code ->
//1. Telling how to find the long passwords with loops and stuff
//2. Looks complex and harder to test
// let longPasswords = [];
// for (let i = 0; i < passwords.length; i++) {
//   const password = passwords[i];
//   if (password.length >= 9) {
//     longPasswords.push(password);
//   }
// }

//Declarative Code ->
//1. Abstracts the process and returns the needed result
//2. Easier to predict and test
// const longPasswords = passwords.filter((password) => password.length >= 9);



// 3. Functional code tends to be more concise, more predictable, and easier to test than imperative or object oriented code.
// 4. Languages using functional programming - Erlang, Haskell





// ---------------------------------------------------------------------------------------------------
// FUNCTIONS ARE FIRST-CLASS OBJECTS - 



// 1. When doing Functional Programming, functions are first-class objects. This means you can use functions as if they were variables or constants.

// const byTwo = function (value) {
//   //function is assigned to a variable
//   return value / 2;
// };
// const ans = byTwo(8); //constant

// 2. You can combine functions with other functions and generate new functions in the process ( and higher-order functions) 




// ---------------------------------------------------------------------------------------------------
// PURE FUNCTIONS -




// 1. A pure function is a function which:
//      - Given the same inputs, always returns the same output (immutability)
//      - Has no side-effects
//      - Never changes the value passed in arguments which then leads to changing in the original value of that variable/object/function. Instead cretes a copy of that argument and then return the result.


// 2. In practical scenarios, think of pure functions as functions which return a predictable and deterministic value.

// //Pure Function
// function addTwo(a, b) {
//   return a + b;
// }
// //Impure Function
// function addTwo(a, b) {
//   console.log(a, b);
// }



// Question - 
// 1. Examine the following functions and tell if they are pure or impure with reasons.
// 2. Convert them to pure functions if impure


// Snippet 1
// function greetings(name) {
//   console.log("Hello, " + name);
// }

// Answer -
// In Snippet 1, the function is not returning anything instead its printing the value but pure functions always returns an expected value based on the passed arguments. Hence, its not a pure function.
// function greetings(name) {
//   return "Hello, " + name;
// }


// Snippet 2
// function addProperty(obj, property, value) {
//   obj[property] = value;
//   return obj;
// }



// HOW TO MAKE A COPY OF AN OBJECT - 
// // using  Object.assign() method
// let p2 = Object.assign({}, person);

// // using JSON
// let p3 = JSON.parse(JSON.stringify(person));




// Answer - 
// In Snippet 2, the function is changing the value of the argument which is passed into the functions which in turn later will change the original object value and pure functions don't do that. Instead they create a local copy of the passed arguments and do the changes in the local copy and return their values.
// function addProperty(obj, property, value) {
//     const newObj = JSON.parse(JSON.stringify(obj))
//     obj[property] = newObj;
//     return newObj;
// }




// ---------------------------------------------------------------------------------------------------
// SIDE-EFFECTS - 




// A side effect can be perceived as something a function does, which does not pertain to returning a value.
// Examples - printing a value, using global variables, doing external operations like changing the values of a different function, or even mutating the values/objects received as arguments
// A function is pure when it does not have side effects.



// Examples of side effects —
// 1. Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)
// 2. Logging to the console
// 3. Writing to a file
// 4. Calling any other functions with side-effects



// NOTE => 
// 1. In real-life scenarios it is practically impossible to write complex applications with just Pure functions.
// 2. But we can isolate the impure code and make it act like pure functions by returning a value and using only the values which have been passed 





// ---------------------------------------------------------------------------------------------------
// AVOID SHARING STATE - 



// 1. In FP we avoid declaring any global variables.
// 2. Instead pass the variables around from within a function to another function.



//Global Variables
// let x = 15;
// let y = 10;

// const add = () => {
//   //Impure function using global variables
//   return x + y;
// };

// const addFP = (x, y) => {
//   //Pure function only using what's passed to it
//   return x + y;
// };




// ---------------------------------------------------------------------------------------------------
// DESTRUCTURING IN ES6-

// The destructuring assignment syntax is a Javascript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.



// 1. ARRAY DESTRUCTURING -

// const myBioData = ['vinod', 'thapa', 26];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];

// console.log(myFName, myLName, myAge);

// Though this method to get all the values of the elements in the array is well and good but this method is not practicle if the array has hundreds or thousands of elements.

// So, for that we can destruture the array like this - 
// And we can add new values too.

// let [myFName, myLName, myAge, myDegree = "B.tech"] = myBioData;
// console.log(myFName, myLName, myAge, myDegree);



// 2. OBJECT DESTRUCTURING -
// const myBioData = { 
//     myFirstName : "Death",
//     myLastName : "Slayer",
//     myAge : "24",
//     myDegree : "B.tech",
// }

// let firstName = myBioData.myFirstName;
// let lastName = myBioData.myLastName;
// let age = myBioData.myAge;
// let degree = myBioData.myDegree; 
// console.log(firstName, lastName, age, degree);

// This above method to print the object properties will going to be a heckle if the object has hundreds of properties.

// Instead we can use Object Destructuring in this also - 
// But there is one catch here that the variables names we are declaring in object destructuring should be the same as keys in the objects otherwise it will not be able to map the keys to their values and will return undefined when printing those values.

// let {myFirstName, myLastName, myAge, myDegree} = myBioData;
// console.log(myFirstName, myFirstName, myAge, myDegree);





// ---------------------------------------------------------------------------------------------------
// OBJECT PROPERTIES - 



// 1. We can now use Dynamic Properties in Objects -
// So, If we want our other variables as dynamic key or value inside our object then, we can do that by putting that variable name inplace of key or value inside '[]' inside any object.
// let myName = "DeathSlayer";
// let age = 24;
// const myBio = {
//     [myName] : "ALex Mercer", 
//     age : age,
// }
// console.log(myBio);



// 2. No need ot write the key and value, if both are same
// let myName = "DeathSlayer";
// let myAge = 24;

// const myBio = {
//     myName: myName,
//     myage: myAge,
// }

// Instead of this we can write it as - 
// const myBio = {
//     myName,
//     myAge,
// }

// console.log(myBio);



// ---------------------------------------------------------------------------------------------------
// OBJECT CLASS - 



// 1. The Object class is used to create new object instances like let x = new Object() but also can be used to perform operations on objects or its properties.
// 2. Last time we saw that we can access the properties of an object with for...in loop and bracket notation.



// ---------------------------------------------------------------------------------------------------
// IMMUTABILITY - 

// -> An immutable object is an object that can’t be modified after it’s created. 
// -> Conversely, a mutable object is any object which can be modified after it’s created.
// -> Immutability of a pure function means that the function would treat its input values as immutable (once created, cannot be changed)
// -> So if we wish to perform a mutation on the input, we first copy it and then mutate its value.

// Example:
// -> An array.push(value) will mutate the original array with the value passed in the push function. 
// -> Instead to do this in an immutable fashion, we need to copy the state to some other variable and change the value.

// function purePush(arr, value) {
//   const nextArr = [...arr]; //copying; to not mutate original state

//   //Impure function called on local variable, not changing external state
//   nextArr.push(value);
//   return nextArr; //returing the new state
// }

// //Or better
// function purePush(arr, value) {
//   return [...arr, value]; //returns new array with elements from arr and value.
// }




// ---------------------------------------------------------------------------------------------------
// HIGHER ORDER FUNCTIONS -

// -> A function that accepts and/or returns another function is called a higher-order function.
// -> In JS, functions are first-class citizens because You can pass them around, store them in variables and arrays, use them as inputs for calculations. You can use them like any piece of data.
// -> The greatest benefit of HOFs is greater reusability.

// Eg- 
// const add = (x, y) => {
//   return x + y;
// };

// const diff = (x, y) => {
//   return Math.abs(x - y);
// };

// //Higher order function taking function as arg.
// const calculate = (callback, x, y) => {
//   const value = callback(x, y);
//   return value;
// };

// calculate(add, 4, 5); //9



// ---------------------------------------------------------------------------------------------------
// SUMMARY -

// Loops - while, do...while, for, for...in (immutability)
// -> Variable declarations with var or let (immutability)
// -> Void functions (which do not return any value) (explicitly return a value)
// -> Object mutation (for example: obj.x = 5;)
// -> Array mutation methods - pop, push, splice, sort, reverse, shift, unshift etc.


// RULES TO FOLLOW -
// -> DFor a specific input the function should return a predictable output, which can be determined beforehand.
// -> Function should not mutate anything outside the scope of the function.
// -> Function should not perform any side effects like changing external state.
// -> Function  should not use mutable functions like push(), pop(), splice(), shift() or unshift() to mutate original inputs or global values.
// -> Function should not assign/set the value of any item directly.
