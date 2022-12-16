// --------------------------------------------------------------------------------------------------
// Example 1 -
// let num = 12;
// function calculate(num1, num2) {
// 	return num1 + num2;
// }
// console.log("Sum is : ", calculate(num, 12));

// --------------------------------------------------------------------------------------------------
// Example 2 -
function getTotal(...numbers: Array<number>) {
	return numbers.reduce((acc, num) => acc + num, 0);
}
console.log("Total is : ", getTotal(1, 2, 3, 4, 5));

// --------------------------------------------------------------------------------------------------
// Example 3 -

export {};
