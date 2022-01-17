// JSON -
// -> JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language Standard ECMA-262 3rd Edition - December 1999. JSON is a text format that is completely language independent but uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.


// JSON is built on two structures:
// -> A collection of name/value pairs. In various languages, this is realized as an object, record, struct, dictionary, hash table, keyed list, or associative array.
// An ordered list of values. In most languages, this is realized as an array, vector, list, or sequence.
// -> These are universal data structures. Virtually all modern programming languages support them in one form or another. It makes sense that a data format that is interchangeable with programming languages also be based on these structures.


// In JSON, they take on these forms:
// -> An object is an unordered set of name/value pairs. An object begins with {left brace and ends with }right brace. Each name is followed by :colon and the name/value pairs are separated by ,comma.


// More Info on -
// https://www.json.org/json-en.html


// JSON.stringify() - 
// -> JSON.stringify() method converts a JavaScript OBject into JSON text and stores that JSON text in a string.

// EG-
// var myObject = {"key-1" : "Some text", "key-2": "true", "key-3": "5"};
// console.log(myObject);

// var objectAsString = JSON.stringify(myObject);
// console.log(objectAsString);

// console.log(typeof(objectAsString)); // string type

// JSON.parse() -
// JSON.parse() turns a string of JSON text into a JavaScript object.

// EG-
// var objectFromJSONText = JSON.parse(objectAsString);
// console.log(objectFromJSONText);

// console.log(typeof(objectFromJSONText)); // object type