<?php
/**
 * Implements hook_html_head_alter().
 * This will overwrite the default meta character type tag with HTML5 version.
 */
function promshina_html_head_alter(&$head_elements) {
  $head_elements['system_meta_content_type']['#attributes'] = array(
    'charset' => 'utf-8'
  );
}

/**
 * Override or insert variables into the page template.
 */
function promshina_preprocess_page(&$vars) {
	if (isset($vars['node'])) {
		$vars['theme_hook_suggestions'][] = 'page__type__'.$vars['node']->type;
	}
	if (isset($_GET['template']) && $_GET['template'] == 'colorbox') {
    $vars['theme_hook_suggestions'][] = 'page__colorbox';
  }
}

/**
 * Override or insert variables into the node template.
 */
function promshina_preprocess_node(&$variables) {
  $node = $variables['node'];
  if ($variables['view_mode'] == 'full' && node_is_page($variables['node'])) {
    $variables['classes_array'][] = 'node-full';
  }
}

/*
 * Implements theme_menu_link().
 */
 function promshina_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }

  $element['#localized_options']['html'] = TRUE;
  $linktext = '<span>' . $element['#title'] . '</span>';

  $output = l($linktext, $element['#href'], $element['#localized_options']);
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
}

