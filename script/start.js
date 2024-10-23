class StartGame {
	constructor(notes, key, mode) {
		this.notes = notes;
		this.key = key;
		this.mode = mode;
		this.pentatonicScale = new PentatonicScale(this.key);
		this.backTrackFile = this.pentatonicScale.backTrackFile;
		this.backTrack = new Audio("./sound/" + this.backTrackFile);
		this.backTrack.setAttribute("preload", "auto");
        //this.backTrack.play();
        this.backTrack.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);

		//set up the fretboard
		this.notes.forEach((note) => {
			new Note(this.pentatonicScale, note.note, note.sound, this.mode);
		});
	}
}

const startGame = new StartGame(fretBoardData, "C", "learn");
