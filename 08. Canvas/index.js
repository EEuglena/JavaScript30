const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const colorInput = document.querySelector("#color");
const widthInput = document.querySelector("#width");
const clear = document.querySelector("#clear");
const toolbar = document.querySelector(".toolbar");

let isDrawing = false;
const mouse = { x: 0, y: 0 };

const setMouse = (x, y) => {
	mouse.x = x;
	mouse.y = y;
};

const resizeCanvas = () => {
	canvas.width = window.innerWidth * 0.8;
	canvas.height = window.innerHeight * 0.8;

	context.lineCap = "round";
	context.lineJoin = "round";
	context.strokeStyle = colorInput.value;
	context.lineWidth = widthInput.value;
};

const drawCanvas = (event) => {
	if (isDrawing) {
		context.beginPath();
		context.moveTo(mouse.x, mouse.y);
		context.lineTo(event.offsetX, event.offsetY);
		context.stroke();
		setMouse(event.offsetX, event.offsetY);
	}
};

canvas.addEventListener("mousedown", (event) => {
	setMouse(event.offsetX, event.offsetY);
	isDrawing = true;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
canvas.addEventListener("mousemove", drawCanvas);

window.addEventListener("resize", resizeCanvas);
window.addEventListener("mousemove", (event) => {
	if (event.clientY > window.innerHeight * 0.9) {
		toolbar.classList.add("active");
	} else {
		toolbar.classList.remove("active");
	}
});

colorInput.addEventListener(
	"input",
	() => (context.strokeStyle = colorInput.value)
);
widthInput.addEventListener(
	"input",
	() => (context.lineWidth = widthInput.value)
);
clear.addEventListener("click", resizeCanvas);

resizeCanvas();
