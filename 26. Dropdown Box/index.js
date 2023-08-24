const menus = document.querySelectorAll(".menu");
const box = document.querySelector(".background");
const PADDING = 8;

const handleEnter = (event) => {
	console.log(event.target.querySelector(".dropdown"));
	const { width, height, left, top } = event.target
		.querySelector(".dropdown")
		.getBoundingClientRect();
	box.style.opacity = 1;
	box.style.width = width + 2 * PADDING + "px";
	box.style.height = height + "px";
	box.style.left = left - PADDING + "px";
	box.style.top = top + "px";
};

const handleLeave = (event) => {
	box.style.opacity = 0;
};

menus.forEach((menu) => {
	menu.addEventListener("mouseenter", handleEnter);
	menu.addEventListener("mouseleave", handleLeave);
});
