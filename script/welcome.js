class Welcome {
	constructor() {
		this.button = document.createElement("button");
		this.button.classList.add("start");
		fretBoard.element.appendChild(this.button);
		this.button.addEventListener("click", () => {
            fretBoard.element.innerHTML = "";
            startTheGame();
        });
	}
}
