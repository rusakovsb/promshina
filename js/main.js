(function ($) {
	Drupal.behaviors.themeScripts = {
		attach: function(context, settings) {

            $("#menu-link-komplekt").removeAttr("href");
            
            $('.product-params-table tr:has(td:empty)').hide();  

		}
	}
})(jQuery);
