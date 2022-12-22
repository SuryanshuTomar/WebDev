// => Why use Tailwind CSS ?
// 1. No Reinventing of class names required.
// 2. CSS file doesn't grow with your html and designs
// 3. When you make a change, no risk of breaking existing templates

// => Setting Up Tailwind CSS -
// 1. Run -> npm init -y and npx tailwindcss init
// 2. Run -> npm install -D tailwindcss postcss autoprefixer vite
// 3. Run -> npx tailwind init -p
// 4. Create a css file "input.css", add it to your html and edit with this context :
//    @tailwind base;
//    @tailwind components;
//    @tailwind utilities;
// 5. In your tailwind.config.js file replace -> content:[] to content:["*"] or content["./build/*.html"]
// 6. Run -> npx tailwindcss -i ./src/input.css[src file] -o[for output] ./build/css/style.css[dest file]
// 7. Add "start":"vite" to your script in package.json
// 8. Run npm run start command to start a dev server.

// - Watch Command Instead of compiling the tailwind file again and again -
// Run -> npx tailwindcss -i ./src/input.css -o ./build/css/style.css --watch
// Run -> npx tailwindcss -i ./src/input.css -o ./build/css/style.css -w
// Script -> "tailwind": "npx tailwindcss -i ./src/input.css -o ./build/css/styles.css --watch",

// - Tailwind has its own set of rules for, in what manner should we write the tailwind class in html and since, we cant remember the order for all the class. what we can do is we can install prettier using the npm that is specifically made for tailwind css.Tailwind
// Run -> npm install prettier-plugin-tailwindcss  --save-dev
// Script -> "prettier": "npx prettier --write **/*.html"
