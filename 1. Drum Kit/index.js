const handleKeydown = (event) => {
	const key = event.key.toUpperCase();
	const button = document.querySelector(`div[data-key="${key}"]`);
	const audio = document.querySelector(`audio[data-key="${key}"]`);
	if (button && audio) {
		button.classList.add("playing");
		audio.play();
	}
};

const handleKeyup = (event) => {
	const key = event.key.toUpperCase();
	document
		.querySelector(`div[data-key="${key}"]`)
		?.classList.remove("playing");
};

window.addEventListener("keydown", handleKeydown);
window.addEventListener("keyup", handleKeyup);
