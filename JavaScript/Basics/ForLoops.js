myFriends = ["Ramesh", "Suresh", "Vinod", "Jack"];
// Tradition For Loop// for (var i = 0; i < myFriends.length; i++) {//   console.log(myFriends[i]);// }
// For In Loop : Can be applied only on arrays.// -> for in loop returns the index values of the elements in the array.// for (let elements in myFriends) {//   console.log(elements);// }
// For Of Loop : Can be applied only on arrays.// -> for of loop returns the elements iteself present in the array.// -> But we can also access indices of the array items using iterators functions like - entries(), keys(), values(). etc.
// Example:// for (let elements of myFriends) {//   console.log(elements);// }
// Example:// for (let item of myFriends.keys()) console.log(item);// for (let item of myFriends.entries()) console.log(item);// for (let item of myFriends.values()) console.log(item);
// Example: Destructuring array entries() with for of loop.// for (let [i, elem] of myFriends.entries()) {//   console.log(`${i + 1}: ${elem}`);// }
// For Each Loop : Can be applied only on arrays.// -> Array.prototype.forEach()// -> forEach() is a higher-order function which takes callback function with each item of array as argument.// -> Calls a function in each iteration for each element in the array.// -> It takes a function which contains the following arguments:// 1. element/value of array/maps/sets// 2. index/key of elements// 3. current array/maps/sets// 4. this object// -> It is a combination of both for in and for of loop.// -> In for each loop we cannot use break.
// EXAMPLE - 1// myFriends.forEach(function(element, index, array) {//      console.log(element, index, array);// })
// EXAMPLE - 2// myFriends.forEach((element, index, array) => {//   console.log(element, index, array);// });
// EXAMPLE - 3// const currencies = new Map([//   ["USD", "United States Dollar"],//   ["EUR", "Euro"],//   ["INR", "Indian Rupees"],// ]);
// currencies.forEach(function (value, key, map) {//   console.log(value, key, map);// });
// EXAMPLE - 4// const currenciesUnique = new Set([//   "INR",//   "USD",//   "GBP",//   "YEN",//   "YEN",//   "INR",//   "USD",//   "GBP",//   "YEN",//   "YEN",// ]);
// currenciesUnique.forEach(function (value, index, set) {//   console.log(`${index}: ${value} from -> `, set);// });// Note - While iterating the sets, value and index parameters in the forEach callback function will contain the same value because sets are unordered and does not have anything like index or keys
