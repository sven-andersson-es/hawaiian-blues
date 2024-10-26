class PentatonicScale {
	constructor(key) {
		this.key = key;
		this.validNotes = pentatonicScaleData[this.key].scale;
		this.backTrackFile = pentatonicScaleData[this.key].backTrack;
	}
}
