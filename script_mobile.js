$(document).ready(function(e) {  
	$('.view:not(#welcome)').hide();
	$( ".cross" ).hide();
	$( ".menu" ).hide();
  /*$('#welcome').show();	*/
  function showView(viewName) {
	$('nav').hide();
    $('.view').hide();
	$('#' + viewName).show();
	$(window).scrollTop(0);
  }
  $('[data-launch-view]').click(function (e) {
	 e.preventDefault();
	var viewName = $(this).attr('data-launch-view');
	showView(viewName);	
	
	$( ".menu" ).hide();
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
/* 	$( ".menu" ).slideToggle( "slow", function() {
		$(".cross").text("soup");
		$(".hamburger").text("vegetable");
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	}); */
	//enable all scrolling on mobile devices when menu is closed
	$('#container').unbind('touchmove');
	$('#content').css('width', 'auto');
	$('#contentLayer').css('display', 'none');
	$('#content').css('min-height', 'auto');	
	
	
	//$(".navText").text("salad");
  });	

//Open the menu
$( ".hamburger" ).click(function() {
	$("header").css("width","10%");
	//$("header").hide();
	$(".hamburger").hide();
	$(".cross").show();
	$(".menu").show();
/* 	$( ".menu" ).slideToggle( "slow", function() {
	$( ".hamburger" ).hide();
	$( ".cross" ).show();
	}); */

	//$(".dropbtn").text("soup");
	$('#content').css('min-height', $(window).height());
	//set the width of primary content container -> content should not scale while animating
	var contentWidth = $('#content').width();
	//set the content with the width that it has originally
	$('#content').css('width', contentWidth);
	//display a layer to disable clicking and scrolling on the content while menu is shown
	$('#contentLayer').css('display', 'block');
	//disable all scrolling on mobile devices while menu is shown
	$('#container').bind('touchmove', function (e) {
		e.preventDefault()
	});

	//set margin for the whole container with a $ UI animation
	$("#container").animate({"marginLeft": ["70%", 'easeOutExpo']}, {
		duration: 700
	});

});
//close the menu
$( "#contentLayer" ).click(function() {
	$( ".menu" ).hide();
	$( ".cross" ).hide();
	$( ".hamburger" ).show();
/* 	$( ".menu" ).slideToggle( "slow", function() {
		$(".cross").text("soup");
		$(".hamburger").text("vegetable");
		$( ".cross" ).hide();
		$( ".hamburger" ).show();
	}); */
	//enable all scrolling on mobile devices when menu is closed
	$('#container').unbind('touchmove');
	$('#content').css('width', 'auto');
	$('#contentLayer').css('display', 'none');
	$('#content').css('min-height', 'auto');
});

	$(".cross").click(function (e) {
	 e.preventDefault();
	$("#welcome").show();
	$('.view:not(#welcome)').hide();	
	//$(".navText").text("salad");
  });  
  
});






