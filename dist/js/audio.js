"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener('DOMContentLoaded', function () {
  mejs.i18n.language('en');
  var mediaElements = document.querySelectorAll('audio'),
      i,
      total = mediaElements.length;

  for (i = 0; i < total; i++) {
    new MediaElementPlayer(mediaElements[i], _defineProperty({
      features: ['playpause', '[feature_name]', 'current', 'progress', 'duration', 'volume'],
      // stretching: 'auto',
      startVolume: '0.8',
      hideVolumeOnTouchDevices: false,
      audioVolume: 'vertical'
    }, "startVolume", 1));
  }
});