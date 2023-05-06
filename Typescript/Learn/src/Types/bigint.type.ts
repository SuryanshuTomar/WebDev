// Big Int Type -

// ---------------------------------------------------------------------------------------
// 1. How we create Big Int in JS -
// a. using construction function -
let bigInt1 = BigInt(98234982);
console.log(bigInt1); // 98234982n

// b. using literal syntax - just suffix the number with "n"
let bigInt2 = 234287092n;
console.log(bigInt2); // 234287092n

// Note: Numbers in JS can only store upto 2^53 (~10^16)value. And to store number bigger than them we use BigInt.

// How to check Max Safe Integer/Number JS allows us to use -
let safeInt = Number.MAX_SAFE_INTEGER;
console.log(safeInt); // 9007199254740991

// When we need to use bigInt -
const safeInt1 = safeInt + 1;
const safeInt2 = safeInt + 2;

console.log(safeInt1); // 9007199254740992
console.log(safeInt2); // 9007199254740992

// This means it unsafe to do calculation beyond MAX_SAFE_INTEGER in JS and that is why we need to use BigInt.

// ---------------------------------------------------------------------------------------
// 2. How we create Big Int in TS -
// a. using construction function -
let bigIntTs1: bigint = BigInt(98234982);
console.log(bigIntTs1); // 98234982n

// b. using literal syntax - just suffix the number with "n"
let bigIntTs2: bigint = 234287092n;
console.log(bigIntTs2); // 234287092n

// Note: BigInts cannot have decimal values -
// let a:bigInt = 23234234.42n; // It will show error
// console.log(a)

// Note: We cannot use Math class methods with Bigints -
// let b = Math.log(23456454n)
