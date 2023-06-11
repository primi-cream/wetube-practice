"use strict";

var video = document.querySelector("video");
var playBtn = document.getElementById("play");
var playBtnIcon = playBtn.querySelector("i");
var muteBtn = document.getElementById("mute");
var muteBtnIcon = muteBtn.querySelector("i");
var time = document.getElementById("time");
var volumeRange = document.getElementById("volume");
var currenTime = document.getElementById("currenTime");
var totalTime = document.getElementById("totalTime");
var timeline = document.getElementById("timeline");
var fullScreenBtn = document.getElementById("fullScreen");
var fullScreenIcon = fullScreenBtn.querySelector("i");
var videoContainer = document.getElementById("videoContainer");
var videoControls = document.getElementById("videoControls");
var controlsTimeout = null;
var controlsMovementTimeout = null;
var volumeValue = 0.5;
video.volume = volumeValue;
var handlePlayClick = function handlePlayClick(e) {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  playBtnIcon.classList = video.paused ? "fas fa-play" : "fas fa-pause";
};
var handleMute = function handleMute(e) {
  if (video.muted) {
    video.muted = false;
    video.volume = volumeValue;
  } else {
    video.muted = true;
  }
  muteBtnIcon.classList = video.muted ? "fas fa-volume-mute" : "fas fa-volume-up";
  volumeRange.value = video.muted ? 0 : volumeValue;
};
var handleInputVolumeRange = function handleInputVolumeRange(event) {
  var value = event.target.value;
  if (video.muted) {
    video.muted = false;
    muteBtn.innerText = "Mute";
  }
  if (value == 0) {
    video.muted = true;
    muteBtn.innerText = "Unmute";
  }
  video.volume = value;
};
var handleChangeVolumeRange = function handleChangeVolumeRange(event) {
  var value = event.target.value;
  if (value != 0) {
    volumeValue = value;
  }
};
var formatTime = function formatTime(seconds) {
  return new Date(seconds * 1000).toISOString().substring(14, 19);
};
var handleLoadedMetadata = function handleLoadedMetadata() {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeline.max = Math.floor(video.duration);
};
var handleTimeUpdate = function handleTimeUpdate() {
  currenTime.innerText = formatTime(Math.floor(video.currentTime));
  timeline.value = Math.floor(video.currentTime);
};
var handleTimelineChange = function handleTimelineChange(event) {
  var value = event.target.value;
  video.currentTime = value;
};
var handleFullscreen = function handleFullscreen() {
  var fullscreen = document.fullscreenElement;
  if (fullscreen) {
    document.exitFullscreen();
    fullScreenIcon.classList = "fas fa-expand";
  } else {
    videoContainer.requestFullscreen();
    fullScreenIcon.classList = "fas fa-compress";
  }
};
var hideControls = function hideControls() {
  return videoControls.classList.remove("showing");
};
var handleMouseMove = function handleMouseMove() {
  if (controlsTimeout) {
    clearTimeout(controlsTimeout);
    controlsTimeout = null;
  }
  if (controlsMovementTimeout) {
    clearTimeout(controlsMovementTimeout);
    controlsMovementTimeout = null;
  }
  videoControls.classList.add("showing");
  controlsMovementTimeout = setTimeout(hideControls, 3000);
};
var handleMouseLeave = function handleMouseLeave() {
  controlsTimeout = setTimeout(hideControls, 3000);
};
var handleEnded = function handleEnded() {
  var id = videoContainer.dataset.id;
  console.log(id);
  fetch("/api/videos/".concat(id, "/view"), {
    method: "POST"
  });
};
playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
volumeRange.addEventListener("input", handleInputVolumeRange);
volumeRange.addEventListener("change", handleChangeVolumeRange);
video.addEventListener("loadedmetadata", handleLoadedMetadata);
video.addEventListener("timeupdate", handleTimeUpdate);
video.addEventListener("ended", handleEnded);
fullScreenBtn.addEventListener("click", handleFullscreen);
video.addEventListener("mousemove", handleMouseMove);
video.addEventListener("mouseleave", handleMouseLeave);