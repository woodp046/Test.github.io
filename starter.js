var starter = ["It was", "They were", "The night", "When the", "We were", "When the"];
function generate() {
	document.getElementById("generate").innerHTML = starter[parseInt(Math.random() * 5)];
};