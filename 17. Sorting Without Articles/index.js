const form = document.querySelector("form");
const list = document.querySelector("ul");
const checkbox = document.querySelector("input[type='checkbox']");

let ascending = true;
let articles = false;

const sortBands = (ascending = true, articles = false) => {
	const bands = [
		"The Plot in You",
		"The Devil Wears Prada",
		"Pierce the Veil",
		"Norma Jean",
		"The Bled",
		"Say Anything",
		"The Midway State",
		"We Came as Romans",
		"Counterparts",
		"Oh, Sleeper",
		"A Skylit Drive",
		"Anywhere But Here",
		"An Old Dog",
	];

	const compareFunction = (ascending) => {
		const compareAscending = (a, b) => {
			if (a > b) {
				return 1;
			} else if (a < b) {
				return -1;
			} else {
				return 0;
			}
		};

		const compareDescending = (a, b) => {
			if (a > b) {
				return -1;
			} else if (a < b) {
				return 1;
			} else {
				return 0;
			}
		};

		return ascending ? compareAscending : compareDescending;
	};

	const stripArticles = (string) => {
		const re = /^(?:(?:A|An|The)\s)?(.+)/;
		return string.match(re)[1];
	};

	if (articles) {
		return bands.toSorted(compareFunction(ascending));
	} else {
		return bands.toSorted((a, b) =>
			compareFunction(ascending)(stripArticles(a), stripArticles(b))
		);
	}
};

const handleForm = (event) => {
	ascending = JSON.parse(event.target.value);
	paintList(ascending, articles);
};

const handleCheckbox = (event) => {
	articles = event.target.checked;
	paintList(ascending, articles);
};

const paintList = (ascending = true, articles = false) => {
	list.innerHTML = "";
	sortBands(ascending, articles).forEach((band) => {
		const li = document.createElement("li");
		li.textContent = band;
		list.appendChild(li);
	});
};

form.addEventListener("change", handleForm);
checkbox.addEventListener("input", handleCheckbox);

paintList();
