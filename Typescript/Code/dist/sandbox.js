"use strict";
// ----------------------------------------------------------------------------
// Variables -
const b = 15;
const a = "a";
const t = true;
console.log("Value of B:", b);
console.log("Value of A:", a);
console.log("Value of T:", t);
// ----------------------------------------------------------------------------
// Functions -
// let name = "Suryanshu";
// let email = "st@gmail.com";
// function signUp(name: string, email: string, isPaid: boolean = false) {
//   return name + " \n" + email + " \n" + isPaid;
// }
// const eligible = signUp(name, email);
// console.log("Person is eligible for the course : ", eligible);
// Expected : Boolean
// Received : String
// Function return -
// In order to correct the return mistake in the above function, we can write it like this -
// function signUp2(
//   name: string,
//   email: string,
//   isPaid: boolean = false
// ): boolean {
//   // return name + " \n" + email + " \n" + isPaid;
//   // will throw error since we have defined in this function what its need to return which is boolean in this case
//   return true;
// }
// const eligible2 = signUp2(name, email);
// console.log("Person is eligible for the course : ", eligible2);
// - Another Example -
function sum(num1, num2) {
    return num1 + num2;
}
console.log("Sum is : ", sum(2, 4));
// How to have a return type defined in arrow functions -
const greet = (name) => "Hola! " + name;
const bye = (name) => {
    return "GoodBye! " + name;
};
console.log(greet("Alex"));
console.log(bye("Alex"));
// - When we are are not returning anything from a function then we can use void as a return type, which mean that our function will not retur anything when its finish executing.
const logMessage = (msg) => {
    console.log(msg);
};
// logMessage("This is an Log Message");
// - When we are expecting that our function may or may not finish executing and it execution can be abruted midway and will never reach the end of the function, then there is one more return type that we can use which is "never". Its mostly used in function handling errors.
const logError = (msg) => {
    throw new Error(msg);
};
// logError("This is an Error");
// Example of Function returning a Function -
const returnPrintFn = (obj) => {
    return function printDetails() {
        console.log(obj);
    };
};
const printFn = returnPrintFn({
    name: "Alex",
    Occupation: "Enterprenuer, Investor, Philanthropist",
    age: 40,
    netWorth: "10 Billion Dollars",
});
printFn();
// ----------------------------------------------------------------------------
// Function returning an object -
// Example 1 -
const user = {
    name: "Alex Mercer",
    isPaid: true,
};
function createUser(userInfo) {
    console.log("User Info: ", userInfo);
    return { isLoggedIn: true, userName: "alexmercer" };
}
createUser(user);
// Example 2 -
// If we have already defined what a function should return as an object then we can not directly pass more values in an object to a function argument than its its expected.
const getDetails = (userInfo) => {
    console.log("User Info: ", userInfo);
    return {
        enrolled: true,
        memberSince: new Date(Date.now()),
    };
};
// This is OK!
console.log(getDetails({ name: "Deathslayer", email: "deathslayer@gmail.com" }));
// This is NOT OK! Because in the function definition we are only expecting object which is expecting an object with only two properties not more and not less.
// console.log(
//   getDetails({ name: "Deathslayer", email: "deathslayer@gmail.com", memberType: "Pro" })
// );
// So, to overcome this issue, we can store the object we want to pass as an argument in a variable and then we can pass it to the function argument. This is one of the bypass in typescript.
const newUser = {
    name: "Deathslayer",
    email: "deathslayer@gmail.com",
    memberType: "Pro",
};
console.log(getDetails(newUser));
// ----------------------------------------------------------------------------
// - Objects - 
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
// - Unable to add new properties now since its already defined before -
ninja.age = 40;
ninja.name = 'ryu';
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking']
// - Unable to add new properties now since its already defined before -
ninja = {
    name: 'yoshi',
    belt: 'orange',
    age: 40,
    // skills: ['running'],
};
// - Workaround -
// - No error from type script but not recommended to use any since its TS.
let person = {
    "name": "mario",
    "gender": "M",
    "age": 25,
    "profession": "coder",
};
person.age = "Twenty-Five year(s)";
person.skills = ["JS", "TS", "HTML", "CSS",];
console.log(person);
// ----------------------------------------------------------------------------
// Aliases -
// - In Typescript, Type aliases give a type a new name. They are similar to interfaces in that they can be used to name primitives and any other kinds that you’d have to define by hand otherwise. Aliasing doesn’t truly create a new type; instead, it gives that type a new name. Aliasing a primitive isn’t very practical as it’s easy using primitive types, however, it can be used for documentation purposes. Type aliasing is just giving another name for a type. let’s demonstrate a few examples on type Aliasing.
// Syntax - type [Alias_name] = [Alias_type]
// Example - Creating an alias of a User Object which needs to be passed on to the function or needs to be returned from the function and several properties. So, to keep the code clean and readable, we will use alias.
// type User = {
//   firstName: string;
//   lastName: string;
//   email: string;
//   age: number;
//   hasPaid: boolean;
// };
// function createNewUser(user: User): boolean {
//   if (user.hasPaid) return true;
//   else return false;
// }
// const userInfo = {
//   firstName: "Alex",
//   lastName: "Mercer",
//   email: "alexmercer@gmail.com",
//   age: 25,
//   hasPaid: true,
// };
// const isUserCreatedSuccessFully = createNewUser(userInfo);
// console.log("Is User Created ? : ", isUserCreatedSuccessFully);
// ----------------------------------------------------------------------------
// - Readonly and Optional in Aliases -
// - Readonly -
// - This is the type of keyword that we can use whenever we dont want any property to change its value once it is assigned and can only be read.
// - Optional -
// - Optional (?:) is a property operator that can be used in Aliases defination when we want any property to be optional meaning when a particular Alias type is used then its upto the user whether they want to provide the value of that optional property or not. Regardless TS wont throw an error.
// - Example -
// type NewUser = {
//   readonly _id: string;
//   name: string;
//   email: string;
//   isActive: boolean;
//   creditCardDetails?: number;
// };
// const myUser: NewUser = {
//   _id: "001",
//   name: "Don",
//   email: "don@example.com",
//   isActive: true,
// };
// myUser.name = "Donny Don"; // Value will be changed.
// myUser._id = "002" // Will throw error and value will not change since its a readonly property.
// -  Intersection of Alias Types -
// - Example -
// type cardNumber = {
//   cardNumber: number;
// };
// type cardDate = {
//   cardDate: Date;
// };
// We can combine alias types using & operators.
// type cardDetails = cardNumber &
//   cardDate & {
//     cvv: number;
//   };
// ----------------------------------------------------------------------------
// - Arrays -
// There are two syntax we can define an array in typescript -
// - Syntax1  -
// const {array_variable_name}: {type}[] = ['a', 'b', 'c'];
// - Syntax2  -
// const {array_variable_name}: Array<{type}> = ['a', 'b', 'c'];
// - Syntax3  -
// const { array_variable_name } = new Array<type>("a", "b", "c");
// - Example1 -
// const heroes: string[] = [];
// heroes.push("superman");
// - Example2 -
// const villian: Array<string> = [];
// villian.push("Dr. Doom");
// - Example3 -
// const powerLevel = new Array<number>();
// powerLevel.push(97);
// - 2D Arrays -
// - Syntax1  -
// const {array_variable_name}: {type}[][] = ['a', 'b', 'c'];
// - Syntax2  -
// const {array_variable_name}: Array<Array<{type}>> = ['a', 'b', 'c'];
// - Syntax3  -
// const { array_variable_name } = new Array<Array<type>>("a", "b", "c");
// - Example1 -
// const matrix1: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// - Example2 -
// const martix2: Array<Array<number>> = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// - Example3 -
// const matrix3 = new Array<Array<number>>([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// - The ReadonlyArray Type -
// - The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.
// - Example -
// function doStuff(values: ReadonlyArray<string>) {
//   // We can read from 'values'...
//   const copy = values.slice();
//   console.log(`The first value is ${values[0]}`);
//   // ...but we can't mutate 'values'.
//   values.push("hello!");
// Property 'push' does not exist on type 'readonly string[]'.
// }
// ----------------------------------------------------------------------------
// - Union Types -
// - A union type is a type formed from two or more other types, representing values that may be any one of those types. We refer to each of these types as the union’s members.
// - Union types can be defined using pipe(|) operator
// - Example -
// let score: number | string;
// score = 33;
// score = "55";
// score = true;
// Will throw error because boolean is not defined as a union member
// - Example 2 -
// type User = {
//     name: string;
//     id: number
// }
// type Admin = {
//     username: string;
//     id: number
// }
// let hitesh: User | Admin = {name: "hitesh", id: 334}
// hitesh = {username: "hc", id: 334}
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
// getDbId(3)
// getDbId("3")
// function getDbId(id: number | string) {
//   if (typeof id === "string") {
//     id.toLowerCase();
// id we dont verify the type of id then it will show error line if we try to use any string methods on id.
//   }
//   if (typeof id === "number") {
//     id = id + 2;
//   }
// }
// - Example Arrays -
// const data: number[] = [1, 2, 3];
// const data2: string[] = ["1", "2", "3"];
// const data3: number[] | string[] = ["1", "2", "3"];
// This means that the array will either be string array or number array.
// const data4: (string | number | boolean)[] = ["1", "2", 3, true];
// This means that the array will contain either number, boolean or string elements.
// let seatAllotment: "aisle" | "middle" | "window";
// seatAllotment = "aisle";
// seatAllotment = "crew"
// ----------------------------------------------------------------------------
// - Tuples -
// - What if we want to define or enter the data in particular order inside an array. Then we can write our code something like this:
// const user: (string | number)[] = [1, "hc"]
// - But no one is stopping us from writing it like this:
// const user: (string | number)[] = ["hc", 1]
// - In these scenarios, we have another data structure defined in typescript which is tuple.
// - A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
// - Syntax -
// 1.  const {variable_name}: [data_type1, data_type2.......data_typeN] = [type1, type2.....typeN]
// 2. type {type_variable_name}: [data_type1, data_type2.......data_typeN];
// - Defining a Tuple -
// let tUser: [string, number, boolean]
// tUser = ["hc", 131, true]
// - Other Examples -
// let rgb: [number, number, number] = [255, 123, 112]
// type User = [number, string]
// const newUser: User = [112, "example@google.com"]
// newUser[1] = "hc.com"
// newUser.push(true) // But we can push new members inside the tuple or even delete then using the push and pop method which is not ideal according to what defines a tuple and in terms of typescript as well. So, to prevent this from happening we use readonly tuples or define them "as const".
// - Example -
// type StringNumberPair = [string, number];
// - Here, StringNumberPair is a tuple type of string and number. Like ReadonlyArray, it has no representation at runtime, but is significant to TypeScript. To the type system, StringNumberPair describes arrays whose 0 index contains a string and whose 1 index contains a number.
// function doSomething(pair: StringNumberPair) {
//   const a = pair[0];
//   const a: string;
//   const b = pair[1];
//   const b: number;
//   // ...
// }
// doSomething(["hello", 42]);
// - If we try to index past the number of elements, we’ll get an error.
// function doSomething(pair: [string, number]) {
//   // ...
//   const c = pair[2];
// // Tuple type '[string, number]' of length '2' has no element at index '2'.
// }
// - We can also destructure tuples using JavaScript’s array destructuring.
// function doSomething(stringHash: [string, number]) {
//   const [inputString, hash] = stringHash;
//   console.log(inputString);
//   const inputString: string;
//   console.log(hash);
//   const hash: number;
// }
// NOTE - Tuple types are useful in heavily convention-based APIs, where each element’s meaning is “obvious”. This gives us flexibility in whatever we want to name our variables when we destructure them. In the above example, we were able to name elements 0 and 1 to whatever we wanted.
// - However, since not every user holds the same view of what’s obvious, it may be worth reconsidering whether using objects with descriptive property names may be better for your API.
// - Also, Tuples can be assigned to arrays but arrays can not be assigned to tuples.
// - Readonly Tuple Types -
// - One final note about tuple types - tuples types have readonly variants, and can be specified by sticking a readonly modifier in front of them - just like with array shorthand syntax.
// - Syntax -
// function doSomething(pair: readonly [string, number]) {
//   // ...
// }
// - As you might expect, writing to any property of a readonly tuple isn’t allowed in TypeScript.
// - Example -
// function doSomething(pair: readonly [string, number]) {
//   pair[0] = "hello!";
// // Cannot assign to '0' because it is a read-only property.
// }
// - Tuples tend to be created and left un-modified in most code, so annotating types as readonly tuples when possible is a good default. This is also important given that array literals with const assertions will be inferred with readonly tuple types.
// - Example -
// let point = [3, 4] as const;
// function distanceFromOrigin([x, y]: [number, number]) {
//   return Math.sqrt(x ** 2 + y ** 2);
// }
// distanceFromOrigin(point);
// ----------------------------------------------------------------------------
// - Enums -
// - Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
// - Enums allow a developer to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
// - Example -
// enum SeatChoice {
//   AISLE = "aisle",
//   MIDDLE = 3,
//   WINDOW,
//   FOURTH,
// }
// const hcSeat = SeatChoice.AISLE;
// - Const Enums -
// - In most cases, enums are a perfectly valid solution. However sometimes requirements are tighter. To avoid paying the cost of extra generated code and additional indirection when accessing enum values, it’s possible to use const enums. Const enums are defined using the const modifier on our enums:
// - Example -
// const enum Enum {
//   A = 1,
//   B = A * 2,
// }
// - Const enums can only use constant enum expressions and unlike regular enums they are completely removed during compilation. Const enum members are inlined at use sites. This is possible since const enums cannot have computed members.
// - Example -
// const enum Direction {
//   Up,
//   Down,
//   Left,
//   Right,
// }
// let directions = [
//   Direction.Up,
//   Direction.Down,
//   Direction.Left,
//   Direction.Right,
// ];
// - More on Enums -
// https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content
// ----------------------------------------------------------------------------
// - Interface -
// - An interface declaration is another way to name an object type.
// - Syntax -
// interface {variable_name} {
//   ...properties
// }
// - Example -
// interface User {
//   readonly dbId: number;
//   email: string;
//   userId: number;
//   googleId?: string;
//   // startTrail: () => string
//   startTrail(): string;
//   getCoupon(couponname: string, value: number): number;
// }
// - Reopening the Interface -
// interface User {
//   githubToken: string;
// }
// - Extending an Interface -
// interface Admin extends User {
//   role: "admin" | "ta" | "learner";
// }
// const hitesh: Admin = {
//   dbId: 22,
//   email: "h@h.com",
//   userId: 2211,
//   role: "admin",
//   githubToken: "github",
//   startTrail: () => {
//     return "trail started";
//   },
//   getCoupon: (name: "hitesh10", off: 10) => {
//     return 10;
//   },
// };
// hitesh.email = "h@hc.com"
// hitesh.dbId = 33
// - Difference between Types Aliases and Interfaces -
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
// -----------------------------------------------------------------------------
// - Type Casting - 
// -----------------------------------------------------------------------------
// - Type Narrowing -
// - Documentation Read -
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html
// - Example - 1
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
// - Example - 2
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
// - Example - 3
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
// - The "instanceof" operator for narrowing types in case of classes -
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
// Here we are defining our predicate "pet is Fish" for our function return type which means whenever our return condition "pet as Fish" is true it will not return true instead it will return Fish type else it will return Bird type.
function isFish(pet) {
    // - Type Casting or Type Assertion - The "as" operator in case of types -
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    //return shape.side * shape.side
}
// - Exhaustive type Checking - 
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            // assigning shape value to never but no type can be assigned to never except never. so whenever we forget to handle any case the default case will yell at us that we have not handled all cases. and this is what exhaustive type checking is.
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
// ----------------------------------------------------------------------------
// export {};
