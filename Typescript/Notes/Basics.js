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

// -> Better way to setup and run and install typescript  ->
// I. Using Parcel Bundler ->
// 1. Initial Node project -> npm init -y
// 2. Install parcel bundler as Dev dependency -> npm install parcel --save-dev
// 3. Install typescript globally -> npm install -g typescript
// 4. Initialize the tsconfig file -> tsc --init
// 5. Uncomment the following line in the tsconfig.json file -> 'noEmitOnError' :true
// 6. Create a src folder inside the project directory where all our ts file will be.
// 7. Inside the src folder, create a index.ts.
// 8. Now create an index.html file and put boilderplate code inside it and also include the script tag -> <script src="index.ts" async></script>. The parcel bundler will automatically detect this index.ts file and replace it with the index.js file which the bundler will create after transpiling it.
// 9. Now install prettier and set it up using -> "npm install --save-dev --save-exact prettier" and "echo {}> .prettierrc.json"
// 10. At last set up the script for running the parcel bundler in the package.json file. The script is as follows -> "start": "(npx parcel serve ./index.html) & (npx parcel watch ./index.html)". The "npx parcel server ./index.html" cmd will serve the file to the browser on a local server and "npx parcel watch ./index.html" will continously watch for any changes in the file and recompile the file.
// 11. Now run cmd in terminal -> npm start

// Note:
// - Every time we make a change in the typescript script files, we need to transpile it into javascript first otherwise our made changes won't reflect in our application.
// - So, instead of manually transpiling the typescript code into javascript, we can use the command for watch mode which transpile typescript code into javascript every time we make a change in the typescript files.
//     Command - npx tsc {typescript_filename.ts} -w
