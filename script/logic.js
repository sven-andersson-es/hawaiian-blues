const getWelcomeScreen = () => {
    fretBoard.element.innerHTML = "";
    fretBoard.element.classList.remove("grid")
    const welcome = new Welcome();
}
getWelcomeScreen();

const startTheGame = (key,mode) => {
    const startGame = new StartGame(fretBoardData, "C", "learn");
    const gameLoop = () => {
        if (!startGame.game.gameOver) {
            requestAnimationFrame(gameLoop);
            startGame.game.gameOverTest();
            
        } else {
            startGame.backTrack.pause();
            getWelcomeScreen();
            //Add the game over logic here
        }
    };
    requestAnimationFrame(gameLoop);
}
