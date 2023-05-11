type Dog = {
	name: string;
	barks: boolean;
	wags: boolean;
};

type Cat = {
	name: string;
	purrs: boolean;
};

// Union Type
// Using union type we can define a custom type that include the properties from 2 or more types and is created using Pipe(|) operator
// Syntax :
// type NewTypeName = TypeName1 | TypeName2 |.....| TypeNameX

// example -
type DogsAndCats = Dog | Cat;

// only contains properties from Dog Type
let dog: DogsAndCats = {
	name: "Buddy",
	barks: true,
	wags: true,
};

// only contains properties from cat Type
let cat: DogsAndCats = {
	name: "lily",
	purrs: true,
};

// contains properties from both dog and cat Type
let catDogHybrid: DogsAndCats = {
	name: "mysterio",
	purrs: true,
	wags: true,
	barks: false,
};

// Note: A union type variable should At least have all the properties from one of the types defined in the union type.

// Union type for Primitives -
type NumStr = number | string;

function addNumberOrString(a: NumStr, b: NumStr): NumStr {
	if (typeof a === "number" && typeof b === "number") {
		return a + b;
	} else {
		return a.toString() + b.toString();
	}
}

console.log(addNumberOrString(10, "12"));
console.log(addNumberOrString(3, 5));
console.log(addNumberOrString("Dog", "Cat"));
