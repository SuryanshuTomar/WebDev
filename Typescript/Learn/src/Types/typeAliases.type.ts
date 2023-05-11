// Type alias -
// In TypeScript, type aliases are used to assign a name for any type. It doesn't create a new type. Instead, it provides a name for the type.
// Syntax :
// type Type_Name = value;

// Creating a custom type for an object using Type Alias
type Article = {
	author: string;
	content: string;
	title: string;
	image?: string;
	readonly id: number;
};

let article: Article = {
	author: " John",
	content: "Content",
	title: "John article",
	id: 1,
};

let post: Article = {
	author: "Sam",
	content: "Hellow TS",
	title: "First Post article",
	id: 2,
};
