
$(document).ready(function(e) {
	$('.view:not(#welcome)').hide();
	/*$('#welcome').show();	*/



	if (screen.width <= 699) {
	/*mobile page */
		document.location = "mobile_hamburger.html";
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
    $(".pp").css("opacity", 1 - $(window).scrollTop() / 800);
  
  });


$(window).scroll(function(){
    $(".welcomeparallax").css("opacity", 1 - $(window).scrollTop() / 800);
  
  });
