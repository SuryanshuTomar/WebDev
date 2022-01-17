// INTRODUCTION :
// The JavaScript string is an object that represents a sequence of characters.
// Javascript strings can be created as primtives, from string literals, or as objects, using string() constructor.
// There are 2 ways to create string in JavaScript
    // 1. By string literal
    // 2. By string object (using new keyword)

// 1) By string literal
// The string literal is created using double quotes. The syntax of creating string using string literal is given below:
// var stringname="string value";  

// 2) By string object (using new keyword)
// The syntax of creating string object using new keyword is given below:
// var stringname=new String("string literal");
// Here, new keyword is used to create instance of string.

// Types of Strings
// let mName = "DeathSlayer";
// console.log(typeof mName);

// let sName = new String("DeathSlayer");
// console.log(typeof sName);





// ---------------------------------------------------------------------
// ESCAPE CHARACTERS :




// Because strings must be written within quotes, JavaScript will misunderstand this string:
// let text = "We are the so-called "Vikings" from the north.";

// The string will be chopped to "We are the so-called ".
// The solution to avoid this problem, is to use the backslash escape character.
// The backslash (\) escape character turns special characters into string characters:
// Code	Result	Description
// \'	    '	    Single quote
// \"	    "	    Double quote
// \\	    \	    Backslash

// ->The sequence \"  inserts a double quote in a string:
// let text = "We are the so-called \"Vikings\" from the north.";

// ->The sequence \'  inserts a single quote in a string:
// let text= 'It\'s alright.';

// ->The sequence \\  inserts a backslash in a string:
// let text = "The character \\ is called backslash.";

//-> Six other escape sequences are valid in JavaScript:
// Code	    Result
// \b	    Backspace
// \f	    Form Feed
// \n	    New Line
// \r	    Carriage Return
// \t  	    Horizontal Tabulator
// \v	    Vertical Tabulator



// ---------------------------------------------------------------------



// STRING LENGTH PROPERTY :
// let str = "Deathslayer"
// console.log(str.length)



// --------------------------------------------------------------------
// FINDING A STRING IN A STRING : 

// String.prototype.indexOf(searchValue, searchIndex);
// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string else it will return -1 if not found.
// const myBioData = 'Severous Snape'
// console.log(myBioData.indexOf("S", 1));




// String.prototype.lastIndexOf(searchValue, searchIndex);
// The indexOf() method returns the index of (the position of) the last occurrence of a specified text in a string else it will return -1 if not found.
// const myBioData = 'Severous Snape'
// console.log(myBioData.lastIndexOf("S", 6));


// --------------------------------------------------------------------
// SEARCHING A STRING IN A STRING : 


// String.prototype.search(REGEX);
// The search() method searches a string for a specified value and returns the positon of the matching string.
// The search() method cannot take a second start position argument
// const bioData = 'This is just a string';
// let sData = bioData.search("just");
// console.log(sData);



// --------------------------------------------------------------------
// EXTRACTING STRING PARTS :


// There are 3 methods for extracting a part of a string :
//     -> slice(start, end);
//     -> substring(start, end);
//     -> substr(start, length);


// 1. The Slice Method :
// slice() extracts a part of a string and returns the extracted part as a new string.
// The slice method selects the element starting at the given start argument, and end at, but does not include the given end argument.
// slice also supports negative indexing.
// The Method takes 2 parameters: 
//     - The start position
//     - The end position(end not included).
// var fruits = "Banana, Kiwi, Apple";
// let result = fruits.slice(0, 6);
// let reverseIndexing = fruits.slice(2, -2);
// console.log(reverseIndexing);


// 2. The Substring Method :
// substring() is similar to slice()
// The only difference between them is substring() does not support negative indexing.
// Even if we give negative index to it then it will start the charachter counting from 0th index.
// var fruits = "Banana, Kiwi, Apple";
// let result = fruits.substring(0, 6);
// let reverseIndexing = fruits.substring(2, -2);
// console.log(result, "----", reverseIndexing);


// 2. The Substr Method :
// substr() is also similar to slice()
// The only difference between them is substr() method takes length as its second parameter instead of ending index.
// This has been deprecated from browsers now a days.
// This also supports negative indexing.
// var fruits = "Banana, Kiwi, Apple";
// let result = fruits.substr(0, 6);
// let reverseIndexing = fruits.substr(-2, 2);
// let reverseIndexing = fruits.substr(-5);
// console.log(result, "----", reverseIndexing);




// ---------------------------------------------------------------------
// REPLACING STRING CONTENTS: 


// String.prototype.replace(searchFor, replaceWith)
// The replace() method replaces a specified value  with another value in a string.
// Points to remember: 
//  - The replace() method does not change the string it is called on. It returns a new string.
//  - By default, the replace() method replaces only the first match.
//  - By default, the replace() method is case sensitive.
// let str = "I am software engineer at Infosys."
// let newStr = str.replace("Infosys", "Google");
// console.log(newStr);





// String.prototype.replaceAll(searchFor, replaceWith String or Replacer Function)
// The replaceAll() method replaces a All the values in that string with a specified replacement string.
// A replacer function to be invoked to create the new substring to be used to replace the matches to the given regexp or substr
// Points to remember: 
//  - The replaceAll() method does not change the string it is called on. It returns a new string.
//  - By default, the replaceAll() method is case sensitive.
// let str = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?"
// let newStr = str.replace("dog", "Monkey");
// console.log(newStr);




// ---------------------------------------------------------------------
// EXTRACTING STRING CHARACTERS : 


// There are 3 methods for extracting string characters.
// - charAt(position)
// - charCodeAt(position)
// - property access []


// 1. The charAt(position) method :
// The chartAt() method return a character at a specified position(index) in a string.
// let str = "hello";
// console.log(str.charAt(0));




// 2. The charCodeAt(position) method :
// The charCodeAt() method returns the unicode of the character at specified position in a string.
// The method retuns a UTF-16 code
// (an interger between 0 and 65535)
// The unicode standard provides a  unique number for every character, no matter the platform, device, application, or languange. UTF-8 is the most popular unicode encoding which has 88bit encoding units. 
// var str = "HELLO WORLD";
// console.log(str.charCodeAt(1));




// 3. The Property Access []:
// ECMAScript 5 (2009) allows property access [] on strings.
// If we use property access on string then we can treat that string like an array.
// let str = "Hello, world!";
// console.log(str[1]);




// -------------------------------------------------------------
// OTHER USEFUL STRING METHODS :


// The toUpperCase() And toLowerCase() Methods : 
// let myName = "DeAtH sLaYeR"
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());




// The Concat Method :
// There are two method to concat strings - 
//     - Using concat function
//     - Using concat operator
// concat() joins two or more string into a single string.
// let fName = "Death";
// let lName = "Slayer";
// console.log(fName.concat(lName));
// console.log(fName.concat(" ", lName));
// console.log(fName + lName);




// The Trim Method :
// The trim() removes the whitespace from both sides of the string.
// let str = "        Yo       Hello World";
// console.log(str.trim());




// -------------------------------------------------------------
// CONVERTING A STRING INTO AN ARRAY :


// The Split Method :
// The split(REGEX) method can convert an array based on the arguments passed into the split function.
// The split function takes regex as an argument.
// It returns a new array and does not edit the orginal string.
// let chars = "a, b, c, d, e, f, g, h, i, j"
// console.log(chars.split(","));