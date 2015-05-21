'use strict';
$(document).ready(function() {
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
                tipodocumento:
                {
                	required: true
                }
            },
            messages: {
                nombre:
                {
                    required: 'Debes escribir tu nombre',
//                    remote: 'Nombre no valido'
                },
                apellido1:
                {
                    required: 'Debes escribir tu primer apellido',
//                    remote: 'Nombre no valido'
                },
                apellido2:
                {
                    required: 'Debes escribir tu segundo apellido',
//                    remote: 'Nombre no valido'
                }
            }
            
        }
    );
});