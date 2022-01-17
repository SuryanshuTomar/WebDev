// document.getElementById("count-el").innerText = 5;

let count = 0;
let countElement = document.getElementById("count-el");
let welcomeElement = document.getElementById("welcome-el");
let saveElement = document.getElementById("save-el");

let userName = "DeathSlayer";
welcomeElement.innerText += " " + userName;
console.log("running");
welcomeElement.innerText += " 🤘";
function increment(){
    count += 1;
    countElement.innerText = count;
    console.log("Increment function called", count);
}

function saveCount(){
    saveElement.textContent += count + " - ";
    console.log(saveElement.textContent);
    countElement.textContent = 0;
    count = 0;
} 


    
