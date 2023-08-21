const header = document.querySelector("header");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");

document.addEventListener("scroll", () => {
	if (nav.offsetTop > header.offsetHeight) {
		logo.style.maxWidth = "100%";
	} else {
		logo.style.maxWidth = "0";
	}
});
