// PRACTISE -

const gas = [20, 30, 56, 100];
const food = [29, 10, 30];

function calculateTotal(arr) {
  return arr.reduce((total, item) => total + item);
}

const totalSpent = calculateTotal(gas) + calculateTotal(food);
console.log(totalSpent);

console.log({
  gas: calculateTotal(gas),
  food: calculateTotal(food),
});
