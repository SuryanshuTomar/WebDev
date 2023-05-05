// BOOLEAN TYPE -

let booleanValue: boolean = true;

// Literal Value
booleanValue = false;

// Expression result value
booleanValue = typeof "abc" == "string";
booleanValue = 1 > 0;

// Now Allowed -> storing values other than boolean
// booleanValue = {};
// booleanValue = "NYC";

// Note: Remember that undefined and null are not boolean values but they are evaluated to be falsy.
// - This will throw error -
// booleanValue = undefined;
// booleanValue = null;

// - These will not throw error as now they are evaluated to be false-
// booleanValue = !!undefined;
// console.log(booleanValue);
// booleanValue = undefined ? true : false;
// console.log(booleanValue);
// booleanValue = !!null;
// console.log(booleanValue);
// booleanValue = null ? true : false;
// console.log(booleanValue);
