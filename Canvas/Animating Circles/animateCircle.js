const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// -----------------------------------------------------------------
// Animating A Circle -

function randomColor() {
	let maxVal = 0xffffff;
	let randomNumber = Math.random() * maxVal;
	randomNumber = Math.floor(randomNumber);
	randomNumber = randomNumber.toString(16);
	let randColor = randomNumber.padStart(6);
	return `#${randColor.toUpperCase()}`;
}

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.stroke();
		// ctx.fill();
		// console.log("Circle Drawn !");

		return this;
	};

	this.update = function () {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
		return this;
	};

	this.changeColor = function (color) {
		ctx.strokeStyle = color;
		return this;
	};
}

// const circle = new Circle(200, 200, 10, 10, 40);
// const circle = new Circle(x, y, dx, dy, radius);
const circleArray = [];
for (let i = 0; i < 50; i++) {
	let radius = 30;
	// This  (- radius * 2) + radius will prevent circle from getting caught at the edges of the screen.
	let x = Math.random() * (innerWidth - radius * 2) + radius;
	let y = Math.random() * (innerHeight - radius * 2) + radius;
	let dx = (Math.random() - 0.5) * 5;
	let dy = (Math.random() - 0.5) * 5;
	circleArray.push(new Circle(x, y, dx, dy, radius));
	circleArray[i].changeColor(randomColor());
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].draw();
		circleArray[i].update();
		// circleArray[i].changeColor(randomColor());
	}
	// console.log("Animating...");
}

animate();
