const spacing = document.getElementById("spacing");
const blurry = document.getElementById("blur");
const baseColor = document.getElementById("base-color");
const span = document.querySelector("span");
const img = document.querySelector("img");

const DEFAULT_WIDTH = 23;
const DEFAULT_HEIGHT = 32;

const handleSpacingChange = (event) => {
	const { value } = event.target;
	img.style.width = `${DEFAULT_WIDTH - 2 * value}rem`;
	img.style.height = `${DEFAULT_HEIGHT - 2 * value}rem`;
	img.style.padding = `${value}rem`;
};

const handleBlurChange = (event) => {
	const { value } = event.target;
	img.style.filter = `blur(${value}px)`;
};

const handleBaseColorChange = (event) => {
	const { value } = event.target;
	span.style.color = value;
	img.style.backgroundColor = value;
};

spacing.addEventListener("change", handleSpacingChange);
blurry.addEventListener("change", handleBlurChange);
baseColor.addEventListener("change", handleBaseColorChange);
