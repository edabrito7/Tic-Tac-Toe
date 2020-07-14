const playButton = document.getElementById("playButton");


const onRouteChange = () => {
	
	location.href = "./game/game.html";
	
	
}


playButton.addEventListener("click", onRouteChange);

