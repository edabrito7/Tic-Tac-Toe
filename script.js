const playButton = document.getElementById("playButton");



const onRouteChange = () => {
	
	location.href = "game.html";
	
}



playButton.addEventListener("click", onRouteChange);