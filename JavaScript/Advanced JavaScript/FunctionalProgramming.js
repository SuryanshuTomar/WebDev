// --------------------------------------------------------------------------------------------------------------------
// => FUNCTIONAL PROGRAMMING -

// - Definition - Functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.
// - Function Programming is a Declarative Programming Paradigm
// - Based on the idea of writing software by combining many Pure Functions, Avoiding Side-Effects and Mutating Data
// - Funcational Programming and Writing the code in declarative way has now become the modern way of writing code in the JS World.
// - We also see that functional programming is about avoiding mutating data, and we do that by using something called Immutability.

// => Pure Functions -
// - The first fundamental concept we learn when we want to understand functional programming is pure functions. But what does that really mean? What makes a function pure? So how do we know if a function is pure or not?

// - A Pure Function has all the above characteristics -
// - Predictable: It produces a predictable output for the same inputs.
// - Readable: Anyone reading the function as a standalone unit can understand its purpose completely.
// - Reusable: Can reuse the function at multiple places of the source code without altering its and the caller's behavior.
// - Testable: We can test it as an independent unit.

// - Here is a very strict definition of purity:
// 1. It returns the same result if given the same arguments (it is also referred as deterministic)
// 2. It does not cause any observable side effects

// - Composition -
// - Knowing how to compose your functions and how to put them in the right place is a technique that you can improve over time and a concept that’s very important in functional programming.
// - Composition can also be expressed as combination—it’s a process of combining multiple functions in a hierarchy to produce a new function or perform a computation.

// => Side Effects -
// - A side effect is any operation that is not directly related to the final output of the function is called a Side Effect.

// - Few classic cases of the side effects are -
// 1. Mutating(changing) the input itself.
// 2. Querying/Updating DOM
// 3. Logging(even in the console)
// 4. Making an XHR/fetch call.

// - Example 1-
// let greeting = "Hello";
// function sayGreeting(name) {
//   return `${greeting} ${name}`;
// }
// - Is it a pure function? Well, No. The function's output now depends on an outer state called greeting. What if someone changes the value of the greeting variable to Hola? It will change the output of the sayGreeting() function even when you pass the same input.

// function sayGreeting(name) {
//   return `Hello ${name}`;
// }

// - It is a pure function because you always get a Hello <name> as output for the <name> pass as an input. Now, let us see the same function with a bit of change.

// - Example 2 -
// function findUser(users, item) {
//   const reversedUsers = users.reverse();
//   const found = reversedUsers.find((user) => {
//     return user === item;
//   });

//   document.getElementById("user-found").innerText = found;
// }

// - Here we are breaking two essential principles of the pure function.
// - We are mutating the input.
// - We are querying and manipulating the DOM

// - what kind of problem we can anticipate? Let's see. A caller will invoke the findUser() function in the following way,
// let users = ["Tapas", "Alex", "John", "Maria"];
// findUser(users, "Maria");

// - At this stage, the caller may not know that the function is making a DOM operation unless the caller reads the findUser() function code. So, readability is compromised. The function's output is performing an operation that is not related to the final output.
// - Also, we have mutated the input array. Ideally, we should have cloned the input and then mutated (reverse) the copy for the find operation. Let us now make it a pure function.

// - Solution -
// function findUser(users, item) {
//
// Create the clone of users array and then reverse
//   const reversedUsers = [...users].reverse();

//
// Find the element in the cloned array
//   const found = reversedUsers.find((user) => {
//     return user === item;
//   });

//
// Return the found element
//   return found;
// }
// let users = ["Tapas", "Alex", "John", "Maria"];
// let found = findUser(users, "Maria");

// - Now the findUser() function is a pure function. We have removed the side effects of mutating the input, and it returns the intended output. Hence the function is readable, testable as a unit, reusable, and predictable.

// => Immutablility -
// - We never perform Operations on the original State(data) or mutate/modified it inside functions, instead we copy the state and then perform Operations on it or mutate it and return that data.

// => Referential Transparency -
// - It means we should be able to replace a function call(or invocation) with its output value without changing the program's behavior. As you see, it is possible only if the function is a pure function.

// - Example -
// function multipication(x, y) {
//  return x * y;
// }

// - So, now in this expression, we can replace the function call with its output value with an assurance of no side effect -
// 10 + (multiplication(6, 3) ^ 2);  to  10 + (18 ^ 2);

// => Parallel Code -
// - Pure functions help in parallel code execution. However, in JavaScript, code runs sequentially by default.

// => Functional Programming Techniques -
// - Try to avoid data mutatations.
// - Use build-in methods that don't produce Side Effects.
// - Do use data transformation and methods such as .map(), filter() and reduce().
// - Try to avoid Side Effects in functions: this is ofcourse  not always possible.

// => Declartive Syntax -
// - Use array and object Destructuring.
// - Use the Spread and Rest Operators
// - Use the Conditional Operators
// - Use Template Literals
