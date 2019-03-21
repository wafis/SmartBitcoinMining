const cards = document.querySelectorAll(".card");

function toggleOpen() {
	this.classList.toggle("active");
}

cards.forEach(card => card.addEventListener("click", toggleOpen));

var request = new XMLHttpRequest();

const apikey = "?apikey=4520AB42-F31C-4BF3-80C8-01CE5AD0AB99";

const assets = "https://rest.coinapi.io/v1/assets";

request.open("GET", assets + apikey, true);

request.onload = function() {
	var data = JSON.parse(this.response);
	console.log(data);
	// data.forEach(asset => {
	// 	console.log(asset.asset_id);
	// });
};

request.send();
