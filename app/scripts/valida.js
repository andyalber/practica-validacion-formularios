'use strict';
$(document).ready(function() {
    /* Rellena el codigo postal con 0 */
    $('#CodPostal').on("focusout", function(){
        var codpostal = document.getElementById('CodPostal').value;
        var postalformateado = ("0000" + codpostal).slice (-5);
        document.getElementById('CodPostal').value= postalformateado;
        /* Comprueba si el codigo postal es español*/
        
        /*$.ajax({
			url: 'http://localhost/juanda/proyecto_ajax/validar_CodPostal_db.php',
			type: 'GET',
			dataType: 'json'
		})*/
        
            
			
	});
        
    
    
    
    
	$('#datos_personales').validate(
        {
            rules: 
            {
                nombre:
                {
                    required: true
                    //remote: 'http://localhost/juanda/proyecto_ajax/validar_nombre_db.php'
                },
                apellido1:
                {
                	required: true
                },
                apellido2:
                {
                	required: true
                },
                email:
                {
                    email: true,
                    required: true,
                    remote: 'http://localhost/juanda/proyecto_ajax/validar_email_db.php'
                },
                email2: 
                {
                    email: true,
                    equalTo: '#email'
                },
                demandante:
                {
                    min: 1
                },
                dni:
                {
                    nifES: true,
                    required: true,
                    remote: 'http://localhost/juanda/proyecto_ajax/validar_nif_db.php'
                },
                direccion:
                {
                    required: true
                },
                CodPostal:
                {
                    required: true,
                    maxlength: 5,
                    number: true,
                    remote: 'http://localhost/juanda/proyecto_ajax/validar_CodPostal_db.php'
                },
                localidad:
                {
                    required: true
                },
                provincia:
                {
                    required: true
                },
                pais:
                {
                    required: true
                },
                iban:
                {
                    required: true
                },
                formapago:
                {
                    min: 1
                },
                user:
                {
                    required: true
                },
                password:
                {
                    required: true
                },
                password2:
                {
                    required: true,
                    equalTo: '#password'
                }
                
            },
            messages: {
                nombre:
                {
                    required: 'Debes escribir tu nombre',
                },
                apellido1:
                {
                    required: 'Debes escribir tu primer apellido',
                },
                apellido2:
                {
                    required: 'Debes escribir tu segundo apellido',
                },
                email:
                {
                    email: 'Por favor escribe un email valido',
                    required: 'Debes escribir tu e-mail',
                    remote: 'El e-mail ya existe en la base de datos.'
                },
                email2: 
                {
                    email: 'Por favor escribe un email valido',
                    equalTo: 'El e-mail no coincide'
                },
                demandante:
                {
                    min: 'Debes marcar una opcion'
                },
                dni:
                {
                    required: 'Debes escribir tu CIF / NIF',
                    nifES: 'Debes escribir un NIF válido'
                    
                },
                direccion:
                {
                	required: 'Debes escribir tu direccion'
                },
                CodPostal:
                {
                    required: 'Debes escribir tu Código Postal',
                    maxlength: 'Máximo 5 digitos',
                    remote: 'Ese codigo postal no es de España.',
                    number: 'Debe ser numérico'
                },
                localidad:
                {
                    required: 'Debes escribir tu localidad'
                },
                provincia:
                {
                    required: 'Debes escribir tu provincia'
                },
                pais:
                {
                    required: 'Debes escribir tu pais'
                },
                iban:
                {
                    required: 'IBAN requerido'
                },
                formapago:
                {
                    min: 'Elija forma de pago'
                },
                user:
                {
                    required: 'Usuario requerido'
                },
                password:
                {
                    required: 'Contraseña requerida'
                },
                password2:
                {
                    required: 'Debes validar la contraseña',
                    equalTo: 'Las contraseñas no coinciden'
                }
            }
            
        }
    );
});