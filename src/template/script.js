const playButton = document.getElementById("playButton");


const onRouteChange = () => {
	
	location.href = "./src/game/game.html";
	
	
}


playButton.addEventListener("click", onRouteChange);

