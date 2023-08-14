const text = document.querySelector("h1");
const x0 = text.offsetLeft;
const y0 = text.offsetTop;

const handleMouse = (event) => {
	const dx = (event.clientX - x0) / 5;
	const dy = (event.clientY - y0) / 5;

	const c = `${-dx}px ${-dy}px 5px rgba(0,255,255,0.7)`;
	const m = `${dy}px ${-dx}px 5px rgba(255,0,255,0.7)`;
	const y = `${-dy}px ${dx}px 5px rgba(255,255,0,0.7)`;
	const g = `${dx}px ${dy}px 5px rgba(0,255,0,0.7)`;

	text.style.textShadow = `${c}, ${m}, ${y}, ${g}`;
};

document.addEventListener("mousemove", handleMouse);
