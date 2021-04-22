
mejs.i18n.language('en');

var mediaElementsFooter = document.querySelector('audio.audio-footer');
var mediaElementsPopup = document.querySelector('audio.audio-popup');

var media;

new MediaElementPlayer(mediaElementsFooter, {
	features: ['playpause', '[feature_name]', 'current', 'progress', 'duration', 'volume'],
	// stretching: 'auto',
	startVolume: '0.8',
	hideVolumeOnTouchDevices: false,
	audioVolume: 'vertical',
	startVolume: 1,
	success: function (mediaElement, domObject) {
		media = mediaElement; // make it available for other functions	
	}
});

var options = {
	features: ['playpause', '[feature_name]', 'current', 'progress', 'duration', 'volume'],
	// stretching: 'auto',
	startVolume: '0.8',
	hideVolumeOnTouchDevices: false,
	audioVolume: 'vertical',
	startVolume: 1
}

new MediaElementPlayer(mediaElementsPopup, options);

var offscreen = document.querySelectorAll('.mejs__offscreen');
for (let i = 0; i < offscreen.length; i++) {
	offscreen[i].remove();
}
document.querySelector('body').addEventListener('DOMNodeInserted', () => {
	var timePlayer = document.querySelector('.players-action .mejs__time-current'),
		curTransform = new WebKitCSSMatrix(window.getComputedStyle(timePlayer).webkitTransform),
		dataSrcBtn = document.querySelector('.mejs__button.mejs__playpause-button').dataset.src;

	if (document.querySelector('.players-action .mejs__currenttime').innerHTML == document.querySelector('.players-action .mejs__duration').innerHTML && curTransform.a > 0) {
		document.querySelectorAll(`.btn-play[data-src='${dataSrcBtn}'] button`).forEach(function (item, index) {
			if (index === 0) {
				item.hidden = true;
			} else if (index === 1) {
				item.hidden = true;
			} else {
				item.hidden = false;
			}
		});
	} 
	document.querySelector('.players-action .mejs__controls').addEventListener('change', () => {
		document.querySelectorAll(`.btn-play[data-src='${dataSrcBtn}'] button`).forEach(function (item, index) {
			if (document.querySelector('.players-action .mejs__button.mejs__playpause-button.mejs__replay')) {
				if (index === 0) {
					item.hidden = true;
				} else if (index === 1) {
					item.hidden = true;
				} else {
					item.hidden = false;
				}
			} else if (document.querySelector('.players-action .mejs__button.mejs__playpause-button.mejs__pause')) {
				if (index === 0) {
					item.hidden = true;
				} else if (index === 1) {
					item.hidden = false;
				} else {
					item.hidden = true;
				}
			} else if (document.querySelector('.players-action .mejs__button.mejs__playpause-button.mejs__play')) {
				if (index === 0) {
					item.hidden = false;
				} else if (index === 1) {
					item.hidden = true;
				} else {
					item.hidden = true;
				}
			}
		});
	});
});
	
document.querySelector('.players-action .mejs__button.mejs__playpause-button').setAttribute('data-src', document.querySelectorAll('.btn-play')[0].dataset.src);
	
document.querySelectorAll('.btn-play .mejs__play').forEach( (item) => {
	item.addEventListener('click', () => {
		var dataSrcMusic = item.parentElement.dataset.src,
			dataSrcPlayer = document.querySelector('.players-action audio').getAttribute('src');
			document.querySelector('.media-wrapper .players-action .mejs__button.mejs__playpause-button').setAttribute('data-src', dataSrcMusic);

		if (dataSrcMusic !== dataSrcPlayer) {
			document.querySelector('.players-action audio').setAttribute('src', dataSrcMusic);
			
		}
		
		media.play();
	
		document.querySelectorAll('.btn-play button.mejs__pause').forEach((e) => {
			e.hidden = true;
			e.previousElementSibling.hidden = false;
		});
		
		item.hidden = true;
		item.nextElementSibling.hidden = false;
	});
});

document.querySelector('.players-action .mejs__button.mejs__playpause-button').addEventListener('click', function () {
	var dataSrc = this.dataset.src;
	if (document.querySelector(`.btn-play[data-src='${dataSrc}'] .mejs__button.mejs__replay`).hidden == false) {
		document.querySelectorAll(`.btn-play[data-src='${dataSrc}'] button`).forEach((item, index) => {
			if (index === 0) {
				item.hidden = true;
			} else if (index === 1) {
				item.hidden = false;
			} else {
				item.hidden = true;
			}
		});
	} else {
		document.querySelectorAll(`.btn-play[data-src='${dataSrc}'] .button__playpause`).forEach((item) => {
			item.toggleAttribute('hidden');
		});
	}
});

document.querySelectorAll('.btn-play .mejs__pause').forEach(function (item) {
	item.addEventListener('click', () => {
		media.pause();
		item.hidden = true;
		item.previousElementSibling.hidden = false;
	});
});

document.querySelectorAll('.btn-play .mejs__replay').forEach( (item) => {
	item.addEventListener('click', () => {
		var timePlayer = document.querySelector('.players-action .mejs__time-current'),
			curTransform = new WebKitCSSMatrix(window.getComputedStyle(timePlayer).webkitTransform),
			dataSrcMusic = item.parentElement.dataset.src;

		curTransform.a === 0;
		document.querySelector('.players-action .mejs__button.mejs__playpause-button').setAttribute('data-src', dataSrcMusic);
		document.querySelector('.players-action audio').setAttribute('src', dataSrcMusic);
		document.querySelector('.players-action .mejs__button.mejs__playpause-button.mejs__replay').classList.remove('mejs__replay');
		
		media.play();

		item.hidden = true;
		item.parentElement.querySelector('.mejs__button.button__playpause.mejs__play').hidden = true;
		item.parentElement.querySelector('.mejs__button.button__playpause.mejs__pause').hidden = false;						
	});
});

document.querySelector('.next.arrow-player').addEventListener('click', (e) => {
	var srcAudio = e.target.previousElementSibling.querySelector('audio').src;
	document.querySelectorAll(`.btn-play[data-src='${srcAudio}']`).forEach((item) => {
		item.querySelector('button.mejs__play').hidden = false;
		item.querySelector('button.mejs__pause').hidden = true;
		item.querySelector('button.mejs__replay').hidden = true;

		if (item.parentElement.nextElementSibling) {
			var nextSrcAudioList = item.parentElement.nextElementSibling.querySelector('.btn-play').dataset.src;
			
			var btnPlayerNext = item.parentElement.nextElementSibling.querySelectorAll('.btn-play button');
			for (let i = 0; i < btnPlayerNext.length; i++) {
				btnPlayerNext[0].hidden = true;
				btnPlayerNext[1].hidden = false;
				btnPlayerNext[2].hidden = true;
				
			}
			document.querySelector('.media-wrapper .players-action .mejs__button.mejs__playpause-button').setAttribute('data-src', nextSrcAudioList);
			document.querySelector('.players-action audio').setAttribute('src', nextSrcAudioList);
			media.play();
		} else {
			media.pause();
		}
	});
});

document.querySelector('.prev.arrow-player').addEventListener('click', (e) => {
	var srcAudio = e.target.nextElementSibling.querySelector('audio').src;
	document.querySelectorAll(`.btn-play[data-src='${srcAudio}']`).forEach((item) => {
		item.querySelector('button.mejs__play').hidden = false;
		item.querySelector('button.mejs__pause').hidden = true;
		item.querySelector('button.mejs__replay').hidden = true;

		if (item.parentElement.previousElementSibling) {
			var prevSrcAudioList = item.parentElement.previousElementSibling.querySelector('.btn-play').dataset.src;
			
			var btnPlayerPrev = item.parentElement.previousElementSibling.querySelectorAll('.btn-play button');
			for (let i = 0; i < btnPlayerPrev.length; i++) {
				btnPlayerPrev[0].hidden = true;
				btnPlayerPrev[1].hidden = false;
				btnPlayerPrev[2].hidden = true;
			}
			document.querySelector('.media-wrapper .players-action .mejs__button.mejs__playpause-button').setAttribute('data-src', prevSrcAudioList);
			document.querySelector('.players-action audio').setAttribute('src', prevSrcAudioList);
			media.play();
		} else {
			media.pause();
		}
	});
});