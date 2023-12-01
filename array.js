

const videos = ['21FqZhZsi_U', 'kPlLv6pC3JE', 'oRqBARNVuJs', 'pmTFlbv7r5c']
let index_no = 0;
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '500',
    width: '800',
    videoId: videos[index_no],
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {   // Move to the next video in the playlist when the current video ends
    index_no = (index_no + 1) % videos.length;
    player.loadVideoById(videos[index_no]);
  }
}



