// OBJECT ORIENTED JAVASCRIPT

// What is Object Literals in JavaScript?
// Object literals is simply a 'key:value' pair data structure.
// Storing variables and functions together in one container.
// We can refer this as an object.

// 1. A Class-Based language (like JAVA and C++) have a class construct which defines all the properties that characterize a set of objects
// 2. A Prototype-Based language has a notion of an object which serves as a template from which we get the properties of a new object.
// 3. JavaScript by design is not a class-based object-oriented language but a prototype-based language.
// 4. Classes were introduced after ES6 in JS

// ---------------------------------------------------------------------------------------------------
// UNDERSTANDING OBJECTS -

// 1. An object can be created like normal JS object with key-value pairs.
// 2. Objects can have a special type of property, called a method which are properties that are functions.
// 3. We can access the properties or methods by using the dot notation or bracket notation.

// const person1 = {
//  name: "Yash Gulati",
//  address: {
//    city: "Bangalore",
//    country: "India"
//  },
//  interests: ["Product Development", "Book reading", "Mentoring"]
// };

// console.log(person.name); //Yash Gulati
// console.log(person.address.city); //Bangalore
// console.log(person.address.country); //India

// ---------------------------------------------------------------------------------------------------
// HOW TO CREATE AN OBJECT?

// 1st Way-
// let bioData = {
//   myName: "DeathSlayer",
//   myAge: 9999,
//   getData: function () {
//     console.log(`Name : ${this.myName} and Age : ${this.myAge}`);
//   },
// };
// Here myName is the Object literal.
// We can add any kind of data into the object, even the functions.

// console.log(bioData.myName + " " + bioData.myAge);
// bioData.getData();

// 2nd Way-
// let bioData = {
//   myName: "DeathSlayer",
//   myAge: 9999,
//   getData() {
//     console.log(`Name : ${this.myName} and Age : ${this.myAge}`);
//   },
// };
// After ECMAScript 2015 ES6, we can directly define the functions inside an object without using the object conventions of defining an object member in a key value pair.

// Ques : What if we want object as a member of object inside it?
// Answer : YES
// let bioData = {
//   myfullName: {
//     firstName: "Death",
//     lastName: "Slayer",
//   },
//   myAge: 9999,
//   getData() {
//     console.log(
//       `Name : ${bioData.myfullName.firstName}${bioData.myfullName.lastName} and Age : ${this.myAge}`
//     );
//   },
// };
// bioData.getData();

// -----------------------------------------------------------------------------------------------------------
// ACCESSING PROPERTIES OF AN OBJECT -
// There are two ways to access properties on an object:
// 1. The Dot Notation - Dot notation is used most frequently. Below we’ll dive into each and discover some of the differences.
// Example:
// let obj = {
//   cat: 'meow',
//   dog: 'woof'
// };
// let sound = obj.cat;
// console.log(sound);
// // meow

// 2. Bracket Notation - You can access properties on an object by specifying the name of the object followed by the property name in brackets.
// Example:
// let obj = {
//   cat: 'meow',
//   dog: 'woof'
// };
// let sound = obj['cat'];
// console.log(sound);
// // meow

// NOTE:
// Dot notation:
// - Property identifies can only be alphanumeric (and _ and $)
// - Property identifiers cannot start with a number.
// - Property identifiers cannot contain variables.
// - OK — obj.prop_1, obj.prop$
// - Not OK — obj.1prop, obj.prop name

// Bracket notation:
// - Property identifiers have to be a String or a variable that references a String.
// - It is okay to use variables, spaces, and Strings that start with numbers
// - OK — obj["1prop"], obj["prop name"]

// More Info:
// https://medium.com/dailyjs/dot-notation-vs-bracket-notation-eedea5fa8572

// -------------------------------------------------------------------------------
// WHAT IS "this" OBJECT ?
// The definition of 'this' object is that it contains the current context.
// 'this' object can contains different values depending upon where it is placed.

// Example1 -
// console.log(this);
// It refers to the current context and in this case it is window object.

// Example2 -
//   function myName() {
//     console.log(this);
//   };
// myName();

// Example3 -
//  let bioData = {
//   myName: "DeathSlayer",
//   myAge: 9999,
//   getData: function () {
//     console.log(`Name : ${this.myName} and Age : ${this.myAge}`);
//   },
// };

// Note : 'this' object will not work with arrow functions. with arrow functions, this object will return the window object and not the current context object.

// ---------------------------------------------------------------------------------------------------
// CONSTRUCTORS -

// 1. We can create objects and initialize its properties by using special function called Constructors.
// 2. Constructors help us create a blueprint for creating objects.
// 3. We reference the properties of the object inside the constructor using this keyword -
//      - A constructor (like a function) can be parameterized or non-parameterized.
//      - It is written with Capital or PascalCase

//Constructor Function with parameters
// function Car(make, model, color) {
//  this.make = make; //setting "make" property of Car object
//  this.model = model;
//  this.color = color;
//  this.start = function () {   //"start" function of Car object
//  console.log("Car Start");

// Constructors - Creating Objects -
// 1. We can create a new object with a constructor using the new keyword. When used, it does 3 things -
// 2. It creates a new empty object. {}
// 3. Sets this to point to the new object created -
//      - It will be helpful in setting properties of the new object from inside the constructor
//      - this -> {}
// 4. Returns the newly created object from the Constructor function.

// const myCar = new Car("Audi", "Q3", "Black");
// console.log(myCar.color) //Black

// NOTE => “this keyword points to the object executing the current function.”
// 1. For an object method ⇒ it points to object executing the method.
// const person = {
//   name: "Yash Gulati",
//   greet: function () {
//     console.log("Hello! " + this.name);
//   },
// };
// person.greet(); //person is the object executing greet()

// 2. For a regular function ⇒ points to the global window object.
// function hello() {
//   console.log(this);
// }
// hello();

// NOTE => “this keyword points to the object this is executing the current function.”
// In a constructor (or if you call an object using the new operator), this references an empty object in the memory.
// NOTE => functions inside a class (or/and object in js) is called a method.

// ---------------------------------------------------------------------------------------------------
// BIND METHOD -

// Observe that when we pass the method as callback, the value of this is lost and when the executor function executes the callback, this is not pointing to the student object anymore.

// //Defining an object
// const student = {
//   fullName: "Rohit",
//   greet: function () {
//     //We want to print "Hello, Rohit"
//     console.log("Hello, " + this.fullName);
//   },
// };

// //We define an executor function
// function executeObjectFunction(callback) {
//   callback();
// }

// //Passing the object method as callback
// executeObjectFunction(student.greet);

// STEPS -
// 1. What we can do is pass the value of this explicitly to the student.greet method
// 2. To achieve this we have a method which we can apply on methods → bind

// //FIX: bind the object to the method.
// const greet = student.greet.bind(student);

// //Passing the object method as callback
// executeObjectFunction(greet);

// 3. The bind() method returns a new function
// 4. It helps us set the value of this to the passed value for specific function.

// Question - Fix the given code to show the timer after 1s.
// After fixing, the code, 10 should be console logged after 1s.

// const timer = {
//   currentTime: 0,
//   showTime: function () {
//     console.log(this.currentTime);
//   },
//   addTen: function () {
//     this.currentTime += 10;
//     this.showTime();
//   },
// };

// setTimeout(timer.addTen, 500);

// Answer -
// const timer = {
//   currentTime: 0,
//   showTime: function () {
//     console.log(this.currentTime);
//   },
//   addTen: function () {
//     this.currentTime += 10;
//     this.showTime();
//   },
// };

// setTimeout(timer.addTen.bind(timer), 500);
