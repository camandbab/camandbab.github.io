$(document).ready(function(e) {
	$('.view:not(#welcome)').hide();
	/*$('#welcome').show();	*/
		
	if ( screen.width <= 699 || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) ) {
	/*mobile page */
		document.location = "m.html";
		$('.view:not(#welcome)').hide();
		$( ".cross" ).hide();
		$( ".menu" ).hide();
	}
	else {
	/*desktop page */
	function showView(viewName) {
		$('.view').hide();
		$('#' + viewName).show();
		$(window).scrollTop(0);
	  }
	  $('[data-launch-view]').click(function (e) {
		 e.preventDefault();
		var viewName = $(this).attr('data-launch-view');
		showView(viewName);
	  });
	}

});

$(window).scroll(function(){
    $(".pp").css("opacity", 1 - $(window).scrollTop() / 300);
  });
$(window).scroll(function(){
    $(".welcomeparallax").css("opacity", 1 - $(window).scrollTop() / 300);  
  });