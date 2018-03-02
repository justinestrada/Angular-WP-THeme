<?php

function angular_spa_rest_api_init() {
	// this function allows you to extend an existing WP endpoint
	register_rest_field( 'post', 'angular_spa_meta', [
			'get_callback'		=> 'angular_spa_get_additional_post_data',
			'update_callback' => null,
			'schema'					=> null,
		]
	);

	// http://local.wptestersite.com/wp-json/angular-spa/v1
	// http://local.wptestersite.com/wp-json/angular-spa/v1/menus
	register_rest_route(
		'angular-spa/v1',
		'/menus',
		[
			'methods'           =>  'GET',
			'callback'          =>  'angular_spa_menus_get_all_menus'
		]
	);

	// http://local.wptestersite.com/wp-json/angular-spa/v1/menus/primary-menu
	register_rest_route(
		'angular-spa/v1',
		'/menus/(?P<id>[a-zA-Z(-]+)',
		// '/menus/primary',
		[
			'methods'           =>  'GET',
			'callback'          =>  'angular_spa_menus_get_menu_data'
		]
	);
}