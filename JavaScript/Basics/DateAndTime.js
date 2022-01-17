// DATE AND TIME INTRODUCTION : 

// Javascript Date and Time objects represents a single a moment in time in a platform-independent format. Date objects contains a number that represents milliseconds since 1 Jan 1970 00:00:00 UTC

// There are 4 ways to create date objects:
//  - new Date()
//  - new Date(year, month, day, hour, minute, second, milliseconds) // It takes 7 arguments
//  - new Date(milliseconds) 
      // Cannot avoid month in this section
//  - new Date(date string)




// The new Date constructor:
// Syntax => new Date()
// Date objects are created with the new Date() constructor.
// let currDate = new Date();
// console.log(currDate);


// console.log(currDate.toLocaleDateString());
// console.log(currDate.toLocaleTimeString());
// console.log(currDate.toLocaleString());


// console.log(currDate.toString());
// Best way to show the Date in local time.


// console.log(Date.now());
// returns milliseconds from 1 Jan 1970 00:00:00 to till now.





// The new Date constructor with Multiple Arguments :
// Syntax => new Date(year, month, day, hour, minute, second, milliseconds) // It takes 7 arguments
// NOTE: JavaScript count months from 0 to 11
// 0 -> January, 11 -> December
// var createDate = new Date(2018, 2, 12, 3, 22, 12, 32, 56);
// console.log(createDate.toLocaleString())




// The new Date Constructor with Date String : 
// Syntax => new Date(dateString);
// It creates a new Date object from a date string.
// var createDate = new Date("October 13, 2021 11:13:23")
// console.log(createDate);




// The new Date Constructor with milliseconds Arguments : 
// Syntax => new Date(milliseconds);
// It creates a new Date object as zero time plus milliseconds Arguments
// let newDate = new Date(1639852485479)
// console.log(newDate);




// -------------------------------------------------------------
// USEFUL DATE FUNCTIONS :


// Getting Dates Info :
// const date = new Date();
// console.log(date.toLocaleString());
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);
// console.log(date.getDate());
// console.log(date.getDay());




// Setting Dates Info : 
// const date = new Date();
// console.log(date.toLocaleString());
// console.log(date.setFullYear(2021));
// console.log(date.setMonth(11));
// console.log(date.setDate(12));
// console.log(new Date(1639248266931));




// Getting Times Info :
// const time = new Date();
// console.log(time.getTime());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());
// The getHours() function returns the hours in range (0-23)




// Setting Times Info :
// const time = new Date();
// console.log(time.setTime(1639853298227));
// console.log(time.setHours(3));
// console.log(time.setMinutes(23));
// console.log(time.setSeconds(25));
// console.log(time.setMilliseconds(643));