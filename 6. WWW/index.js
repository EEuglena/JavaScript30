const input = document.querySelector("input");
const ul = document.querySelector("ul");
const endpoint =
	"https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities;

const setUl = (items, regex) => {
	ul.innerHTML = "";
	items.forEach((item) => {
		const li = document.createElement("li");
		const name = document.createElement("p");
		const population = document.createElement("p");

		name.innerHTML = `${item.city}, ${item.state}`.replace(
			regex,
			"<span>$1</span>"
		);
		population.textContent = parseInt(item.population).toLocaleString(
			"en-US"
		);

		li.appendChild(name);
		li.appendChild(population);
		ul.appendChild(li);
	});
};

const handleInputChange = (event) => {
	const query = event.target.value;
	const regex = new RegExp(`(${query})`, "gi");
	const result = cities.filter(
		(city) => city.city.match(regex) || city.state.match(regex)
	);
	setUl(result.slice(0, 10), regex);
};

fetch(endpoint)
	.then((res) => res.json())
	.then((res) => (cities = res));

input.addEventListener("input", handleInputChange);
