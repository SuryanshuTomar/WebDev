// OBJECT ORIENTED JAVASCRIPT

// What is Object Literals in JavaScript?
// Object literals is simply a 'key:value' pair data structure.
// Storing variables and functions together in one container.
// We can refer this as an object.


// 1. A Class-Based language (like JAVA and C++) have a class construct which defines all the properties that characterize a set of objects
// 2. A Prototype-Based language has a notion of an object which serves as a template from which we get the properties of a new object.
// 3. JavaScript by design is not a class-based object-oriented language but a prototype-based language.
// 4. Classes were introduced after ES6 in JS

// ---------------------------------------------------------------------------------------------------
// UNDERSTANDING OBJECTS -

// 1. An object can be created like normal JS object with key-value pairs.
// 2. Objects can have a special type of property, called a method which are properties that are functions.
// 3. We can access the properties or methods by using the dot notation or bracket notation.

// const person1 = {
//  name: "Yash Gulati",
//  address: {
//    city: "Bangalore",
//    country: "India"
//  },
//  interests: ["Product Development", "Book reading", "Mentoring"]
// };

// console.log(person.name); //Yash Gulati
// console.log(person.address.city); //Bangalore
// console.log(person.address.country); //India



// ---------------------------------------------------------------------------------------------------
// HOW TO CREATE AN OBJECT?

// 1st Way-
// let bioData = {
//   myName: "DeathSlayer",
//   myAge: 9999,
//   getData: function () {
//     console.log(`Name : ${this.myName} and Age : ${this.myAge}`);
//   },
// };
// Here myName is the Object literal.
// We can add any kind of data into the object, even the functions.

// console.log(bioData.myName + " " + bioData.myAge);
// bioData.getData();

// 2nd Way-
// let bioData = {
//   myName: "DeathSlayer",
//   myAge: 9999,
//   getData() {
//     console.log(`Name : ${this.myName} and Age : ${this.myAge}`);
//   },
// };
// After ECMAScript 2015 ES6, we can directly define the functions inside an object without using the object conventions of defining an object member in a key value pair.

// Ques : What if we want object as a member of object inside it?
// Answer : YES
// let bioData = {
//   myfullName: {
//     firstName: "Death",
//     lastName: "Slayer",
//   },
//   myAge: 9999,
//   getData() {
//     console.log(
//       `Name : ${bioData.myfullName.firstName}${bioData.myfullName.lastName} and Age : ${this.myAge}`
//     );
//   },
// };
// bioData.getData();


// -------------------------------------------------------------------------------
// WHAT IS "this" OBJECT ?
// The definition of 'this' object is that it contains the current context.
// 'this' object can contains different values depending upon where it is placed.

// Example1 -
// console.log(this);
// It refers to the current context and in this case it is window object.

// Example2 -
//   function myName() {
//     console.log(this);
//   };
// myName();

// Example3 -
//  let bioData = {
//   myName: "DeathSlayer",
//   myAge: 9999,
//   getData: function () {
//     console.log(`Name : ${this.myName} and Age : ${this.myAge}`);
//   },
// };

// Note : 'this' object will not work with arrow functions. with arrow functions, this object will return the window object and not the current context object.


// ---------------------------------------------------------------------------------------------------
// CONSTRUCTORS - 




// 1. We can create objects and initialize its properties by using special function called Constructors.
// 2. Constructors help us create a blueprint for creating objects.
// 3. We reference the properties of the object inside the constructor using this keyword -
//      - A constructor (like a function) can be parameterized or non-parameterized.
//      - It is written with Capital or PascalCase




//Constructor Function with parameters
// function Car(make, model, color) {
//  this.make = make; //setting "make" property of Car object
//  this.model = model;
//  this.color = color;
//  this.start = function () {   //"start" function of Car object
//  console.log("Car Start");




// Constructors - Creating Objects -
// 1. We can create a new object with a constructor using the new keyword. When used, it does 3 things -
// 2. It creates a new empty object. {}
// 3. Sets this to point to the new object created - 
//      - It will be helpful in setting properties of the new object from inside the constructor
//      - this -> {}
// 4. Returns the newly created object from the Constructor function.

// const myCar = new Car("Audi", "Q3", "Black");
// console.log(myCar.color) //Black




// NOTE => “this keyword points to the object executing the current function.”
// 1. For an object method ⇒ it points to object executing the method.
// const person = {
//   name: "Yash Gulati",
//   greet: function () {
//     console.log("Hello! " + this.name);
//   },
// };
// person.greet(); //person is the object executing greet()

// 2. For a regular function ⇒ points to the global window object.
// function hello() {
//   console.log(this);
// }
// hello();

// NOTE => “this keyword points to the object this is executing the current function.”
// In a constructor (or if you call an object using the new operator), this references an empty object in the memory.
// NOTE => functions inside a class (or/and object in js) is called a method.



// ---------------------------------------------------------------------------------------------------
// BIND METHOD - 



// Observe that when we pass the method as callback, the value of this is lost and when the executor function executes the callback, this is not pointing to the student object anymore.

// //Defining an object
// const student = {
//   fullName: "Rohit",
//   greet: function () {
//     //We want to print "Hello, Rohit"
//     console.log("Hello, " + this.fullName);
//   },
// };

// //We define an executor function
// function executeObjectFunction(callback) {
//   callback();
// }

// //Passing the object method as callback
// executeObjectFunction(student.greet);


// STEPS - 
// 1. What we can do is pass the value of this explicitly to the student.greet method
// 2. To achieve this we have a method which we can apply on methods → bind

// //FIX: bind the object to the method.
// const greet = student.greet.bind(student);

// //Passing the object method as callback
// executeObjectFunction(greet);

// 3. The bind() method returns a new function
// 4. It helps us set the value of this to the passed value for specific function.

// Question - Fix the given code to show the timer after 1s.
// After fixing, the code, 10 should be console logged after 1s.

// const timer = {
//   currentTime: 0,
//   showTime: function () {
//     console.log(this.currentTime);
//   },
//   addTen: function () {
//     this.currentTime += 10;
//     this.showTime();
//   },
// };

// setTimeout(timer.addTen, 500);


// Answer - 
// const timer = {
//   currentTime: 0,
//   showTime: function () {
//     console.log(this.currentTime);
//   },
//   addTen: function () {
//     this.currentTime += 10;
//     this.showTime();
//   },
// };

// setTimeout(timer.addTen.bind(timer), 500); 




// ---------------------------------------------------------------------------------------------------
// ES6 CLASSES - 

// 1. JS is not inherently a class-based language, but ES6 provides us with “class-like” syntax which emulates the idea of classes in JavaScript
// 2. Under the hood, it is doing the same thing we were doing with Constructor functions.
// 3. Classes are blueprints that describe a particular object.
// 4. A class is declared with a reserved keyword - class, followed by the class name in Pascal Case (same as constructors)



// --------------------------------------------------------------------------------------------------
// HOW TO CREATE JS CLASSES -


// 1. Use the class keyword followed with the class name (ex. class Person)
// 2. Create a constructor method inside the class - can be parameterized/non-parameterized.

// class Person {
//   constructor(personName, personAge) {
//     this.name = personName;
//     this.age = personAge;
//   }
//   //...other methods
// }


// Question - Create a class method by just writing the method name (ex. sumSalaries()) and omit the function keyword OR use the Arrow function syntax.
// greet() {
//   console.log("Hello " + this.name);
// }

// greet = () => {
//   console.log("Hello " + this.name);
// };



// ---------------------------------------------------------------------------------------------------
// INHERITANCE - 



// 1. Class inheritance is a way for one class to extend another class. So we can create new functionality on top of the existing.
// 2. We can use the extends keyword after the class declaration to "extend" the class.
// 3. So the inherited class shall have the members of the base class (parent class) as well its own members.
// 4. This helps us in reducing duplicate code and reuse the already written one.




// CODE -

//Parent Class
// class Student {
//   //Parent class constructor with parameter
//   constructor(name) {
//     this.fullName = name;
//   }

//   //Parent class member method
//   markAttendance() {
//     console.log(this.fullName, "is present");
//   }
// }

// Derived or Child class
// class SportsCaptain extends Student {
//   //Child class member method
//   playFootball() {
//     //fullName is derived from Parent class's fullName data member
//     console.log(this.fullName, "is playing football");
//   }
// }




// ---------------------------------------------------------------------------------------------------
// METHOD OVERRIDING - 



// 1. It is a feature that allows a child class to provide a specific implementation of a method already provided by the parent class.
// 2. If we define the same method in the child class -> the objects of the child class will call that particular implementation instead of the parent class implementation.



// CODE - 

// //Base or Parent class
// class Student {
//   constructor(name) {
//     this.fullName = name;
//   }

//   //Parent Class Method
//   markAttendance() {
//     console.log(this.fullName, "is present");
//     return this;
//   }
// }


// //Derived or Child class
// class SportsCaptain extends Student {
//   //Method Override in Child Class
//   markAttendance() {
//     console.log("Sports Captain " + this.fullName + " is present");
//   }

//   playFootball() {
//     console.log(this.fullName, "is playing football");
//   }
// }

// const yash = new Student("Yash");
// yash.markAttendance(); //Yash is present

// const babita = new SportsCaptain("Babita");
// babita.markAttendance(); //Sports Captain Babita is present




// ---------------------------------------------------------------------------------------------------
// SUPER KEYWORD - 



// If we wish to explicitly call the parent class implementation we can use the super keyword.
//      1). super.method(...) to call a parent method.
//      2). super(...) to call a parent constructor (inside child class constructor only).



// CODE -

//Method Override in Child Class - 
// markAttendance() {
//   super.markAttendance();
//   console.log("Sports Captain " + this.fullName + " is present");
// }

// const yash = new SportsCaptain("Yash Gulati");
// yash.markAttendance();

//OUTPUT -
//Yash Gulati is present
//Sports Captain Yash Gulati is present



// NOTE => 
// 1. If we wish to explicitly call the parent class implementation we can use the super keyword.
// 2. Use super.method(...) to call a parent method.


// CODE - 

//Method Override in Child Class
// markAttendance() {
//   super.markAttendance();
//   console.log("Sports Captain " + this.fullName + " is present");
// }

// const yash = new SportsCaptain("Yash Gulati");
// yash.markAttendance();

//OUTPUT
//Yash Gulati is present
//Sports Captain Yash Gulati is present




// ---------------------------------------------------------------------------------------------------
// CONSTRUCTOR OVERLOADING - 



// If the child class does not have a constructor of its own, it uses the constructor of its parent class.
// We can have a separate constructor for the child also, 
// BUT then we'll need to use the super keyword inside the child class's constructor and pass all the values needed to initialize the parent class constructor.



// CODE - 

//  //Parent class has one parameter - name
//   constructor(name) {
//     this.fullName = name;
//   }

//    //Constructor Overriden in Child Class
//   constructor(name, age) {
//     //Passing the name variable to the parent constructor
//     super(name);

//     //Initializing members of SportsCaptain class
//     this.age = age;
//   }



// ---------------------------------------------------------------------------------------------------