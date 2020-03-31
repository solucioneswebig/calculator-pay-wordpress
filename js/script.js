(function( $ ) {
 
var doce_meses = $("#doce_meses").val();
var nueve_meses = $("#nueve_meses").val();
var seis_meses = $("#seis_meses").val();
var tres_meses = $("#tres_meses").val();

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})



 $(document).ready(function(){
     
     
     
     $("#3meses").click(function(){
        $("#meses").val(3);
        
         var monto = 0.00;
     var total_mult = 0.00;
     var total_sum = 0.00;
     var quota_quincenal = 0.00;
     var number_format = 0.00;
     monto=parseInt($("#monto").val(), 10);
    
    var meses = $("#meses").val(); 


    if(meses == 3){
     total_mult = ( tres_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 6);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 6){
     total_mult = ( seis_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 12);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 9){
     total_mult = ( nueve_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 18);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }    
    
    if(meses == 12){
     total_mult = ( doce_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 24);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
     });
     $("#6meses").click(function(){
        $("#meses").val(6);
        
         var monto = 0.00;
     var total_mult = 0.00;
     var total_sum = 0.00;
     var quota_quincenal = 0.00;
     var number_format = 0.00;
     monto=parseInt($("#monto").val(), 10);
    
    var meses = $("#meses").val(); 


    if(meses == 3){
     total_mult = ( tres_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 6);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 6){
     total_mult = ( seis_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 12);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 9){
     total_mult = ( nueve_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 18);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }    
    
    if(meses == 12){
     total_mult = ( doce_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 24);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
     });
     $("#9meses").click(function(){
        $("#meses").val(9);
        
         var monto = 0.00;
     var total_mult = 0.00;
     var total_sum = 0.00;
     var quota_quincenal = 0.00;
     var number_format = 0.00;
     monto=parseInt($("#monto").val(), 10);
    
    var meses = $("#meses").val(); 


    if(meses == 3){
     total_mult = ( tres_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 6);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 6){
     total_mult = ( seis_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 12);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 9){
     total_mult = ( nueve_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 18);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }    
    
    if(meses == 12){
     total_mult = ( doce_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 24);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
     });     
     $("#12meses").click(function(){
        $("#meses").val(12);
        
         var monto = 0.00;
     var total_mult = 0.00;
     var total_sum = 0.00;
     var quota_quincenal = 0.00;
     var number_format = 0.00;
     monto=parseInt($("#monto").val(), 10);
    
    var meses = $("#meses").val(); 


    if(meses == 3){
     total_mult = ( tres_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 6);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 6){
     total_mult = ( seis_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 12);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 9){
     total_mult = ( nueve_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 18);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }    
    
    if(meses == 12){
     total_mult = ( doce_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 24);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
     });
     
    $("#menos").click(function(){
        var monto=parseInt($("#monto").val(), 10);
        if(monto == 5000 || monto < 5000){
        var menos = 5000;    
        }else{
        var menos = (monto - 1000); 
        }
        
        $("#monto").val(menos);

        var number_solicitud = formatter.format(parseFloat(menos).toFixed(2));
    
        $("#valormonto").html(number_solicitud);
        
        console.log(menos);
        
        
             var monto = 0.00;
     var total_mult = 0.00;
     var total_sum = 0.00;
     var quota_quincenal = 0.00;
     var number_format = 0.00;
     monto=parseInt($("#monto").val(), 10);
    
    var meses = $("#meses").val(); 
    
    monto = menos;

    if(meses == 3){
     total_mult = ( tres_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 6);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 6){
     total_mult = ( seis_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 12);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 9){
     total_mult = ( nueve_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 18);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }    
    
    if(meses == 12){
     total_mult = ( doce_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 24);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }        
    

    });
    
    
    
    
    $("#mas").click(function(){
       var monto=parseInt($("#monto").val(), 10);
       
       
       if(monto == 40000 || monto > 40000){
        var mas = 40000;   
       }else{
        var mas = (monto + 1000);   
       }
       
       
       
       
       
        $("#monto").val(mas);
       
       
        console.log(mas);
        
        var number_solicitud = formatter.format(parseFloat(mas).toFixed(2));
    
        $("#valormonto").html(number_solicitud);
        
        
             var monto = 0.00;
     var total_mult = 0.00;
     var total_sum = 0.00;
     var quota_quincenal = 0.00;
     var number_format = 0.00;
     monto=parseInt($("#monto").val(), 10);
    
    var meses = $("#meses").val(); 

    monto = mas;
     
    if(meses == 3){
     total_mult = ( tres_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 6);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 6){
     total_mult = ( seis_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 12);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 9){
     total_mult = ( nueve_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 18);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }    
    
    if(meses == 12){
     total_mult = ( doce_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 24);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }        
    

    });
     
    $('#monto').on("input change", function(){

     var number_solicitud = formatter.format(parseFloat($(this).val()).toFixed(2));
    
     $("#valormonto").html(number_solicitud); 

    
    
    
     var monto = 0.00;
     var total_mult = 0.00;
     var total_sum = 0.00;
     var quota_quincenal = 0.00;
     var number_format = 0.00;
     monto=parseInt($("#monto").val(), 10);
    
    var meses = $("#meses").val(); 


    if(meses == 3){

     
     total_mult = ( tres_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 6);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 6){
     total_mult = ( seis_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 12);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 9){
     total_mult = ( nueve_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 18);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }    
    
    if(meses == 12){
     total_mult = ( doce_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 24);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }        
    

        
    });
    
    
    $('#meses').on("input change", function(){
        
    
    
     var monto = 0.00;
     var total_mult = 0.00;
     var total_sum = 0.00;
     var quota_quincenal = 0.00;
     var number_format = 0.00;
     monto=parseInt($("#monto").val(), 10);
    
    var meses = $("#meses").val(); 


    if(meses == 3){
     total_mult = ( tres_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 6);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 6){
     total_mult = ( seis_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 12);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }
    
    
    if(meses == 9){
     total_mult = ( nueve_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 18);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }    
    
    if(meses == 12){
     total_mult = ( doce_meses * monto );
     
     total_sum = (total_mult+monto);
     
     quota_quincenal = ( total_sum / 24);
     
     number_format = formatter.format(quota_quincenal);
    
     $("#montoTotal").html(number_format);
    
     console.log(meses);
    }        
    

        
    });    
    
  });
  /*
  document.onkeydown = function(e) {
    if(e.keyCode == 123) {
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
     return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
     return false;
    }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }      
 }
 
 document.oncontextmenu = function(){return false}
 */
  

})(jQuery);


