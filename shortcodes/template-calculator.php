<?php 

if ( ! defined( 'ABSPATH' ) ) exit; 

?>


<section class="section-calculator">
  <div class="container">
    <div class="fila">
      <div class="centrar-card">
           <div class="card-simulador text-center">
    <div class="card-body">
      <h1 class="text-center titulo text-primary-calculator">¿Cúanto <span class="text-info-calculator">dinero</span> necesitas?</h1>
		
	  <input type="hidden" name="doce_meses" value="<?php echo $doce_meses; ?>" id="doce_meses">
	  <input type="hidden" name="nueve_meses" value="<?php echo $nueve_meses; ?>" id="nueve_meses">
	  <input type="hidden" name="seis_meses" value="<?php echo $seis_meses; ?>" id="seis_meses">
	  <input type="hidden" name="tres_meses" value="<?php echo $tres_meses; ?>" id="tres_meses">
      <div class="inline-block">
        <span class="menos cursor-pointer" id="menos">
          <i class="fa fa-minus"></i>
        </span>
      </div>
       <div class="inline-block">
     
        <h1 id="valormonto" class="form-control-calculator">$5,000.00</h1>  
      </div>
       <div class="inline-block">
        <span class="mas cursor-pointer" id="mas">
          <i class="fa fa-plus"></i>
        </span>
      </div>
<br><br>
       <input id="monto" type="range" name="monto" class="custom-range" min="5000" max="40000" step="1000" value="5000">
      <h4 class="text-primary-calculator">Plazo para Pagar:</h4>

      <div class="position-r">
        <input type="range" id="meses" class="custom-range"  value="3" step="3" min="3" max="12">

<div class="meses text-primary-calculator">
<span class="float-left tree-meses selects" id="3meses">3 meses</span>
<span class="float-center six-meses selects" id="6meses">6 meses</span>
<span class="nine-meses selects" id="9meses">9 meses</span>
<span class="float-right twelve-meses selects" id="12meses">12 meses</span>
</div>
      </div>

  <h5 class="mb-0 text-primary-calculator" style="font-size: 20px;">Pago quincenal estimado:</h5>
  <div><h2 class="form-control-total" id="montoTotal"  style="padding:0px !important;margin: 10px 0px !important;">$1,028.69</h2></div>   
 

  <a href="<?php echo $url_boton; ?>" class="btn btn-success btn-radius">¡Solicítalo ahora!</a>
  <p class="text-dark-calculator">Necesitarás: Tu INE, comprobante de ingresos y cuenta bancaria a tu nombre</p>



    </div>
  </div>
      </div>
    </div>
  </div>
</section>
