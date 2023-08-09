import Player from '@vimeo/player';
// console.log(Player);

const throttle = require("lodash.throttle");
// console.log(throttle);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
// console.log(iframe);

const player = new Player(iframe)

const onPlay = throttle(function(data) {
    const timerVideo = data;
    console.log(timerVideo);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(timerVideo));
    
}, 1000);

player.on('timeupdate', onPlay);

timeCurrent()
        
function timeCurrent() {
const getTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(getTime.seconds);
    player.setCurrentTime(getTime.seconds);
}   