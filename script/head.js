class Head {
	constructor(mode) {
		this.mode = mode;
        this.element = document.getElementById("uke-head");
        console.log("New Class Head initiated");
        
        this.pointsBoard = document.createElement("div")
        this.pointsBoard.classList.add("points-board")
        this.element.appendChild(this.pointsBoard)
        
        this.roundsBoard = document.createElement("div")
        this.roundsBoard.classList.add("rounds-board")
        this.element.appendChild(this.roundsBoard)
        
        this.messageBoard = document.createElement("div")
        this.messageBoard.classList.add("message-board")
        document.body.appendChild(this.messageBoard)
	}
    updatePointsBoard(points){
        this.pointsBoard.innerText = points
        this.pointsBoard.classList.add("add-points")
        setTimeout(() => {
            this.pointsBoard.classList.remove("add-points")
        }, 700);
    }
    updateRoundsBoard(rounds){
        this.roundsBoard.innerText = rounds
        this.roundsBoard.classList.add("add-rounds")
        setTimeout(() => {
            this.roundsBoard.classList.remove("add-rounds")
        }, 700);
    }
    updateMessageBoard(points){
        this.messageBoard.innerText = points
        this.messageBoard.classList.add("add-message")
        setTimeout(() => {
            this.messageBoard.classList.remove("add-message")
        }, 700);
    }
}
