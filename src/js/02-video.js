import Player from '@vimeo/player';


// console.log(vimeo);
console.log("HELLO WORLD");

const player = new Player('handstick', {
    id: "vimeo-player",
    width: 640
});
console.log(player);

// const iframe = document.querySelector('iframe');
// const iframePlayer = new Vimeo.Player(iframe);

// player.on('play', function() {
//     console.log('played the video!');
// });

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };

// player.on('play', onPlay);
// console.log(onPlay);