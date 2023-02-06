// Types Assertions or Type Casting -

// - Some refers as Type Assertions while some referes it as Type Casting.
// - Type assertion allows you to set the type of a value and tell the compiler not to infer it. This is when you, as a programmer, might have a better understanding of the type of a variable than what TypeScript can infer on its own. Such a situation can occur when you might be porting over code from JavaScript and you may know a more accurate type of the variable than what is currently assigned. It is similar to type casting in other languages like C# and Java. However, unlike C# and Java, there is no runtime effect of type assertion in TypeScript. It is merely a way to let the TypeScript compiler know the type of a variable.

// - Type Assertion with primary data types -
// let code: any = 123;
// let employeeCode = <number>code;
// console.log(typeof employeeCode); //Output: number

// - Type Assertion with Objects -
// - Example 1-
// let employee: Object = {};
// employee.name = "John"; //Compiler Error: Property 'name' does not exist on type '{}'
// employee.code = 123; //Compiler Error: Property 'code' does not exist on type '{}'

// - Example 2 -
// type Employee1 = {
//   name: string;
//   code: number;
// };

// let employee1 = <Employee1>{};
// employee1.name = "John"; // No Error
// employee1.code = 123;  // No Error

// or
// - Example 3 -
// interface Employee2 {
//   name: string;
//   code: number;
// }

// let employee2 = <Employee2>{};
// employee2.name = "Smilga";  // No Error
// employee2.code = 456;  // No Error

// NOTE : There are two ways to do type assertion in TypeScript.
// 1. Using the angular bracket <> syntax. So far in this section, we have used angular brackets to show type assertion -
// let code: any = 123;
// let employeeCode = <number> code;
// However, there is another way to do type assertion, using the 'as' syntax.

// 2. Using "as" keyword -
// Example: For Primary Data types
// let code: any = 123;
// let employeeCode = code as number;

// Example: For Objects -
// interface Employee2 {
//   name: string;
//   code: number;
// }

// let employee2 = {} as Employee2;
// employee2.name = "Smilga";
// employee2.code = 456;

// - NOTE : Both the syntaxes are equivalent and we can use any of these type assertions syntaxes. However, while dealing with JSX in TypeScript, only the "as" syntax is allowed, because JSX is embeddable in XML like a syntax. And since XML uses angular brackets, it creates a conflict while using type assertions with angular brackets in JSX.

// ---------------------------------------------------------------------------
type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addOrConcat(2, 2, "concat") as string;

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, "concat") as number;

//10 as string
10 as unknown as string;

// The DOM
const img = document.querySelector("img")!;
const myImg = document.getElementById("#img") as HTMLImageElement;
const nextImg = <HTMLImageElement>document.getElementById("#img");

img.src;
myImg.src;
