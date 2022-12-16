// => TYPESCRIPT BASICS -

// -> What is TypeScript?
// - TypeScript is a syntactic superset of JavaScript which adds static typing.
// - This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.
// - TypeScript being a "Syntactic Superset" means that it shares the same base syntax as JavaScript, but adds something to it.

// -> Why to use TypeScript ?
// - JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.
// - In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.
// - TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.
// - For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.
// - TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.
// - TypesScript includes extra features/functionalities such as - generics, interfaces, tuples, enums etc. But at the same time support modern JS/ECMAScript features like arrow functions, let, const, destructring etc.

// -> How to use TypeScript?
// - A common way to use TypeScript is to use the official TypeScript compiler, which transpiles TypeScript code into JavaScript.
// - Some popular code editors, such as Visual Studio Code, have built-in TypeScript support and can show errors as you write code!

// -> How to install and run Typescript code Globally using npm ?
// - To Install -
//      Command - npm install -g typescript
// - To Transpile the type typescript code into javascript -
//      Command - tsc {typescript_filename.ts} {javascript_filename.js}

// -> How to install and run Typescript code for nodejs project using npm ?
// - To Install -
//      Command - npm install -d typescript
// - To Transpile the type typescript code into javascript -
//      Command - npx tsc {typescript_filename.ts}

// Note:
// - Every time we make a change in the typescript script files, we need to transpile it into javascript first otherwise our made changes won't reflect in our application.
// - So, instead of manually transpiling the typescript code into javascript, we can use the command for watch mode which transpile typescript code into javascript every time we make a change in the typescript files.
//     Command - npx tsc {typescript_filename.ts} -w
