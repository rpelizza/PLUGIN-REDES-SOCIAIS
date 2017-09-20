(function($) {

	$.fn.socialPlugin = function(options) {

		var defaults = {
			facebook: '',
			youtube: '',
			twitter: '',
			instagram: '',
			gplus: '',
			linkedin: '',
			rss: ''
		}		

		var settings = $.extend({}, defaults, options);

		return this.each(function() {

			mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


			if (!mobile) {
				if (!$('link[href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"]').length) {
					$('<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">').appendTo('head');
				}

				facebook_definido = '';
				youtube_definido = '';
				twitter_definido = '';
				instagram_definido = '';
				gplus_definido = '';
				linkedin_definido = '';
				rss_definido = '';


				if (options.facebook != undefined) {
					facebook_definido = '<li><a href="'+options.facebook+'" target="_blank"><i class="fa fa-facebook"></i></a></li>';
				}

				if (options.youtube != undefined) {
					youtube_definido = '<li><a href="'+options.youtube+'" target="_blank"><i class="fa fa-youtube"></i></a></li>';
				}

				if (options.twitter != undefined) {
					twitter_definido = '<li><a href="'+options.twitter+'" target="_blank"><i class="fa fa-twitter"></i></a></li>';
				}

				if (options.instagram != undefined) {
					instagram_definido = '<li><a href="'+options.instagram+'" target="_blank"><i class="fa fa-instagram"></i></a></li>';
				}

				if (options.gplus != undefined) {
					gplus_definido = '<li><a href="'+options.gplus+'" target="_blank"><i class="fa fa-google-plus"></i></a></li>';
				}

				if (options.linkedin != undefined) {
					linkedin_definido = '<li><a href="'+options.linkedin+'" target="_blank"><i class="fa fa-linkedin"></i></a></li>';
				}

				if (options.rss != undefined) {
					rss_definido = '<li><a href="'+options.rss+'" target="_blank"><i class="fa fa-rss"></i></a></li>';
				}

				if (!$('.socialPlugin').length) {
					$('<ul class="socialPlugin">'+
						facebook_definido+
						youtube_definido+
						twitter_definido+
						instagram_definido+
						gplus_definido+
						linkedin_definido+
						rss_definido+
					'</ul>').appendTo('body');					
				}
			}			

		});
	};

})(jQuery);