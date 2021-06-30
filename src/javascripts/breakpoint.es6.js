/**
 * @file
 * Contains breakpoint value handling.
 */

(($, Drupal) => {
  /**
   * Breakpoint object.
   */
  Drupal.themeBreakpoint = {
    /**
     * Store the breakpoint value.
     */
    value: '',
    /**
     * Get the breakpoint value from the body::before.
     */
    refreshValue: () => {
      Drupal.themeBreakpoint.value = window.getComputedStyle(document.querySelector('body'), ':before')
        .getPropertyValue('content')
        // Remove garbage.
        .replace(/"/g, '');
    },
  };

  /**
   * When resizing recalculate the breakpoint value.
   */
  $(window).resize(() => {
    Drupal.themeBreakpoint.refreshValue();
  }).resize();
})(jQuery, Drupal);
