class BluesGame {
	static gameScore = {
		points: 0,
		rounds: 0,
	};
	constructor(startPoints, startRounds, backTrack) {
		this.gameOver = false;
		this.startPoints = startPoints;
		this.startRounds = startRounds;
		this.backTrack = backTrack;
		BluesGame.gameScore.points = this.startPoints;
		BluesGame.gameScore.rounds = this.startRounds;
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
		this.gameOverTest();
	}
	addRounds(round) {
		BluesGame.gameScore.rounds += round;
		this.gameOverTest();
	}
}
