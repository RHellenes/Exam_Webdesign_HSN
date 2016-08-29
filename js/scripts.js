$(document).ready(function(){

	(function(menu) {

		$('#menu__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('left--sidebar');
		});
    
    	$('#site-cache').click(function(e){
      		$('body').removeClass('left--sidebar');
   		});

	})('menu');

	(function(form) {
	  	function floatLabel(inputType) {
		    $(inputType).each(function() {
		     
		      	$(this).focus(function() {
		        $(this).next().addClass("active");
		      });
		      
			    $(this).blur(function() {
			        if ($(this).val() === '' || $(this).val() === 'blank') {
			          $(this).next().removeClass();
			        }
			    });
		    });
	  	}
	  floatLabel(".floatLabel");
	})('form');

	$(function(fixed_nav) {

		var fixed_nav_top = $('.header').offset().top;
		

		var sticky_navigation = function(){
			var scroll_top = $(window).scrollTop(); 
			

			if (scroll_top > fixed_nav_top) { 
				$('.header').css({ 'position': 'fixed', 'top':0, 'left':0 });
			} else {
				$('.header').css({ 'position': 'relative' }); 
			}   
		};
		

		if ( $(window).width() > 1024) {     
		  	$(window).scroll(function() {
				 sticky_navigation();
			});
		} else {

		}

		('fixed_nav')
	});
});