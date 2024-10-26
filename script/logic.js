const startTheGame = (key, mode) => {
    const startGame = new StartGame(fretBoardData, key, mode);
    //console.log(mode);
    
	//Enable preload of audio in iOS to remove latency
	const AudioContext = window.AudioContext || window.webkitAudioContext;
	const audioCtx = new AudioContext();
};

const getWelcomeScreen = () => {
	const ukeHead = document.getElementById("uke-head")
    ukeHead.innerHTML = "";
    fretBoard.element.innerHTML = "";

	fretBoard.element.classList.remove("grid");
	const welcome = new Welcome();
};

getWelcomeScreen();
