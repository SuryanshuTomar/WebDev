// SOME IMPORTANT OPERATORS -

// --------------------------------------------------------------------------------------------------------
// => UNARY OPERATORS -

// i) Unary Plus(+) -
// 1. The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number if it isn’t already.
// 2. It can convert all string representations of numbers, boolean values (true and false), and null to numbers. Numbers will include both integers, floats, hexadecimal, scientific (exponent) notation, and Infinity.
// 3. If the operand cannot be converted into a number, the unary plus operator will return NaN.

// Operation	                 Result
// +3	                            3
// +"3"	                            3
// +"-3"	                        -3
// +"3.14"	                        3.14
// +"123e-5"	                    0.00123
// +"0xFF" 	                        255
// +true	                        1
// +false  	                        0
// +null	                        0
// +"Infinity"	                    Infinity
// +"not a number"                  NaN
// +function(val){ return val } 	NaN

// ii) Unary Negation (-) -
// 1. The unary negation operator (-) precedes its operand and negates it.
// 2. Both the unary negation and plus perform the same operation as the Number() function for non-numbers.

// Operation	                                Result
// -3	                                        -3
// -"3"	                                        -3
// -"-3"	                                     3
// -"3.14"	                                    -3.14
// -"123e-5"                                    -0.00123
// -"0xFF"	                                    -255
// -true	                                    -1
// -false	                                    -0
// -null	                                    -0
// -"Infinity"	                                -Infinity
// -"not a number"                             	-NaN
// -function(val){ return val }	                -NaN
// -{ valueOf: function(){ return "0xFF" } }	-255

// iii) Increment and Decrement Operators -
// 1. Postfix = var++, var-- (These returs the variable values after changing their values)
// 2. Prefix = ++var, --var(These returs the variable values before changing their values)

// iv) Logical Not(!) -
// 1. The logical NOT (!) operator (logical complement, negation) takes truth to falsity and vice versa.

// Operation	    Result
// !false	        true
// !NaN	            true
// !0	            true
// !null	        true
// !undefined	    true
// !""	            true
// !true	        false
// !-3	            false
// !"-3"	        false
// !42	            false
// !"42"	        false
// !"string"	    false
// !"true"	        false
// !"false"	        false
// !{}	            false
// ![]	            false
// !function(){}	false

// v) Bitwise Not(~) -
// 1. The bitwise NOT operator (~) inverts the bits of its operand.
// 2. A bitwise not on a number results in: -(x + 1).

// Operation	                                Result
// ~3	                                         -4
// ~"3"	                                         -4
// ~"-3"	                                      2
// ~"3.14"	                                     -4
// ~"123e-5"	                                 -1
// ~"0xFF"                                       -256
// ~true	                                     -2
// ~false	                                     -1
// ~null	                                     -1
// ~"Infinity"                                   -1
// ~"not a number"                               -1
// ~function(val){ return val }	                 -1
// ~{ valueOf: function(){ return "0xFF" } }	-256

// vi) typeof Operator -
// 1. The typeof operator returns a string indicating the type of the unevaluated operand.

// vii) delete Operator -
// 1. The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.
// 2. It returns true if it successfully deleted the property or if the property does not exist.
// 3. It returns false if it fails to delete an item.
// 4. delete does not have any effect on both functions and variables.
// 5. Here is an example of attempting to use delete on a variable:

// Examples -

// 1. delete on variable -
// var variableExample = 1;
// delete variableExample;          // returns false
// console.log(variableExample);    // returns 1

// 2. delete on function -
// function functionExample(){};
// delete functionExample;           // returns false
// console.log(functionExample);     // returns function functionExample(){}

// 3. delete on object -
// var objectExample = {propertyExample: "1"}
// delete objectExample            // returns false
// console.log(objectExample);     // returns Object { propertyExample: "1" }

// 4. using delete on a property with the literal notation -
// var inventory = {"apples": 1, "oranges": 2}
// delete inventory["apples"]          // returns true
// console.log(inventory);             // returns Object { "oranges": 2 }
// console.log(inventory["apples"]);   // returns undefined

// 5. delete on a property that does not exist -
// var inventory = {"apples": 1};
// delete inventory.oranges;           // returns true
// console.log(inventory.apples);      // returns 1

// 6. delete on a non-configurable property of a predefined object -
// delete Math.PI;                     // returns false
// console.log(Math.PI);               // returns 3.141592653589793

// Note - delete has no effect on an object property that is set as non-configurable. It will always return false.In strict mode, this will raise a SyntaxError.

// viii) void operator -
// 1. The void operator evaluates the given expression and then returns undefined.
// 2. void operator’s main purpose is to return undefined. The void operator specifies an expression to be evaluated without returning a value.
// 3. The void operator is used in either of the following ways: void (expression) or void expression.

// --------------------------------------------------------------------------------------------------------
// => TERNARY OPERATOR -

// A ternary operator OR conditional operator evaluates a condition and executes a block of code based on the condition.

// Syntax :
// condition ? expression1 : expression2

// The ternary operator evaluates the test condition -
// -> If the condition is true, expression1 is executed.
// -> If the condition is false, expression2 is executed.
// -> The ternary operator takes three operands, hence, the name ternary operator. It is also known as a conditional operator.
