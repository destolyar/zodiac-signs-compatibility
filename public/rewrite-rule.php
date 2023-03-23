<?php

/**
 * Add rewrite rules
 */
function wsk_zodiac_rewrite()
{
  add_rewrite_rule('^(compatibility)/([^/]*)/?', 'index.php?pagename=$matches[1]&pair=$matches[2]', 'top');

  add_filter('query_vars', function ($query_vars) {
    $query_vars[] = 'pair';
    return $query_vars;
  });
}
add_action('init', 'wsk_zodiac_rewrite');
