<?php

function angular_spa_enqueue_scripts(){

	wp_register_style( 'angular_spa_bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.min.css' );
	wp_enqueue_style( 'angular_spa_bootstrap' );

	wp_register_script( 'angular_spa_bootstrap', get_template_directory_uri() . '/assets/js/bootstrap.min.js', array(), false, true );

	wp_register_script( 'angular_spa_inline_bundle', 'http://localhost:4200/inline.bundle.js', [], false, true );
	wp_register_script( 'angular_spa_polyfills_bundle', 'http://localhost:4200/polyfills.bundle.js', [], false, true );
	wp_register_script( 'angular_spa_styles_bundle', 'http://localhost:4200/styles.bundle.js', [], false, true );
	wp_register_script( 'angular_spa_vendor_bundle', 'http://localhost:4200/vendor.bundle.js', [], false, true );
	wp_register_script( 'angular_spa_main_bundle', 'http://localhost:4200/main.bundle.js', [], false, true );

	// wp_localize_script( 'angular_spa_main_bundle', 'wp_rest_api', [ 'base_url' => home_url( '/wp-json/wp/v2/' ) ]);

	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'angular_spa_bootstrap' );
	wp_enqueue_script( 'angular_spa_inline_bundle' );
	wp_enqueue_script( 'angular_spa_polyfills_bundle' );
	wp_enqueue_script( 'angular_spa_styles_bundle' );
	wp_enqueue_script( 'angular_spa_vendor_bundle' );
	wp_enqueue_script( 'angular_spa_main_bundle' );
}