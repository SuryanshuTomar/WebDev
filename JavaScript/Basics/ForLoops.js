myFriends = ["Ramesh", "Suresh", "Vinod", "Jack"]

// Tradition For Loop
// for (var i = 0; i < myFriends.length; i++) {
//   console.log(myFriends[i]);
// }

// For In Loop : Can be applied only on arrays.
// -> for in loop returns the index values of the elements in the array.
// for (let elements in myFriends) {
//   console.log(elements);
// }

// For Of Loop : Can be applied only on arrays.
// -> for of loop returns the elements iteself present in the array.
// for (let elements of myFriends) {
//   console.log(elements);
// }

// For Each Loop : Can be applied only on arrays.
// -> Array.prototype.forEach()
// -> Calls a function for each element in the array.
// -> It takes a function which contains the following arguments: 
        // 1. element of array
        // 2. index of elements
        // 3. current array
        // 4. this object
// -> It is a combination of both for in and for of loop.
// -> In for each loop we cannot use break.
// myFriends.forEach(function(element, index, array) {
//      console.log(element, index, array);
// })

myFriends.forEach((element, index, array) => {
     console.log(element, index, array);
})
