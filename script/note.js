class Note {
	constructor(scale, note, sound, mode, game) {
		this.scale = scale;
		this.note = note;
		this.sound = sound;
		this.mode = mode;
		this.game = game;
		this.element = document.createElement("div");
		this.element.classList.add(this.note);
		if (
			this.mode === "learn" &&
			this.scale.validNotes.indexOf(this.note) !== -1
		) {
			this.childElement = document.createElement("div");
			this.childElement.innerText = this.note;
			this.childElement.classList.add("hint");
			this.element.appendChild(this.childElement);
		}
		this.stringSound = new Audio("./sound/" + sound);
		this.stringSound.setAttribute("preload", "auto");
		fretBoard.element.appendChild(this.element);
		this.element.addEventListener("click", () => {
			this.stringSound.load();
			this.stringSound.play();
			if (this.scale.validNotes.indexOf(this.note) === -1) {
				console.log("Wrong note!");
				this.game.addPoints(-1);
			}
		});
	}
}
