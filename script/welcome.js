class Welcome {
	constructor() {
		this.button = document.createElement("button");
		this.button.classList.add("start");
		this.button.innerText = "Start";
		fretBoard.element.appendChild(this.button);
		this.button.addEventListener("click", () => {
			fretBoard.element.innerHTML = "";
			startTheGame();
		});
	}
}
