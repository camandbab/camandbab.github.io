var windowScreen = $(window).width();
$(document).ready(function(e) {
  if (windowScreen < 800) {
      $(".navText").text("&#9776;");    
  }
  $('.view:not(#welcome)').hide();
/*$('#welcome').show();	*/
  function showView(viewName) {
    $('.view').hide();
	$('#' + viewName).show();
	$(window).scrollTop(0);
  }

   
  function myFunction() {
	var x = document.getElementbyId("myDropdown");
	if (x.className === "dropdown-content") {
		x.className += "responsive";
	} else {
		x.className = "dropdown-content";
	}
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
