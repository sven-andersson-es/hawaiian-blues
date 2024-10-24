class StartGame {
	constructor(notes, key, mode) {
		this.notes = notes;
		this.key = key;
		this.mode = mode;
		this.game = new BluesGame(10,1);
		console.log(this.game);

		this.pentatonicScale = new PentatonicScale(this.key);
        fretBoard.element.classList.add("grid")
		this.backTrackFile = this.pentatonicScale.backTrackFile;
		this.backTrack = new Audio("./sound/" + this.backTrackFile);
		this.backTrack.setAttribute("preload", "auto");
		this.backTrack.playbackRate = 10;
		this.backTrack.play();
		this.backTrack.addEventListener(
			"ended",
			() => {
				this.backTrack.currentTime = 0;
				console.log(BluesGame.gameScore);
				this.backTrack.play();
				this.game.addRounds(1);
				if (BluesGame.gameScore.rounds % 5 === 0) {
				    this.game.addPoints(5);
				    console.log("You made 5 rounds and you got 5 extra points!");

				}
			},
			false
		);

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
}
