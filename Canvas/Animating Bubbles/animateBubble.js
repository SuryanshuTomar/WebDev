const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");

// -----------------------------------------------------------------
// Animating A Circle -

const mouse = {
	x: undefined,
	y: undefined,
};

const colorArray = ["#C02AE8", "#812CF2", "#3F33DB", "#2C64F2", "#0E9CED"];
const mouseRadius = 50;

window.addEventListener("mousemove", (event) => {
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse);
});

window.addEventListener("resize", () => {
	canvas.width = innerWidth;
	canvas.height = innerHeight;

	// Bubble Initialization
	init();
});

// Remove mouse position periodically -
setInterval(() => {
	mouse.x = undefined;
	mouse.y = undefined;
}, 1000);

function Circle(x, y, dx, dy, radius, maxRadius, minRadius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.maxRadius = maxRadius;
	this.minRadius = minRadius;
	this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

	Circle.prototype.draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		ctx.fillStyle = this.color;
		ctx.fill();
		// console.log("Circle Drawn !");

		return this;
	};

	Circle.prototype.update = function () {
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;

		// Mouse Interactivity
		if (
			mouse.x - this.x < mouseRadius &&
			mouse.x - this.x > -mouseRadius &&
			mouse.y - this.y < mouseRadius &&
			mouse.y - this.y > -mouseRadius
		) {
			if (this.radius < this.maxRadius) {
				this.radius += 4;
			}
		} else if (this.radius > this.minRadius) {
			this.radius -= 1;
		}

		return this;
	};

	this.changeColor = function (color) {
		ctx.strokeStyle = color;
		return this;
	};
}

let circleArray = [];
function init() {
	circleArray = [];
	// const circle = new Circle(x, y, dx, dy, radius);
	for (let i = 0; i < 800; i++) {
		let radius = Math.random() * 5 + 1;
		let maxRadius = 30 + Math.random() * 50;
		let minRadius = radius;
		// This  (- radius * 2) + radius will prevent circle from getting caught at the edges of the screen.
		let x = Math.random() * (innerWidth - radius * 2) + radius;
		let y = Math.random() * (innerHeight - radius * 2) + radius;
		let dx = (Math.random() - 0.5) * 1.5;
		let dy = (Math.random() - 0.5) * 1.5;
		circleArray.push(new Circle(x, y, dx, dy, radius, maxRadius, minRadius));
	}
}

function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	for (let i = 0; i < circleArray.length; i++) {
		circleArray[i].draw();
		circleArray[i].update();
	}
	// console.log("Animating...");
}
init();
animate();
