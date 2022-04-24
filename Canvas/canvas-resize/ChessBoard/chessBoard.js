const canvas = document.querySelector("canvas");
canvas.width = 400;
canvas.height = 400;

const ctx = canvas.getContext("2d");

for (let i = 0; i < 4; i++) {
	for (let j = 0; j < 4; j++) {
		ctx.fillRect(2 * i * 50, 2 * j * 50, 50, 50);
		ctx.fillRect(2 * i * 50 + 50, 2 * j * 50 + 50, 50, 50);
	}
}

console.log(canvas);
