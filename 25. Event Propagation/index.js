const divs = document.querySelectorAll("div");

function onCapturing(event) {
	if (this !== event.target)
		console.log(
			`${event.type} event at ${this?.className} during capturing (eventPhase = ${event.eventPhase})`
		);
}

divs.forEach((div) => {
	div.addEventListener("click", onCapturing, { capture: true });
});
document.body.addEventListener("click", onCapturing, { capture: true });
document.addEventListener("click", onCapturing, { capture: true });

function onTarget(event) {
	if (this === event.target)
		console.log(
			`${event.type} event at ${this?.className} during target (eventPhase = ${event.eventPhase})`
		);
}

divs.forEach((div) => {
	div.addEventListener("click", onTarget);
});
document.body.addEventListener("click", onTarget);
document.addEventListener("click", onTarget);

function onBubbling(event) {
	if (this !== event.target)
		console.log(
			`${event.type} event at ${this?.className} during bubbling (eventPhase = ${event.eventPhase})`
		);
}

divs.forEach((div) => {
	div.addEventListener("click", onBubbling);
});
document.body.addEventListener("click", onBubbling);
document.addEventListener("click", onBubbling);

const button = document.querySelector("button");

const onFirstClick = () => {
	console.log("The very first click");
};

const onClick = () => {
	console.count("Button Clicked");
};

button.addEventListener("click", onFirstClick, { once: true });
button.addEventListener("click", onClick);
