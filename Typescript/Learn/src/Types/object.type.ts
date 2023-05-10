// Here typescript is infering correctly the type of person object and its properties types also.
let person = {
	name: "Mark",
	age: 21,
};

// ----------------------------------------------------------------------------------
// But what how to define types explicitly for objects -
// Syntax:
// let/const/var variable_name : {
//    property_name1: type_name;
//    property_name2: type_name;
//    ...
//    property_name_N: type_name;
// } = {
//    property_name1: value1,
//    property_name2: value2,
//    ...
//    property_name_N: type_name
// }

let car: {
	color: string;
	brand: string;
} = {
	color: "Red",
	brand: "BMW",
};
console.log(car);

// ----------------------------------------------------------------------------
// Another way to add type for explicitly with optional property and readonly property-

let article: {
	author: string;
	content: string;
	title: string;
	image?: string; // optional property
	readonly id: number; // its value cannot be change and only be read once defined
};

// Here we don't have to add image property as it is made optional
article = {
	author: "Stella",
	content: "Hello TS",
	title: "First Articlla",
	id: 1001,
};

// here we can do this
article.content = "Hello Typescript!!";

// but the same for the readonly property is not allowed
// article.id = 2002;
