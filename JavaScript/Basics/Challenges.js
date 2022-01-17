// Challenge 1 :

// console.log(10 + "20")
// console.log(20 - "20")
// console.log("Java" + "Script")
// console.log(" " + " ")
// console.log("- -" + 0)
// console.log("Vinod" - "Thapa") // Will output NaN -> (Not a number)
// console.log(true + true)
// console.log(true + false)
// console.log(false - true)
// console.log(true - false)

// Question : What is the difference between null and undefined ?
// Answer : 
//     Null: It is the intentional absence of the value. It is one of the primitive values of JavaScript.
//     Undefined: It means the value does not exist in the compiler. It is the global object.

// Type:
// Null: Object 
// Undefined: undefined

//  null == undefined // true
//  null === undefined // false

// It means null is equal to undefined but not identical.
// When we define a variable to undefined then we are trying to convey that the variable does not exist .
// When we define a variable to null then we are trying to convey that the variable is empty.

// Differentiating using isNaN():
// You can refer to NaN article for better
// understanding.

// isNaN(2 +  null)      // false
// isNaN(2 + undefined) // true


// Question : What is NaN?
// Answer : 

// 1. The full form of NaN is: Not a variable
// 2. NaN is a property of global object.
// 3. In other words, NaN is a variable in global scope.

// var myPhoneNumber = 9879879872;
// console.log(isNaN("myName"));
// console.log(isNaN(myPhoneNumber));
// console.log(typeof myPhoneNumber);


// Challenge 2: 

// console.log(NaN === NaN)
// console.log(Number.NaN === NaN)
// console.log(isNaN(NaN))
// console.log(Number.isNaN(NaN))  
// console.log(isNaN(Number.NaN))



// Question1 : Find the square root of each element in the array.
// Method 1:
// let arr1 = [25, 36, 49, 64, 81];
// arr1.forEach(element => {
//      console.log(Math.sqrt(element))
// });
// Method 2:
// let roots = arr1.map((element, index, arr) => {
//     return Math.sqrt(element)
// })
// console.log(roots);



// Question2 : Multiply each element in the array by 2 and return only those elements
// which are greater than 10.
// let arr2 = [2, 3, 4, 5, 6, 7, 8, 9, 10];
// let multiply = arr2.map((element) => element * 2).filter(element => element > 10);
// console.log(multiply);



// Question3 : Use Map and Filter and Reduce in Chainings
// let nums = [1, 2, 3, 4, 5, 6, 7, 8];
// let squares = nums.map(element => element**2);
// console.log(squares);

// let even = [2, 4, 6, 8, 10, 12]
// let greaterSum = even.map(element => element*2).filter(element => element > 10).reduce((accumulator, element)=> {
//     debugger;
//     return accumulator += element 
// })
// console.log(greaterSum);



// Question4 : Display only 280 characters of a string like the one used in twitter.com?
// let myTweets = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ratione totam iusto, sint illum aut laboriosam adipisci alias placeat ea incidunt, asperiores itaque quaerat tempore ducimus nihil minima consequuntur sequel Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sit molestias incidunt, modi cumque, neque corrupti reiciendis odit quas iure velit fugit et. Iusto quae odio corrupti ullam, necessitatibus voluptatem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum voluptatibus omnis quis ducimus quod impedit, nostrum obcaecati itaque suscipit ratione maxime commodi nam. Nesciunt rem excepturi nemo, non atque ipsa ut autem officia suscipit similique repudiandae impedit totam ducimus deserunt molestiae, laudantium nam sed unde adipisci. Tempora corporis quaerat magni ut explicabo pariatur accusantium amet quasi nulla rem rerum repellat non commodi deserunt, vero officiis assumenda incidunt, sapiente doloremque reiciendis quos aperiam officia a quis. Aut temporibus id atque. Mollitia sunt a eum cumque reprehenderit beatae sapiente, pariatur magni dolor quam, itaque sequi enim, consectetur asperiores consequatur excepturi deserunt earum."
// let tweetTextLimit = 280
// let tweetText = myTweets.slice(0, tweetTextLimit)
// console.log(tweetText);



// Question5: Return the unicode of the the last character of a string.
// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
// let res = str.charCodeAt(str.length - 1)
// console.log(res);




// Question 6: How to flatten an array :
// const arr = [
//     ['zone1', 'zone2'],
//     ['zone3', 'zone4'],
//     ['zone5', 'zone6'],
//     ['zone7', ['zone8', ['zone9']]]
// ];

// One Way : Not so much good technique but it will flatter array till one level of array only.
// let flatArr = arr.reduce((acc, ele) => acc.concat(ele))
// console.log(flatArr);


// Another Way : Recommended
// console.log(arr.flat(2));
// console.log(arr.flat(Infinity));

