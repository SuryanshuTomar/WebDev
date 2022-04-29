const canvas = document.getElementById("canvas-1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let cloudArray = [];
const cloudColours = [
	"white",
	"rgba(255, 255, 255, 0.3)",
	"rgba(173, 216, 230, 0.8)",
	"rgba(211, 211, 211, 0.8)",
];

const maxCloudSize = 40;
const minCloudSize = 0;
const mouseRadius = 60;

// Mouse Position
const mouse = {
	x: null,
	y: null,
};

// Mouse Movement Position
window.addEventListener("mousemove", function (event) {
	mouse.x = event.x;
	mouse.y = event.y;
	console.log(mouse);
});

window.addEventListener("resize", function () {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	init();
});

// Remove mouse position periodically -
setInterval(() => {
	mouse.x = undefined;
	mouse.y = undefined;
}, 1000);

// Constructor Function for Cloud Particles
function CloudParticle(x, y, directionX, directionY, radius, colour) {
	this.x = x;
	this.y = y;
	this.directionX = directionX;
	this.directionY = directionY;
	this.radius = radius;
	this.colour = colour;

	// Add draw method to CloudParticle prototype -
	CloudParticle.prototype.draw = function () {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

		// ctx.fillRect(this.x, this.y, this.radius, this.radius);
		// ctx.strokeRect(this.x, this.y, this.radius, this.radius);
		// ctx.strokeStyle = "pink";

		// ctx.strokeStyle = "orange";
		// ctx.stroke();
		ctx.fillStyle = this.colour;
		ctx.fill();
	};

	// Add update method to CloudParticle prototype -
	CloudParticle.prototype.update = function () {
		// Checking if the particles coordinates are outside canvas or not
		if (
			this.x + this.radius * 2 > canvas.width ||
			this.x - this.radius * 2 < 0
		) {
			this.directionX = -this.directionX;
		}
		if (
			this.y + this.radius * 2 > canvas.height ||
			this.y - this.radius * 2 < 0
		) {
			this.directionY = -this.directionY;
		}

		// Particle Movement in X and Y direction
		this.x += this.directionX;
		this.y += this.directionY;

		// Mouse Interactivity
		if (
			mouse.x - this.x < mouseRadius &&
			mouse.x - this.x > -mouseRadius &&
			mouse.y - this.y < mouseRadius &&
			mouse.y - this.y > -mouseRadius
		) {
			if (this.radius < maxCloudSize) {
				this.radius += 5;
			}
		} else if (this.radius > minCloudSize) {
			this.radius -= 0.1;
		}
		if (this.radius < 0) {
			this.radius = 0;
		}
		this.draw();
	};
}

// Create CloudParticle Array -
function init() {
	cloudArray = [];
	for (let i = 0; i < 800; i++) {
		let cloudRadius = 0;
		let x = Math.random() * (innerWidth - cloudRadius * 2) + cloudRadius;
		let y = Math.random() * (innerHeight - cloudRadius * 2) + cloudRadius;
		let directionX = Math.random() * 0.2 - 0.1;
		let directionY = Math.random() * 0.2 - 0.1;
		let colour =
			cloudColours[Math.floor(Math.random() * cloudColours.length)];

		cloudArray.push(
			new CloudParticle(x, y, directionX, directionY, cloudRadius, colour)
		);
	}
}

// Animation Loop
function animate() {
	requestAnimationFrame(animate);
	ctx.clearRect(0, 0, innerWidth, innerHeight);
	for (let i = 0; i < cloudArray.length; i++) {
		cloudArray[i].update();
		// console.log(cloudArray[i]);
	}
}

init();
animate();
