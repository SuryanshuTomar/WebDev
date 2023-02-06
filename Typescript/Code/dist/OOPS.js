"use strict";
// ----------------------------------------------------------------------------
// - Classes -
Object.defineProperty(exports, "__esModule", { value: true });
// Creating a Class
// class User {
//   // Declaring properties in TS
//   name: string;
//   email: string;
//   city?: string;
//   readonly school: string = "MIT";
//   // Assigning values to properties through a constructor
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//   }
// }
// Creating an object of the class -
// const alex = new User("alex mercer", "alexmercer@gmail.com");
// console.log(alex);
// ------------------------------------------------------------------------------
// - Public and Private Access Modifieres -
// - There are three types of access modifieres in ts -
// 1. public Access Modifier
// 2. private Access Modifier
// 3. protected Access Modifier
// Example -
// class User {
//   // Declaring public and private properties in TS
//   // properties which are defined without any access modifier
//   // are automatically defined public.
//   // we can set public and private to both type of members
//   // properties and methods.
//   public name: string;
//   public email: string;
//   private userId: number;
//   city?: string;
//   readonly school: string = "MIT";
//   // Assigning values to properties through a constructor
//   constructor(name: string, email: string, userId: number) {
//     this.name = name;
//     this.email = email;
//     this.userId = userId;
//   }
//   // private method
//   private getToken(){
//     console.log("Returning Token....")
//   }
// }
// creating an instance/object using the class
// const alex = new User("alex mercer", "alexmercer@gmail.com", 100);
// - Production Grade For The Above Code -
// - So, we can write the above code in a lot less lines and this is how senior developers mostly like to write their code.
// - Below is the same code as above with a lot less line and how developers write their code in production.
// class User {
//   city?: string;
//   readonly school: string = "MIT";
//   // Assigning values to properties through a constructor
//   constructor(
//     public name: string,
//     public email: string,
//     private userId: number
//   ) {}
//   // private method
//   private getToken() {
//     console.log("Returning Token....");
//   }
// }
// creating an instance/object using the class
// const alex = new User("alex mercer", "alexmercer@gmail.com", 100);
// ------------------------------------------------------------------------------
// - Getters and Setters -
// - Getters are Setters are same as JS in TS.
// - But there are minute changes in TS that interviewers also like to ask.
// 1. Getter - getters needs to have return type annotation defined in their defination.
// 2. Setter - setters does need any return type annotation defined in their defination as setters are used to set the value of private properties and does not need to return anything (not even void)
// - Example -
// class User {
//   city?: string;
//   readonly school: string = "MIT";
//   private _courseCount = 1;
//   // Assigning values to properties through a constructor
//   constructor(
//     public name: string,
//     public email: string,
//     private userId: number
//   ) {}
//   // getter
//   get getCourseCount(): number {
//     return this._courseCount;
//   }
//   // setter
//   set setCourseCount(courseNum:number) {
//     if(courseNum <= 1) {
//       throw new Error("Course count should be more than 1")
//     }
//     this._courseCount = courseNum;
//   }
//   // private method
//   private getToken() {
//     console.log("Returning Token....");
//   }
// }
// creating an instance/object using the class
// const alex = new User("alex mercer", "alexmercer@gmail.com", 100);
// ------------------------------------------------------------------------------
// - Inheritance And Protected Access Modifieres -
// - Inheritance is same as JS in TS (No Difference)
// - There is one more Access Modifier in TS which is protected access modifier.
// - Access difference between all the access modifiers -
// 1. public(default) - members defined public are accessible from anywhere and are subjected to change.
// 2. private - members defined private are accessible only within the class and can only be changed withing class but are subject to change and have access to ready using getters and setters.
// 3. protected - members defined protected are accessible withing class and from child class as well. These members are subjected to change from both parent and child class but are only available outside throught getters and setters.
// - Example -
class User {
    // Assigning values to properties through a constructor
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this.school = "MIT";
        this._courseCount = 1;
        this._subjectCount = 4;
    }
    // getter
    get getCourseCount() {
        return this._courseCount;
    }
    // setter
    set setCourseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    // private method
    getToken() {
        console.log("Returning Token....");
    }
}
class SubUser extends User {
    constructor(name, email, userId) {
        super(name, email, userId);
        this.isFamily = true;
    }
    set setCourseCount(subjectCount) {
        this._subjectCount = subjectCount;
    }
}
// creating an instance/object using the class
// const alex = new User("alex mercer", "alexmercer@gmail.com", 100);
// const alex = new SubUser("alex mercer", "alexmercer@gmail.com", 100);
// const user = new User("alex", "alexmercer@gmail.com", 0_01);
// ------------------------------------------------------------------------------
// - Interfaces -
// - An Interface is a structure which acts as a contract in our application. It defines the syntax for classes to follow, means a class which implements an interface is bound to implement all its members. We cannot instantiate the interface, but it can be referenced by the class object that implements it. The TypeScript compiler uses interface for type-checking (also known as "duck typing" or "structural subtyping") whether the object has a specific structure or not.
// - The interface contains only the declaration of the methods and fields, but not the implementation. We cannot use it to build anything. It is inherited by a class, and the class which implements interface defines all members of the interface.
// - When the Typescript compiler compiles it into JavaScript, then the interface will be disappeared from the JavaScript file. Thus, its purpose is to help in the development stage only.
// - Interface Declaration -
// - We can declare an interface as below.
// - Syntax -
// interface interface_name {
//           // variables' declaration
//           // methods' declaration
// }
// - An interface is a keyword which is used to declare a TypeScript Interface.
// - An interface_name is the name of the interface.
// - An interface body contains variables and methods declarations.
// - Example1 -
// interface OS {
//     name: String;
//     language: String;
// }
// let OperatingSystem = (type: OS): void => {
//   console.log('Android ' + type.name + ' has ' + type.language + ' language.');
// };
// let Oreo = {name: 'O', language: 'Java'}
// OperatingSystem(Oreo);
// - Example2 -
// interface TakePhoto {
//     cameraMode: string
//     filter: string
//     burst: number
// }
// interface Story {
//     createStory(): void
// }
// class Instagram implements TakePhoto {
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){}
// }
// class Youtube implements TakePhoto, Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string
//     ){}
//     createStory(): void {
//         console.log("Story was created");
//     }
// }
// ------------------------------------------------------------------------------
// - Abstract Classes -
// - An abstract class is a class that includes both abstract and regular methods. It is a class that is inherited by multiple classes. We can not create objects of an abstract class.
// - An abstract class is declared by using the keyword abstract.
// - An abstract class generally has one or more abstract methods.
// - An abstract class can also include an abstract properties.
// - An abstract method is one that doesn't have any implementation. It merely defines the method's signature and excludes the method body. In the derived class, an abstract method must be implemented.
// - An abstract class can defined and their own methods as well which are related to child classes and can later be used by all the child class instances.
// -  Note: The class which implements an abstract class must call super() in the constructor.
// - Syntax -
// abstract class ClassName{
//  //variables declaration;
//  //abstract or non-abstract methods;
// }
// - Summary -
// - Abstract classes cannot be instantiated.
// - An Abstract class has at least one abstract method.
// - To use an abstract class, you need to inherit it and provide the implementation for the abstract methods.
// - An Abstract class can have their own implemented methods as well.
// - Example -
// abstract class TakePhoto {
//   // abstract property
//   abstract videoMode: string;
//   // constructor
//   constructor(public cameraMode: string, public filter: string) {}
//   // abstract method
//   abstract getSepia(): void;
//   // Own implemented method
//   getReelTime(): number {
//     //some complex calculation
//     return 8;
//   }
// }
// class Instagram extends TakePhoto {
//   constructor(
//     public cameraMode: string,
//     public filter: string,
//     public burst: number,
//     public videoMode: string
//   ) {
//     super(cameraMode, filter);
//   }
//   getSepia(): void {
//     console.log("Sepia");
//   }
// }
// const hc = new Instagram("cameraTest", "filterTest", 3, "videoTest");
// hc.getReelTime();
// ------------------------------------------------------------------------------
// - Generics -
// - Generics allow creating 'type variables' which can be used to create classes, functions & type aliases that don't need to explicitly define the types that they use.
// - Generics makes it easier to write reusable code.
// - Generics Documentation -
// https://www.typescriptlang.org/docs/handbook/2/generics.html
const score = [];
const names = [];
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
