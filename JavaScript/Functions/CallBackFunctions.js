// CallBack Functions :

// Note:
// 1. Callback functions, Higher Order Functions, Pure Functions are First class objects in JS.
// 2. Functions as first class objects are stored in a variable or expression, passed as an argument to another functions, return from the function(closure).

// 1. CallBack functions - Callback functions are passed as a parameter/arguments to a another and are executed inside that functions.
// 2. Higher Order Functions - HOF accepts another function as an argument or returns another function as a result.

function morning(name) {
  return `Good Morning ${name}`;
}
function afternoon(name) {
  return `Good Afternoon ${name}`;
}
function evening(name) {
  return `Good Evening ${name}`;
}

function greet(name, cbgreeting) {
  const myName = "josh";
  console.log(`${cbgreeting(name)}. My name is ${myName}`);
}

greet("Bob", morning);
greet("Peter", afternoon);
greet("Sheldon", evening);

//Here greet() is a HOF and morning(), afternoon() and evening() are callback functions.
