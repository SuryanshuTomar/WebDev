// => Why use Tailwind CSS ?
// 1. No Reinventing of class names required.
// 2. CSS file doesn't grow with your html and designs
// 3. When you make a change, no risk of breaking existing templates

// => Setting Up Tailwind CSS -

// Method - 1 -
// 1. Run -> npm init -y
// 2. Run -> npm install -D tailwindcss postcss autoprefixer vite
// 3. Run -> npx tailwindcss init -p
// 4. Create a css file "input.css", add it to your html and edit with this context :
//    @tailwind base;
//    @tailwind components;
//    @tailwind utilities;
// 5. In your tailwind.config.js file replace -> content:[] to content:["*"] or content["./build/*.html"]
// 6. Create an index.html file with basic html template and add the following tag to head part of the template - <link rel="stylesheet" href="../src/input.css" />
// or add this<script src="https://cdn.tailwindcss.com"></script>
// 7. Add "start":"vite" to your script in package.json
// 8. Run npm run start command to start a dev server.

// ------------------------------------------------------------------------------------------------------

// Method - 2 - Better Approach -
// 1. Run -> npm init -y
// 2. Run -> npm install -D tailwindcss postcss autoprefixer vite
// 3. Run -> npx tailwindcss init
// 4. Create a css file "input.css", add it to your html and edit with this context :
//    @tailwind base;
//    @tailwind components;
//    @tailwind utilities;
// 5. Create a build folder and a src folder.
// 6. Create an input.css files in src folder and an index.html file in build folder and add css/style.css path to the stylesheet link tag.
// 7. In your tailwind.config.js file replace -> content:[] to content:["*"] or content["./build/*.html"]
// 8. Run -> npx tailwindcss -i ./src/input.css[src file] -o[for output] ./build/css/style.css[dest file]
// 9. Tailwind has its own set of rules for, in what manner should we write the tailwind class in html and since, we cant remember the order for all the class. what we can do is we can install prettier using the npm that is specifically made for tailwind css.Tailwind
// Run -> npm install prettier-plugin-tailwindcss  --save-dev
// Script -> "prettier": "npx prettier --write **/*.html"
// 10. Add below commands to your script in package.json -
//    "scripts": {
//          "start": "npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch",
//          "prettier": "npx prettier --write **/*.html"
//       },
// 11. Run npm run prettier
// 12. Run npm run start command to start a dev server and np

// -------------------------------------------------------------------------------------------------------
// - Watch Command Instead of compiling the tailwind file again and again -
// Run -> npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch
// Run -> npx tailwindcss -i ./src/input.css -o ./build/css/style.css -w
// Script -> "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/styles.css --watch",
