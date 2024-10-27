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
        //detect if the device is touch enabled and set the correct listener for the not
        let listenerType = "mousedown"
        if(window.matchMedia("(pointer: coarse)").matches) {
            listenerType = "touchstart"
        }
		this.element.addEventListener(listenerType, (event) => {
			//prevent double touch zoom in safari
            if (event.scale !== 1) event.preventDefault();
            this.game.secondsSinceLastPick = 0
            this.element.classList.add("string-down");
		setTimeout(() => {
			this.element.classList.remove("string-down");
		}, 800);
            this.stringSound.load();
			this.stringSound.play();
			if (this.scale.validNotes.indexOf(this.note) === -1) {
				console.log("Wrong note!");
				this.game.addCredits(-1);
			}

		});
	}
}
