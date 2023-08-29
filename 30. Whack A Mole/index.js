const holes = document.querySelectorAll(".hole");
const button = document.querySelector(".button");

const PLAY_TIME = 10_000;
let score = 0;
let isPlaying = false;
let timer;

const randomTime = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

const randomHole = () => {
	return holes[Math.floor(Math.random() * holes.length)];
};

const randomHoleUp = () => {
	if (isPlaying) {
		timer = setTimeout(() => {
			randomHole().classList.add("up");
		}, randomTime(500, 2000));
	}
};

const initGame = () => {
	isPlaying = true;
	score = 0;
	holes.forEach((hole) => hole.classList.remove("up"));
	button.textContent = score;
};

const playGame = () => {
	initGame();
	setTimeout(endGame, PLAY_TIME);
	randomHoleUp();
};

const endGame = () => {
	isPlaying = false;
	alert(`You caught ${score} moles!`);
	clearTimeout(timer);
	holes.forEach((hole) => hole.classList.remove("up"));
};

function handleHole(event) {
	event.preventDefault();
	if (this.classList.contains("up")) {
		score++;
		button.textContent = score;
		this.classList.remove("up");
		randomHoleUp();
	}
}

const handleButton = () => {
	if (!isPlaying) {
		playGame();
	}
};

holes.forEach((hole) => hole.addEventListener("click", handleHole));
button.addEventListener("click", handleButton);
