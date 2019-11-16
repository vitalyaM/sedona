var btn = document.querySelector (".js-btn");
var modal = document.querySelector (".modal");

btn.addEventListener("click", function (evt) {
	evt.preventDefault();
	if (modal.classList.contains("modal-show")) {
		modal.classList.remove("modal-show");
	} else {
		modal.classList.add("modal-show");
		}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();

		if (modal.classList.contains("modal-show")) {
			modal.classList.remove("modal-show");
		}
	}
})