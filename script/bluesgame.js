//Enable preload of audio in iOS to remove latency
// const AudioContext = window.AudioContext || window.webkitAudioContext;
// const audioCtx = new AudioContext();

class BluesGame {
    static gameScore = {
        points: 10,
        rounds: 0,
    }
    constructor() {
        this.gameOver = false;
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