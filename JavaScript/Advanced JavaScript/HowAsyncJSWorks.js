// ---------------------------------------------------------------------------------------------------------------------
// => ASYNCHRONOUS BEHIND THE SCENES: THE EVENT LOOP -

// => Javascript Runtime Recap -
// - So, a JavaScript runtime is basically a container which includes all the different pieces that are necessary to execute JavaScript code.
// - Now, the heart of every JavaScript runtime is the Runtime Engine. This is where code is actually executed and where objects are stored in memory. So, these two things happen in the call stack and in the heap.
// - Now, what's important to note here is that JavaScript has only one thread of execution. And so it can only do one thing at a time. There is absolutely no multitasking happening in JavaScript itself. Whereas, other languages like Java can execute multiple pieces of code at the same time, but not JavaScript.
// - Next thing we have in the Runtime is web APIs environment. These are some APIs provided to the engine, but which are actually not part of the JavaScript language itself. So, that's things like the DOM timers the fetch API, the geolocation API, and so on and so forth.
// - Next up, there is in the Runtime is Callback Queue and this is a data structure that holds all the ready to be executed callback functions that are attached to some event that has occurred.
// - Finally, whenever the call stack is empty the event loop takes callbacks from the callback queue and puts them into call stack so that they can be executed. So the event loop is the essential piece that makes asynchronous behavior possible in JavaScript. It's the reason why we can have a non blocking concurrency model in JavaScript.
// - And a concurrency model is simply how a language handles multiple things happening at the same time.

// ---------------------------------------------------------------------------------------------------------------------
// => IMPORTANT TERMINOLOGIES -

// 1. Single thread -
// - A thread of execution is the smallest sequence of programmed instruction that can be managed independently by a scheduler. A programming language is single-threaded means it can only perform one task or operation at a single time. This means it would execute an entire process from start to end without the thread being interrupted or stopped.
// - Unlike multi-threaded languages where multiple processes can be run on several threads concurrently without blocking each other.

// 2. Non-blocking -
// There is no one definition of blocking; it just simply means things that are running slowly on the thread. So non-blocking means things that aren’t slow on the thread.

// 3. Concurrent -
// Concurrency means that the code is being executed concurrently by more than one thread.

// 4. Asynchronous -
// Asynchronous programming means that the code runs in an event loop. When there is a blocking operation, the event is started. The blocking code keeps running without blocking the main execution thread. When the blocking code finishes running, it queue’s the result of the blocking operations and pushes them back to the stack.

// So -
// - JavaScript is single-threaded
// - JavaScript is non-blocking, i.e. slow processes don’t block its execution
// - JavaScript is concurrent, i.e. it executes its code in more than one thread at the same time
// - JavaScript is asynchronous, i.e., it runs blocking code somewhere else.

// 5. The Call Stack -
// - A stack is a data structure in which the last element added is always the first to be removed from the stack, you could think of it as a stack of a plate in which only the first plate which was the last added can be removed first. A Call Stack is simply nothing but a stack data structure where tasks or code is being executed accordingly.
// - The call stack is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack.

// 6. The Browser API/Web API Environment -
// - This is where code that isn’t handled by the V8 engine is executed to not “block” the main execution thread. When the Call Stack encounters a web API function, the process is immediately handed over to the Web API, where it is being executed and freeing the Call Stack to perform other operations during its execution.
// - Whenever an async function is called, it is sent to a browser API. These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation.

// 7. Callback Queue or Event Queue or Task Queue -
// - The event queue is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution.

// 8. The Event Loop -
// - JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events, and executing queued sub-tasks. This model is quite different from models in other languages like C and Java.
// - The event loop is the secret behind JavaScript’s asynchronous programming. JS executes all operations on a single thread, but using a few smart data structures, it gives us the illusion of multi-threading. Let’s take a look at what happens on the back-end.
// - The language itself is single-threaded, but the browser APIs act as separate threads.
// - The event loop facilitates this process; it constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed.

// 9. Event Loop Tick -
// - A tick is the dequeuing of an event from the "event loop queue" and the execution of said event.

// 10. Orchestration -
// - Orchestration is a way to centralize the workflow of logic for a business process. It coordinates the workflow by sending commands to the appropriate service, consuming the resulting events.

// 11. Task and MicroTasks -
// - A task is any JavaScript scheduled to be run by the standard mechanisms such as initially starting to execute a program, an event triggering a callback, and so forth. Other than by using events, you can enqueue a task by using setTimeout() or setInterval().
// - A microtask is a short function which is executed after the function or program which created it exits and only if the JavaScript execution stack is empty, but before returning control to the event loop being used by the user agent to drive the script's execution environment.
// - A callback function in then(), catch(), finally() in promises is a Microtask.

// - Difference between Task and Microtask -
// There are two key differences -
// - First, each time a task exits, the event loop checks to see if the task is returning control to other JavaScript code. If not, it runs all of the microtasks in the microtask queue. The microtask queue is, then, processed multiple times per iteration of the event loop, including after handling events and other callbacks.
// - Second, if a microtask adds more microtasks to the queue by calling queueMicrotask(), those newly-added microtasks execute before the next task is run. That's because the event loop will keep calling microtasks until there are none left in the queue, even if more keep getting added.

// ---------------------------------------------------------------------------------------------------------------------
// => HOW AN ASYNCHRONOUS CODE EXECUTES -

// - How an Asynchronous Code can be executed in a Non-Blocking way if there is only thread of Execution in the Engine?
// - Lets Understand this with the help of an Example -
// CODE-
// el = document.querySelector("img");
// Line 1
// el.src = "dog.jpeg";
// Line 2
// el.addEventListener("load", () => {
// Line 3
//   el.classList.add("fadeIn");
// });

// fetch("https:
//www.someurl.com/someapi")
// Line 4
// .then((response) =>
// Line 5
//   console.log(response)
// );

// => Example Explaination -
// - Let's start by selecting this image element(el) in Line 1.
// And then in the next line we set the source attribute of that image to dog.jpeg.
// - And as we learned before this will now start to load this image asynchronously in the background. But this time we can actually understand what that mysterious background actually is.
// - So, as you already know everything related to the DOM is not really part of JavaScript, but of the web APIs. And so it's in a web APIs environment where the asynchronous tasks related to the DOM will run. And in fact, the same is true for timers AJAX calls and really all other asynchronous tasks.
// - So, again, these asynchronous tasks will all run in the web API environment of the browser. If the image would be loading in a synchronous way it would be doing so right in the call stack blocking the execution of the rest of the code. But, we already learned, that would be terrible. And that's why loading images in JavaScript is asynchronous. So it does not happen in the call stack. So it does not in the main thread of execution, but really in the web APIs environment.
// - Now, if we want to do something after the image has finished loading, then we need to listen to the load event. And so that's exactly what we do in the next line of code. So, here we attach an event listener to the load event of that image and pass an a callback function as always.
// - In practice, this means to register this callback in the web APIs environment, exactly where the image is loading. And the callback will stay there until the load event is emitted. So, we're handling asynchronous behavior here with a callback just as we learned before.
// - In the next line, we make an AJAX call using the fetch API. And as always the asynchronous fetch operation will happen in the web APIs  environment. And again, that's because otherwise we would be blocking the call stack and create a huge lag in our application.
// - Finally, we use the then method on the promise returned by the fetch function. And this will also register a callback in the web API environment so that we can react to the future resolved value of the promise. So this callback is associated with a promise that is fetching the data from the API. And that's gonna be important later on.
// - So, with this, we have now executed all the top level of code. So, all the code that is not inside any callback function in asynchronous way.
// - We also have the image loading in the background and some data being fetched from an API. And now it's time for this to get really interesting. Let's say the image has finished loading and therefore the load event is emitted on that image.
// - What happens next, is that the callback for this event is put into Callback Queue or Event Queue. And the callback queue is basically an ordered list of all the callback functions that are in line to be executed. And you can think of this callback queue, as a to do list that you would write for yourself with all the tasks that you have to complete.
// - So, the callback queue is also a to do list of a kind, but with tasks that the call stack will eventually have to complete. Now, in this example, there are no other callbacks in the queue yet, but there could be of course. So, if there were already other callbacks waiting in line, then this new callback would of course go straight to the end of the queue. And there it would sit patiently for its turn to finally run.
// - And this actually has big implications. Imagine that you set a timer for five seconds. And so after five seconds that timer's callback will be put on the callback queue, right? And let's say there were already other callbacks awaiting. And let's also say that it took one second  to run all of those callbacks. Then, in that case, your timers callback would only run after six seconds and not after five. So, these six seconds are the five seconds that passed
// for the timer, plus the one second that it took to run all the other callbacks that were already waiting in line in front of your timer.
// - So, what this means is that the timers duration that you define is not a guarantee. The only guarantee is that the timers callback will not run before five seconds, but it might very well run after five seconds have passed. So, it all depends on the state of the callback queue. And also another queue that we're gonna learn about in a second.
// - Now, another thing that's important to mention here is that the callback queue also contains callbacks coming from DOM events like clicks or key presses or whatever. Now, we learned before that DOM events are not really asynchronous behavior, but they still use the callback queue to run their attached callbacks.
// - So, if a click happens on a button with addEventListener then what will happen is just like what I illustrated here with the asynchronous load event.
// - Now about the Event Loop -> Here is what the event loop does. It looks into the call stack and determines whether it's empty or not. Except of course for the Global Context, then if the stack is indeed empty which means that there's currently no code being executed then it will take the first callback from the callback queue
// and put it on the call stack so that it will be executed. And this is called an EVENT LOOP TICK.
// - So each time the event loop takes a callback from the callback queue. We say that there was an Event Loop Tick. So, as we can see here the event loop has the extremely important task of doing coordination between the call stack
// and to callbacks in the callback queue.
// - So, the event loop is basically who decides exactly when each callback is executed. This descision making We can also say that the event loop does the ORCHESTRATION of this entire JavaScript runtime.
// - Another thing that becomes clear from this whole explanation is that the JavaScript language itself has actually no sense of time. That's because everything that is asynchronous does not happen in the engine. It's the runtime who manages all the asynchronous behavior. And it's the event loop who decides which code will be executed next. But the engine itself simply executes whatever code it has given.
// - But we are not done here, Because we still have to fetch function getting data from the AJAX call in the  background. And this is what basically happens with promises. As with promises things work in a slightly different way which is why I included this promise example as well.
// - So, let's say that the data has now finally arrived. And so the fetch is done. Now, callbacks related to promises
// like this one that we registered with the promises then() method do not actually go into the callback queue.
// - So, the callback we did still have here, which is coming from a promise will not be moved into the callback queue.
// Instead, callbacks of promises have a special queue for themselves, which is the so called MICROTASK QUEUE.
// - Now, what is special about the microtasks queue is that it basically has priority over the callback queue.
// - So, at the end of an Event Loop Tick, after a callback has been taken from the callback queue, the event loop will check if there are any callbacks in the microtasks queue. And if there are, it will run all of them before it will run any more callbacks from the regular callback queue.
// - And, by the way, we call these callbacks from promises MICROTASKS. And therefore the name microtasks queue. And there are actually other microtasks but that's not relevant here.
// - So going back to our example, currently, we actually do have a microtask sitting in a microtasks queue, the call stack is also empty and therefore the event loop will now take this callback and put it in the call stack just like it does with callbacks from the callback queue. And it doesn't matter if the callback queue is empty or not. So, this would have worked the exact same way even if there were some callbacks in the callback queue and that's because microtasks always have priority.
// - In practice, this means that microtasks can basically cut in line before all other regular callbacks. Now, if one microtask adds a new microtask then that new microtask is also executed before any callbacks from the callback queue.
// And this means that the microtasks queue can essentially starve the callback queue. Because if we keep adding more and more microtasks, then callbacks in the callback queue can never execute. Now, this is usually never a problem but I just wanted to mention this possibility here anyways,

// ---------------------------------------------------------------------------------------------------------------------
// => EVENT LOOP IN PRACTICE -

// Example -
// console.log("Test Start");
// Line 1
// setTimeout(() => console.log("0 Second Timer"), 0);
// Line 2
// Promise.resolve("Resolved Promise 1").then((res) => console.log(res));
// Line 3
// console.log("Test End");
// Line 4

// Order of Execution will be -
// Line 1 - Test Start
// Line 4 - Test End
// Line 3 - Resolved Promise 1
// Line 2 - 0 Second Timer

// - Explaination -
// - So the first two messages that are gonna be printed should be pretty obvious, that's because we already know that any top level of code. So code outside of any callback, will run first. So of course, the first two logs will come from these two synchronous, console.log() code.
// - But now between the timer, and the resolved promise here, it might be a little bit trickier. So both the timer and a promise, will finish at the exact same time. So both right after zero seconds. So the timer, because we told it to finish after zero seconds and a promise because we told it to immediately become resolved. Therefore, they will both finish at the exact same time.
// - Which of these two callbacks here will be executed first? Well, the timer appears first in the code and so it kind of finished first. And so it's callback, will be put on the callback queue first, but does that mean that this call back here will be executed first? Well, actually, no, it doesn't.
// - And that's because of the micro-tasks queue. So the callback of the resolved promise here, will be put on the  micro-tasks queue and this micro-tasks queue, and has priority over the callback queue.
// - So after this whole code runs, we will have one callback in a callback queue and one in a micro-tasks queue.
// - Therefore the code from the micro task queue should be executed first and then the callback from the setTimeout() from the event queue or task queue will be executed.

// Note: Remember that the implication of the fact that micro-tasks have priority over regular callbacks, is that if one of the micro-tasks takes a long time to run, then the timer will actually be delayed and not run after the specified timer (0 seconds in this case). Instead it will run a little bit later just after the micro-task is actually done with its work.
