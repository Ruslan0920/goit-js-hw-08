import Player from '@vimeo/player';

const throttle = require("lodash.throttle");

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');

const player = new Player(iframe)

const onPlay = throttle(function (data) {
    console.log(data.seconds);
    const timerVideo = data.seconds;
    // console.log(timerVideo);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(timerVideo)) || {};    
}, 1000);

player.on('timeupdate', onPlay);

timeCurrent()
        
function timeCurrent() {
const getTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || {});
    console.log(getTime);
    player.setCurrentTime(getTime);
}   