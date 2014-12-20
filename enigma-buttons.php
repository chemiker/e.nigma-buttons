<?php
/**
 * Plugin Name: e.nigma Buttons
 * Plugin URI:  http://e.nigma.de/portfolio/enigma-buttons
 * Description: Brings beautiful buttons to your WordPress installation.
 * Version:     1.0.0
 * Author:      chemiker
 * Author URI:  http://e.nigma.de
 * License:     MIT
 * License URI: license.txt
 */

namespace enigmaButtons;

// register Styles
add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'enigma-buttons', plugin_dir_url(__FILE__).'dist/stylesheets/screen.css' );
} );

// register Shortcode
add_shortcode( 'button', '\enigmaButtons\Button::button' );

class Button {
	public static function button( $args=array() ) {
		$icon = self::get_icon($args);
		$size = self::get_size($args);
		$label = self::get_label($args);
		$url = self::get_url($args);
		$color = self::get_color($args);
		$border = self::get_border($args);
		$class = self::get_class($args);

		// Content related CSS classes
		$haslabel = ( empty($label) ? '' : 'has-label' );

		return '<a href="'.$url.'" class="enigma-button '.$haslabel.' '.$size.' '.$color.' '.$border.'"><i class="'.$icon.' '.$class.'"></i>'.$label.'</a>';
	}

	private static function get_class($args) {
		if ( ! isset($args['class']) )
			return '';

		return $args['class'];
	}

	private static function get_border($args) {
		if ( ! isset($args['border']) )
			return 'has-border';

		if ( $args['border'] == 'no' )
			return 'no-border';

		return 'has-border';
	}

	private static function get_color($args) {
		$colors = array( 'green', 'orange', 'purple', 'cyan', 'white', 'red', 'black' );

		if ( ! isset($args['color']) || ! in_array($args['color'], $colors) )
			return '';

		return $args['color'];
	}

	private static function get_url($args) {
		if ( ! isset($args['link']) )
			return '#';

		return $args['link'];
	}

	private static function get_label($args) {
		if ( ! isset($args['label']) )
			return '';

		return $args['label'];
	}
	
	private static function get_icon($args) {
		if ( ! isset($args['icon']) )
			return '';

		return 'fa fa-'.$args['icon'];
	}

	private static function get_size($args) {
		$sizes = array( 'small', 'medium', 'large' );
		
		if ( ! isset($args['size']) || ! in_array($args['size'], $sizes) )
			return 'medium';

		return $args['size'];
	}
}

