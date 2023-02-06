// => INDEX SIGNATURES -

// - The idea of the index signatures is to type objects of unknown structure when you only know the key and value types.
// - An index signature fits the case of the salary parameter: the function should accept salary objects of different structures — only that values to be numbers.

// - The syntax of an index signature is pretty simple and looks similar to the syntax of a property, but with one difference. Instead of the property name.
// - You simply write the type of the key inside the square brackets:
// - Syntax - { [key: KeyType]: ValueType }.

// -> More on -
// https://dmitripavlutin.com/typescript-index-signatures/

// - Example -

// transactionObj Type Alias without Index Signature.
// type transanctionObj = {
//   pizza: number;
//   book: number;
//   job: number;
// };

// transactionObj Type Alias without Index Signature.
type transactionObj = {
  // [key: string]: number; // this means all the object with this transactionObj type will have string type of key and their values will be number.

  readonly [key: string]: number; // We can also assign these as readonly
};

// const todayTransactions: transactionObj = {
//   pizza: -10,
//   book: -5,
//   job: 40,
// };

// console.log(todayTransactions.pizza);
// console.log(todayTransactions["pizza"]);

// -> Why Index Signature -
// - If we want to access any object property dynamically, typescript will show error as -> Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ pizza: number; book: number; job: number; }'. And this is because we have not specified that what is the type of the key in object.
// - And that's what the Index Signatures are for. Index Signatures let us define the type of the key in the object/map/dictionary itself.
// const pizza: string = "pizza";
// console.log(todayTransactions[pizza]);

// -> Readonly -
// - We can't assign any value to any property in todayTransactions since the type is transanctionObj which has defined its properties as readonly
// todayTransactions.pizza = "margharita"

// const todaysNet = (transactions: transactionObj): number => {
//   let total = 0;
//   for (let transacts in transactions) {
//     total += transactions[transacts];
//   }
//   return total;
// };

// console.log("Today's Net: ", todaysNet(todayTransactions));

// -> Non-Existing Properties -
// If we try to access properties in an object with type of object defined with Index Signatures, typescript will have no problem with it, which is not true in reality. Like -
// todayTransactions["cake"];

// or
// let cake: string = "cake";
// todayTransactions[cake];
// cake property is not present in the todayTransactions object.
// so in ideal case it should throw error but it isn't

// -> Combined Required properties and Index Signatures -
// type bag = {
//   [index: string]: number | string; // index signature
//   bottle: 1; // required property
//   pen: number; // required property
// };

// const schoolBag: bag = {
//   bottle: 1,
//   pen: 2,
//   notebook: 2,
// };

// console.log(schoolBag["notebook"]);

// -> Optional Properties -
// interface Student {
//   [key: string]: string | Array<number> | number | undefined;
//   name: string;
//   gpa: number;
//   classes?: Array<number>;
// }

// const alex: Student = {
//   name: "Alex Mercer",
//   gpa: 4,
//   classes: [105, 205, 305],
// };

// console.log(alex.test);

// ---------------------------------------------------------------------------
// => "keyof" OPERATOR -

// - The keyof operator takes an object type and produces a string or numeric literal union of its keys. The following type P is the same type as “x” | “y”:
// - Example 1:
// type Point = { x: number; y: number };
// type P = keyof Point; // type P = "x" | "y"

// - If the type has a string or number index signature, keyof will return those types instead:
// - Example 2:
// type Arrayish = { [n: number]: unknown };
// type A = keyof Arrayish; // type A = number

// type Mapish = { [k: string]: boolean };
// type M = keyof Mapish; // type M = string | number

// - Example 3:
interface Student {
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "Doug",
  GPA: 3.5,
  classes: [100, 200],
};

// - Without Index Signatures we can not access key dynamically. So, how to iterate over objects with dynamic keys.
// - We can use keyof operator for that.

// - Method 1: Syntax if we know the type of object: {key} as keyof {type}
// for (let key in student) {
//   console.log(key, ":", student[key as keyof Student]);
// }

// - Method 2: Syntax if we dont know the type of object:
//                            {key} as keyof typeof {object}
// Object.keys(student).map((key) => {
//   console.log(key, ":", student[key as keyof typeof student]);
// });

// - Using keyof operator in function parameters -
// - Example 4:
// const logStudent = (student: Student, key: keyof Student): void => {
//   console.log(`Student ${key}: ${student[key]}`);
// };
// logStudent(student, "name");
// logStudent(student, "GPA");

// ---------------------------------------------------------------------------
// => OBJECT ITERATION IN RECORD UTILITY -

// type Streams = "salary" | "freelance" | "stocks" | "youtube";

// type Incomes = Record<Streams, number>;

// const totalIncome: Incomes = {
//   salary: 2_50_000,
//   freelance: 4_50_000,
//   stocks: 3_50_000,
//   youtube: 10_00_000,
// };

// let total = 0;
// for (const income in totalIncome) {
//   total += totalIncome[income as keyof Incomes];
// }
// console.log(total);
