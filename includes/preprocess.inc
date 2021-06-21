<?php

/**
 * @file
 * Preprocess variables for all templates.
 */

/**
 * Implements hook_preprocess().
 */
function THEMENAME_preprocess(array &$variables) {
  // Inject the current language into every template.
  $variables['language'] = \Drupal::languageManager()->getCurrentLanguage()->getId();

  // Inject the theme directory path.
  $variables['theme_path'] = base_path() . $variables['directory'];
}
