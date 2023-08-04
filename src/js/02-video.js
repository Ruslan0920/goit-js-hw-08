import Player from '@vimeo/player';
// console.log(Player);

const throttle = require("lodash.throttle");
console.log(throttle);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
// console.log(iframe);

const player = new Player(iframe)
console.log(player);
// iframe.addEventListener('onplaying', throttle(playVideo, 3000));
// console.log(iframe);

playVideo()

function playVideo() {
   player.on('timeupdate', function (data) {
       console.log(data);
    
const currentTime = data;
    //    console.log(currentTime);

localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));

    //    throttle(playVideo,3000)
    //    throttle(localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime)), 3000)    
   }); 
    // throttle(playVideo, 3000);
}
// throttle(playVideo, 3000);

timeCurrent()
        
function timeCurrent() {
const getTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(getTime.seconds);
    player.setCurrentTime(getTime.seconds).then(function() {
    // seconds = the actual time that the player seeked to
        // console.log(seconds);
})
    
}   