const startTheGame = (key, mode) => {
    const startGame = new StartGame(fretBoardData, key, mode);
    //console.log(mode);
};

const getWelcomeScreen = () => {
	const ukeHead = document.getElementById("uke-head")
    //ukeHead.innerHTML = "";
    fretBoard.element.innerHTML = "";

	fretBoard.element.classList.remove("grid");
	const welcome = new Welcome();
};

getWelcomeScreen();
