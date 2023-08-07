const video = document.querySelector("video");
const playButton = document.querySelector(".play");
const timestamp = document.querySelector(".timestamp");
const progressBar = document.querySelector(".progress");
const muteButton = document.querySelector(".mute");
const volumeBar = document.querySelector(".volume-bar");
const resetButton = document.querySelector(".reset");
const speedBar = document.querySelector(".speed-bar");
const speedstamp = document.querySelector(".speedstamp");
const beforeButton = document.querySelector(".before");
const afterButton = document.querySelector(".after");

let length;

const setTimeStamp = (currentTime) => {
	const current = parseInt(currentTime);
	const currentMinute = parseInt(current / 60);
	const currentSecond = current % 60;
	const minute = parseInt(length / 60);
	const second = length % 60;
	timestamp.innerText = `${currentMinute}:${currentSecond
		.toString()
		.padStart(2, "0")} / ${minute}:${second.toString().padStart(2, "0")}`;
};

const handleVideoLoad = () => {
	length = parseInt(video.duration);
	setTimeStamp(0);
};

const handleVideoPause = () => {
	playButton.innerText = "▶";
};

const handleVideoPlay = () => {
	playButton.innerText = "||";
};

const handleTimeUpdate = () => {
	const current = video.currentTime;
	progressBar.value = (current / length) * 100;
	setTimeStamp(current);
};

const handleProgressBar = (event) => {
	video.currentTime = (event.target.value / 100) * length;
};

const handlePlayButton = () => {
	if (video.paused) {
		video.play();
	} else {
		video.pause();
	}
};

const handleVideoClick = () => {
	handlePlayButton();
};

const handleMuteButton = () => {
	if (video.muted) {
		video.muted = false;
		muteButton.innerText = "🔊";
	} else {
		video.muted = true;
		muteButton.innerText = "🔈";
	}
};

const handleVolumeBar = (event) => {
	video.volume = event.target.value / 100;
};

const handleResetButton = () => {
	video.playbackRate = 1;
	speedBar.value = 0;
	speedstamp.innerText = "1.0x";
};

const handleSpeedBar = (event) => {
	video.playbackRate = 2 ** event.target.value;
	speedstamp.innerText = `${video.playbackRate.toPrecision(2)}x`;
};

const handleBeforeButton = () => {
	video.currentTime -= 10;
};

const handleAfterButton = () => {
	video.currentTime += 10;
};

video.addEventListener("loadedmetadata", handleVideoLoad);
video.addEventListener("pause", handleVideoPause);
video.addEventListener("play", handleVideoPlay);
video.addEventListener("timeupdate", handleTimeUpdate);
video.addEventListener("click", handleVideoClick);
playButton.addEventListener("click", handlePlayButton);
progressBar.addEventListener("input", handleProgressBar);
muteButton.addEventListener("click", handleMuteButton);
volumeBar.addEventListener("input", handleVolumeBar);
resetButton.addEventListener("click", handleResetButton);
speedBar.addEventListener("input", handleSpeedBar);
beforeButton.addEventListener("click", handleBeforeButton);
afterButton.addEventListener("click", handleAfterButton);
