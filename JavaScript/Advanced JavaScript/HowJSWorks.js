// How JS works?// ->
// Best - https://medium.com/jspoint/how-javascript-works-in-browser-and-node-ab7d0d09ac2f
// - https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf
// - https://www.educba.com/how-javascript-works/?source=leftnav

// => JavaScript Definition -
// - JS is a High Level, Prototype-Based Object Oriented, Multi-Paradigm, Interpreted or Just-In-Time compiled, Dynamic, Single-Threaded, Garbage-Collected programming language with First-Class functions and a Non-Blocking Event Loop Concurrent Model.

// => Multi Paradigm -
// - Paradigm - An approach and mindset of structuring code, which will direct your coding style and technique.
// - JS uses -
//     1. Procedural
//     2. Structured
//     3. OOP
//     4. Functional
//     5. Imperative
//     6. Declarative
//     7. Event Driven

// => Concurrency Model -
// - How the JS engine handles multiple taks happening at the same time -> But Why do we need that?
// - JavaScript runs in one single thread, so it can only do one thing at a time. So when executing a long running task, Other tasks have to wait which should be executed by then but they are not due to waiting from the other task execution.
// - So to prevent the blocking behaviour and have the non-blocking behaviour, It uses an event loop, which takes the long running tasks, executes them in the "background" and puts them back in the main thread once they are finished.

// - Blocking: It refers to the blocking of further operation until the current operation finishes. Blocking methods are executed synchronously. Synchronously means that the program is executed line by line. The program waits until the called function or the operation returns.

// - Non-Blocking: It refers to the program that does not block the execution of further operations. Non-Blocking methods are executed asynchronously. Asynchronously means that the program may not necessarily execute line by line. The program calls the function and move to the next operation and does not wait for it to return.

// -----------------------------------------------------------------------------------------------------------
// => WHERE DOES THE JS CODE GETS EXECUTED ? -> JS Engine:

// - Program that executes JavaScript Code.
// - Google V8 Engine is one example of JS engine that are used in Chrome and node JS. Other browsers uses their own JS engine.
// - Every JS Engine always contains Call Stack and Heap area.
// - Call Stack: This is where our code gets executed using something called Execution Context.
// - Heap Area: This is an unstructured memory pool where objects are stored.

// Note:
// 1. Compilation
//  - Entire code is converted into machine code at once, and written to a binary file that can be executed by a compiler.
//  - Steps: Source code --> STEP 1(Compilation) --> Portable file(machine code) --> STEP 2(Execution) --> Program running

// 2. Interpretation
// - Interpreter runs through the source code and executes the code line by line.
// - Steps: Source code --> STEP (Execution line by line(still code needs to be to machine code at every line)) --> Program running

// 3. JavaScript uses a mix of compilation and interpretation which is called JIT(Just In Time) compilation. Just-in-time compilation is a method for improving the performance of interpreted programs. During execution the program may be compiled into native code to improve its performance. It is also known as dynamic compilation.Virtual machine of V8 Engine has JIT compilation which improves the execution speed of the code. The virtual machine takes the source code and converts to machine code in runtime. By this, the hot functions which are called very often are compiled to machine code and, hence increasing speed.

// ---------------------------------------------------------------------------------------------------------------------
// => HOW THE CODE GETS COMPILED TO THE MACHINE CODE?

// - So, as a piece of JavaScript code enters the engine the first step is to parse the code which essentially means to read the code.
// - During the parsing process, the code is parsed into a data structure called the Abstract Syntax Tree or AST.
// - An AST is the result of parsing code. For JavaScript, an AST is a JavaScript object containing a tree representation of your source. Before we use it, we have to create it. Depending on the code we are parsing, we choose the appropriate parser.Here since the code is ES5-compatible, we can choose the acorn parser.
// - This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords, and then saving all these pieces into the tree in a structured way.This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code.
// - The next step is compilation which takes the generated AST and compiles it into machine code
// - This machine code then gets executed right away because remember modern JavaScript engine uses just-in-time compilation.
// - And remember execution happens in the JavaScript engines call stack.
// - We have our code running so we can finish here, Right?
// - Well, not so fast because modern JavaScript engines actually have some pretty clever optimization strategies. What they do is to create a very unoptimized version of machine code in the beginning just so that it can start executing as fast as possible. Then in the background, this code is being optimized and recompiled during the already running program execution.
// - And this can be done most of the times and after each optimization the unoptimized code is simply swept for the new more optimized code without ever stopping execution of course.
// - And this process is what makes modern engines such as the V-Eight so fast and all this parsing, compilation and optimization happens in some special threads inside the engine that we cannot access from our code.
// - So completely separate from the main thread that is basically running into call stack executing our own code.
// - Now different engines implements in slightly different ways, but in a nutshell this is what modern just-in-time compilation looks like for JavaScript.

// Note:
// There are couple of JavaScript AST standards:
// - estree - standard for EcmaScript AST;
// - shift - was designed with transformation in mind, not compatible with estree;
// - babel - supports language features which is have not yet become a standard, but have a proposal.

// Here is a list of JavaScript parsers:
// - esprima one of the first
// - acorn very popular, fast and stable
// - espree based on acorn, used in eslint;
// - @babel/parser based on acorn, supports all new language features
// - shfit-ast parser produces Shift AST
// - typescript can parse JavaScript and TypeScript, producing it's own AST format for this
// - You can find more parsers on astexplorer.net, most of them estree compatible.
// - You can take a look at AST explorer. An online tool to explore the ASTs generated by more than 10 parsers. It is a good tool to learn AST tree of a language.
//  - You could also try the YSlow tool, which can also give useful information on javascript performance.

// While most parsers that supports estree can be easily replaced by each other, babel has very reach infrastructure needed for comfortable work with AST.
// It has:
// - handbook describing all the tools, and ways to use it.
// - @babel/traverse - maintains the overall tree state, and is responsible for replacing, removing, and adding nodes;
// - @babel/template - simplest way to create a AST-node from string.
// - @babel/types - contains builders and checkers of AST-nodes.

// --------------------------------------------------------------------------------------------------------------------
// JS RUNTIME ENVIRONMENT -

// - We can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need in order to use JavaScript in this case, in the browser.
// - And to the heart of any JavaScript Runtime is always a JavaScript engine. So exactly the one we've been talking about. That's why it makes sense to talk about engines and runtimes together. Without an engine there is no runtime and there is no JavaScript at all.
// - However the engine alone is not enough.In order to work properly, we also need access to the web APIs, So that's everything related to the DOM or timers or even the console.log that we use all the time. So essentially web APIs are functionalities provided to the engine, but which are actually not part of the JavaScript language itself. JavaScript simply gets access to these APIs through the global window object.
// - But it still makes sense that the web APIs are also part of the runtime, because again a runtime is just like a box that contains all the JavaScript related stuff that we need.
// - Next a typical JavaScript runtime also includes a so called callback queue. This is a data structure that contains all the callback functions that are ready to be executed. For example we attach event handler functions to DOM elements like a button to react to certain events, right? And these event handler functions are also called callback functions.
// - So as the event happens, for example a click, the callback function will be called. And here is how that actually works behind the scenes. So the first thing that actually happens after the event is that the callback function is put into the callback queue.Then when the stack is empty the callback function is passed to the stack so that it can be executed. And this happens by something called the event loop.
// - So basically the event loop takes callback functions from the callback queue and puts them in the call stack so that they can be executed. And, event loops are essential for non-blocking concurrency model.
// - However, it's also important to remember that JavaScript can exist outside of browsers, for example, in Node.js. And so the node JS JavaScript runtime is pretty similar, but since we don't have a browser, of course, we can't have the web APIs because it's the browser who provides these. Instead we have multiple C++ bindings and a so called thread pool.

// ---------------------------------------------------------------------------------------------------------------------
// => EXECUTION STACK AND CALL STACK :

// EXECUTION CONTEXT -
// It is an environment in which a piece of JavaScript is executed. Stored all the necessary information for some code to be executed such as local variables or arguments passed into a function. So, JS code always executes inside an execution context.

// => STEPS AFTER CODE COMPILATION :
// - So Right after our code finished compiling. Our code is now ready to be executed.
// - What happens then, is that a so-called global execution context is created for the top-level code. And top-level code is basically code that is not inside any function. So again, in the beginning only the code that is outside of functions will be executed. And this makes sense, right? Functions should only be executed when they are called.
// - Okay, so we know that a global execution context is created for top-level code.
// - But now what exactly is an execution context? Well, an execution context is an abstract concept. It basically as an environment in which a piece of JavaScript is executed. It's like a box that stores all the necessary information
// for some code to be executed. Such as local variables or arguments passed into a function. So, JavaScript code always runs inside an execution context.
// - Now, in any JavaScript project, no matter how large it is, there is only ever one global execution context. It's always there as the default context, and it's where top-level code will execute.
// - Now that we have an environment where the top-level code can be executed, it finally is executed. And there is not a lot to say about the execution itself. It's just the computer CPU processing the machine code that it received.
// - Okay, and once this first code, top-level of code is finished, functions finally start to execute as well.
// - And here is how that works -> For each and every function call, a new execution context will be created containing all the information that is necessary to run exactly that function. And the same goes for methods, of course, because they're simply functions attached to objects.
// - All these execution contexts together, make up the Call Stack.
// - Now, when all functions are done executing, the engine will basically keep waiting for callback functions to arrive so that it can execute these. For example, a callback function associated with a click event. And remember, that it's the event loop who provides these new callback functions.
// - So we know now what an execution context is, but don't really know what it's made of ?

// => WHATS INSIDE AN EXECUTION CONTEXT ?
// - The first thing that's inside any execution context is a so-called variable environment. In this environment, all our variables and function declarations are stored, and there is also a special arguments object. This object contains, as the name says all the arguments that were passed into the function that the current execution context belongs to, Because remember each function gets its own execution context as soon as the function is called. So basically all the variables that are somehow declared inside a function, will end up in its variable environment.
// - However, a function can also access variables outside of the function and this works because of something called the scope chain. Scope chain basically consists of references to variables that are located outside of the current function. And to keep track of the scope chain, it is stored in each execution context.
// - Finally, each context also gets a special variable called the "this" keyword.
// - Now, the content of the execution context, so variable environment, scope chain and "this" keyword is generated in a so-called creation phase which happens right before execution.
// - And now just one final but very important detail that we need to keep in mind, is that execution contexts belonging to arrow functions, do not get their own Arguments Keyword, nor do they get the "this" keyword.
// - So, basically arrow functions don't have the Arguments Object and the "this" keyword. Instead, they can use the arguments object, and the "this" keyword from their closest regular function parent. And this is an extremely important detail to remember about arrow functions.
// - So these are the things that are necessary to run each function as well as the code in the top-level.

// => HOW WILL THE ENGINE KEEPS TRACK OF THE ORDER IN WHICH THE FUNCTIONS ARE CALLED? AND HOW WILL IT KNOW WHERE IT IS CURRENTLY IN THTE EXECUTION ?
// -  This is where the Call Stack finally comes in. And remember that the Call Stack, together with the Memory Heap, makes up the JavaScript engine itself.
// - The call stack ensures that the order of execution never gets lost.

// => WHAT ACTUALLY IS THE CALL STACK ?
// - It's basically a place where execution contexts get stacked on top of each other, in order to keep track of where we are in the programs execution. So the execution context that is on top of the stack, is the one that becomes Active Execution Context that is currently running the other excution stacks will be paused until the active context will get removed from the Call Stack. And when it's finished running, it will be removed from the stack, and execution will go back to the previous execution context.

// ---------------------------------------------------------------------------------------------------------------------
// => SCOPING AND SCOPE IN JS -

// => SCOPING -
// - Scoping controls how our program's variables are "Organized and Accessed" by the JavaScript engine. So basically scoping asks the question like - "Where do variables live?" Or "Where can we access a certain variable and where not"?
// - In JavaScript, we have something called Lexical Scoping.
// - Lexical Scoping - It means that the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks in the programs code. In a nested group of functions, accessing the variables which are declared outside the function call is lexical scoping also referred to as Static Scope. In simple words, JavaScript looks for variables in a way, If it can’t find a variable in its local Execution Context, it will look for it in its calling context. And if not found in its calling context. Repeatedly, until it is looking in the global execution context. And if it does not find then, it’s undefined.
// - For example, a function that is written inside another function has access to the variables of the parent function.
// So again, variable scoping is influenced by where exactly we write our functions and code blocks.

// => SCOPE -
// - Scope is the space or environment in which a certain variable is declared, simple as that
// - In the case of functions, that's essentially the variable environment which is stored in the functions execution context.
// - What's the difference between scope and variable environment? -> THe answer is that, in case of functions, it's basically the same.
// - In JavaScript, we have the global scope, function scope, and block scope.
// - Scope Of Variable - The scope of a variable is basically the entire region of our code, where a certain variable can be accessed.
// - Scope is not the same as Scope Of A Variable. So, you should know about the subtle differences

// => TYPES OF SCOPES -
// 1. Global Scope -
//   - Outside of any function or block
//   - Variable declared with global scope can be accessed any where within the code.
//   - Any variable not declared without first being declared with the var keyword, it is automatically added to the global context which eventually becomes Global variable.
// 2. Function or Local Scope -
// - Variables are accessible only inside a function and not anywhere else.
// - "var" variables are 'function scoped'. It means they are only available inside the function they're created in, or if not created inside a function, then they are 'globally scoped'. If var is defined inside a function and you subsequently try to call it outside the function, it won't work.
// 3. Block Scope (ES6) -
//    - Variables are accessible only inside a scope.
//    - However, this only applies to let and const variables.
//    - Functions are also blocked scoped (in strict mode)

// => SCOPE CHAIN -
// - Scope chains establish the scope for a given function. Each function defined has its own nested scope, and any function defined within another function has a local scope which is linked to the outer function — this link is called the chain.
// - The scope chain is used to resolve the value of variable names in javascript. Without a scope chain the Javascript engine wouldn't know which value to pick for a certain variable name if there are multiple defined at different scopes. Scope chain in javascript is lexically defined, which means that we can see what the scope chain will be by looking at the code.
// - At the top of the scope chain is the global scope, which is the window object in the browser (global in NodeJS). Besides from the global scope, functions have their own scoping of variables. The scope chain can be determined by looking at where functions are defined.
// - When resolving a variable, inner functions first look at their own scope. If the variable cannot be found in its own scope it will climb up the scope chain and looks for the variable name in the environment where the function was defined.
// - So, if one scope needs to use a certain variable, but cannot find it in the current scope, it will look up in the scope chain and see if it can find a variable in one of the parent scopes. If it can, it will then use that variable. And if it can't, then there will be an error. And this process is called Variable Lookup.
// - It's important to note that these variables are not copied from one scope to another. Instead, scopes simply look  up in the scope chain until they find a variable that they need and then they use it.
// - It's also extremely important to note is that this does not work the other way around. A certain scope will never, ever have access to the variables of an inner scope.

// ---------------------------------------------------------------------------------------------------------------------
// => HOW VARIABLES ARE CREATED IN JS (VARIABLE ENVIRONMENT) -

// - In JavaScript, there is a mechanism called HOISTING.
// - HOISTING basically make some types of variables accessible, or let's say usable in the code before they are actually declared in the code.
// - Now, many people simply define hoisting by saying that variables are magically lifted or moved to the top of their scope. for example, to the top of a function. And that is actually what hoisting looks like on the surface. But behind the scenes that's in fact not what happens.
// - Instead, before execution, code is scanned for the variable declarations, a new property is created in the variable environment object. And this happens during the so-called Creation Phase of the Execution Context and this is how Hoisting really works.
// - Hoisting does not works the same for all variable types.

// VARIABLES                                     HOISTED          INITIAL VALUE           SCOPE
// Function Declaration                          Yes              Actual Function         Block(In strict Mode)/Function
// var Variables                                 Yes              undefined               Function
// let and const Variables                       No               Uninitialized           Block
// function expressions and arrow Functions      Depends on the type variable we are storing these function values in.

// Note:
// - Variables created with "var" will create a property in the window object.
// - Technically, let and const are hoisted but not in practice. But their value is basically set to an initialized. So there is no value to work with at all. And so in practice, it is as if hoisting was not happening at all. Instead,  we say that these variables are placed in a so-called Temporal Dead Zone or TDZ which makes it so that we can't  access the variables between the beginning of the scope and to place where the variables are declared. So as a consequence, if we attempt to use a let or const variable before it's declared, we get an error.
// - For function expressions and arrow functions, Hoisting depends if they were created using var or const or let. Because keep in mind that these functions are simply variables so they behave the exact same way as variables in regard to hoisting. This means that a function expression or arrow function created with var is hoisted to undefined. But if created with let or const, it's not usable before it's declared in a code because of the Temporal Dead Zone so again, just like normal variables. And this is actually the reason why I told you earlier
// that we cannot use function expressions before we write them in the code, unlike function declarations.

// => TDZ - TEMPORAL DEAD ZONE -
// - This is what the TDZ is: the term to describe the state where variables are un-reachable. They are in scope, but they aren't declared.
// - The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.
// - You could also say that the variables exist in the TDZ from the place they get bound (when the variable gets bound to the scope it's inside) until it is declared (when a name is reserved in memory for that variable).
// - It's basically the region of the scope in which the variable is defined, but can't be used in any way. So it is as if the variable didn't even exist. Now, if we still tried to access the variable while in the TDZ like we actually do in the first line of this if block, then we get a reference error telling us that we can't access job before initialization.
// - However, if we tried to access a variable that was actually never even created, then we get a different error message saying that variable is not defined at all.
// - What this means is that the variable defined using the let and const is in fact in the Temporal Dead Zone where it is still initialized, but the engine knows that it will eventually be initialized because it already read the code before and set the job variable in the variable environment to uninitialized. Then when the execution reaches the  line where the variable is declared, it is removed from the Temporal Dead Zone and it's then safe to use.
// - So to recap, basically each and every let and const variable get their own Temporal Dead Zone that starts at the  beginning of the scope until the line where it is defined. And the variable is only safe to use after the TDZ, so the Temporal Dead Zone.

// => NEED OF TDZ -
// Its makes easier to avoid and catch errors (Accessing variables before declaration is bad practice and should be avoided)

// ---------------------------------------------------------------------------------------------------------------------
// => "this" KEYWORD -

// - "this" keyword/variable - It is a special variable that is created for every Execution Context as it one of the three component of the Execution Context(Every function) which takes the value of (points to) the "owner" of the function in which the "this" keyword is used.
// - For now, its's very important to understand is that the value of the "this" keyword is not static. So it's not  always the same. It depends on how the function is actually called. And its value is only assigned when the function is actually called. So it's very different from a normal value.

// => Well, let's analyze four different ways in which functions can be called -
// 1. Function call of methods -
// - So Methods are functions that are attached to an object(functions that are inside an object). So when we call a method, the "this" keyword inside that method will simply point to the object on which the method is called, or in other words, it points to the object that is calling the method.
// 2. Simple Function call and Function Expressions -
// - In this case, the "this" keyword, will simply be undefined. However, that is only valid for strict mode. So if you're not in strict mode, this will actually point to the global object, which in case of the browser is the window object. And that can be very problematic and so, this is yet another very good reason to always use strict mode.
// 3. Arrow Functions -
// - While arrow functions are not exactly a way of calling functions. It's an important kind of function that we need to consider, because, remember, arrow functions do not get their own 'this keyword'. Instead, if you use 'the this variable' in an arrow function, it will simply be the 'this keyword' of the surrounding function. So of the parent function and in technical terms, this is called the 'Lexical this Keyword,' because it simply gets picked up from the outer lexical scope of the arrow function. So never ever forget this very important property of arrow functions.
// - It is recommended to not use Arrow functions as methods because they don't have thier own this keyword and they can cause bugs in the code.
// - It is recommended to user Arrow functions as a nested function inside a method in case we want to access the method "this" keyword because arrow functions don't have their own this keywords so it would be easier for us to use its parent method "this" keyword whereas for function declarations its not possible as normal function call will points the "this" as undefined and to make it work with the normal function inside a method we have to pass the "this" keyword as a parameter to the function
// 4. Function call as an Event Listener -
// - The this keyword will always point to the DOM element that the handler function is attached to.

// Note:
// - "this" will never point to the function in which we are using it.
// - The "this" keyword will never point to the variable environment of the function.
//  - Other ways we can call a function are - "new" keyword, the "call apply" and "bind" method

// --------------------------------------------------------------------------------------------------------------------
// => "argument" KEYWORD -

// 1. The arguments object is only available inside non-arrow functions. Although it isn’t an array, we can access elements using the index, and it has a length property that contains the number of arguments passed to the function.
// EXAMPLE -
// function test(a, b, c) {
//  console.log(arguments.length);
// }
// test(1); // 1
// test(1, 2); // 2

// 2. The arguments objects contain all of the arguments passed during the function call, even if there are not as many parameters in the function declaration.
// EXAMPLE -
// function test() {
//  console.log(arguments.length);
// }
// test();  //0
// test(1);  //1
// test(1,2,3,5);  //4

// 3. If we change the value of the parameter inside a function without rest, default, or restructured parameters, it will be updated in the arguments object and vice versa.
// EXAMPLE -
// function test(a, b) {
//   arguments[0] = 100;
//   console.log("a=>", a, "arg[0]=>", arguments[0]);
//   b = 0;
//   console.log("b=>", b, "arg[1]=>", arguments[1]);
// }
// test(1, 2);
//  // a=> 100 arg[0]=> 100
//  // b=> 0 arg[1]=> 0

//  4. But if we use rest, default, or restructured parameters in a function, the synchronization between the arguments and the variables will not happen.
//  EXAMPLE -
//  function test(a = 10, b= 20) {
//   arguments[0] = 100;
//   console.log("a=>", a, "arg[0]=>", arguments[0]);
//   b = 0;
//   console.log("b=>", b, "arg[1]=>", arguments[1]);
// }
// test(1, 2);
//  // a=> 1 arg[0]=> 100
//  // b=> 0 arg[1]=> 2

//  => PROPERTIES -
// 1. length → contains the number of arguments passed to the function
// 2. callee → contains the currently executing function reference

// function test() {
//    console.log(arguments.callee); // [Function: test]
//    console.log(arguments.length); // 3
// }

// test(1,2,3);

// --------------------------------------------------------------------------------------------------------------------// => PRIMITIVES VS OBJECTS -

// PRIMITVES - Number, String, Boolean, Undefined, Null, Symbol, BigInt (Primitive types)
// OBJECTS - Object Literals, Arrays, Functions etc... (Reference Types)

// 1. Primitives are stored in Execution Stack in which they are declared, of the Call Stack.
// 2. Reference Types are stored in Heap Memory.

// More Details -> https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648509#announcements

// Primitives vs. Objects in Practice
// Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// Reference types
// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage:', jessica);
// console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };
// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';
// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');
// console.log('Before marriage:', jessica2);
// console.log('After marriage: ', jessicaCopy);
