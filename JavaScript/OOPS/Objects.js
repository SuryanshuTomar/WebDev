// => ARRAY DESTRUCTURING -
// - While destructuring an object we should remember that the desctructuring names get their values assigned in order they are present in the original array.
// DATA -const restaurant = {  name: "Classico Italiano",  location: "Via Angelo Tavanti 23, Firenze, Italy",  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];  },
  openingHours: {    thu: {      open: 12,      close: 22,    },    fri: {      open: 11,      close: 23,    },    sat: {      open: 0, // Open 24 hours      close: 24,    },  },};
// Example 1 -let arr = [4, 5, 6, 7, 8, 9, 10];let [a, b, c, d, e, f, g] = arr; // Destructuring Assignmentconsole.log(a, b, c, d, e, f, g);
// Example 2 -let [main, , secondary] = restaurant.categories; // Skipping values in destructuring Assignment by leaving blank at those placesconsole.log("Categories :", main, secondary);
// Example 3 -[main, secondary] = [secondary, main]; // Swapping values of two variables using Array Destructuringconsole.log("Swapped Categories : ", main, secondary);
// Example 4 -let [starters, mainCourse] = restaurant.order(2, 0); // Desctructuring values from array return by a method/functionconsole.log(starters, mainCourse);
// Example 5 -let arrNum = [5, 6, [7, 8]];let [w, x, [y, z]] = arrNum; // Destructuring Nested Arrayconsole.log(w, x, y, z);
// Example 6 -let [p = 1, q = 2, r = 3] = [8, 4]; // Assigning default values when destructuring.console.log(p, q, r);
// ---------------------------------------------------------------------------------------------------------------------// => OBJECT DESTRUCTURING -
// - While destructuring an object we should remember that the desctructuring names should match the object property names(keys) as the order in objects does not matter.
// DATA -// const restaurant = {//   name: "Classico Italiano",//   location: "Via Angelo Tavanti 23, Firenze, Italy",//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   order: function (starterIndex, mainIndex) {//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];//   },
//   openingHours: {//     thu: {//       open: 12,//       close: 22,//     },//     fri: {//       open: 11,//       close: 23,//     },//     sat: {//       open: 0, // Open 24 hours//       close: 24,//     },//   },
//   orderDelivery: function ({//     time = "20:00",//     address,//     starterIndex = 1,//     mainIndex = 0,//   }) {//     console.log(//       `Order recieved!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`//     );//   },// };
// EXAMPLE 1 -// Destructuring objects with the property names(key names) of an objectlet { name, openingHours, categories } = restaurant;console.log(name, openingHours, categories);
// EXAMPLE 2 -// Destructuring objects with names others than the property names in objectlet { name: restrauntName, openingHours: hours, categories: tags } = restaurant;console.log(restrauntName, hours, tags);
// EXAMPLE 3 -// Destructuring objects with default values.// let { menu = [], starterMenu: starters = [] } = restaurant;// console.log(menu, starters);
// EXAMPLE 4 -// Mutating values while destructuring objects.// let a = 111;// let b = 999;// let obj = { a: 23, b: 45, c: 67 };// We have cover the code when mutating the destructuring object otherwise JS compiler will read it as a block and will throw a token unexpected error.({ a, b } = obj);console.log(a, b);
// EXAMPLE 5 -// Nested Object Destructuringlet {  openingHours: {    fri: { open, close },  },} = restaurant;
console.log(open, close);
// EXAMPLE 6 -// Order Destructuring on Method/Function parametersconst del1 = restaurant.orderDelivery({  time: "11:30",  address: "88S, Heaven street",  starterIndex: 2,  mainIndex: 2,});const del2 = restaurant.orderDelivery({  address: "Via del sole, 21",  starterIndex: 2,});console.log(del1, del2);
// ---------------------------------------------------------------------------------------------------------------------// => SPREAD OPERATOR -
// DATA -// const restaurant = {//   name: "Classico Italiano",//   location: "Via Angelo Tavanti 23, Firenze, Italy",//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {//     thu: {//       open: 12,//       close: 22,//     },//     fri: {//       open: 11,//       close: 23,//     },//     sat: {//       open: 0, // Open 24 hours//       close: 24,//     },//   },
//   order: function (starterIndex, mainIndex) {//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];//   },
//   orderDelivery: function ({//     time = "20:00",//     address,//     starterIndex = 1,//     mainIndex = 0,//   }) {//     console.log(//       `Order recieved!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`//     );//   },
//   orderIngredients: function (ingredient1, ingredient2, ingredient3) {//     console.log(//       "Here's your order ingredients : ",//       ingredient1,//       ingredient2,//       ingredient3//     );//   },// };
// Dummy array data// let arr = [1, 2, 3, 4, 5];
// EXAMPLE 1 -// Creating a shallow copy of the elements of array using using spread operator with new elements in it.let newArr = [8, 9, ...arr];console.log(newArr);
// EXAMPLE 2 -// Using spread operator to print the array elements individually.console.log(...newArr); // Same output as => console.log(8, 9, 1, 2, 3, 4, 5)console.log(8, 9, 1, 2, 3, 4, 5);
// EXAMPLE 3 -// Creating a new menu using spread operator with the restaurant old menu items and new menu items.let newMenu = [...restaurant.mainMenu, "Gnocci"];console.log(newMenu);
// EXAMPLE 4 -// Copying multiple arrays into a single arraylet wholeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];console.log(wholeMenu);
// NOTE:// 1. Iterables in JS are Arrays, Strings, Sets and Maps but not Objects// 2. Spread operator works on all Iterables + Objects also.
// EXAMPLE 5 -let nameStr = "Jonas";// Creating an array of string letters using Spread operatorlet nameLetters = [...nameStr, " ", "S"];console.log(nameLetters);// using Spread operator to print the individual letter valuesconsole.log(...nameLetters);// Can also create a string again using join() function.console.log(nameLetters.join(""));
// EXAMPLE 6 -// Getting the ingredients using prompt// const ingredients = prompt(//   "Enter 3 main ingredients you want into your order : "// ).split(",");
// trimming each string items in ingredients array using map() function.// let ingredientItems = ingredients.map((item) => item.trim());
// Passing arguments using spread operator.// restaurant.orderIngredients(...ingredientItems);
// EXAMPLE 7 -// Using Spread operator on Objects// Creating a new restaurant object with older restaurant properties and new properties.let newRestaurant = { founderIn: 1998, founder: "Guiseppe", ...restaurant };console.log(newRestaurant);
// --------------------------------------------------------------------------------------------------------------------// => REST PATTERNS AND REST PARAMETERS -
// NOTE:// 1. Rest Pattern or Operator uses the exact same syntax as Spread operator.// 2. The major difference between Spread operator and Rest operator is that Spread operator is used to unpack an array into individual elements whereas Rest operator is used to pack individual elements into an array// 3. The other difference between Spread operator and Rest operator is that Rest operator is used on the left side of the Assignment operator whereas Spread operator is used on the right side of the Assignment operator.// 4. Rest operator must be the last in any destructuring assignment.// 5. There can be only one Rest Operator in any desctructuring assignment.
// DATA -// const restaurant = {//   name: "Classico Italiano",//   location: "Via Angelo Tavanti 23, Firenze, Italy",//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {//     thu: {//       open: 12,//       close: 22,//     },//     fri: {//       open: 11,//       close: 23,//     },//     sat: {//       open: 0, // Open 24 hours//       close: 24,//     },//   },
//   order: function (starterIndex, mainIndex) {//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];//   },
//   orderDelivery: function ({//     time = "20:00",//     address,//     starterIndex = 1,//     mainIndex = 0,//   }) {//     console.log(//       `Order recieved!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`//     );//   },
//   orderIngredients: function (ingredient1, ingredient2, ingredient3) {//     console.log(//       "Here's your order ingredients : ",//       ingredient1,//       ingredient2,//       ingredient3//     );//   },
//   orderPizza: function ({ mainIngredient, ...otherIngredient }) {//     console.log("Main ingredient : ", mainIngredient);//     console.log("Other ingredient : ", Object.values(otherIngredient));//   },// };
// EXAMPLE 1 -// Spread operation as we are using ... on array on the right side of the assignment operator// let spreadArr = [1, 2, ...[3, 4, 5]];// console.log(spreadArr);
// Rest operation as we are using ... on array on the left side of the assignment operator while destructuring an array// let [a, b, c, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];// console.log(a, b, c, others);
// Example 2 -// Using destructuring array, Rest Operation, and Spread Operation in a single statement.// let [Pizza, , Risotto, ...otherItems] = [//   ...restaurant.mainMenu,//   ...restaurant.starterMenu,// ];// console.log(Pizza, Risotto, otherItems);// console.log(Pizza, Risotto, ...otherItems);
// Example 3 -// Using destructuring array like an Object using index as properties, Rest Operation, and Spread Operation in a single statement.// let {//   0: pizza,//   4: Bruschetta,//   ...restaurantsotherItems// } = [...restaurant.mainMenu, ...restaurant.starterMenu];// console.log(pizza, Bruschetta, restaurantsotherItems);
// Converting Object to array// console.log(Object.values(restaurantsotherItems));
// EXAMPLE 4 -// Packing multiple arguments passed to a function into a single parameter array using Rest Parameters.// const add = function (...numbers) {//   return numbers.reduce((sum, num) => (sum += num));// };// const nums = [9, 8, 7, 7, 6, 2];
// console.log("Sum is :", add(2, 3));// console.log("Sum is :", add(4, 5, 6, 7));// console.log("Sum is :", add(34, 45, 56, 76, 87, 111));
// using spread operator to pass the arguments which will collected into the parameters of add() function with the help of rest parameters// console.log("Sum is :", add(...nums));
// EXAMPLE 5 -// restaurant.orderPizza({//   mainIngredient: "Mushroom",//   ...["Onions", "Olives", "Paneer", "Corns", "Capsicum"],// });
// ----------------------------------------------------------------------------------------------------// => SHORT CIRCUITINGS OR SHORT CIRCUIT EVALUATIONS (USING && AND ||) -
// - In JavaScript SHORT-CIRCUITING, an expression is evaluated from left to right until it is confirmed that the result of the remaining conditions is not going to affect the already evaluated result. If the result is clear even before the complete evaluation of the expression, it short circuits and the result will be returned. Short circuit evaluation avoids unnecessary work and leads to efficient processing.
// 1. AND(&&) SHORT-CIRCUIT: In case of AND, the expression is evaluated until we get one false result because the result will always be false, independent of the further conditions. If there is an expression with &&(logical AND), and the first operand itself is false, then a short circuit occurs, the further expression is not evaluated and false is returned. If the whole expression is evaulated to be true then it will return the last Truthy value of the expression.
// 2. OR(||) SHORT-CIRCUIT: In case of OR, the expression is evaluated until we get one true result because the result will always be true, independent of the further conditions. If there is an expression with ||(logical OR), and the first operand itself is true, then a short circuit occurs, evaluation stops, and true is returned. If the whole expression is evaulated to be false then it will return the last Falsy value of the expression.
// NOTE:// 1. We can perform short circuit evaluation on any everyTruthy and Falsy values.
// DATA-// const restaurant = {//   name: "Classico Italiano",//   location: "Via Angelo Tavanti 23, Firenze, Italy",//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],//   mainMenu: ["Pizza", "Pasta", "Risotto"],
//   openingHours: {//     thu: {//       open: 12,//       close: 22,//     },//     fri: {//       open: 11,//       close: 23,//     },//     sat: {//       open: 0, // Open 24 hours//       close: 24,//     },//   },
//   order: function (starterIndex, mainIndex) {//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];//   },
//   orderDelivery: function ({//     time = "20:00",//     address,//     starterIndex = 1,//     mainIndex = 0,//   }) {//     console.log(//       `Order recieved!! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`//     );//   },
//   orderIngredients: function (ingredient1, ingredient2, ingredient3) {//     console.log(//       "Here's your order ingredients : ",//       ingredient1,//       ingredient2,//       ingredient3//     );//   },
//   orderPizza: function ({ mainIngredient, ...otherIngredient }) {//     console.log("Main ingredient : ", mainIngredient);//     console.log("Other ingredient : ", Object.values(otherIngredient));//   },
//   orderPasta: function (mainIngredient, ...otherIngredient) {//     console.log("Main ingredient : ", mainIngredient);//     console.log("Other ingredient : ", otherIngredient);//   },// };
// EXAMPLE 1 -// console.log(3 || "Jonas");// console.log("" || "Jonas");// console.log(true || 0);// console.log(undefined || null);
// O/P -> 1.4 and after 1.4 entire expression will be short circuited.// console.log(undefined || 0 || "" || "1.4" || "Hello" || null || 23);
// EXAMPLE 2 -// If the number of guests are present in the object literal then print that values otherwise print 10.
// ONE WAY - USING TERNARY OPERATOR// const guests = restaurant.guestNum ? restaurant.guestNum : 10;// console.log(guests);
// ANOTHER WAY - USING OR(||) SHORT CURCUIT EVALUATION// const newGuest = restaurant.guestNum || 10;// console.log(newGuest);
// EXAMPLE 3 -// console.log(0 && "Jonas");// console.log(7 && "Jonas" && 1.4);// console.log("Hello" && 23 && null && 7.3 && undefined && "Jonas");
// EXAMPLE 4 -// Practical Example of Logical And Short Circuit Evaluation - Calling a function only if its present or have a Truthy value.// ONE WAY - USING IF STATEMENT// if(restaurant.orderPasta){//   restaurant.orderPasta("Paneer", "Corns", "Olives")// }
// ANOTHER WAY - USING AND(&&) CIRCUIT EVALUATION// restaurant.orderPasta && restaurant.orderPasta("Paneer", "Corns", "Olives");
// ---------------------------------------------------------------------------------------------------------------------// => NULLISH COALESCING OPERATOR (??) (ES2020) -
// 1. The nullish coalescing operator (??) is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.// 2. This can be seen as a special case of the logical OR (||) operator, which returns the right-hand side operand if the left operand is any falsy value, not only null or undefined. In other words, if you use || to provide some default value to another variable foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0). See below for more examples.// 3. The nullish coalescing operator has the fifth-lowest operator precedence, directly lower than || and directly higher than the conditional (ternary) operator.
// IMPORTANT:
// 1.  ASSIGNING A DEFAULT VALUE TO A VARIABLE -// - Earlier, when one wanted to assign a default value to a variable, a common pattern was to use the logical OR operator (||) -// EXAMPLE -// let foo;// //  foo is never assigned any value so it is still undefined// let someDummyText = foo || 'Hello!';
// - However, due to || being a boolean logical operator, the left hand-side operand was coerced to a boolean for the evaluation and any falsy value (0, '', NaN, null, undefined) was not returned. This behavior may cause unexpected consequences if you consider 0, '', or NaN as valid values.// EXAMPLE -// let count = 0;// let text = "";
// let qty = count || 42;// let message = text || "hi!";// console.log(qty);     // 42 and not 0// console.log(message); // "hi!" and not ""
// - The nullish coalescing operator avoids this pitfall by only returning the second operand when the first one evaluates to either null or undefined (but no other falsy values):// EXAMPLE -// let myText = ''; // An empty string (which is also a falsy value)// let notFalsyText = myText || 'Hello world';// console.log(notFalsyText); // Hello world
// let preservingFalsy = myText ?? 'Hi neighborhood';// console.log(preservingFalsy); // '' (as myText is neither undefined nor null)
// 2. NO CHAINING WITH AND/OR OPERATORS -// - It is not possible to combine both the AND (&&) and OR operators (||) directly with ??. A SyntaxError will be thrown in such cases.// EXAMPLE -// null || undefined ?? "foo"; // raises a SyntaxError// true || undefined ?? "foo"; // raises a SyntaxError
// - However, providing parenthesis to explicitly indicate precedence is correct:// EXAMPLE -// (null || undefined) ?? "foo"; // returns "foo"
// --------------------------------------------------------------------------------------------------------------------// => LOGICAL ASSIGNMENT OPERATORS (ES2021)-
// - ES2021 introduces three logical assignment operators including:// 1. Logical OR assignment operator (||=)// 2. Logical AND assignment operator (&&=)// 3. Nullish coalesing assignment operator (??=)
// 1. The Logical OR assignment operator -// - The ||= is pronounced as “Logical OR assignment operator” and is used in between two values.// - If the first value in the expression is falsy,only then the second value is assigned. It is evaluated left to right.
// SYNTAX -// expression1 ||= expression2
// NOTE:// - Logical OR assignment short-circuits as well, meaning it only performs an assignment if the logical operation would evaluate the right-hand side. In other words, x ||= y is equivalent to: x || (x = y);// - And not equivalent to the following which would always perform an assignment: x = x || y;// - Note that this behavior is different to mathematical and bitwise assignment operators.
// EXAMPLE -// let expression1 = 0;// let expression2 = 5;// let expression3 = 10;
// expression1 ||= expression2; // Evaluation 1// expression2 ||= expression3; // Evaluation 2
// console.log("Expression 1", expression1);// console.log("Expression 2", expression2);
// Explaination -// - In evaluation 1, the expression1 is falsy. The expression2 value will be assigned to expression1.// - In evaluation 2, expression2 is truthy. The expression2 value will not change.
// 2. The Logical AND assignment operator -// - The &&= is pronounced as “Logical AND assignment operator” and is used in between two values.// - If the first value is truthy, then the second value is assigned. It is evaluated left to right.
// SYNTAX -// expression1 &&= expression2
// NOTE:// - Logical AND assignment short-circuits as well meaning that x &&= y is equivalent to: x && (x = y);// - And not equivalent to the following which would always perform an assignment: x = x && y;
// EXAMPLE -// let expression1 = 0;// let expression2 = 5;// let expression3 = 10;
// expression1 &&= expression2; // Evaluation 1// expression2 &&= expression3; // Evaluation 2
// console.log("Expression 1", expression1);// console.log("Expression 2", expression2);
// Explaination -// - In evaluation 1, expression1 is falsy. The expression1 value will not change.// - In evaluation 2, expression2 is truthy. The expression3 value will be assigned to expression2.
// 3. The nullish Coalescing assignment operator -// - The ??= is pronounced as “Nullish coalescing assignment operator” and is used in between two values.// - If the first value is undefined or null, then the second value is assigned. It is evaluated left to right.
// SYNTAX -// expression ??= expression2
// NOTE:// - Logical nullish assignment short-circuits as well meaning that x ??= y is equivalent to: x ?? (x = y)// - And not equivalent to the following which would always perform an assignment: x = x ?? y;
// EXAMPLE -// let expression1 = null;// let expression2 = 5;// let expression3 = 10;
// expression1 ??= expression2; // Evaluation 1// expression2 ??= expression3; // Evaluation 2
// console.log("Expression 1", expression1);// console.log("Expression 2", expression2);
// Explaination -// - In evaluation 1, expression1 is null. The expression2 value will be assigned to expression1.// - In evaluation 2, expression2 is neither null nor undefined. The expression2 value will not change.
// ---------------------------------------------------------------------------------------------------------------------// => ENHANCED OBJECT LITERALS -
// - The ability to create JavaScript objects using literal notation is powerful. New features introduced from ES2015 (ES6) make object handling even easier in all modern browsers (not IE) and Node.js.
// - Creating objects in some languages can be expensive in terms of development time and processing power when a class must be declared before anything can be achieved. In JavaScript, it’s easy to create objects on the fly.
// - Single-use objects are used extensively. Examples include configuration settings, module definitions, method parameters, return values from functions, etc. ES2015 (ES6) added a range of features to enhance object literals.
// 1. Object Initialization From Variables -// - Objects’ properties are often created from variables with the same name.// For example:// ES5 code// var//   a = 1, b = 2, c = 3;//   obj = {//     a: a,//     b: b,//     c: c//   };// // obj.a = 1, obj.b = 2, obj.c = 3
// - There’s no need for nasty repetition in ES6!…// ES6 code// const//   a = 1, b = 2, c = 3;//   obj = {//     a//     b//     c//   };// // obj.a = 1, obj.b = 2, obj.c = 3
// 2. Object Method Definition Shorthand -// - Object methods in ES5 require the function statement.// For example:// // ES5 code// var lib = {//   sum:  function(a, b) { return a + b; },//   mult: function(a, b) { return a * b; }// };
// console.log( lib.sum(2, 3) );  // 5// console.log( lib.mult(2, 3) ); // 6// This is no longer necessary in ES6; it permits the following shorthand syntax:
// // ES6 code// const lib = {//   sum(a, b)  { return a + b; },//   mult(a, b) { return a * b; }// };
// console.log( lib.sum(2, 3) );  // 5// console.log( lib.mult(2, 3) ); // 6
// 3. Dynamic Property Keys -// - In ES5, it wasn’t possible to use a variable for a key name, although it could be added after the object had been created.// For example:// ES5 code// var//   key1 = 'one',//   obj = {//     two: 2,//     three: 3//   };// obj[key1] = 1;// obj.one = 1, obj.two = 2, obj.three = 3
// - Object keys can be dynamically assigned in ES6 by placing an expression in [ square brackets ].// For example:// ES6 code// const//   key1 = 'one',//   obj = {//     [key1]: 1,//     two: 2,//     three: 3//   };// obj.one = 1, obj.two = 2, obj.three = 3
// - Any expression can be used to create a key.// For example:// ES6 code// const//   i = 1,//   obj = {//     ['i' + i]: i//   };
// console.log(obj.i1); // 1
// - A dynamic key can be used for methods as well as properties.//  For example:// ES6 code// const//   i = 2,//   obj = {//     ['mult' + i]: x => x * i//   };
// console.log( obj.mult2(5) ); // 10
// - Whether you should create dynamic properties and methods is another matter. The code can be difficult to read, and it may be preferable to create object factories or classes.
// ---------------------------------------------------------------------------------------------------------------------// => OPTIONAL CHAINING (?.) (ES2020)-
// - The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without having to check that each reference in the chain is valid.// - The ?. operator is like the . chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined. When used with function calls, it returns undefined if the given function does not exist.// - This results in shorter and simpler expressions when accessing chained properties when the possibility exists that a reference may be missing. It can also be helpful while exploring the content of an object when there's no known guarantee as to which properties are required.// - Optional chaining cannot be used on a non-declared root object, but can be used with an undefined root object.// - The optional chaining operator provides a way to simplify accessing values through connected objects when it's possible that a reference or function may be undefined or null.
// SYNTAX -// 1. obj.val?.prop;// 2. obj.val?.[expr];// 3. obj.arr?.[index];// 4. obj.func?.(args);
// EXAMPLE -// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];// for (let day of days) {//   const open = restaurant.openingHours[day]?.open;//   console.log(`On ${day}, we open at ${open}`);// }
// 1. Optional chaining with function calls -// - We can use optional chaining when attempting to call a method which may not exist. This can be helpful, for example, when using an API in which a method might be unavailable, either due to the age of the implementation or because of a feature which isn't available on the user's device.
// - Using optional chaining with function calls causes the expression to automatically return undefined instead of throwing an exception if the method isn't found:
// SYNTAX -// let result = someInterface.customMethod?.();
// EXAMPLE -// const adventurer = {//   name: 'Alice',//   cat: {//     name: 'Dinah'//   }// };
// const dogName = adventurer.dog?.name;// console.log(dogName);// // expected output: undefined
// console.log(adventurer.someNonExistentMethod?.() ?? "Method not found");// // expected output: undefined
// Note: If there is a property with such a name and which is not a function, using ?. will still raise a TypeError exception (someInterface.customMethod is not a function).// Note: If someInterface itself is null or undefined, a TypeError exception will still be raised (someInterface is null). If you expect that someInterface itself may be null or undefined, you have to use ?. at this position as well: someInterface?.customMethod?.()
// 2. Optional chaining with expressions -// - You can also use the optional chaining operator when accessing properties with an expression using the bracket notation of the property accessor.// let nestedProp = obj?.['prop' + 'Name'];
// 3. Optional chaining not valid on the left-hand side of an assignment -// let object = {};// object?.property = 1; // Uncaught SyntaxError: Invalid left-hand side in assignment
// 4. Array item access with optional chaining// let arrayItem = arr?.[42]  ?? "Item not found";
// 5. Stacking the optional chaining operator -// - With nested structures, it is possible to use optional chaining multiple times// let customer = {//   name: "Carl",//   details: {//     age: 82,//     location: "Paradise Falls" // detailed address is unknown//   }// };// let customerCity = customer.details?.address?.city;
// // … this also works with optional chaining function call// let customerName = customer.name?.getName?.(); // method does not exist, customerName is undefined
// => OTHER DATA STRUTURES -// ---------------------------------------------------------------------------------------------------------------------// => SETS DS-
// - The Set object lets you store unique values of any type, whether primitive values or object references.// - Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.
// Performance -// - The Set "has" method checks if a value is in a Set object, using an approach that is, on average, quicker than testing most of the elements that have previously been added to the Set object. In particular, it is, on average, faster than the Array.prototype.includes method when an Array object has a length equal to a Set object's size.
// Constructor -// 1. Set()// - Creates a new Set object.
// Syntax -  new Set([it]);// Parameter:// 1. it - It is an iterable object whose all elements are// added to the new set created,// 3. If the parameter is not specified or null is passed// then a new set created is empty.// Returns:// A new set object
// Instance properties -// 1. Set.prototype.size// - Returns the number of values in the Set object.
// Instance methods -// 1. Set.prototype.add(value)// - Appends value to the Set object. Returns the Set object with added value.
// 2. Set.prototype.clear()// - Removes all elements from the Set object.
// 3. Set.prototype.delete(value)// - Removes the element associated to the value and returns a boolean asserting whether an element was successfully removed or not. Set.prototype.has(value) will return false afterwards.
// 4. Set.prototype.has(value)// - Returns a boolean asserting whether an element is present with the given value in the Set object or not.
// Iteration methods -
// 1. Set.prototype.values()// - Returns a new iterator object that yields the values for each element in the Set object in insertion order.
// 2. Set.prototype.keys()// - An alias for Set.prototype.values().
// 3. Set.prototype.entries()// - Returns a new iterator object that contains an array of [value, value] for each element in the Set object, in insertion order.// - This is similar to the Map object, so that each entry's key is the same as its value for a Set.
// 4. Set.prototype.forEach(callbackFn[, thisArg])// - Calls callbackFn once for each value present in the Set object, in insertion order. If a thisArg parameter is provided, it will be used as the this value for each invocation of callbackFn.
// EXAMPLE 1 -// let orderSet = new Set([//   "Pizza",//   "Pasta",//   "Margharita",//   "Popcorn",//   "Pizza",//   "Pasta",//   "Risotto",//   "Margharita",// ]);// console.log(orderSet);
// EXAMPLE 2 -// console.log(new Set("Baboon"));
// EXAMPLE 3 -// console.log(orderSet.size);// console.log(orderSet.has("Pizza"));// console.log(orderSet.has("Bread"));
// EXAMPLE 4 -// orderSet.add("Garlic Bread");// orderSet.add("Garlic Bread");// console.log(orderSet);// orderSet.delete("Risotto");// console.log(orderSet);// orderSet.clear();// console.log(orderSet);
// EXAMPLE 5 -// 1. iterate over items in set -// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}// for (let item of mySet1) console.log(item)
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}// for (let item of mySet1.keys()) console.log(item)
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}// for (let item of mySet1.values()) console.log(item)
// logs the items in the order: 1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}// (key and value are the same here)// for (let [key, value] of mySet1.entries()) console.log(key)
// 2. convert Set object to an Array object, with Array.from -// const myArr = Array.from(mySet1) // [1, "some text", {"a": 1, "b": 2}, {"a": 1, "b": 2}]
// 3. the following will also work if run in an HTML document -// mySet1.add(document.body)// mySet1.has(document.querySelector('body')) // true
// 4. converting between Set and Array -// let staff = ["waiter", "chef", "manager", "waiter", "chef", "accountant"];// let positions = new Set(staff);// let uniqueStaff = [...positions]// console.log(positions, uniqueStaff);
// OR
// let staff = ["waiter", "chef", "manager", "waiter", "chef", "accountant"];// let positions = [...new Set(staff)];// console.log(positions);
// 5. intersect can be simulated via -// const intersection = new Set([...mySet1].filter(x => mySet2.has(x)))
// 6. difference can be simulated via -// const difference = new Set([...mySet1].filter(x => !mySet2.has(x)))
// 7. Iterate set entries with forEach() -// mySet2.forEach(function(value) {//   console.log(value)// })// 1 2 3 4
// NOTE:// 1. The major use case of the set data structure is to remove duplicates from the array.// 2. Both Sets and Maps are iterators
// ---------------------------------------------------------------------------------------------------------------------// => MAPS DS -
// - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
-Syntax -  // Arrow function -  map((element) => {    /* ... */  });map((element, index) => {  /* ... */});map((element, index, array) => {  /* ... */});// Callback function -map(callbackFn);map(callbackFn, thisArg);// Inline callback function -map(function (element) {  /* ... */});map(function (element, index) {  /* ... */});map(function (element, index, array) {  /* ... */});map(function (element, index, array) {  /* ... */}, thisArg);
// - Parameters -// 1. callbackFn -// Function that is called for every element of arr. Each time callbackFn executes, the returned value is added to newArray.// The callbackFn function accepts the following arguments:// 2. element -// The current element being processed in the array.// 3. indexOptional -// The index of the current element being processed in the array.// 4. arrayOptional -// The array map was called upon.// 5. thisArgOptional -// Value to use as this when executing callbackFn.
// - Return value-// A new array with each element being the result of the callback function.
// - Description -// - map calls a provided callbackFn function once for each element in an array, in order, and constructs a new array from the results. callbackFn is invoked only for indexes of the array which have assigned values (including undefined).
// - It is not called for missing elements of the array; that is://   i. indexes that have never been set.//   ii. indexes which have been deleted.
// - When not to use map() -// - Since map builds a new array, using it when you aren't using the returned array is an anti-pattern; use forEach or for...of instead.// - You shouldn't be using map if://   i. you're not using the array it returns; and/or//   ii. you're not using returning a value from the callback.
// EXAMPLES -let rest = new Map();rest.set("name", "Classico Italiano");rest.set(1, "Firenze, Italy");// console.log(rest.set(2, "Libson, Portugal"));
// - We can also chain  the set() method as it returns the Map -// rest//   .set("Categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])//   .set("open", 11)//   .set("close", 23)//   .set(true, "We are open :D")//   .set(false, "We are closed !!");
// console.log(rest);
// console.log(rest.get("name"));// console.log(rest.get(1));// console.log(rest.get(2));// console.log(rest.get(true));// console.log(rest.get(false));
// let currentTime = 21;// using boolean expression as map keys// let isOpen = rest.get("open") < currentTime && rest.get("close") > currentTime;// console.log(rest.get(isOpen));
// console.log(rest.has("Categories"));// rest.delete(2)// console.log(rest.has(2));// console.log(rest);// console.log(rest.size);// rest.clear();// console.log(rest)
// - Using Reference types as keys in Maps -// rest.set([1, 2], "Testing"); // Line 1// console.log(rest.get([1, 2])); // Line 2
// O/P -> Undefined , Because array key in Line 1 is different array from the array in Line 2, as both array are created seperately and hence both arrays are stored at different locations in heap memory.// If we want to use Reference types as key then we have to first those refernces types in a variable an then use those variables as keys. Otherwise is won't work
// let arr = [1, 2];// rest.set(arr, "Testing");// console.log(rest.get(arr));
// - Creating map using array literal and without set() method -// const quiz = new Map([//   ["question", "What is the best programming language ?"],//   [1, "C++"],//   [2, "Java"],//   [3, "JavaScript"],//   [4, "Python"],//   ["correct", "JavaScript"],//   [true, "Correct "],//   [false, "Try Again "],// ]);
// console.log(quiz);
// - Coverting Objects to Maps -// - We can convert any object to map using the Object.entries() method as it returns an array of key and values array and that's exactly what we need to pass to the Map() constructor to create a map.// const hoursMap = new Map(Object.entries(restaurant.openingHours));// console.log(hoursMap);
// - Maps Iteration -// - Completing the quiz question -// console.log(quiz.get("question"));// for (let [keys, values] of quiz) {//   if (typeof keys === "number") console.log(`Option ${keys}: ${values}`);// }
// const answer = Number(prompt("Enter your answer option between 1-4 :"));// console.log(answer);
// let checkAns;
// if (answer > 0 && answer < 5) {//   // One way -//   // checkAns = quiz.get(answer) === quiz.get("correct");//   // console.log(quiz.get(checkAns));//   // Another way -//   console.log(quiz.get(quiz.get(answer) === quiz.get("correct")));// } else {//   alert("Enter a valid option value between 1-4 ");// }
// - Map Iterators -console.log(quiz.entries());console.log(quiz.keys());console.log(quiz.values());
// - Converting Map to an Array -const newQuiz = [...quiz];
// --------------------------------------------------------------------------------------------------------------------// => WHEN TO USE WHICH DATA STRUCTURE -
// --------------------------------------------------------------------------------------------------------------------// AT METHOD -
