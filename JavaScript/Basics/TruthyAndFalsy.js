// Truthy and Falsy Values in JavaScript

// As well as a type, each value also has an inherent Boolean value, generally known as either truthy or falsy.
// Some of the rules are a little bizarre, so understanding the concepts and effect on comparison helps when
// debugging JavaScript applications.

// The following values are always falsy:

//     false
//     0 (zero)
//     -0 (minus zero)
//     0n (BigInt zero)
//     '', "", `` (empty string)
//     null
//     undefined
//     NaN (Not a Number)

// Everything else is truthy. That includes:

//     '0' (a string containing a single zero)
//     'false' (a string containing the text “false”)
//     [] (an empty array)
//     {} (an empty object)
//     function(){} (an “empty” function)

// The rules:

//     false, zero and empty strings are all equivalent.
//     null and undefined are equivalent to themselves and each other but nothing else.
//     NaN is not equivalent to anything — including another NaN!.
//     Infinity is truthy — but cannot be compared to true or false!.
//     An empty array is truthy — yet comparing with true is false and comparing with false is true?!.

// Recommendations for Working with Truthy or Falsy Values-
// Truthy and falsy values can catch out the most experienced developers. Those new to programming or migrating
// from other languages have no chance! Fortunately, there are three simple steps for catching the most
// difficult-to-spot errors when handling truthy and falsy variables. Let’s look at each in turn.

// 1. Avoid direct comparisons-
// It’s rarely necessary to compare two truthy and falsy values when a single value will always equate to
// true or false

// 2. Use === strict equality-
// Use a === strict equality (or !== strict inequality) comparisons to compare values and avoid type
// conversion issues

// 3. Convert to real Boolean values where necessary-
// You can convert any value to a real Boolean value in JavaScript using either the Boolean constructor,
// or a double-negative !!. This will allow you to be absolutely certain a false is generated only by
// false, 0, "", null, undefined and NaN
