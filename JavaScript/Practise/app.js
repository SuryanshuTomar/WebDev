// PRACTISE -

const result = document.querySelector("#result");
result.style.backgroundColor = "yellow";

const item = document.querySelectorAll(".special");
item.forEach(function (item) {
  item.style.backgroundColor = "violet";
});

const lastItem = document.querySelector("li:last-child");
console.log(lastItem);


