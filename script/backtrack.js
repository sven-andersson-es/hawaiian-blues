class BackTrack {
    constructor(backTrackFile) {
        this.backTrackFile = backTrackFile;
		this.backTrack = new Audio("./sound/" + this.backTrackFile);
		this.backTrack.setAttribute("preload", "auto");
		this.backTrack.playbackRate = 1;
        this.backTrack.play();


    }
}