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

// -------------------------------------------------------------------------------------------------------------
