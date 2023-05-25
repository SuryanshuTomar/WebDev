// => INDEX SIGNATURES AND KEYOF ASSERTIONS -

// -> Index Signatures -
// -> The idea of the index signatures is to type objects of unknown structure when you only know the key and value types. An index signature fits the case of the salary parameter: the function should accept salary objects of different structures — just make sure that object values are numbers.

// Example -
interface TransactionObj1 {
	pizza: number;
	books: number;
	job: number;
}

const todaysTransanctions1: TransactionObj1 = {
	pizza: -10,
	books: -5,
	job: 50,
};

// Note: If we try to pass a dynamic property/key to access the values of the object, then typescript will throw error that -> Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'TransactionObj1'.
// No index signature with a parameter of type 'string' was found on type 'TransactionObj1'.
// let prop: string = "pizza";
// console.log(todaysTransanctions1[prop]);

// - But suppose we want to add more key value pair of same type in the above object or we don't know how many key value pair will be there in the above structure then, we can use the index signature to define the structure of the object using the above interface or in type aliases also.
// So, we can write the above interface as -
interface TransactionObj2 {
	readonly [index: string]: number; // index signature
	// type of "index" can only be string, number, symbol or template literal
}

const todaysTransanctions2: TransactionObj2 = {
	pizza: -10,
	books: -5,
	job: 50,
};

// console.log(todaysTransanctions);

// Here, since we are using index signature, accessing values of object using dynamic property wont raise any concern in ts. Since, we have also defined the type of the key/property using the index signature.
let prop: string = "pizza";
console.log(todaysTransanctions2[prop]);

// Another Example -
const todaysNet = (transactions: TransactionObj2): number => {
	let total = 0;

	// calculate total of transactions
	for (const transaction in transactions) {
		total += transactions[transaction];
	}

	return total;
};
console.log("Total in transactions : ", todaysNet(todaysTransanctions2));

// Limitation of Index Signature -
// - If we try to access any property on an object that does not exists and defined its type using index signature. Then, typescript have no way of knowing whether that property exists on that particular object or not and ts will not show any error.

// Example -
// Trying to access property "magic" but it does not exists on "todaystransaction2". And still typescript won;t show any error.
console.log(todaysTransanctions2["magic"]); // output -> undefined

// --------------------------------------------------------------------------------------
// -> Keyof Assertion -

// - The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as type P = "x" | "y":

// type Point = { x: number; y: number };
// type P = keyof Point;

// Example -
interface Student {
	[key: string]: string | number | number[] | undefined;
	name: string;
	GPA: number;
	classes?: number[];
}

const student: Student = {
	name: "Doug",
	GPA: 3.5,
	classes: [100, 200],
};

// Now interating through this student object
for (const key in student) {
	console.log(`${key}: ${student[key]}`);
}

// Note: This loop will run fine only because we have provided the index signature in the Student interface. But if we remove the index signature, ts will throw an error for accessing the values of student using dynamic keys -> Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Student'. No index signature with a parameter of type 'string' was found on type 'Student'.

// So, to access the values of an object using dynamic key/property, we either have to defined an index signature in the type alias or interface of an object or
// Another way to access the values using dynamic key/property, is to use "keyof" operator when accessing the values of an object.

// - Example -
console.log("");
interface StudentNeo {
	name: string;
	GPA: number;
	classes?: number[];
}

const studentNeo: StudentNeo = {
	name: "Doug",
	GPA: 3.5,
	classes: [100, 200],
};

// Iterating through the student object using "keyof" Operator and "keyof" assertion
console.log("Example 1 - ");
for (const key in studentNeo) {
	console.log(`${key}: ${studentNeo[key as keyof StudentNeo]}`);
}
console.log("");

// - Another Example -
console.log("Example 2 - ");
Object.keys(studentNeo).map((key) => {
	// using the keyof operator and keyof assertion when we dont have the type of a particular object.
	console.log(studentNeo[key as keyof typeof studentNeo]);
});
console.log("");

// - Another Example = Log Student Key -
console.log("Example 3 - ");
const logStudentKey = (student: StudentNeo, key: keyof StudentNeo): void => {
	console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
console.log("");
