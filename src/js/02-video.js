import Player from '@vimeo/player';
console.log(Player);

const LOCAL_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
// console.log(iframe);
const player = new Player(iframe)
// const player = new Player('handstick', {
//     id: "vimeo-player",
//     width: 640
// });
console.log(player);
// iframe.addEventListener()
player.on('timeupdate', function (data) {
    console.log(data);
    console.log('played the video!');
    

// function getCurrentTime() {
//             return this.get('currentTime');
//         }
        
//     console.log(getCurrentTime);

//     player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });

//     player.getCurrentTime(timeupdate, function(){
//         console.log(timeupdate);
//         console.log('HELLO');
// })
        


//     player.addEventListeren("timeupdate", getCurrentTime)
//     function getCurrentTime() {
//     // timeupdate = getCurrentTime
//         console.log(getCurrentTime);
// }
    
    
});



    

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