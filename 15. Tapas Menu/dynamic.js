const storageKey = "TAPAS_MENUS";

const initiateMenus = () => {
	const current = getMenus();
	if (current) {
		return current;
	} else {
		setMenus([]);
		return [];
	}
};

const getMenus = () => {
	return JSON.parse(localStorage.getItem(storageKey));
};

const setMenus = (menus) => {
	localStorage.setItem(storageKey, JSON.stringify(menus));
};

const menuList = document.querySelector("ul");
const menuForm = document.querySelector("form");
const alert = document.querySelector(".alert");
const menus = initiateMenus();

const handleCheckbox = (event) => {
	const name = event.target.parentNode.id;
	const menu = menus.find((menu) => menu.name === name);
	menu.checked = !menu.checked;
	setMenus(menus);
};

const handleRemove = (event) => {
	const name = event.target.parentNode.id;
	menus.splice(
		menus.findIndex((menu) => menu.name === name),
		1
	);
	setMenus(menus);
	paintMenus();
};

const paintMenus = () => {
	menuList.innerHTML = "";
	if (menus.length > 0) {
		menus.forEach(({ name, checked }) => {
			const li = document.createElement("li");
			li.className = "menu";
			li.setAttribute("id", name);

			const checkbox = document.createElement("input");
			checkbox.setAttribute("type", "checkbox");
			checked && checkbox.setAttribute("checked", "checked");
			checkbox.addEventListener("click", handleCheckbox);

			const p = document.createElement("p");
			p.textContent = name;

			const remove = document.createElement("button");
			remove.textContent = "X";
			remove.addEventListener("click", handleRemove);

			li.appendChild(checkbox);
			li.appendChild(p);
			li.appendChild(remove);
			menuList.appendChild(li);
		});
	} else {
		menuList.innerHTML = "Please add menu";
	}
};

const handleSubmit = (event) => {
	event.preventDefault();
	const name = event.target.name.value.toLowerCase();
	event.target.name.value = "";

	if (menus.some((menu) => menu.name === name)) {
		alert.classList.remove("hidden");
		setTimeout(() => {
			alert.classList.add("hidden");
		}, 2000);
	} else {
		menus.push({ name, checked: false });
		setMenus(menus);
		paintMenus();
	}
};

menuForm.addEventListener("submit", handleSubmit);

paintMenus();
