// JAVASCRIPT EVENTS :

// HTML events are "things" that happen to HTML elements.
// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// HTML Events -
// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events -
// An HTML web page has finished loading.
// An HTML input field was changed.
// An HTML button was clicked.
// Often, when events happen, you may want to do something.

// JavaScript lets you execute code when events are detected.
// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

// With single quotes:
// <element event='some JavaScript'>

// With double quotes:
// <element event="some JavaScript">

// In the following example, an onclick attribute (with code), is added to a <button> element:
/* <button onclick="document.getElementById('demo').innerHTML = Date()">The time is?</button>
In the example above, the JavaScript code changes the content of the element with id="demo". */

// Common HTML Events:
// Event	            Description
// onchange	            An HTML element has been changed
// onclick	            The user clicks an HTML element
// onmouseover	        The user moves the mouse over an HTML element
// onmouseout	        The user moves the mouse away from an HTML element
// onkeydown	        The user pushes a keyboard key
// onload	            The browser has finished loading the page

// ---------------------------------------------------------------------------------------------------
// JAVASCRIPT EVENT HANDLERS :

// Event handlers can be used to handle and verify user input, user actions, and browser actions:
// - Things that should be done every time a page loads
// - Things that should be done when the page is closed
// - Action that should be performed when a user clicks a button
// - Content that should be verified when a user inputs data
// - And more ...

// Many different methods can be used to let JavaScript work with events:
// - HTML event attributes can execute JavaScript code directly
// - HTML event attributes can call JavaScript functions
// - You can assign your own event handler functions to HTML elements
// - You can prevent events from being sent or being handled
// - And more ...

// 4 WAYS OF WRITING EVENTS IN JS :

// 1. Using alert ()Functions
// 2. By calling a function (most common way of writing event)
// 3. Using Inline Events
// 4. Using Event Listeners

// ---------------------------------------------------------------------------------------------------
// EVENT OBJECTS :

// What is event object?
// Event object is the parent object of event objects.EVENT
// All event objects in the DOM are based on the Event Object.
// Therefore, all other event objects (like MouseEvent and KeyboardEvent) has access to the Event Object's properties and methods.
// Examples - MouseEvent, focusEvent, KeyboardEvent

// MouseEvent in JavaScript-
// The mouse events are the events that occurs when the mouse interacts with HTML document belongs to the MouseEvent object.
// Examples - onmousedown, onmouseup

// KeyboardEvent in JavaScript-
// Events that occurs when user presess a key on the keyboard belongs to the KeyboardEvent object.
// Examples - onkeypress, onkeydown, onkeyup

// InputEvents in JavaScript-
// The onchange event occurs when the value of an element has been changed.
// For radio buttons and checkboxes, the onchange event occurs when the value of checked state has been changed.

// Question -> Difference between addEventListener and onclick-
// - addEventListener does not override an existing event listener whereas onclick overrides an onclick = fn event handler.
// - The other significant difference between addEventListener and onclick, of course, is that onclick will always work, whereas addEventListener does not work in Internet Explorer before version 9

// ---------------------------------------------------------------------------------------------------
// TIMING BASED EVENTS IN JAVASCRIPT :

// The window object allows code execution at specified time intervals.
// These time intervals are Time Events.
// There are basically 4 methods used for time based events-
//     - setTimeout()
//     - setInterval()
//     - clearTimeout()
//     - clearInterval()

// Though there are 2 key methods used with JavaScript -
// 1. setInterval(function, milliseconds)
// Executes a function, after waiting for specified number of milliseconds.

// 2. setInterval(function, milliseconds)
// Same as setInterval(), but it repeats the function execution repeatedly.
