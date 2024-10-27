class BluesGame {
	static gameScore = {
		credits: 0,
		rounds: 0,
	};
	constructor(startCredits, startRounds, backTrack, mode) {
		this.gameOver = false;
		this.startCredits = startCredits;
		this.startRounds = startRounds;
		this.backTrack = backTrack;
		this.mode = mode;
		BluesGame.gameScore.credits = this.startCredits;
		BluesGame.gameScore.rounds = this.startRounds;
		this.ukeHead = new Head(this.mode);
		this.ukeHead.creditsBoard.innerText = this.startCredits;
		this.ukeHead.roundsBoard.innerText = this.startRounds;
		console.log("BluesGame");

		this.secondsSinceLastPick = 0;
		this.lastPickInterval = setInterval(() => {
			this.secondsSinceLastPick += 1;
			console.log(this.secondsSinceLastPick);
			if (this.secondsSinceLastPick % 5 === 0) {
				this.addCredits(-1);
				this.ukeHead.updateMessageBoard("You are playing to slow, -1 credit.");
			}
		}, 1000);
	}
	gameOverTest() {
		if (BluesGame.gameScore.credits <= 0) {
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
			const gameOverMessage = `You have no credits left and the game is over.`;
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
	addCredits(credit) {
		BluesGame.gameScore.credits += credit;
		this.ukeHead.updateCreditsBoard(BluesGame.gameScore.credits);
		this.gameOverTest();
	}
	addRounds(round) {
		BluesGame.gameScore.rounds += round;
		this.gameOverTest();
	}
}
