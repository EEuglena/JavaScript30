const hourHand = document.querySelector("#hour-hand");
const minuteHand = document.querySelector("#minute-hand");
const secondHand = document.querySelector("#second-hand");

const setHour = () => {
	const date = new Date();
	const hour = date.getHours();
	const minute = date.getMinutes();
	const degree = hour * 30 + minute * 0.5;
	hourHand.style.transform = `rotate(${degree}deg)`;
};

const setMinute = () => {
	const date = new Date();
	const minute = date.getMinutes();
	const second = date.getSeconds();
	const degree = minute * 6 + second / 10;
	minuteHand.style.transform = `rotate(${degree}deg)`;
};

const setSecond = () => {
	const date = new Date();
	const second = date.getSeconds();
	const degree = second * 6;
	if (degree === 0) {
		secondHand.style.transition = "unset";
	} else {
		secondHand.style.transition = "";
	}
	secondHand.style.transform = `rotate(${degree}deg)`;
};

const setClock = () => {
	setHour();
	setMinute();
	setSecond();
};

setClock();

setInterval(() => {
	setClock();
}, 1000);
