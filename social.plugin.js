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

					$('ul.socialPlugin').css({
						'list-style': 'none',
					    'list-style-type': 'none',
					    'margin': '0',
					    'padding': '0',
					    'background-color': '#fff',
					    'position': 'fixed',
					    'top': '50%',
					    'left': '0',
					    'z-index': '10',
					    'transform': 'translate(0,-50%)',
					    '-webkit-box-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
					    'box-shadow': '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)',
					    'border-radius': '0 3px 3px 0'
					});

					$('ul.socialPlugin li').css({
						'margin': '0',
						'padding': '0'
					});

					$('ul.socialPlugin li a').css({
						'margin': '0',
					    'padding': '0',
					    'display': 'block',
					    'padding': '5px 3px'
					});

					$('ul.socialPlugin li a:hover').css({
						'text-decoration': 'none',
						'opacity': '.8'
					});

					$('ul.socialPlugin li a i').css({
						'font-size': '30px',
					    'display': 'block',
					    'margin': '0 auto',
					    'text-align': 'center'
					});

					$('ul.socialPlugin li a i.fa-facebook').css({
						'color': '#3B5998'
					});

					$('ul.socialPlugin li a i.fa-youtube').css({
						'color': '#ff0000'
					});

					$('ul.socialPlugin li a i.fa-twitter').css({
						'color': '#1da1f2'
					});

					$('ul.socialPlugin li a i.fa-instagram').css({
						'color': '#df3967'
					});

					$('ul.socialPlugin li a i.fa-google-plus').css({
						'color': '#d43e33'
					});

					$('ul.socialPlugin li a i.fa-linkedin').css({
						'color': '#0077b5'
					});

					$('ul.socialPlugin li a i.fa-rss').css({
						'color': '#ff9800'
					});
				}
			}			

		});
	};

})(jQuery);