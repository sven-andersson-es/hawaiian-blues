class PentatonicScale {
    constructor(key) {
        this.key = key;
        this.validNotes = pentatonicScaleData[key];
    }
}
const pentatonicScale = new PentatonicScale("C") 