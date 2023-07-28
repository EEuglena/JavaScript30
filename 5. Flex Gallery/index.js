const panels = document.querySelectorAll(".panel");

const handlePanelClick = (event) => {
	const isOpen = event.target.classList.contains("open");
	panels.forEach((panel) => panel.classList.remove("open"));
	!isOpen && event.target.classList.add("open");
};

panels.forEach((panel) => panel.addEventListener("click", handlePanelClick));
