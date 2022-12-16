// --------------------------------------------------------------------------------------------------
// Example 1 - 
// let num = 12;
// function calculate(num1, num2) {
// 	return num1 + num2;
// }
// console.log("Sum is : ", calculate(num, 12));
// --------------------------------------------------------------------------------------------------
// Example 2 -
function getTotal() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, num) { return acc + num; }, 0);
}
console.log("Total is : ", getTotal(1, 2, 3, 4, 5));
// --------------------------------------------------------------------------------------------------
// Example 3 -
