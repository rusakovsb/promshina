(function ($) {
  Drupal.behaviors.mobilePanel = {
    attach: function(context, settings) {
	
      $("#header .container").once().append('<button id="menu-icon"><span></span><span></span><span></span></button>');
	  
	    $(".region-mobile-panel").once().prepend('<button id="menu-close-icon"><span></span><span></span></button>');	 

	    $("#menu-icon").click(function () {
        TweenMax.to("#mobile-panel", 0.5, {
          ease: Power1.easeOut,
          x: "0%"                   
        })   
      });	

      $("#menu-close-icon").click(function () {
        TweenMax.to("#mobile-panel", 0.5, {
          ease: Power1.easeOut,
          x: "100%"
        })   
      });	 
	
    }
  };
})(jQuery);



