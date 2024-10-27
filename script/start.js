class StartGame {
	constructor(notes, key, mode) {
		this.notes = notes;
		this.key = key;
		this.mode = mode;
		this.pentatonicScale = new PentatonicScale(this.key);
		this.backTrackFile = this.pentatonicScale.backTrackFile;
		this.backTrack = new Audio("./sound/" + this.backTrackFile);
		this.backTrack.setAttribute("preload", "auto");
		this.backTrack.playbackRate = 1;
        this.backTrack.volume = 0.7;
		this.backTrack.play();
		this.backTrack.addEventListener(
			"ended",
			() => {
				this.backTrack.currentTime = 0;
				console.log(BluesGame.gameScore);
				
                this.backTrack.play();
				this.game.addRounds(1);
                this.game.ukeHead.updateRoundsBoard(BluesGame.gameScore.rounds);
				if (BluesGame.gameScore.rounds % 5 === 0) {
					this.game.addCredits(5);
                    this.game.ukeHead.updateMessageBoard("You made 5 rounds and you got 5 extra credits!")
				}
			},
			false
		);
		this.game = new BluesGame(10, 0, this.backTrack, this.mode);
		//console.log(this.game);

		fretBoard.element.classList.add("grid");

		//set up the fretboard
		this.notes.forEach((note) => {
			new Note(
				this.pentatonicScale,
				note.note,
				note.sound,
				this.mode,
				this.game
			);
		});
	}
	gameOverTest() {
		if (BluesGame.gameScore.credits <= 0) {
			console.log("Game Over!!");
			this.gameOver = true;
			this.backTrack.pause();
			getWelcomeScreen();
		}
	}
}
