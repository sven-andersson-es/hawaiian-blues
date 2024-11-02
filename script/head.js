class Head {
	constructor(mode) {
		this.mode = mode;
		this.element = document.getElementById("uke-head");
		//console.log("New Class Head initiated");

		this.creditsBoard = document.getElementById("credits-board");
        
		this.roundsBoard = document.getElementById("rounds-board");

		if (!document.querySelector(".message-board")) {
			this.messageBoard = document.createElement("div");
			this.messageBoard.classList.add("message-board");
			document.body.appendChild(this.messageBoard);
		} else {
            this.messageBoard = document.querySelector(".message-board");
        }
	}
	updateCreditsBoard(credits) {
		this.creditsBoard.innerText = credits;
		this.creditsBoard.classList.add("add-credits");
		setTimeout(() => {
			this.creditsBoard.classList.remove("add-credits");
		}, 1400);
		//console.log(credits);
	}
	updateRoundsBoard(rounds) {
		this.roundsBoard.innerText = rounds;
		this.roundsBoard.classList.add("add-rounds");
		setTimeout(() => {
			this.roundsBoard.classList.remove("add-rounds");
		}, 1500);
		//console.log(rounds);
	}
	updateMessageBoard(message) {
		this.messageBoard.innerText = message;
		this.messageBoard.classList.add("add-message");
		setTimeout(() => {
			this.messageBoard.classList.remove("add-message");
		}, 2500);
		//console.log(message);
	}
}
