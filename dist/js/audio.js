"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

document.addEventListener('DOMContentLoaded', function () {
  var _MediaElementPlayer;

  mejs.i18n.language('en');
  var mediaElementsFooter = document.querySelector('audio.audio-footer');
  var mediaElementsPopup = document.querySelector('audio.audio-popup');
  var media;
  new MediaElementPlayer(mediaElementsFooter, (_MediaElementPlayer = {
    features: ['playpause', '[feature_name]', 'current', 'progress', 'duration', 'volume'],
    // stretching: 'auto',
    startVolume: '0.8',
    hideVolumeOnTouchDevices: false,
    audioVolume: 'vertical'
  }, _defineProperty(_MediaElementPlayer, "startVolume", 1), _defineProperty(_MediaElementPlayer, "success", function success(mediaElement, domObject) {
    media = mediaElement; // make it available for other functions	
  }), _MediaElementPlayer));

  var options = _defineProperty({
    features: ['playpause', '[feature_name]', 'current', 'progress', 'duration', 'volume'],
    // stretching: 'auto',
    startVolume: '0.8',
    hideVolumeOnTouchDevices: false,
    audioVolume: 'vertical'
  }, "startVolume", 1);

  new MediaElementPlayer(mediaElementsPopup, options);
  document.querySelector('.players-action .mejs__button.mejs__playpause-button').setAttribute('data-src', document.querySelectorAll('.btn-play')[0].dataset.src);
  document.querySelectorAll('.btn-play .mejs__play').forEach(function (item) {
    item.addEventListener('click', function () {
      var dataSrcMusic = item.parentElement.dataset.src,
          dataSrcPlayer = document.querySelector('.players-action audio').getAttribute('src');
      document.querySelector('.media-wrapper .players-action .mejs__button.mejs__playpause-button').setAttribute('data-src', dataSrcMusic);

      if (dataSrcMusic !== dataSrcPlayer) {
        document.querySelector('.players-action audio').setAttribute('src', dataSrcMusic);
      }

      media.play();
      document.querySelectorAll('.btn-play button.mejs__pause').forEach(function (e) {
        e.hidden = true;
        e.previousElementSibling.hidden = false;
      });
      item.hidden = true;
      item.nextElementSibling.hidden = false;
    });
  });
  document.querySelector('.players-action .mejs__playpause-button').addEventListener('click', function () {
    var dataSrc = this.dataset.src;
    document.querySelectorAll(".btn-play[data-src='".concat(dataSrc, "'] .button__playpause")).forEach(function (item) {
      item.toggleAttribute('hidden');
    });
  });
  document.querySelector('.players-action .mejs__controls').addEventListener('DOMNodeInserted', function () {
    var timePlayer = document.querySelector('.players-action .mejs__time-current'),
        curTransform = new WebKitCSSMatrix(window.getComputedStyle(timePlayer).webkitTransform),
        dataSrcBtn = document.querySelector('.mejs__button.mejs__playpause-button').dataset.src;

    if (curTransform.a >= 1) {
      document.querySelectorAll(".btn-play[data-src='".concat(dataSrcBtn, "'] button")).forEach(function (item, index) {
        if (index === 0) {
          item.hidden = true;
        } else if (index === 1) {
          item.hidden = true;
        } else {
          item.hidden = false;
        }
      });
    } else if (curTransform.a == 0 && document.querySelector('.mejs__button.mejs__playpause-button.mejs__pause')) {
      document.querySelectorAll(".btn-play[data-src='".concat(dataSrcBtn, "'] button")).forEach(function (item, index) {
        if (index === 0) {
          item.hidden = true;
        } else if (index === 1) {
          item.hidden = false;
        } else {
          item.hidden = true;
        }
      });
    }
  });
  document.querySelectorAll('.btn-play .mejs__pause').forEach(function (item) {
    item.addEventListener('click', function () {
      media.pause();
      item.hidden = true;
      item.previousElementSibling.hidden = false;
    });
  });
  document.querySelectorAll('.btn-play .mejs__replay').forEach(function (item) {
    item.addEventListener('click', function () {
      var timePlayer = document.querySelector('.players-action .mejs__time-current'),
          curTransform = new WebKitCSSMatrix(window.getComputedStyle(timePlayer).webkitTransform),
          dataSrcMusic = item.parentElement.dataset.src;
      curTransform.a == 0;
      document.querySelector('.players-action .mejs__button.mejs__playpause-button').setAttribute('data-src', dataSrcMusic);
      document.querySelector('.players-action audio').setAttribute('src', dataSrcMusic);
      document.querySelector('.players-action .mejs__button.mejs__playpause-button.mejs__replay').classList.remove('mejs__replay');
      media.play();
      item.hidden = true;
      var child = item.parentElement.children;

      for (var i = 0; i < child.length; i++) {
        if (child[i].className == 'mejs__button button__playpause mejs__play') {
          child[i].hidden = true;
          console.log(child[i].className + 'play');
        }

        if (child[i].className == 'mejs__button button__playpause mejs__pause') {
          child[i].hidden = false;
          console.log(child[i].className + 'pause');
        }
      }
    });
  });
});