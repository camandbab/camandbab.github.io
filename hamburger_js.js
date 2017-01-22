var windowScreen = $(window).width();

$(document).ready(function(e) {
  if (windowScreen < 800) {
      $(".navText").text("");
	  $(".navText").addClass("mobileNav");
	  $(".mobiledropdown").removeClass("dropdown-content");
  }
  if (windowScreen >= 800) {
	  $(".mobiledropdown").addClass("dropdown-content");
  }
  $('.view:not(#welcome)').hide();
/*$('#welcome').show();	*/


    //Open the menu
    jQuery("#hamburger").click(function () {

        jQuery('#content').css('min-height', jQuery(window).height());

        jQuery('nav').css('opacity', 1);

        //set the width of primary content container -> content should not scale while animating
        var contentWidth = jQuery('#content').width();

        //set the content with the width that it has originally
        jQuery('#content').css('width', contentWidth);

        //display a layer to disable clicking and scrolling on the content while menu is shown
        jQuery('#contentLayer').css('display', 'block');

        //disable all scrolling on mobile devices while menu is shown
        jQuery('#container').bind('touchmove', function (e) {
            e.preventDefault()
        });

        //set margin for the whole container with a jquery UI animation
        jQuery("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
            duration: 700
        });

    });

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
