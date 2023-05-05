// UNKNOWN TYPE -

function multiplyByTwo(number: unknown) {
	// This "number" is showing error because ts doesn't know whether the passed argument to the "number" is really a number or not. As its type is unknown.
	return number * 2;
}

// Correct Way -
function multiplyByThree(number: unknown) {
	if (typeof number === "number") {
		return number * 3;
	}
	return "Please provide a valid number!!";
}

console.log(multiplyByTwo(3));
console.log(multiplyByTwo("John")); // This shouldn;t be allowed as this is string.

console.log(multiplyByThree(3));
console.log(multiplyByThree("John"));

// Note: Unknown Type is helpful when we don't know what will be the actual value of a particular variable at the start of application. And then later on during the application developement/program we can test it before applying any operation on that particular value.s
