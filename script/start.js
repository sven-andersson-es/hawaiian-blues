class StartGame {
	constructor(notes, key, mode) {
		this.notes = notes;
		this.key = key;
		this.mode = mode;
		this.game = new BluesGame();
		console.log(this.game);

		this.pentatonicScale = new PentatonicScale(this.key);
		this.backTrackFile = this.pentatonicScale.backTrackFile;
		this.backTrack = new Audio("./sound/" + this.backTrackFile);
		this.backTrack.setAttribute("preload", "auto");
		this.backTrack.playbackRate = 1;
		this.backTrack.play();
		this.backTrack.addEventListener(
			"ended",
			() => {
				this.backTrack.currentTime = 0;
				console.log(BluesGame.gameScore);
				this.backTrack.play();
				this.game.addRounds(1);
			},
			false
		);

		//set up the fretboard
		this.notes.forEach((note) => {
			new Note(this.pentatonicScale, note.note, note.sound, this.mode, this.game);
		});
	}
}