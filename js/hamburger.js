"use strict";
$(document).ready(function() {
	var nav = $('.menu');
	$(document).on('click', '.burger, .menu', function(){		
		$('.burger').toggleClass('active');
		nav.toggleClass('show');
	});
});