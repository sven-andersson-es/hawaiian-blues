const welcome = new Welcome();

const startTheGame = (key,mode) => {
    const startGame = new StartGame(fretBoardData, "C", "learn");
    const gameLoop = () => {
        if (!startGame.game.gameOver) {
            requestAnimationFrame(gameLoop);
            startGame.game.gameOverTest();
        } else {
            startGame.backTrack.pause();
            
            //Add the game over logic here
        }
    };
    requestAnimationFrame(gameLoop);
}
