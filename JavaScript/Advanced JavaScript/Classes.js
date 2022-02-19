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
