//Enable preload of audio in iOS to remove latency
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();