class BluesGame {
	static gameScore = {
		points: 0,
		rounds: 0,
	};
	constructor(startPoints, startRounds, backTrack, mode) {
		this.gameOver = false;
		this.startPoints = startPoints;
		this.startRounds = startRounds;
		this.backTrack = backTrack;
        this.mode = mode;
		BluesGame.gameScore.points = this.startPoints;
		BluesGame.gameScore.rounds = this.startRounds;
        this.ukeHead = new Head(this.mode);
        this.ukeHead.pointsBoard.innerText = this.startPoints; 
        this.ukeHead.roundsBoard.innerText = this.startRounds; 
        console.log("BluesGame");
	}
	gameOverTest() {
		if (BluesGame.gameScore.points <= 0) {
			console.log("Game Over!!");
			this.gameOver = true;
			this.backTrack.pause();
			getWelcomeScreen();
		}
	}
	addPoints(point) {
		BluesGame.gameScore.points += point;
        this.ukeHead.updatePointsBoard(BluesGame.gameScore.points)
		this.gameOverTest();
	}
	addRounds(round) {
		BluesGame.gameScore.rounds += round;
		this.gameOverTest();
	}
}
