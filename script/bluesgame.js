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
        
		this.secondsSinceLastPick = 0;
		this.lastPickInterval = setInterval(() => {
			this.secondsSinceLastPick += 1;
			console.log(this.secondsSinceLastPick);
			if (this.secondsSinceLastPick % 5 === 0) {
				this.addPoints(-1);
				this.ukeHead.updateMessageBoard("You are playing to slow, -1 point.");
			}
		}, 1000);
	}
	gameOverTest() {
		if (BluesGame.gameScore.points <= 0) {
			console.log("Game Over!!");
			this.gameOver = true;
			this.backTrack.pause();
			clearInterval(this.lastPickInterval);
			this.lastPickInterval;
			fretBoard.element.classList.remove("grid");
			fretBoard.element.innerHTML = "";
			const gameOverDivMessage = document.createElement("div");
			const gameOverDivRounds = document.createElement("div");
			const gameOverButton = document.createElement("button");
			const gameOverMessage = `You have no points left and the game is over.`;
			const finalRounds = BluesGame.gameScore.rounds;
			console.log(finalRounds);

			let roundsMessage = "";
			if (finalRounds === 0) {
				roundsMessage = "You did not reach one full round, keep practicing!";
			} else if (finalRounds > 0 && finalRounds < 4) {
				roundsMessage = `You managed to play ${finalRounds} rounds, that's not too bad, keep ut the good job!`;
			} else if (finalRounds > 4) {
				roundsMessage = `You managed to play ${finalRounds} rounds, really great!`;
			}

			gameOverDivMessage.innerText = gameOverMessage;
			gameOverDivRounds.innerText = roundsMessage;
			gameOverButton.innerText = "Re-start";
			fretBoard.element.appendChild(gameOverDivMessage);
			fretBoard.element.appendChild(gameOverDivRounds);
			fretBoard.element.appendChild(gameOverButton);

			gameOverButton.addEventListener("click", () => {
				getWelcomeScreen();
			});
		}
	}
	addPoints(point) {
		BluesGame.gameScore.points += point;
		this.ukeHead.updatePointsBoard(BluesGame.gameScore.points);
		this.gameOverTest();
	}
	addRounds(round) {
		BluesGame.gameScore.rounds += round;
		this.gameOverTest();
	}
}
