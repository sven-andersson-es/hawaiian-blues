const startTheGame = (key, mode) => {
	const startGame = new StartGame(fretBoardData, "C", "learn");
	//Enable preload of audio in iOS to remove latency
	const AudioContext = window.AudioContext || window.webkitAudioContext;
	const audioCtx = new AudioContext();
};

const getWelcomeScreen = () => {
	fretBoard.element.innerHTML = "";
	fretBoard.element.classList.remove("grid");
	const welcome = new Welcome();
};

getWelcomeScreen();
