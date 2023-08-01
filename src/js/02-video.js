import Player from '@vimeo/player';
console.log(Player);

const LOCALSTORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
// console.log(iframe);
const player = new Player(iframe)
console.log(player);

player.on('timeupdate', function (data) {
    // console.log(throttle(data, 1000));
    // console.log('played the video!');
    const currentTime = data;
    console.log(currentTime);
localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(currentTime));
});
