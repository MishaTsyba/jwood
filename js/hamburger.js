$(document).ready(function() {
	$('.menu-icon').click(function(){
    	
    	if ($('.menu').is(':visible')) {
    		$('.menu').slideUp();
    	} else {
    		$('.menu').slideDown();
    	}
	});
})