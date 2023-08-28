const s20 = document.querySelector(".s20");
const m5 = document.querySelector(".m5");
const m15 = document.querySelector(".m15");
const m20 = document.querySelector(".m20");
const h1 = document.querySelector(".h1");
const form = document.querySelector("form");
const clock = document.querySelector(".clock");
const end = document.querySelector(".end");

let left, tick;

const formatSecond = (second) => {
	const min = Math.floor(second / 60);
	const sec = second % 60;
	return `${min.toString().padStart(2, "0")}:${sec
		.toString()
		.padStart(2, "0")}`;
};

const doTick = () => {
	if (--left <= 0) {
		document.body.style.backgroundColor = "tomato";
		setTimeout(() => {
			document.body.style.backgroundColor = "#d8e4fd";
		}, 1000);
		clearInterval(tick);
	}
	clock.innerText = formatSecond(left);
};

const setTimer = (second) => {
	const endDate = new Date(new Date().getTime() + second * 1000);
	end.innerText = `Be back at ${endDate
		.getHours()
		.toString()
		.padStart(2, "0")}:${endDate.getMinutes().toString().padStart(2, "0")}`;
	document.body.style.backgroundColor = "#d8e4fd";
	clearInterval(tick);
	left = second;
	clock.innerText = formatSecond(second);
	tick = setInterval(doTick, 1000);
};

s20.addEventListener("click", () => setTimer(20));
m5.addEventListener("click", () => setTimer(300));
m15.addEventListener("click", () => setTimer(900));
m20.addEventListener("click", () => setTimer(1200));
h1.addEventListener("click", () => setTimer(3600));
form.addEventListener("submit", (event) => {
	event.preventDefault();
	setTimer(
		parseInt(event.target.minute.value) * 60 +
			parseInt(event.target.second.value)
	);
});
