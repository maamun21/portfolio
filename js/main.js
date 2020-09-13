// Preloader
$(window).on("load", function() {

    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

})


$(document).ready(function(){
   //super slide
   $('#slides').superslides({
	   play: 2000,
	   animation_speed: 'slow',
	   pagination: false,
   });
   
   //typed js
   var typed = new Typed('#typed', {
  strings: ['Your Best web developer', 'You can choose Us', 'Your Best web developer'],
	  smartBackspace: true, // Default value
	  typeSpeed: 50,
	  startDelay: 1000,
	  loop: true,
	  showCursor:false,
   });
   
   //owl carasoul
   $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }

	});
	
	//easy pie chart
        $('.chart').easyPieChart({
           easing: 'easyInOut',
		   barColor: '#fff',
		   trackColor: false,
		   scaleColor: false,
		   size: 152,
		   lineWidth:4,
		   onStep(from, to, percent){
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
	
	// fancy
	
	$("[data-fancybox]").fancybox();


	$(".items").isotope({
		filter: '*',
		animationOptions: {
			duration: 1500,
			easing: 'linear',
			queue: false
		}
	});

	$("#filters a").click(function() {

		$("#filters .current").removeClass("current");
		$(this).addClass("current");

		var selector = $(this).attr("data-filter");

		$(".items").isotope({
			filter: selector,
			animationOptions: {
				duration: 1500,
				easing: 'linear',
				queue: false
			}
		});

		return false;
	});
	
	    // Smooth Scroll Navigation
    // Smooth scroll
    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });

});

 