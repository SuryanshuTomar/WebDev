// Type Assertion -

type One = string; // string type
type Two = string | number; // union of string and number type
type Three = "hello"; // literal type and only contain "hello"

// -> Type Assertion using "as" keyword -
// convert to more or less specific
let a: One = "hello";
let b = a as Two; // less specific type using assertion
let c = a as Three; // more specific type using assertion

// -> Type Assertion using "<>" brackets -
// Note this type of assertion won't work in .tsx files (in React Typescript)
let d = <One>"World";
let e = <string | number>"World";

// -> Type Assertion for Narrowing -
const addOrConcat = (
	a: number,
	b: number,
	c: "add" | "concat"
): number | string => {
	if (c === "add") {
		return a + b;
	}
	return "" + a + b;
};

let myVal1: number = addOrConcat(10, 15, "add") as number;
let myVal2: string = addOrConcat(10, 15, "concat") as string;
console.log(myVal1);
console.log(myVal2);

// -> Assertions For DOM Elements -
const img = document.querySelector("img") as HTMLImageElement;
const myImg = document.getElementById("img")! as HTMLImageElement;
// img.src;
// myImg.src;
