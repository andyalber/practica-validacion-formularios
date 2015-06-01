'use strict';
$(document).ready(function() {
    /* Comprueba si se eligió Particular o Empresa */
     $('#demandante').on("focusout", function(){
        var demandante = document.getElementById('demandante').value;
         if (demandante == 1)
         {
            document.getElementById('dni').placeholder= "Escribe tu NIF";
         }
         else
         {
            document.getElementById('dni').placeholder= "Escribe tu CIF";
         }
        
        /* Comprueba si el codigo postal es español*/
        
        /*$.ajax({
			url: 'http://localhost/juanda/proyecto_ajax/validar_CodPostal_db.php',
			type: 'GET',
			dataType: 'json'
		})*/
        
            
			
	});
    
        
    
    
    
    
	
});