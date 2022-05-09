const aboutVideo = document.querySelector('.about__video');
const video = aboutVideo.querySelector('video');
const playButton = aboutVideo.querySelector('.about__video-play');

playButton.addEventListener('click', () => {
    aboutVideo.classList.add('about__video--played');
    video.play();
    video.controls = true;
    playButton.classList.add('about__video-play--played');
});

video.onpause = function() {
    aboutVideo.classList.remove('about__video--played');
    video.controls = false;
    playButton.classList.remove('about__video-play--played');
}