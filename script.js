

$(document).ready(function(e) {
$('.view').hide();
$('#welcome').show();

  function showView(viewName) {
    $('.view').hide();
	$('#' + viewName).show();
  }
  $('[data-launch-view]').click(function (e) {
	 e.preventDefault();
	var viewName = $(this).attr('data-launch-view');
	showView(viewName);
  });
});


$(window).scroll(function(){
    $(".pp").css("opacity", 1 - $(window).scrollTop() / 800);
  
  });


$(window).scroll(function(){
    $(".welcomeparallax").css("opacity", 1 - $(window).scrollTop() / 800);
  
  });
