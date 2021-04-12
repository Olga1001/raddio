"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener('DOMContentLoaded', function () {
  mejs.i18n.language('en');
  var mediaElements = document.querySelectorAll('audio'),
      i,
      total = mediaElements.length;

  for (i = 0; i < total; i++) {
    var _MediaElementPlayer;

    new MediaElementPlayer(mediaElements[i], (_MediaElementPlayer = {
      features: ['playpause', '[feature_name]', 'current', 'progress', 'duration', 'volume'],
      // stretching: 'auto',
      startVolume: '0.8',
      hideVolumeOnTouchDevices: true,
      audioVolume: 'horizontal',
      videoVolume: 'vertical'
    }, _defineProperty(_MediaElementPlayer, "startVolume", 1), _defineProperty(_MediaElementPlayer, "success", function success(media, node, player) {
      // var renderer = document.getElementById(media.id + '-rendername');
      // media.addEventListener('loadedmetadata', function () {
      // 	var src = media.originalNode.getAttribute('src').replace('&amp;', '&');
      // 	if (src !== null && src !== undefined) {
      // 		renderer.querySelector('.src').innerHTML = '<a href="' + src + '" target="_blank">' + src + '</a>';
      // 		renderer.querySelector('.renderer').innerHTML = media.rendererName;
      // 		renderer.querySelector('.error').innerHTML = '';
      // 	}
      // });
      // media.addEventListener('error', function (e) {
      // 	renderer.querySelector('.error').innerHTML = '<strong>Error</strong>: ' + e.message;
      // });
      player.showControls();
    }), _MediaElementPlayer));
  }
});