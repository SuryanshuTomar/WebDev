// WINDOW VS DOCUMENT IN JAVASCRIPT

// WINDOW : 
// Window is the main container or we can say that global object and any operations related to the entire browser window can be a part of the window object.
// Window has objects, properties and methods. Eg - setTimeout() and setInterval() are the methods, document is the object of the window and innerHeight and innerWidth are the properties of the window.
// Some other properties of window object(BOM) are - scrollX, scrollY, console, frames, screen, localStorage, sessionStorage, location, history, document etc,.
// In window, if we want to use window's objects, methods or properties then we don't have to refer to window object in order to use these.


// DOCUMENT : 
// Document or DOM is the child of the window object.
// Document is the object of the global object that is window which deals with the document, the HTML element itself.
// Where in DOM we need to refer the document, if we want to use its objects, methods and properties.





// ---------------------------------------------------------------------------------------------------
// DOM VS BOM :


// -> The DOM is short for Document Object Model, which deals with the Document (The HTML Elements in page) itself.


// -> The BOM is short got for Browser Object Model, which deals with the browser componenets aside from the document, like - history, navigator, locaiton, screen ,.etc.
// Functions like - alert/confirm/prompt are also part of BOM. They are not directly related to the document but are pure browser method for interacting with the user.




// ---------------------------------------------------------------------------------------------------
// NAVIGATION THROUGH DOM :
// 1. document.documentElement //returns the root element of the document which is HTML element.
// 2. document.head
// 3. document.body
// 4. document.body.childNodes // It also returns the Tabs, whitespace and new Lines from the DOM tree.
// 5. document.children // It does not return the tabs, spaces and new lines. It only returns the regular elements and text nodes
// 6. document.childNodes.length

//Question1 -> How to check whether an element has child nodes or not?
//Answer -> We will use child Nodes

//Question2 -> How to find the nodes in DOM tree?
//Answer -> 
// - Using First child vs First Element child
// - Using Last child vs Last Element child
// - document.element.hasChildNodes 
// - document.element.childNodes (includes - tabs, enter and whitespace characters)
// - document.element.children
// - document.element.firstChild and document.element.firstElementChild
// - document.element.lastChild and document.element.lastElementChild
// - document.element.parentNode (includes - tabs, enter and whitespace characters)
// - document.element.parentElement
// - document.element.nextSibling (includes - tabs, enter and whitespace characters)
// - document.element.previousSibling (includes - tabs, enter and whitespace characters)
// - document.element.nextElementSibling
// - document.element.previousElementSibling
// - We can also chaing all these child properties
// - CSS Document Style can be used to style the HTML elements





// ---------------------------------------------------------------------------------------------------
// HOW TO SEARCH THE ELEMENT AND REFERENCES :


// Below functions of Document can be used to search and access the elements :
// - document.getElementById()
// - document.getElementsByClassName()
// - document.getElementsByTagName()
// - document.getElementsByName()
// - document.getElementsByTagNameNS()
// - document.getRootNode()
// - document.querySelector()
// - document.querySelectorAll()


// DIFFERENCE BETWEEN getElementById and querySelector :

// getElementById ->
// Syntax: 
// element = document.getElementById(id)
// Returns a reference to the element by its Id.
// If the element with the specified id is not present in the document then it will return null.


// querySelector ->
// Syntax:
// element = document.querySelector(selectors)
// Returns the first element withing the document that matches the selector or returns null if no matches are found.




// --------------------------------------------------------------------------------------------------
// DOM NODES:


