import Player from '@vimeo/player';
// console.log(Player);

const throttle = require("lodash.throttle");
console.log(throttle);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
console.log(iframe);
const player = new Player(iframe)
console.log(player);

// iframe.addEventListener('timeupdate', throttle(playVideo, 3000));

// function playVideo(e) {
//     console.log(e);

// }

player.on('timeupdate', function (data) {
    // console.log(data);
    
    const currentTime = data;
    console.log(currentTime);

    // throttle(currentTime, 3000)
    // throttle(playVideo, 5000)
    // console.log(playVideo);
    
    // throttle(() => {
    //     localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
    // }, 3000)

        // throttle((localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime))), 3000)

    localStorage.setItem.throttle((LOCALSTORAGE_KEY, JSON.stringify(currentTime), 3000));
    
});

// const input = document.querySelector(".js-inp")
// console.log(input);
// input.addEventListener('input', throttle(dataInput, 3000))

// function dataInput(e) {
//     console.log(e.target.value);
// }