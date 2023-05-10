// here typescript will infer using "Type Inference", that the type of this "firstname" will be string judging by the type of data we assigned to it, even without explicitly mentioning it.
let firstname = "John";

// Now we are not allowed to store any other kind of data to the "firstname" variable other than string.
// so these are not allowed.
// firstname = 123;
// firstname = true

// similary
let digits = 123;

// so these are not allowed.
// digits = "123",
// digits = false

// Note: Its best practice to let Typescript infer the types of values it can on its own and only explicitly declare types where its needed.

// - Example -
// let finalResult;

// Let "finalResult" be the sum of two numbers. So, we know here that the finalResult will store a "number" value, but typescript will infer the type of "finalResult" to be any, since the value at the time for finalResult is not know to typesript. So, we here we have to explicitly define the type of "finalResult" variable to be "number"

let finalResult: number;

function addNumber(a: number, b: number): number {
	return a + b;
}

finalResult = addNumber(10, 15);
console.log(finalResult);
