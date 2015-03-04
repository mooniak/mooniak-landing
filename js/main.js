var w00t = {

	muteSlideshowVideos: true,
	logoMouseMoveCount: 0,
	logoCount: 0,
	numLogos: 7,

	init: function() {



		if($('body').hasClass('home')) {

			$('#thank-you').hide();
			$(window).scroll(w00t.windowScrollHandler);
			w00t.animateLogo();
			1

		}


	},




	processVideoCapability: function() {
	},



	animateLogo: function() {

		var homeSectionHead = $('#homepage-home .section-head');
		var logo = homeSectionHead.find('h2');

		homeSectionHead.mousemove(function() {

			if(w00t.logoMouseMoveCount % 3 == 0) {

				if(w00t.logoCount < w00t.numLogos) {

					w00t.logoCount++;
				} else {

					w00t.logoCount = 1;
				}

				var yPos = logo.height() * w00t.logoCount;
				logo.css('background-position', '0px -' + yPos + 'px');

			}

			w00t.logoMouseMoveCount++;

		}).mouseleave(function() {

			w00t.logoMouseMoveCount = 0;
			w00t.logoCount = 0;
			logo.css('background-position', '0px 0px');
		});
	},




}

if(!window.console) {

	console = {
		log: function() {}
	};
}

$(function() {

	w00t.init();
});
