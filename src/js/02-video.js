import Player from '@vimeo/player';
// console.log(Player);

const throttle = require("lodash.throttle");
console.log(throttle);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe)
console.log(player);

playVideo()
console.log(throttle(playVideo, 5000));


function playVideo() {
   player.on('timeupdate', function (data) {
    // console.log(data);
    
const currentTime = data;
       console.log(currentTime);
       
    //    function addToLocal() {}
                //   throttle(addToLocal, 3000)
       const add = localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
    //    throttle(add, 3000)
    //    console.log(add);
}); 
}


timeCurrent()
        
function timeCurrent() {
const getTime = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    console.log(getTime.seconds);
    player.setCurrentTime(getTime.seconds).then(function(seconds) {
    // seconds = the actual time that the player seeked to
        console.log(seconds);
})
    
}   