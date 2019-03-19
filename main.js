const cards = document.querySelectorAll(".card");

function toggleOpen() {
	this.classList.toggle("active");
}

cards.forEach(card => card.addEventListener("click", toggleOpen));
