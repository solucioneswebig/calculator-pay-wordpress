<?php 
if ( ! defined( 'ABSPATH' ) ) exit; 

// [bartag foo="foo-value"]
function calculator_func( $atts ) {

	$atts = shortcode_atts( array(
		'doce_meses' => 0.561272,
        'nueve_meses' => 0.452492,
        'seis_meses' => 0.32402,
        'tres_meses' => 0.234422,
        'url_boton'  => "#"
	), $atts );

    extract($atts , EXTR_SKIP);

    ob_start();

	include CP_PLUGIN_DIR_PATH . "shortcodes/template-calculator.php";

	return ob_get_clean();
}
add_shortcode( 'calculator', 'calculator_func' );


