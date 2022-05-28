// => FUNCTION METHODS -

// - In Object Oriented JS we learned that in JS, everything is an object. Because everything is an object, we came to understand that we could set and access additional properties to functions.
// - We were introduced to the "this" keyword. We learned that every function gets "this" property automatically.
// - "this" is used inside a function, and will always refer to a single object — the object that invokes (calls) the function where "this" is used.

// - Lets understand this with an Example -
// const lufthansa = {
// 	airline: "Lufthansa",
// 	iataCode: "LH",
// 	bookings: [],
// 	book(flightNum, name) {
// 		console.log(
// 			`${name} booked a seat on ${this.airline} flight with flight number ${this.iataCode}${flightNum}`
// 		);
// 		this.bookings.push({ flight: this.iataCode + flightNum, name });
// 	},
// };

// lufthansa.book(234, "Jonas Schmedtmann");
// lufthansa.book(456, "John Smilga");
// "this" of book method() has now been referencing to lufthansa Object.
const eurowings = { airline: "Eurowings", iataCode: "EW", bookings: [] };
const swiss = { airline: "Swiss Airlines", iataCode: "SA", bookings: [] };

// - Now,  we also want to be able to take bookings for a Eurowings flight, so as being this  airline, right? Now, taking this exact same method here and simply copying it and pasting it here is a bad practice, right? So of course, we are not gonna do that.
// - So instead, we will just take the method and store it in an external function. And then we can reuse that function for all of the different airlines.
const bookCopy = lufthansa.book;
// - But This will create a copy of book() method. But since bookCopy is a shallow copy, it doesn't copy the "this" of the book() method and is now a normal function.So, we have lost the reference of "this" in our copied function.And now even if we try to call the bookCopy function(), it will throw an error like cannot access the property airline of undefined So , "this" of function depends on how a function is called.
// bookCopy(876, "DeathSlayer")

// - So, In order to fix this problem, we will have to explicitly set the value of "this" for the bookCopy function.
// - We can use apply(), call(), bind() function methods to tell JS what should be the value of this for a particular function

// => What are these Function Methods ?
// - The Function constructor creates a new Function object. Calling the constructor directly can create functions dynamically, which can be executed in the global scope.
// - Any function object has no methods or properties of its own. However, since it is a function itself, it does inherit some methods and properties through the prototype chain from Function.prototype
// - The following are the methods in the function prototype chain:
// - Function.prototype.apply()
// - Function.prototype.bind()
// - Function.prototype.call()
// - Function.prototype.isGenerator()
// - Function.prototype.toSource()
// - Object.prototype.toSource
// - Function.prototype.toString()
// - Object.prototype.toString

// => Call Method -
// - The call() method calls a function with a given "this" value and arguments provided individually.
// - What that means, is that we can call any function, and explicitly specify what this should reference within the calling function.
// - Syntax - function.call(this, arguments)
// - It returns the result of the function which is invoked by "this".

// - Example -
// - Calling the book method by providing the value of this for different objects.
// bookCopy.call(eurowings, 666, "Sheldon Cooper");
// bookCopy.call(lufthansa, 777, "Amy Farah Fowler");
// bookCopy.call(swiss, 333, "Leonard Hofstadter");
// console.log(lufthansa);
// console.log(eurowings);
// console.log(swiss);

// => Apply Method -
// - The apply() method is used to call other functions with a given this keyword value and arguments provided in the form of array or an array like object.
// - Array-like objects may refer to NodeList or the arguments object inside a function.
// - The only difference between how they work is that call() expects all parameters to be passed in individually, whereas apply() expects an array of all of our parameters
// - Syntax - function.call(this, [argumentsArray])
// - It returns the result of the function which is invoked by "this".

// - Example -
// bookCopy.apply(eurowings, [666, "Sheldon Cooper"]);
// bookCopy.apply(lufthansa, [777, "Amy Farah Fowler"]);
// bookCopy.apply(swiss, [333, "Leonard Hofstadter"]);
// console.log(lufthansa);
// console.log(eurowings);
// console.log(swiss);

// Note: The apply method is not use that much anymore in Modern JS anymore because we can pass the array of argument just like apply method in call method also by using the spread operator. So that's why call method is more preferred.

// - Example -
// bookCopy.call(eurowings, ...[666, "Sheldon Cooper"]);
// bookCopy.call(lufthansa, ...[777, "Amy Farah Fowler"]);
// bookCopy.call(swiss, ...[333, "Leonard Hofstadter"]);
// console.log(lufthansa);
// console.log(eurowings);
// console.log(swiss);

// => Bind Method -
// - The bind() method creates a new function that, when called, has its this keyword set to the provided value.
// - The JS engine is creates a new instance for the orignal function and bind the passed object as its "this" variable. It is important to understand that it copies the original function.
// - And after creating a copy of the original function, it will be able to call the object methods it is bound to, It will now be able recognizes its properties and its methods.
// Note: Now, the difference between the bind() method and call()/apply() method is that it does not immediately call the function. Instead it returns a new function where this keyword is bound to the "this" variable object. So it's set to whatever value we pass into bind.

// - Example -
// const bookEW = bookCopy.bind(eurowings)
// const bookLT = bookCopy.bind(lufthansa)
// const bookSA = bookCopy.bind(swiss)
// bookEW(234, "Howard Wolotiwz")
// bookLT(543, "Rajesh Koothrapalli")
// bookSA(345, "Penny")
// console.log(lufthansa);
// console.log(eurowings);
// console.log(swiss);

// Note:
// The Cool Thing About bind() method is that we can even bind other value to a function other than the "this" value
// const bookEW23 = bookCopy.bind(eurowings, 23);
// - Now we only need to set the name as the flight number is already binded to the function as first parameter
// bookEW23("Emily Winters");
// bookEW23("Martha Cooper");
// console.log(eurowings);

// - This specifying parts of the argument beforehand is actually a common pattern called Partial Application. So essentially, Partial Application  means that a part of the arguments of the original function are already applied, so which means, already set.

// => Other Situations Where We Can Use Bind Method -
// 1. With Event Listeners -
//  As we know that in any Event Handler, the this keyword of event handler function always points to the element on which the event handler is attached to and not to the object calling it.
// - Example -
// lufthansa.planes = 300;
// lufthansa.buyPlanes = function () {
//  this.planes++;
//  console.log(this.planes)
// }

// document.addEventListener("DOMContentLoaded", lufthansa.buyPlanes)
// Here, whenever we the DOM of the window is loaded, the event handler will call the buyPlane method() and it will print undefined in the console as the "this" of this event handler function is referencing to the document element and not lufthansa object. So, we need to bind the value of the buyPlanes method for the event handler function like -
// document.addEventListener("DOMContentLoaded", lufthansa.buyPlanes.bind(lufthansa))

// 2. With Partial Application -
// - Partial Application: The process of applying a function to some of its arguments. The partially applied function gets returned for later use. Partial application fixes (partially applies the function to) one or more arguments inside the returned function, and the returned function takes the remaining parameters as arguments in order to complete the function application.
// - So, sometimes we use bind() method for partial applications when we don't even need to bind the "this" value to a function but bind the arguments to a function. In that case, we bind the this as null or this along with the arguments.
// Example -
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// Add vat is always added to the overall tax with a fixed rate we can create a vat function and bind that fixed rate to the vat function to calculate vat.
// const addVat = addTax.bind(null, 0.18);
// console.log(addVat(100));

// Note: We can also return the same result of this Partial Application by Using the Function returning a function technique.
// - Example -
// const addTaxRate = (rate) => {
//  return (value) => {
//   return value + value * rate;
//  };
// };

// const addVat2 = addTaxRate(.18);
// console.log(addVat2(100));
// console.log(addVat2(200));
// console.log(addTaxRate(.18)(500));
