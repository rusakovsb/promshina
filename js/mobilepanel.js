(function ($) {
  Drupal.behaviors.mobilePanel = {
    attach: function(context, settings) {
	
      $("#header .container").once().append('<button id="menu-icon"><span></span><span></span><span></span></button>');
	  
	    $(".region-mobile-panel").once().prepend('<div id="mobile-panel-header"><button id="menu-close-icon"><span></span><span></span></button></div>');	 

	    $("#menu-icon").click(function () {
        TweenMax.to("#mobile-panel", 1, {
          ease: Expo.easeInOut,
          x: "0%"                   
        })   
      });	

      $("#menu-close-icon").click(function () {
        TweenMax.to("#mobile-panel", 1, {
          ease: Expo.easeInOut,
          x: "100%"
        })   
      });	 
	
    }
  };
})(jQuery);



