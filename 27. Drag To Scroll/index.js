const pictures = document.querySelectorAll(".pictures");

const SPEED = 1;
let isDown = false;
let start;

const handleDown = (event) => {
	isDown = true;
	start = event.clientX;
};

function handleScroll(event) {
	event.preventDefault();
	if (isDown) {
		const offset = event.clientX - start;
		start = event.clientX;
		this.scrollLeft -= offset * SPEED;
	}
}

const handleUp = (event) => {
	isDown = false;
};

function handleOut(event) {
	const rect = this.getBoundingClientRect();
	const { clientX: x, clientY: y } = event;
	if (
		x < rect.left ||
		x > rect.left + rect.width ||
		y < rect.top ||
		y > rect.top + rect.height
	) {
		isDown = false;
	}
}

pictures.forEach((picture) => {
	picture.addEventListener("mousedown", handleDown);
	picture.addEventListener("mousemove", handleScroll);
	picture.addEventListener("mouseout", handleOut);
});

document.addEventListener("mouseup", handleUp);
