// TOPICS FOR ADVANCED JS -
// -> Event Propogation
// -> Higher Order Functions
// -> Callback Functions
// -> Function Currying
// -> Callback Hell
// -> AJAX call using XMLHttpRequest
// -> JSON
// -> Fetch API
// -> Promises
// -> Async-await
// -> Error Handling in JS

// -----------------------------------------------------------------------------
// 1. EVENT PROPAGATION -

// What is Event Propagation?
// -> Event Propagation mode determines in which order the element receives events.
// -> Event Bubbling and Event Capturing are two ways of event propogation in the HTML DOM API, when an event occurs in an element inside another element, and both the elements have registered a handle for that event.
// -> Propogation is broadly categorized in 3 types -
//     - The capture phase - Going from the window to event target phase.
//     - The target phase - It is the target phase of the event
//     - The bubble phase - Going from the event target parent back to the window.
// -> Event Propogation can be stopped by using event.stopPropagation() method.

// What is Event Bubbling?
// -> With Event bubbling, the event is first captured and handled by the innermost element and then propogated to outer elements.
// -> Bydefault, the default propogation that happens in the DOM API is Event Bubbling.
// -> But we can call the event bubbling explicitly using the addEventListener method -
//     target.addEventListener(eventName, callback, false);

// What is Event Capturing?
// -> With Event Capturing, the event is first captured by the outermost element and then propogated to the innermost element.
// -> Capturing is also called Trickling, which helps remember the propogation order.
// -> We can call the event bubbling explicitly using the addEventListener method -
//     target.addEventListener(eventName, callback, true);

// --------------------------------------------------------------------------------------------------
// 2. Higher Order Function -
// Function that takes another order as an argument is called HOF
// More info from Crio Slides

// function add(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function divide(num1, num2) {
//   return num1 / num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }

// const calculator = (num1, num2, operation) => {
//   return operation(num1, num2);
// };

// console.log(calculator(10, 5, add));
// console.log(calculator(10, 5, subtract));
// console.log(calculator(10, 5, multiply));
// console.log(calculator(10, 5, divide));

// Note: Here calculator is HOF and add, subtract, multiply and divide are callback functions.

// ---------------------------------------------------------------------------------------------------
// 3. CallBack Functions -
// Functions which gets passed as an argument to another function is called Callback function.
// A callback function is a function that is passed as an argument to another function, to be "called back" at a later time.

// ---------------------------------------------------------------------------------------------------
// => METHOD BORROWING -
// - Method borrowing, also known as function borrowing, is, as its name implies, a way for an object to use the methods of another object without redefining that same method.
// - In JavaScript, we can reuse the method of a function on a different object other than the object it was defined on. Method borrowing helps to keep us from having to write the same code multiple times. Using the predefined JavaScript methods, call(), apply() or bind(), we can borrow methods from other objects without inheriting their properties and methods.

// EXAMPLE -
//
// code block
// const person1 = {
//     name: "John",
//     age: 15,
//     displayAge: function(){
//         console.log("He is " + this.age + " years old");
//     }
// };
// person1.displayAge(); /*Output: He is 15 years old*/

// const person2 = {
//     name: "Mike",
//     age: 20
// };
// person2.displayAge();
// Object person2 does not have the displayAge() method and, as seen below, calling this method on person2 gives an error.

// /*Using the call() method*/
// person1.displayAge.call(person2); //Output: He is 20 years old

// /*Using the bind() method*/
// person1.displayAge.bind(person2); //Output: He is 20 years old

// /*Using the apply() method*/
// person1.displayAge.apply(person2); //Output: He is 20 years old

// - All three methods allow us to change the object referred to by this.age() in the first code block.
// There are many benefits to method borrowing:
// 1. It prevents the unnecessary duplication of code.
// 2. It allows the user to use methods of different objects without inheriting.
// 3. Using method borrowing prevents the replication of methods in multiple object blocks and saves time.
