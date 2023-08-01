import Player from '@vimeo/player';
console.log(Player);

const throttle = require("lodash.throttle");

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
// console.log(iframe);
const player = new Player(iframe)
console.log(player);


const playVideo = player.on('timeupdate', function (data) {
    // console.log(data);
    const currentTime = data;
    // throttle(currentTime, 3000)
    console.log(currentTime);
    // throttle((currentTime), 3000)
    // console.log(currentTime);
    
    throttle(playVideo, 3000)
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
});
