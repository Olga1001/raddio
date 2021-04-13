
document.addEventListener('DOMContentLoaded', function () {

	mejs.i18n.language('en');

	var mediaElements = document.querySelectorAll('audio'), i, total = mediaElements.length;

	for (i = 0; i < total; i++) {
		new MediaElementPlayer(mediaElements[i], {
			features: ['playpause', '[feature_name]', 'current', 'progress', 'duration', 'volume'],
			// stretching: 'auto',
			startVolume: '0.8',
			hideVolumeOnTouchDevices: false,
			audioVolume: 'vertical',
			startVolume: 1,
		});
	}
	
});

