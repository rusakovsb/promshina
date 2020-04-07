(function ($) {
	Drupal.behaviors.viewsFilters = {
		attach: function(context, settings) {

			$('.chosen-results').click(function() {
				$('#overlay').fadeIn();
			});

			$('.views-widget-per-page .form-item').click(function() {
				$('#overlay').fadeIn();
			});

			$('.pager li').click(function() {
				$('#overlay').fadeIn();
			});

			if (!$('#edit-jump :first').attr('selected')) {
			    $('.block-better-jump-menu').prepend('<div id="jump-menu-all">Сбросить</div>');
			    $('#jump-menu-all').click(function() {
			    	$('#overlay').fadeIn();
				    $('#edit-jump option[selected="selected"]').removeAttr('selected');
				    $('#edit-jump option:first').attr('selected','selected');				
				    $('#better-jump-menu').submit();
			    });
		    }

			if ($('#shina-razmer-all').length)
			return false;
			if (!$('#edit-field-shina-razmer-tid-selective :first').attr('selected')) {
				$('#edit-field-shina-razmer-tid-selective-wrapper').append('<div id="shina-razmer-all">Сбросить</div>');
				$('#shina-razmer-all').click(function() {
					$('#overlay').fadeIn();
					$('#edit-field-shina-razmer-tid-selective option[selected="selected"]').removeAttr('selected');
					$('#edit-field-shina-razmer-tid-selective option:first').attr('selected','selected');				
					$('#views-exposed-form-shiny-po-proizvoditelu-page').submit();
				});
			}

			if ($('#shina-proizvoditel-all').length)
			return false;
			if (!$('#edit-field-shina-proizvoditel-tid-selective :first').attr('selected')) {
				$('#edit-field-shina-proizvoditel-tid-selective-wrapper').append('<div id="shina-proizvoditel-all">Сбросить</div>');
				$('#shina-proizvoditel-all').click(function() {
					$('#overlay').fadeIn();
					$('#edit-field-shina-proizvoditel-tid-selective option[selected="selected"]').removeAttr('selected');
					$('#edit-field-shina-proizvoditel-tid-selective option:first').attr('selected','selected');				
					$('#views-exposed-form-shiny-po-razmeram-page').submit();
				});
			}

			if ($('#disk-razmer-all').length)
			return false;
			if (!$('#edit-field-disk-razmer-value-selective :first').attr('selected')) {
				$('#edit-field-disk-razmer-value-selective-wrapper').append('<div id="disk-razmer-all">Сбросить</div>');
				$('#disk-razmer-all').click(function() {
					$('#overlay').fadeIn();
					$('#edit-field-disk-razmer-value-selective option[selected="selected"]').removeAttr('selected');
					$('#edit-field-disk-razmer-value-selective option:first').attr('selected','selected');				
					$('#views-exposed-form-diski-page').submit();
				});
			}

		    if ($('.field-name-field-shina-razmer').length == false)
			return false;
		    var razmer_val = $('.field-name-field-shina-razmer .field-item').html();
		    $('#edit-jump').find('option').each(function() {
		    	if ($(this).html() == razmer_val) {
				    $('#edit-jump option[selected="selected"]').removeAttr('selected');
				    $(this).attr('selected', 'selected');
				    $('#edit_jump_chosen .chosen-single span').html(razmer_val);
				    $('.block-better-jump-menu').prepend('<div id="jump-menu-all">Сбросить</div>');
				    $('#jump-menu-all').click(function() {
				    	$('#overlay').fadeIn();
					    $('#edit-jump option[selected="selected"]').removeAttr('selected');
					    $('#edit-jump option:first').attr('selected','selected');				
					    $('#better-jump-menu').submit();
				    });
				    return true;
			    }
		    });

		}
	}
})(jQuery);
