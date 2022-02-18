// History of JavaScript -
// => In 1995, Brendan Eich created the very first version of JavaScript in just 10 days. It was called Mocha, but i it aready had many fundamental features of modern JS
// => In 1996, Mocha changed to LiveScript and then to JavaScript, in order to attrach Java developers. However,JS has nothing to do with Java.
// => Microsoft launches IE, copying JS from Netscape and calling it Jscript.
// => In 1997, with a need to standardize the language, ECMA releases ECMAScript 1(ES1), the first official release fro JS(ECMAScript is the standard and JS is the language in practice).
// => In 2009, ECMAScript 5(ES5) was released with a lots of great new features.
// => In 2015, ECMAScript 6(ES6) was released: the biggest release update to the language till then.
// => ECMAScript changes to annual release cycle to ship less features per update.

// -----------------------------------------------------------------------------------------------------------
// Backward and Forward Compatibility -
// 1. JavaScript is backwards-compatible. This means that once something is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid JS. JS code written in 1995 - however primitive or limited - should still work now.

// The idea is that JS developers can write code with confidence that their code wouldn’t stop working unpredictably because a browser update is released.

// 2. JS is not forwards-compatible. This means that including a new addition to the language in a program would cause that program to break if it were run in an older JS engine. So if you run a program that uses an ES2019 feature in an engine from 2016, the program will very likely break and crash.

// Transpiler:
// Typically forwards-compatibility problems related to syntax are solved by using a transpiler to convert from a newer JS syntax to an equivalent older version. The most common transpiler being used is Babel, which is mainly used to convert ECMASCRIPT-2015+ code into backwards compatible version of JavaScript in current and older browsers or environments.

// Polyfill:
// If the forwards-compatibility issue is not related to new syntax, but rather to a missing API method that was only recently added, the most common solution is to provide a definition for that missing API method that stands in and acts as if the older environment had already had it natively defined. This pattern is called a polyfill (aka "shim").

// -----------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------

// 1 -> let and const:
// var => Global scope/ Function scope
// let and const => Block scope

// --------------------------------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------------------------------

// 3. Default Arguments:
// function sum(a=0, b=0){
//     return a + b;
// }
// console.log(sum(34, 54));

// ---------------------------------------------------------------------------------------------------

// 4. Fat Arrow Function:
// -> Arrow functions allow us to write shorter function syntax
// hello = () => {
//   return "Hello World!";
// }
// console.log(hello());

// -> It gets shorter! If the function has only one statement, and
// the statement returns a value, you can remove the brackets and the return keyword:
// hello = () => "Hello World!";
// console.log(hello());

// -> If you have parameters, you pass them inside the parentheses
// hello = (val="DeathSlayer") => "Hello " + val;
// console.log(hello());

// ->Arrow functions are all anonymous functions
// -> Unlike traditional function we cannot call arrow function before their definition

// ---------------------------------------------------------------------------------------------------
// REST OPERATOR (...)-

// 1. Rest Operator (...argument) is an improved way to handle the function parameter, allowing us to to more easily handle various input as parameters in a function. The Rest Operator syntax allows us to represent an indefinite number of arguments as an array.
// 2. It gathers/ collect items in an array in case of all data types and object in case of object.
// 3. It can be used in -
// A. Destructuring
// B. Function declarations
// 4. It collects all the extra arguments passed to the function or in destructuring.
// 5. Rest operators must be put as last parameter, any variable put after the rest parameter will not be assigned any value.
// 6. The option to use the Rest operator with the objects came in ES2018 - ES8

// CODE -
// function sum(a, b) {
//   console.log("Sum is : ", a + b);
// }

// sum(4, 5, 3);

// But in this case, we can only pass a fixed number of arguments and if we pass more than this then, it wont, be able to return the sum of that number. So, to pass variable number of arguments we use Rest Operator(...argument).

// CODE -

// Rest in Functions -
// function sum(...input) {
//   let sum = input.reduce((accumulator, element) => accumulator + element)
//   console.log("Sum is : ", sum);
// }
// sum(4, 5, 3, 3, 56, 5, 7, 8, 9, 56, 0);

// CODE -

// Arrays Destructuring-
// const fruits = ['apple', 'orange', 'lemon', 'banana'];
// const [firstFruit, ...restFruits] = fruits;
// console.log(firstFruit, restFruits);

// Objects Destructuring-
// const person = { firstName: "John", lastName: "Smith", job: "Developer", age: 35}
// const {firstName, ...remainingProperties} = person;
// console.log(firstName, remainingProperties);

// NOTE - When we talk about Rest Operator, we are talking about using rest operators in function declarations.

// --------------------------------------------------------------------------------------------------
// SPREAD OPERATOR (...) -

// 1. Spread operator allows an iterable to expand in places where 0+ arguments are expected. It is mostly used in the variable array where there is more than 1 values are expected. It allows us the privilege to obtain a list of parameters from an array. Syntax of Spread operator is same as Rest parameter but it works completely opposite of it.
// 2. Basically, The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
// 3. The spread operator is often used in combination with destructuring.
// 4. By using the spread operator, we are making sure that the original array/object is not affecting whenever we alter the new array/object.
// 5. This will split the data into single items and DEEP COPY them, whereas simple variable assignment will only create a reference to the original array/object which is a SHALLOW COPY.
// 6. Spread operators can be used as a first parameter or can be used as a second parameter or last parameter. Unlike Rest operators which can be used as a first parameter only.
// 7. The option to use the spread operator with the objects came in ES2018 - ES8
// 8. It can also convert the collections into arrays.

// SYNTAX :
// var variablename1 = [...value];

// CODE -

// Using with Arrays -
// Example - 1 :
// const colors = ['red', 'blue', 'green', 'yellow', 'black'];

// So we can make a copy of this array like this  and perform changes to our need -
// const newColors = ['red', 'blue', 'green', 'yellow', 'black', 'purple', 'violet', 'pink'];
// console.log(colors, newColors);

// But this is not an efficient way to copy array of object for that matter. We can use the spread operator to make things simpler.
// const copyColor = [...colors, 'purple', 'violet', 'pink'];
// console.log(copyColor);

// Example - 2 :
// const boys = ['josn', 'peter', 'bob'];
// const girls = ['susan', 'anna'];
// const bestFriend = "arnold";

// This will print an array of boys as an array, girls as an array, and bestFriend as element.
// const friendsCollections = [boys, girls, bestFriend];
// console.log(friendsCollections)

// But this print an array of all the elements present in boys, girls and bestFriend.
// const friends = [...boys, ...girls, bestFriend];
// console.log(friends)

// Using with Objects -
// const person = { firstName: "John", lastName: "Smith", job: "Developer", age: 35}
// const newPerson = {...person};
// console.log(person);
// console.log(newPerson);

// Just like in arrays, any change we made to the new object created with the spread operator will not affect the original object as it creates a deep copy of the object. Whereas if we create a copy using just assignment operator that will create a shallow copy and any changes made from that shallow copy Object will affect the original object as well since its not actually creating a copy but its creating a reference pointing to the original object itself in the heap memory.

// NOTE - When we talk about SPREAD Operator, we are talking about using SPREAD operators in function invokations.

// --------------------------------------------------------------------------------------------------
// Major changes in ECMA Script (ES7) / 2016 -
// 1. Array.prototype.includes
// 2. Exponentiation Operator

// ---------------------------------------------------------------------------------------------------
// 1. Array Includes  -
// It will return true or false based on whether an element is present in the array or not.

// const colors = ['red', 'green', 'blue', 'yellow', 'purple']
// const isPresent = colors.includes('purple');
// console.log(isPresent)

// ---------------------------------------------------------------------------------------------------
// 2. Exponentiation Operator (**) -
// It will return the power of a number -> a**b means a * (times b)

// console.log(2**3)

// ---------------------------------------------------------------------------------------------------
// Major changes in ECMA Script (ES8) / 2017 -
// 1. String Padding
// 2. Object.keys()
// 3. Object.values()
// 4. Object.entries()
// 5. Object.assign()
// 6. Array.prototype.flat();

// ---------------------------------------------------------------------------------------------------
// 1. String Padding -

// -> String.prototype.padStart()
// -> The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. The padding is applied from the start of the current string.
// -> padStart(targetLength)
// -> padStart(targetLength, padString)

// -> String.prototype.padEnd()
// -> The padEnd() method pads the current string with a given string (repeated, if needed) so that the resulting string reaches a given length. The padding is applied from the end of the current string.
// padEnd(targetLength)
// -> padEnd(targetLength, padString)

// NOTE:
// Parameters
// targetLength
// The length of the resulting string once the current str has been padded. If the value is less than str.length, then str is returned as-is.

// padString Optional
// The string to pad the current str with. If padString is too long to stay within the targetLength, it will be truncated from the end. The default value is the unicode "space" character (U+0020).

// Return value
// A String of the specified targetLength with padString applied from the start.

// let name = "Death";
// let paddedString = name.padStart(8);
// console.log(paddedString);
// paddedString = paddedString.padEnd(12, "th");
// console.log(paddedString);

// ---------------------------------------------------------------------------------------------------
// 2. Object Class Properties -

// -> It is used to create new object instances like let x = new Object() but also can be used to perform operations on objects or its properties.
// -> Last time we saw that we can access the properties of an object with for...in loop and bracket notation.

// SOME OBJECT CLASS METHODS.
// -> Object.entries(obj) - Returns an array containing all of the [key, value]
// -> Object.keys(obj) - Returns an array containing the names of all of the given object
// -> Object.values(obj) - Returns an array containing the values of the object
// -> Object.assign(target, source) - Copies the source object to target

// eg -
// const person = {
//     name: 'John',
//     age: 27,
//     job: 'Developer'
// };
// let anotherPerson = {};

// console.log(Object.entries(person));
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.assign(anotherPerson, person));

// ---------------------------------------------------------------------------------------------------
// Major changes in ECMA Script (ES9) / 2018 -
// 1. Array.prototype.{flat.flatMap}
// 2. Object.fromEntries

// ---------------------------------------------------------------------------------------------------
// 1. Array.prototype.flat() -

// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

// Syntax -
// flat()
// flat(depth)

// ---------------------------------------------------------------------------------------------------
// 2. Array.prototype.flatMap() -

// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.

// Parameters -
// callbackFn
// Function that produces an element of the new Array, taking three arguments:

// currentValue
// The current element being processed in the array.

// indexOptional
// The index of the current element being processed in the array.

// arrayOptional
// The array map was called upon.

// thisArgOptional
// Value to use as this when executing callbackFn.

// Return value
// A new array with each element being the result of the callback function and flattened to a depth of 1.

// NOTE : See Array.prototype.map() for a detailed description of the callback function. The flatMap method is identical to a map followed by a call to flat of depth 1.

// eg -
// let arr1 = [1, 2, 3, 4];

// arr1.map(x => [x * 2]);
// // [[2], [4], [6], [8]]

// arr1.flatMap(x => [x * 2]);
// // [2, 4, 6, 8]

// // only one level is flattened
// arr1.flatMap(x => [[x * 2]]);
// // [[2], [4], [6], [8]]

// ---------------------------------------------------------------------------------------------------
// 3. Object.fromEntries() -

// -> Object.fromEntries(obj) - Returns an object from an array of arrays.

// eg -
// const person = {
//     name: 'John',
//     age: 27,
//     job: 'Developer'
// };

// let obj = Object.entries(person);
// console.log(obj);
// let newObj = Object.fromEntries(obj);
// console.log(newObj);
