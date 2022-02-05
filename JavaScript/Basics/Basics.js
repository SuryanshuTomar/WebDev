// 1.JavaScript printing and JavaScript Console API
// console.log("Hello World")
// console.log(4+5, "Another Log")
// document.write("This is printing using JavaScript")
// alert("Hello World")
// console.warn("This is a warning")
// console.error("This is an error")
// console.assert(4==6)

// 2. JS Variables
var number1 = 23;
var number2 = 54.43;
let number3 = 76;
let number4 = 88.5;
// console.log(number1 + number2)

// 3. JS Datatypes

// Strings -
var str1 = "This is a string";
var str2 = "This is also a string";

// Objects -
var marks = {
  ravi: 34,
  shubham: 45,
  harry: 32,
};
// console.log(marks);

// Booleans -
var a = true;
var b = false;
// console.log(a, b);

// Undefined and Null -
var Und1;
var Und2 = undefined;
var Null = null;
// console.log(Und1, Und2, Null);

// Arrays -
// Arrays are collection of same types of data. But in
// JS arrays are not true arr instead array in js are
// collection of all types of data which are called Lists
// in some of the other programming language like Python.
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [2, 3.5, true, "String", undefined, null];
console.log(arr);

// Two types of dataypes in JS
// 1. Primitive Data types: undefined, null, number, string, boolean, Symbol
// 2. Reference data types: Arrays, Functions and Objects

//Note:
// 1. In JavaScript, you can pass by value and by reference.
// 2. When assigning primitive data type value to a variable any changes are made directly to that value, without affecting original value.
// 3. When assigning reference data type(non-primitive data type) value to a variable is done by reference so any changes will affect all the reference.

// Reference vs Values -
// 1. The simple rule of passing by value is that all primitive values in JavaScript are passed by value. Simple as that.
// Passing by value means that every time you assign a value to a variable, a copy of that value is created. Every single time.

// 2. The pass by reference, however, manifests itself differently.
// When creating an object you're given a reference to that object. If 2 variables hold the same reference, then changing the object reflects in both variables.

// More Info -
// https://dmitripavlutin.com/value-vs-reference-javascript/#:~:text=In%20JavaScript%2C%20you%20can%20pass,by%20reference%20when%20assigning%20objects.

// Null vs Undefined -
// 1. Null and Undefined both represent "no value".
// 2. Null is the intentional absence of the value.
// - It is one of the primitive values of JavaScript.
// - Null value for any object, variable or property is set by the programmer.
// 3. Undefined means the value does not exist in the compiler. It is the global object. Like -
// - variable without a value
// - missing function Argument
// - missing object properties
