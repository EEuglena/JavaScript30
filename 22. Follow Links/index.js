const links = document.querySelectorAll("a");
const highlight = document.querySelector(".highlight");

const handleHover = (event) => {
	const { width, height, top, left } = event.target.getBoundingClientRect();
	const { scrollX, scrollY } = window;
	const x = left + scrollX;
	const y = top + scrollY;
	const padding = 3;

	highlight.style.top = `${y}px`;
	highlight.style.left = `${x - padding}px`;
	highlight.style.width = `${width + padding * 2}px`;
	highlight.style.height = `${height}px`;
};

links.forEach((link) => link.addEventListener("mouseenter", handleHover));
