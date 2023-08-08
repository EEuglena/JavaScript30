const UP = "arrowup";
const DOWN = "arrowdown";
const LEFT = "arrowleft";
const RIGHT = "arrowright";
const ENTER = "enter";

const bar = document.querySelector(".commands");
const display = document.getElementById("display");

const colors = ["#bfffef", "#fbfcbe", "#ffdbe9", "#ffebdb", "#daecfd"];
const code = [UP, UP, DOWN, DOWN, LEFT, RIGHT, LEFT, RIGHT, "b", "a", ENTER];
const commands = [];

const secretCode = () => {
	const body = document.querySelector("body");

	display.innerText = "🤩";

	body.style.backgroundColor = colors[0];
	setTimeout(() => {
		body.style.backgroundColor = colors[1];
	}, 200);
	setTimeout(() => {
		body.style.backgroundColor = colors[2];
	}, 400);
	setTimeout(() => {
		body.style.backgroundColor = colors[3];
	}, 600);
	setTimeout(() => {
		body.style.backgroundColor = colors[4];
	}, 800);
};

const transformKey = (key) => {
	if (key === UP) {
		return "↑";
	}
	if (key === DOWN) {
		return "↓";
	}
	if (key === LEFT) {
		return "←";
	}
	if (key === RIGHT) {
		return "→";
	}
	return key;
};

const displayCommands = () => {
	bar.innerHTML = "";
	commands.forEach((command) => {
		const div = document.createElement("div");
		div.className = "command";
		div.innerText = transformKey(command);
		bar.appendChild(div);
	});
};

const handleKeyDown = (event) => {
	const key = event.key.toLowerCase();
	commands.push(key);
	display.innerText = transformKey(key);
	displayCommands();

	while (commands.length > code.length) {
		commands.shift();
	}

	if (
		commands.length === code.length &&
		commands.every((command, index) => command === code[index])
	) {
		secretCode();
	}
};

document.addEventListener("keydown", handleKeyDown);
