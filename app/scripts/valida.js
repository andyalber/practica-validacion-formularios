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
                    remote: 'http://localhost/juanda/proyecto_ajax/validar_CodPostal_db.php'
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
                    nifES: 'Debes escribir un NIF válido',
                    required: 'Debes escribir tu CIF / NIF'
                },
                direccion:
                {
                	required: 'Debes escribir tu direccion'
                },
                CodPostal:
                {
                    required: 'Debes escribir tu Código Postal',
                    remote: ''
                }
            }
            
        }
    );
});