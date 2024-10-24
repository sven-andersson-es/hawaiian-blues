//Enable preload of audio in iOS to remove latency
// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();

class BluesGame {
    static gameScore = {
        points: 0,
        rounds: 0,
    }
    constructor(startPoints,startRounds) {
        this.gameOver = false;
        this.startPoints = startPoints;
        this.startRounds = startRounds;
        BluesGame.gameScore.points = this.startPoints;
        BluesGame.gameScore.rounds = this.startRounds;
    }
    addPoints(point){
        BluesGame.gameScore.points += point;
    }
    addRounds(round){
        BluesGame.gameScore.rounds += round;
    }
    gameOverTest() {
        if (BluesGame.gameScore.points <= 0) {
            console.log("Game Over!!");
            this.gameOver = true;
            return this.gameOver;
        }
    }
}