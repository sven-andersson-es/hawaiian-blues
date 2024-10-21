class Note {
	constructor(note, sound) {
		this.element = document.createElement("div");
		this.element.classList.add(note);
        this.note = note;
        this.stringSound = new Audio("./sound/" + sound)
        this.stringSound.setAttribute("preload","auto")
        fretBoard.element.appendChild(this.element)
		this.element.addEventListener("click", () => {
            this.stringSound.load();
            this.stringSound.play();
            if (pentatonicScale.validNotes.indexOf(this.note) === -1) {
                console.log("Wrong note!");
                
            }
        });
	}
}
fretBoardData.forEach((note) => {
    new Note(note.note, note.sound)
})