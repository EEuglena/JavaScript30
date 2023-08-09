const OFFSET = window.innerHeight * 1.1;

const imgs = document.querySelectorAll(".slide-in");

const debounce = (func, delay = 20, immediate = true) => {
	let timeout;
	return (...args) => {
		const later = () => {
			timeout = null;
			if (!immediate) func.apply(this, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, delay);
		if (callNow) func.apply(this, args);
	};
};

const throttle = (func, delay = 200) => {
	let timeout;
	return (...args) => {
		if (!timeout) {
			timeout = setTimeout(() => {
				timeout = null;
				func.apply(this, args);
			}, delay);
		}
	};
};

const handleScroll = (event) => {
	imgs.forEach((img) => {
		if (window.scrollY > img.offsetTop - OFFSET) {
			img.classList.add("active");
		} else {
			img.classList.remove("active");
		}
	});
};

window.addEventListener(
	"scroll",
	throttle((event) => handleScroll(event)) // or debounce((event) => handleScroll(event))
);
