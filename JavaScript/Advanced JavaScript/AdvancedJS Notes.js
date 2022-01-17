// TOPICS FOR ADVANCED JS -
// -> Event Propogation
// -> Higher Order Functions
// -> Callback Functions
// -> Function Currying
// -> Callback Hell
// -> AJAX call using XMLHttpRequest
// -> JSON
// -> Fetch API
// -> Promises
// -> Async-Await
// -> Error Handling in JS






// -----------------------------------------------------------------------------------------------
// 1. EVENT PROPAGATION -

// What is Event Propagation?
// -> Event Propagation mode determines in which order the element receives events.
// -> Event Bubbling and Event Capturing are two ways of event propogation in the HTML DOM API, when an event occurs in an element inside another element, and both the elements have registered a handle for that event.

// -> Propogation is broadly categorized in 3 types -
//     - The capture phase - Going from the window to event target phase.
//     - The target phase - It is the target phase of the event
//     - The bubble phase - Going from the event target parent back to the window.

// -> Event Propogation can be stopped by using event.stopPropagation() method.




// What is Event Bubbling?
// -> With Event bubbling, the event is first captured and handled by the innermost element and then propogated to outer elements.
// -> Bydefault, the default propogation that happens in the DOM API is Event Bubbling.
// -> But we can call the event bubbling explicitly using the addEventListener method -
//     target.addEventListener(eventName, callback, false);




// What is Event Capturing?
// -> With Event Capturing, the event is first captured by the outermost element and then propogated to the innermost element.
// -> Capturing is also called Trickling, which helps remember the propogation order.
// -> We can call the event bubbling explicitly using the addEventListener method -
//     target.addEventListener(eventName, callback, true);






// --------------------------------------------------------------------------------------------------// 2. Higher Order Function -

// -> Function that takes another order as an argument is called HOF.
// More info in Functional Programming File.

// Eg- 
// function add(num1, num2) {
//   return num1 + num2;
// }
// function subtract(num1, num2) {
//   return num1 - num2;
// }
// function divide(num1, num2) {
//   return num1 / num2;
// }
// function multiply(num1, num2) {
//   return num1 * num2;
// }
// const calculator = (num1, num2, operation) => {
//   return operation(num1, num2);
// };
// console.log(calculator(10, 5, add));
// console.log(calculator(10, 5, subtract));
// console.log(calculator(10, 5, multiply));
// console.log(calculator(10, 5, divide));


// Note: Here calculator is HOF and add, subtract, multiply and divide are callback functions.




// ---------------------------------------------------------------------------------------------------// 3. CallBack Functions -

// -> Functions which gets passed as an argument to another function is called Callback function.
// -> A callback function is a function that is passed as an argument to another function, to be "called back" at a later time.



// ---------------------------------------------------------------------------------------------------
// -> AJAX call using XMLHttpRequest -

// What is AJAX?
// -> AJAX is a web development technique for creating interactive web applications. If you know JavaScript, HTML, CSS, and XML, then you need to spend just one hour to start with AJAX.

// Why to Learn Ajax?
// -> AJAX stands for Asynchronous JavaScript and XML. AJAX is a new technique for creating better, faster, and more interactive web applications with the help of XML, HTML, CSS, and Java Script.
//->  Ajax uses XHTML for content, CSS for presentation, along with Document Object Model and JavaScript for dynamic content display.
// -> Conventional web applications transmit information to and from the sever using synchronous requests. It means you fill out a form, hit submit, and get directed to a new page with new information from the server.
// -> With AJAX, when you hit submit, JavaScript will make a request to the server, interpret the results, and update the current screen. In the purest sense, the user would never know that anything was even transmitted to the server.
// -> XML is commonly used as the format for receiving server data, although any format, including plain text, can be used.
// -> AJAX is a web browser technology independent of web server software.
// -> A user can continue to use the application while the client program requests information from the server in the background.
// -> Intuitive and natural user interaction. Clicking is not required, mouse movement is a sufficient event trigger.
// -> Data-driven as opposed to page-driven.


// Rich Internet Application Technology -

// AJAX is the most viable Rich Internet Application (RIA) technology so far. It is getting tremendous industry momentum and several tool kit and frameworks are emerging. But at the same time, AJAX has browser incompatibility and it is supported by JavaScript, which is hard to maintain and debug.

// AJAX is Based on Open Standards -

// AJAX is based on the following open standards −
// -> Browser-based presentation using HTML and Cascading Style Sheets (CSS).
// -> Data is stored in XML format and fetched from the server.
// -> Behind-the-scenes data fetches using XMLHttpRequest objects in the browser.
// -> JavaScript to make everything happen.

// Audience -
// -> This tutorial will be useful for web developers who want to learn how to create interactive webpages as well as improve their speed and usability using AJAX.

// Prerequisites -
// -> It is highly recommended that you are familiar with HTML and JavaScript before attempting this tutorial.


// XMLHttpRequest - 
// -> XMLHttpRequest is a built-in browser object that allows to make HTTP requests in JavaScript.
// -> Despite of having the word “XML” in its name, it can operate on any data, not only in XML format. We can upload/download files, track progress and much more.
// -> Right now, there’s another, more modern method fetch, that somewhat deprecates XMLHttpRequest.

// In modern web-development XMLHttpRequest is used for three reasons:
// -> Historical reasons: we need to support existing scripts with XMLHttpRequest.
// -> We need to support old browsers, and don’t want polyfills (e.g. to keep scripts tiny).
// -> We need something that fetch can’t do yet, e.g. to track upload progress.


// More Info -
// https://javascript.info/xmlhttprequest




// ---------------------------------------------------------------------------------------------------