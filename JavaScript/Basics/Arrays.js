// -> In Javascript, we have Array class, and arrays are prototype of this class.// -> JavaScript arrays are special, because js arrays are not limited to storing same type//    of objects in arrays. In here we can store multiple datatypes data also.// -> First element in array is called Lower Index or Lower Boundary// -> Last element in array is called Upper Index or Upper Boundary.// -> Every element in the array is represented by index numbers.// -> Indexing in js array starts from 0.
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------// Array declaration and array definition.let data = ["Element1", "Element2", 23, true, 88.3];// console.log(data); // Accessing whole 'data' array// console.log(data[0]) // Accessing the first element of the array using index value.// console.log(data[data.length - 1]) // Accessing the last element of the array using reverse indexing// console.log(data.length); // Using array length property which gives the size of the array.
// Array Traversal// data.forEach(element => {//     console.log(element)// })
// ---------------------------------------------------------------------------------------------------------------------// More Ways of Creating and Filling Arrays -// 1. Array Literals -// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 2. Array Constructor -// let arr1 = new Array();
// Creating an array of size 7 and Filling the array using fill() method with 6 -// let arr1 = new Array(7).fill(6);
// Fill Method -// - Fill Method is used to fill the array with elements programmatically.// - Syntax - array.fill(data, startIndex, endIndex(excluded))// - fill() method can also specify from where do we want to start filling and end filling the array.// example -// let arr3 = new Array(9);// console.log(arr3.fill(4, 3, 5));
// Array.from() Method -// - We are not using this from() method on our array but we are using this from() method on an Array constructor instead.// - The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
// - Syntax -//   Array.from(//     arrayLike,//     function mapFn(element, index) {//       /* ... *///     },//     thisArg//   );
// - Array.from() lets you create Arrays from:// 1.array-like objects (objects with a length property and indexed elements); or// 2. iterable objects (objects such as Map and Set).
// - Array.from() has an optional parameter mapFn, which allows you to execute a map() function on each element of the array being created.// More clearly, Array.from(obj, mapFn, thisArg) has the same result as Array.from(obj).map(mapFn, thisArg), except that it does not create an intermediate array, and mapFn only receives two arguments (element, index).
// Parameters -// 1. arrayLike - An array-like or iterable object to convert to an array.// 2. mapFn Optional - Map function to call on every element of the array.// 3. thisArg Optional - Value to use as this when executing mapFn.
// Return value -// A new Array instance.
// Example -// const map = new Map([[1, 2], [2, 4], [4, 8]]);// Array.from(map);// // [[1, 2], [2, 4], [4, 8]]
// Example -// let arr4 = Array.from({ length: 7 }, () => 3);// console.log(arr4);
// Example -// let arr5 = Array.from({ length: 9 }, (_, index) => index + 1);// console.log(arr5);
// ---------------------------------------------------------------------------------------------------------------------// SEARCHING AND FILTERING IN ARRAY:
// Array.prototype.indexOf() method// console.log(data.indexOf(23));// indexOf(search Element, Start Index for search, End index for search)// searching of element will always be from left to right.// console.log(data.indexOf(true, 4));
// Array.prototype.lastIndexOf() method// console.log(data.lastIndexOf(23));// searching of element will always be from right to left.// It return the index of the found element from the right side of the array// in case any elments in the array is duplicate.
// Array.prototype.includes() method// console.log(data.includes(23));// It returns the value true or false based on whether the element we entered// in the arguments is found in the array or not.
// Array.prototype.find() method// array.find(callbackFunction(currentValue, index, arr), thisValue))// return the found element in the array, if some elements in the array are not found// satisfies the testing function, or undefined if the element is not found// The only problem with this method is that it only returns one element.
// const prices = [100, 200, 300, 400, 500, 1000];// const findPrice = prices.find((currentValue) =>  currentValue > 400 )// console.log(findPrice);// answer we should get in this case -> 500 and 1000// but instead we will get only 500 as find() will only return 1 element
// Array.prototype.findIndex() method// returns the index of the the found element in the array if an element// in the array satisfies the testing function else if not found then it will// return -1;
// const findPriceIndex1 = prices.findIndex((currentValue) =>  currentValue > 400 )// console.log(findPriceIndex1);// const findPriceIndex2 = prices.findIndex((currentValue) =>  currentValue > 1000 )// console.log(findPriceIndex2);
// Array.prototype.filter() method //Recommended most of all.// array.filter(callbackFunction(currentValue, index, arr), thisValue))// Best array method for finding elements in arrays or list or objects.// Returns a new array containing the elements of the calling array for which// the provided filter function returns true.// Return empty array if the condition does not satifies.
// const newPriceTag = prices.filter((currentValue, index, arr) => currentValue > 400)// console.log(newPriceTag);
// Array.prototype.sort() method// The sort method sort the element of an array in place and returns the sorted// array. The default sorting order is ascending, build upon converting the array// into string, then comparing the sequence of UTF-16 code unit values.
// const months = ['Dec', 'Aug', 'Mar', 'Nov', 'May', 'Oct', 'Jul']// console.log(months.sort());// Sorted the months in ascending order with alphabetical order.// const numbers = [1, 10000, 43, 23, 99, 5];// console.log(numbers.sort());// This will be sorted after converting these numbers into strings first and then// sort the value according their string values.
// - Sorting Numbers using sort method -// - Sort Method takes a Callback function which takes current element and the next element as arguments and perform operations on them until everything is according to the condition mentioned in the callback function.// - Returning 1 or any value greater than 1 means swap the current and next values// - Returning -1 or any value lesser than -1 means don't swap the current and next values
// Example -// const arr = [2, 4, -1, 1, 43, 23, 5, -90];
// Sorting in Ascending order -// One Way -// arr.sort((current, next) => {//   if (current > next) return 1;//   if (current < next) return -1;// });// console.log(arr);
// Sorting in Descending order -// One Way -// arr.sort((current, next) => {//   if (current > next) return -1;//   if (current < next) return 1;// });// console.log(arr);
// Another Way -// If current > next, then that means current - next will always be postive and// If current < next, then that means current - next will always be negative and that's what we want to return.// So, We can also right the ascending and descending sort in improved manner like -// arr.sort((cur, next)=> cur - next) // Ascending// arr.sort((cur, next)=> next - cur) // Descending
// Array.prototype.some() method -// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.// Syntax -> array.some(callbackFunction(currentValue, index, arr), thisValue))// The some() method executes the callbackFn function once for each element present in the array until it finds the one where callbackFn returns a truthy value (a value that becomes true when converted to a Boolean). If such an element is found, some() immediately returns true. Otherwise, some() returns false. callbackFn is invoked only for indexes of the array with assigned values. It is not invoked for indexes which have been deleted or which have never been assigned values.// callbackFn is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.// If a thisArg parameter is provided to some(), it will be used as the callback's this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callbackFn is determined according to the usual rules for determining the this seen by a function.// some() does not mutate the array on which it is called.// The range of elements processed by some() is set before the first invocation of callbackFn. Elements which are assigned to indexes already visited, or to indexes outside the range, will not be visited by callbackFn. If an existing, unvisited element of the array is changed by callbackFn, its value passed to the visiting callbackFn will be the value at the time that some() visits that element's index. Elements that are deleted are not visited.
// const fruits = ['apple', 'banana', 'mango', 'guava'];// function checkAvailability(arr, val) {//   return arr.some(arrVal => val === arrVal);// }// checkAvailability(fruits, 'kela');   // false// checkAvailability(fruits, 'banana'); // true
// Array.prototype.every() method -// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.// Syntax -> array.every(callbackFunction(currentValue, index, arr), thisValue))// The every method executes the provided callbackFn function once for each element present in the array until it finds the one where callbackFn returns a falsy value. If such an element is found, the every method immediately returns false. Otherwise, if callbackFn returns a truthy value for all elements, every returns true.// Note: Calling this method on an empty array will return true for any condition!// callbackFn is invoked only for array indexes which have assigned values. It is not invoked for indexes which have been deleted, or which have never been assigned values.// callbackFn is invoked with three arguments: the value of the element, the index of the element, and the Array object being traversed.// If a thisArg parameter is provided to every, it will be used as callback's this value. Otherwise, the value undefined will be used as its this value. The this value ultimately observable by callback is determined according to the usual rules for determining the this seen by a function.// every does not mutate the array on which it is called.// The range of elements processed by every is set before the first invocation of callbackFn. Therefore, callbackFn will not run on elements that are appended to the array after the call to every begins. If existing elements of the array are changed, their value as passed to callbackFn will be the value at the time every visits them. Elements that are deleted are not visited.// every acts like the "for all" quantifier in mathematics. In particular, for an empty array, it returns true. (It is vacuously true that all elements of the empty set satisfy any given condition.)
// function isBigEnough(element, index, array) {//   return element >= 10;// }// [12, 5, 8, 130, 44].every(isBigEnough);   // false// [12, 54, 18, 130, 44].every(isBigEnough); // true
// Note: The only difference is that the some() method will return true if any predicate is true while every() method will return true if all predicate are true.
// ------------------------------------------------------------------------------------------------------------------------// CRUD OPERATIONS IN ARRAY:// (CRUD -> Create, Read, Update and Delete)
// Array.prototype.push() method// The push() method adds one or more items to the end of the array// And returns the new length of the array.// We can also add arrays and objects inside of the array using this push method.// const animals = ['dogs', 'cats', 'pandas', 'wolves']// const count =  animals.push('cows')// animals.push(['dogs', 'cats', 'pandas'])// console.log(count, animals)
// Array.prototype.unshift() method// The unshift() method adds one or more items to the start of the array// And returns the new length of the array.// We can also add arrays and objects inside of the array using this push method.// const animals = ['dogs', 'cats', 'pandas', 'wolves']// const count =  animals.unshift('cows', 'calves')// animals.unshift(['dogs', 'cats', 'pandas'])// console.log(count, animals)
// Array.prototype.pop() method// The pop() method removes one item from the end of the array// This method changes the length of array.// And returns the popped element from the array.// We can also add arrays and objects inside of the array using this push method.// const animals = ['dogs', 'cats', 'pandas', 'wolves']// const poppedElement =  animals.pop();// console.log(poppedElement, animals)
// Array.prototype.shift() method// The shift() method removes one item from the start of the array// This method changes the length of array.// And returns the popped element from the array.// We can also add arrays and objects inside of the array using this push method.// const animals = ['dogs', 'cats', 'panda, 'wolves']
// Array.prototype.splice() method// array.splice(index, delete/count, item1, item2.....itemK)// This method can be used to perform all the CRUD operations in the array.// Adds AND/OR Removes elements to/from the the array.const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
// Task :// 1 -> Add dec at the end fo the array.Add// 2 -> What is the return value of the splice operator?// 3 -> update Mar to march// 4 -> Delete Jun from the array.
// Sol1:// const newMonths = months.splice(months.length, 0, 'Dec')// console.log(months);
// Sol2:// console.log(newMonths);// Splice method returns the elements we delete using splice in the form of array.
// Sol3:// const updateMonth = months.splice(2, 1, 'march')// console.log(months);
//Sol4:// const deleteMonth = months.splice
// --------------------------------------------------------------------------------------------------------------------// MAP AND REDUCE METHODS -
// Array.prototype.map() method// array.map(callbackFunction(currentValue, index, arr), thisValue)// Returns a new array containing the results of calling the callback function// on each element in the array without mutating the original array.// map() is chainable with filer(), reduce(), sort().// let square = [1, 4, 9, 16, 25];// let roots = square.map((element, index, arr) => {//     return Math.sqrt(element)// })// console.log(roots);
// Array.prototype.reduce() method// array.reduce(callbackFunction((total, currentValue, currentIndex, arr), initial value)// It flattens the array. Flattens the array means, it will convert the 3d or 2d array// to single dimentsional arrays.// The reduce method executes a reducer function(that you provide) on each Element// of the array, resulting in single output value.// The reducer function takes 4 arguments:// 1. Accumulator// 2. Current Value// 3. Current Index// 4. Source Array// It returns a single output value.// let arr1 = [3, 4, 5, 6, 7];// let arraySum = arr1.reduce((accumulator, element, index, srcArray) => {//     return accumulator += element;// }, 10);// console.log(arraySum);
// How to flatten an array using reduce() function// let twoDimArray = [//     ['Element1','Element2'],//     ['Element3','Element4'],//     ['Element6','Element6']// ]// let flattenArray = twoDimArray.reduce((accumulator, element) => {//     return accumulator.concat(element);// })// console.log(flattenArray);// But this wont work if the the array is nested multiple times.
// NOTE -> Filter, Map and Reduce functions are chainable with each other using the dot operator.
// ---------------------------------------------------------------------------------------------------------------------// FLAT AND FLATMAP METHODS -
// 1. Array.prototype.flat() -// - The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.// - A new array with the sub-array elements concatenated into it.
// - Syntax -// flat();// flat(depth);
// - depth parameter is Optional -// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
// Example -// const arr2 = [0, 1, 2, [[[3, 4]]]];// console.log(arr2.flat(2));// expected output: [0, 1, 2, [3, 4]]
// 2. Array.prototype.flatMap() -// - The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. It is identical to a map() followed by a flat() of depth 1, but slightly more efficient than calling those two methods separately.// - This method first of all map every element with the help of mapping function, then flattens the input array element into a new array.// - Returns a new array with each element being the result of the callback function and flattened to a depth of 1.
// - Syntax -> array.flatMap(callbackFunction(currentValue, index, arr), thisValue))
// Example -// let arr1 = [1, 2, 3, 4];
// arr1.map(x => [x * 2]);// // [[2], [4], [6], [8]]
// arr1.flatMap(x => [x * 2]);// // [2, 4, 6, 8]
// // only one level is flattened// arr1.flatMap(x => [[x * 2]]);// // [[2], [4], [6], [8]]
// ---------------------------------------------------------------------------------------------------------------------AT METHOD -
// ---------------------------------------------------------------------------------------------------------------------// Method that mutates the original array -// splice()// reverse()
// Method to add 2 arrays -// spread operators// concat()
// Data Tranformation methods -// Map// filter// reduce
// --------------------------------------------------------------------------------------------------------------------// EXAMPLES -
// Dataconst account1 = {  owner: "Jonas Schmedtmann",  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],  interestRate: 1.2, // %  pin: 1111,};
const account2 = {
	owner: "Jessica Davis",
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};
const account3 = {
	owner: "Steven Thomas Williams",
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};
const account4 = {
	owner: "Sarah Smith",
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};
const accounts = [account1, account2, account3, account4];
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
// EXAMPLE  1 -// const movementsUSDs = movements.map((movment) => movment * eurToUsd);// console.log(movements);// console.log(movementsUSDs);
// const movementsUSDsFor = [];// for (const iterator of movements) {//   movementsUSDsFor.push(iterator * eurToUsd);// }// console.log(movementsUSDsFor);
// EXAMPLE  2 -// const depositedMovements = movements.filter((movement) => movement > 0);// console.log(depositedMovements);
// const withdrawnMovements = movements.filter((movement) => movement < 0);// console.log(withdrawnMovements);
// EXAMPLE  3 -// const globalBalance = movements.reduce(//   (acc, movement) => (acc += movement),//   10 // initial accumulator value// );// console.log(globalBalance);
// EXAMPLE  4 -// Map Filter Reduce Method Chaining - (PIPELINE)// const totalDepositeInUSD = movements//   .filter((move) => move > 0)//   .map((move) => move * eurToUsd)//   .reduce((acc, move) => (acc += move));// console.log(totalDepositeInUSD);
// EXAMPLE - 5// const firstWithdrawal = movements.find((move) => move < 0);// console.log(firstWithdrawal);
// EXAMPLE - 6// const currentAccount = accounts.find(account => account.owner === "Jessica Davis")// console.log(currentAccount);
// EXAMPLE - 7// Checks for equality -// console.log(movements.includes(-130));
// Checks for condition -// console.log(movements.some((mov) => mov > 1500));
// EXAMPLE - 8// One Way -// const accountMovements = accounts.map(acc => acc.movements)// console.log(accountMovements)// const allMovements = accountMovements.flat();// console.log(allMovements)
// Another Way - Using flatMap()-// const overallMovement = accounts.flatMap(acc => acc.movements)// console.log(overallMovement)
