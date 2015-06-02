'use strict';
$(document).ready(function() {
    /* Comprueba si se eligió Particular o Empresa */
     $('.demandante').on("click", function(){
         
        var demandante = $('input[name="demandante"]:checked').val();
         if (demandante == 1)
         {
            document.getElementById('dni').placeholder= "Escribe tu NIF";
             $("#labelcifnif").empty();
             $("#labelcifnif").append("NIF<span class='obligatorio'>*</span>:");
         }
         else if (demandante == 2)
         {
            document.getElementById('dni').placeholder= "Escribe tu CIF";
             
             $("#labelcifnif").empty();
             $("#labelcifnif").append("CIF<span class='obligatorio'>*</span>:");
             
         }
         else
         {
            document.getElementById('dni').placeholder= "Algo raro pasa";
         }
	});
});