const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// Rectangle -
ctx.fillStyle = "rgba(255, 0, 100, 0.4)";
ctx.fillRect(100, 100, 100, 100);
ctx.fillStyle = "rgba(255, 0, 100, 0.7)";
ctx.fillRect(200, 200, 100, 100);
ctx.fillStyle = "rgba(255, 0, 100, 0.4)";
ctx.fillRect(300, 300, 100, 100);
ctx.fillRect(100, 300, 100, 100);
ctx.fillRect(300, 100, 100, 100);

// Line -
ctx.beginPath();
ctx.moveTo(50, 450);
ctx.lineTo(450, 450);
ctx.lineTo(450, 50);
ctx.lineTo(50, 50);
ctx.lineTo(50, 450);
ctx.strokeStyle = "palevioletred";
ctx.lineWidth = 4;
ctx.stroke();
ctx.closePath();

// Arc/Circle -
ctx.beginPath();
ctx.strokeStyle = "slateblue";
ctx.arc(650, 250, 150, 0, Math.PI * 2, false);
ctx.stroke();

// Looping Canvas Objects -
for (let i = 0; i < 50; i++) {
	let x = Math.random() * innerWidth;
	let y = Math.random() * innerHeight;
	ctx.beginPath();
	ctx.strokeStyle = randomColor();

	ctx.arc(x, y, 50, 0, Math.PI * 2, false);
	ctx.stroke();
}
console.log(canvas);
console.log(randomColor(3 + 1));

// Generating random color
function randomColor() {
	let maxVal = 0xffffff; // 16777215.
	let randomNumber = Math.random() * maxVal;
	randomNumber = Math.floor(randomNumber);
	randomNumber = randomNumber.toString(16);
	let randColor = randomNumber.padStart(6);
	return `#${randColor.toUpperCase()}`;
}
