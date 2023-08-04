const checkboxes = document.querySelectorAll('input[type="checkbox"]');

let start;

const checkSingle = (checked) => {
	start = checked;
	checkboxes.forEach((checkbox) => (checkbox.checked = false));
	checked.checked = true;
};

const checkMultiple = (checked) => {
	let isChecking = false;
	checkboxes.forEach((checkbox) => {
		if (checkbox === start || checkbox === checked) {
			isChecking = !isChecking;
			checkbox.checked = true;
		} else {
			checkbox.checked = isChecking;
		}
	});
};

const handleCheckboxClick = (event) => {
	if (event.shiftKey && start) {
		checkMultiple(event.target);
	} else {
		checkSingle(event.target);
	}
};

checkboxes.forEach((checkbox) =>
	checkbox.addEventListener("click", handleCheckboxClick)
);
