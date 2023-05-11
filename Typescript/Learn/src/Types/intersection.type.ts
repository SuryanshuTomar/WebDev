// Intersection Type
// An intersection type is a type that merges several kinds into one. This allows you to combine many types to create a single type with all of the properties that you require. An object of this type will have members from all of the types given. The ‘&’ operator is used to create the intersection type.

// example -
type Cow = {
	name: string;
	moos: boolean;
	givesMilk: boolean;
	color: string;
};

type Bull = {
	name: string;
	honks: boolean;
	color: string;
};

// creating intersection type
// Syntax: type IntersectionTypeName = TypeName1 & TypeName2 & .... & TypeNameX
type BullsAndCows = Bull & Cow;

// This Intersection type will take all the common properties of the types defined in intersection first. Then, it will unique properties from them as well.

let hybridCowBull: BullsAndCows = {
	name: "Richie",
	color: "white",
	honks: true,
	givesMilk: false,
	moos: true,
};

// The Difference between union types and intersection types is that,
// In union types, it mandatory to all define properties from at least one of types defined in the union type and optional if we want to defined all  properties from all the types defined in the union type.
// Whereas, In intersection types, it is mandatory to defined all the properties from all the types defined in the intersection type, be it common or unique properties.
