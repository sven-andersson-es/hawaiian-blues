const fretBoardData = [
	{ note: "Ab", positionY: 1, positionX: 1, sound: "1-1.mp3" },
	{ note: "C#", positionY: 1, positionX: 2, sound: "1-2.mp3" },
	{ note: "F", positionY: 1, positionX: 3, sound: "1-3.mp3" },
	{ note: "Bb", positionY: 1, positionX: 4, sound: "1-4.mp3" },
	{ note: "A", positionY: 2, positionX: 1, sound: "2-1.mp3" },
	{ note: "D", positionY: 2, positionX: 2, sound: "2-2.mp3" },
	{ note: "F#", positionY: 2, positionX: 3, sound: "2-3.mp3" },
	{ note: "B", positionY: 2, positionX: 4, sound: "2-4.mp3" },
	{ note: "Bb", positionY: 3, positionX: 1, sound: "3-1.mp3" },
	{ note: "Eb", positionY: 3, positionX: 2, sound: "3-2.mp3" },
	{ note: "G", positionY: 3, positionX: 3, sound: "3-3.mp3" },
	{ note: "C", positionY: 3, positionX: 4, sound: "3-4.mp3" },
	{ note: "B", positionY: 4, positionX: 1, sound: "4-1.mp3" },
	{ note: "E", positionY: 4, positionX: 2, sound: "4-2.mp3" },
	{ note: "Ab", positionY: 4, positionX: 3, sound: "4-3.mp3" },
	{ note: "C#", positionY: 4, positionX: 4, sound: "4-4.mp3" },
	{ note: "C", positionY: 5, positionX: 1, sound: "5-1.mp3" },
	{ note: "F", positionY: 5, positionX: 2, sound: "5-2.mp3" },
	{ note: "A", positionY: 5, positionX: 3, sound: "5-3.mp3" },
	{ note: "D", positionY: 5, positionX: 4, sound: "5-4.mp3" },
	{ note: "C#", positionY: 6, positionX: 1, sound: "6-1.mp3" },
	{ note: "F#", positionY: 6, positionX: 2, sound: "6-2.mp3" },
	{ note: "Bb", positionY: 6, positionX: 3, sound: "6-3.mp3" },
	{ note: "Eb", positionY: 6, positionX: 4, sound: "6-4.mp3" },
	{ note: "D", positionY: 7, positionX: 1, sound: "7-1.mp3" },
	{ note: "G", positionY: 7, positionX: 2, sound: "7-2.mp3" },
	{ note: "B", positionY: 7, positionX: 3, sound: "7-3.mp3" },
	{ note: "E", positionY: 7, positionX: 4, sound: "7-4.mp3" },
	{ note: "Eb", positionY: 8, positionX: 1, sound: "8-1.mp3" },
	{ note: "Ab", positionY: 8, positionX: 2, sound: "8-2.mp3" },
	{ note: "C", positionY: 8, positionX: 3, sound: "8-3.mp3" },
	{ note: "F", positionY: 8, positionX: 4, sound: "8-4.mp3" },
	{ note: "E", positionY: 9, positionX: 1, sound: "9-1.mp3" },
	{ note: "A", positionY: 9, positionX: 2, sound: "9-2.mp3" },
	{ note: "C#", positionY: 9, positionX: 3, sound: "9-3.mp3" },
	{ note: "F#", positionY: 9, positionX: 4, sound: "9-4.mp3" },
	{ note: "F", positionY: 10, positionX: 1, sound: "10-1.mp3" },
	{ note: "Bb", positionY: 10, positionX: 2, sound: "10-2.mp3" },
	{ note: "D", positionY: 10, positionX: 3, sound: "10-3.mp3" },
	{ note: "G", positionY: 10, positionX: 4, sound: "10-4.mp3" },
];

const availableKeys = [
	{key: "C", description: "C Major"},
	{key: "Cm", description: "C Minor"},
]

const pentatonicScaleData = {
	C: {
		scale: ["C", "D", "E", "G", "A"],
		backTrack: "c-back-track-02.mp3",
	},
	Cm: {
		scale: ["C", "Eb", "F", "F#", "G", "Bb"],
		backTrack: "c-back-track-02.mp3",
	}

};
