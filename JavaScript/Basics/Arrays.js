// -> In Javascript, we have Array class, and arrays are prototype of this class.
// -> JavaScript arrays are special, because js arrays are not limited to storing same type
//    of objects in arrays. In here we can store multiple datatypes data also.
// -> First element in array is called Lower Index or Lower Boundary
// -> Last element in array is called Upper Index or Upper Boundary.
// -> Every element in the array is represented by index numbers.
// -> Indexing in js array starts from 0.

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Array declaration and array definition.
let data = ["Element1", "Element2", 23, true, 88.3];
// console.log(data); // Accessing whole 'data' array
// console.log(data[0]) // Accessing the first element of the array using index value.
// console.log(data[data.length - 1]) // Accessing the last element of the array using reverse indexing
// console.log(data.length); // Using array length property which gives the size of the array.

// Array Traversal
// data.forEach(element => {
//     console.log(element)
// })

// ----------------------------------------------------------------------------------------------------------------------------------
// SEARCHING AND FILTERING IN ARRAY:

// Array.prototype.indexOf() method
// console.log(data.indexOf(23));
// indexOf(search Element, Start Index for search, End index for search)
// searching of element will always be from left to right.
// console.log(data.indexOf(true, 4));

// Array.prototype.lastIndexOf() method
// console.log(data.lastIndexOf(23));
// searching of element will always be from right to left.
// It return the index of the found element from the right side of the array
// in case any elments in the array is duplicate.

// Array.prototype.includes() method
// console.log(data.includes(23));
// It returns the value true or false based on whether the element we entered
// in the arguments is found in the array or not.

// Array.prototype.find() method
// array.find(callbackFunction(currentValue, index, arr), thisValue))
// return the found element in the array, if some elements in the array are not found
// satisfies the testing function, or undefined if the element is not found
// The only problem with this method is that it only returns one element.
const prices = [100, 200, 300, 400, 500, 1000];
// const findPrice = prices.find((currentValue) =>  currentValue > 400 )
// console.log(findPrice);
// answer we should get in this case -> 500 and 1000
// but instead we will get only 500 as find() will only return 1 element

// Array.prototype.findIndex() method
// returns the index of the the found element in the array if an element
// in the array satisfies the testing function else if not found then it will
// return -1;
// const findPriceIndex1 = prices.findIndex((currentValue) =>  currentValue > 400 )
// console.log(findPriceIndex1);
// const findPriceIndex2 = prices.findIndex((currentValue) =>  currentValue > 1000 )
// console.log(findPriceIndex2);

// Array.prototype.filter() method //Recommended most of all.
// array.filter(callbackFunction(currentValue, index, arr), thisValue))
// Best array method for finding elements in arrays or list or objects.
// Returns a new array containing the elements of the calling array for which
// the provided filter function returns true.
// Return empty array if the condition does not satifies.
// const newPriceTag = prices.filter((currentValue, index, arr) => currentValue > 400)
// console.log(newPriceTag);

// Array.prototype.sort() method
// The sort method sort the element of an array in place and returns the sorted
// array. The default sorting order is ascending, build upon converting the array
// into string, then comparing the sequence of UTF-16 code unit values.
// const months = ['Dec', 'Aug', 'Mar', 'Nov', 'May', 'Oct', 'Jul']
// console.log(months.sort());
// Sorted the months in ascending order with alphabetical order.
const numbers = [1, 10000, 43, 23, 99, 5];
// console.log(numbers.sort());
// This will be sorted after converting these numbers into strings first and then
// sort the value according their string values.

// ------------------------------------------------------------------------------------------------------------------------
// CRUD OPERATIONS IN ARRAY:
// (CRUD -> Create, Read, Update and Delete)

// Array.prototype.push() method
// The push() method adds one or more items to the end of the array
// And returns the new length of the array.
// We can also add arrays and objects inside of the array using this push method.
// const animals = ['dogs', 'cats', 'pandas', 'wolves']
// const count =  animals.push('cows')
// animals.push(['dogs', 'cats', 'pandas'])
// console.log(count, animals)

// Array.prototype.unshift() method
// The unshift() method adds one or more items to the start of the array
// And returns the new length of the array.
// We can also add arrays and objects inside of the array using this push method.
// const animals = ['dogs', 'cats', 'pandas', 'wolves']
// const count =  animals.unshift('cows', 'calves')
// animals.unshift(['dogs', 'cats', 'pandas'])
// console.log(count, animals)

// Array.prototype.pop() method
// The pop() method removes one item from the end of the array
// This method changes the length of array.
// And returns the popped element from the array.
// We can also add arrays and objects inside of the array using this push method.
// const animals = ['dogs', 'cats', 'pandas', 'wolves']
// const poppedElement =  animals.pop();
// console.log(poppedElement, animals)

// Array.prototype.shift() method
// The shift() method removes one item from the start of the array
// This method changes the length of array.
// And returns the popped element from the array.
// We can also add arrays and objects inside of the array using this push method.
// const animals = ['dogs', 'cats', 'panda, 'wolves']

// Array.prototype.splice() method
// array.splice(index, delete/count, item1, item2.....itemK)
// This method can be used to perform all the CRUD operations in the array.
// Adds AND/OR Removes elements to/from the the array.
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

// Task :
// 1 -> Add dec at the end fo the array.Add
// 2 -> What is the return value of the splice operator?
// 3 -> update Mar to march
// 4 -> Delete Jun from the array.

// Sol1:
// const newMonths = months.splice(months.length, 0, 'Dec')
// console.log(months);

// Sol2:
// console.log(newMonths);
// Splice method returns the elements we delete using splice in the form of array.

// Sol3:
// const updateMonth = months.splice(2, 1, 'march')
// console.log(months);

//Sol4:
// const deleteMonth = months.splice(5, 1)

// -------------------------------------------------------------------------------------------------------------------------
// MAP AND REDUCE METHODS -

// Array.prototype.map() method
// array.map(callbackFunction(currentValue, index, arr), thisValue)
// Returns a new array containing the results of calling the callback function
// on each element in the array without mutating the original array.
// map() is chainable with filer(), reduce(), sort().
// let square = [1, 4, 9, 16, 25];
// let roots = square.map((element, index, arr) => {
//     return Math.sqrt(element)
// })
// console.log(roots);

// Array.prototype.reduce() method
// array.reduce(callbackFunction((total, currentValue, currentIndex, arr), initial value)
// It flattens the array. Flattens the array means, it will convert the 3d or 2d array
// to single dimentsional arrays.
// The reduce method executes a reducer function(that you provide) on each Element
// of the array, resulting in single output value.
// The reducer function takes 4 arguments:
// 1. Accumulator
// 2. Current Value
// 3. Current Index
// 4. Source Array
// It returns a single output value.
// let arr1 = [3, 4, 5, 6, 7];
// let arraySum = arr1.reduce((accumulator, element, index, srcArray) => {
//     return accumulator += element;
// }, 10);
// console.log(arraySum);

// How to flatten an array using reduce() function
// let twoDimArray = [
//     ['Element1','Element2'],
//     ['Element3','Element4'],
//     ['Element6','Element6']
// ]
// let flattenArray = twoDimArray.reduce((accumulator, element) => {
//     return accumulator.concat(element);
// })
// console.log(flattenArray);
// But this wont work if the the array is nested multiple times.

// NOTE -> Filter, Map and Reduce functions are chainable with each other using the dot operator.

// --------------------------------------------------------------------------------------------------------
// DIFFERENCE BETWEEN MAP AND FOREACH METHOD -

// 1. The returning value -
// The first difference between map() and forEach() is the returning value. The forEach() method returns undefined and map() returns a new array with the transformed elements. Even if they do the same job, the returning value remains different.

// Example -
// const myAwesomeArray = [1, 2, 3, 4, 5]
// myAwesomeArray.forEach(x => x * x)
// //>>>>>>>>>>>>>return value: undefined

// myAwesomeArray.map(x => x * x)
// //>>>>>>>>>>>>>return value: [1, 4, 9, 16, 25]

// 2. Ability to chain other methods -
// The second difference between these array methods is the fact that map() is chainable. This means that you can attach reduce(), sort(), filter() and so on after performing a map() method on an array.
// That's something you can't do with forEach() because, as you might guess, it returns undefined.

// Example -
// const myAwesomeArray = [1, 2, 3, 4, 5]
// myAwesomeArray.forEach(x => x * x).reduce((total, value) => total + value)
// //>>>>>>>>>>>>> Uncaught TypeError: Cannot read property 'reduce' of undefined
// myAwesomeArray.map(x => x * x).reduce((total, value) => total + value)
// //>>>>>>>>>>>>>return value: 55

// 3. Mutability -
// In general, the word "mutate" means change, alternate, modify or transform. And in the JavaScript world it has the same meaning.
// A mutable object is an object whose state can be modified after it is created. So, what about forEach and map regarding mutability?

// Well, according to the MDN documentation:
// forEach() does not mutate the array on which it is called. (However, callback may do so).
// map() does not mutate the array on which it is called (although callback, if invoked, may do so).
// JavaScript is weird.

// The map() method returns an entirely new array with transformed elements and the same amount of data. In the case of forEach(), even if it returns undefined, it will mutate the original array with the callback.
// Therefore, we see clearly that map() relies on immutability and forEach() is a mutator method.

// 4. Performance Speed -
// Regarding performance speed, they are a little bit different. But, does it matter? Well, it depends on various things like your computer, the amount of data you're dealing with, and so on.

// Example -
// const myAwesomeArray = [1, 2, 3, 4, 5]

// const startForEach = performance.now()
// myAwesomeArray.forEach(x => (x + x) * 10000000000)
// const endForEach = performance.now()
// console.log(`Speed [forEach]: ${endForEach - startForEach} miliseconds`)

// const startMap = performance.now()
// myAwesomeArray.map(x => (x + x) * 10000000000)
// const endMap = performance.now()
// console.log(`Speed [map]: ${endMap - startMap} miliseconds`)
