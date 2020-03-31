<?php
/*
Plugin Name: Calculadora para prestamos
Plugin URI: https://solucioneswebig.com/
Description: Calcula los pagos de forma quincenal que deben hacer dependiendo de los prestamos.                                                                 Shortcode : [calculator doce_meses="0.561272" nueve_meses="0.452492" seis_meses="0.32402" tres_meses="0.234422" url_boton="aqui la url donde esta el formulario de solicitud"]
Version: 1.0
Author: SolucionesWeBig - Alexander Gutierrez
Author URI: https://solucioneswebig.com/
License: GPLv2
*/   


if ( ! defined( 'ABSPATH' ) ) exit; 
 

global $wpdb;
$prefix_plugin_cp = "calculator_pay_";

define('PREFIX', 'cp_');
define( 'CP_PLUGIN_DIR_PATH', plugin_dir_path( __FILE__ ) );
define( 'CP_PLUGIN_DIR_URL', plugin_dir_url( __FILE__ ) );

//FINALIZO LA DEFINICION DE LAS TABLAS DE LA BD

function cp_design_styles(){
	wp_enqueue_style( 'cp-style-general', CP_PLUGIN_DIR_URL . 'css/styles.css', false );

	wp_enqueue_style( 'cp-font-style-general', CP_PLUGIN_DIR_URL . 'fontawesome-free/css/all.min.css', false );

	

	wp_enqueue_script( 'jquery' );
	wp_enqueue_script( 'cp-scripts-general', CP_PLUGIN_DIR_URL . 'js/script.js' , array( 'jquery' ), null , true );
}
add_action('wp_enqueue_scripts', 'cp_design_styles');


include CP_PLUGIN_DIR_PATH . 'shortcodes/index.php';