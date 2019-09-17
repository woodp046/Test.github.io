var starter = ["It was", "They were", "The night", "When the", "We were", "When the"];
var topic = ["Earth", "Love", "Fighting", "Magic", "Politics", "Food", "Animals", "Stress", "Adventure", "School", "Physics", "Life"];
function generateStarterWord() {
	document.getElementById("generate").innerHTML = starter[parseInt(Math.random() * 5)];
};
function generateTopic() {
	document.getElementById("generateTopic").innerHTML = topic[parseInt(Math.random() * 8)];
};
