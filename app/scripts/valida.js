'use strict';
$(document).ready(function () {
    /* Rellena el codigo postal con 0 */
    /*$('#CodPostal').on("focusout", function () {
        var codpostal = document.getElementById('CodPostal').value;
        var postalformateado = ("0000" + codpostal).slice(-5);
        document.getElementById('CodPostal').value = postalformateado;
        /* Comprueba si el codigo postal es español*/

    /*$.ajax({
			url: 'http://localhost/juanda/proyecto_ajax/validar_CodPostal_db.php',
			type: 'GET',
			dataType: 'json'
		})*/



});





$('#datos_personales').validate({
rules: {
    nombre: {
        required: true
            //remote: 'http://localhost/juanda/proyecto_ajax/validar_nombre_db.php'
    },
    apellido: {
        required: true
    },
    telefono: {
        required: true,
        maxlength: 9,
        minlength: 9,
        number: true
    },
    email: {
        email: true,
        required: true,
        remote: 'http://localhost/juanda/proyecto_ajax/validar_email_db.php',
        minlength: 4
    },
    email2: {
        email: true,
        equalTo: '#email',
        minlength: 4
    },
    demandante: {
        min: 1
    },
    dni: {
        nifES: {
            depends: function () {
                if ($('#particular').prop('checked') == true) {
                    return true;
                } else
                    return false;
            }
        },
        cifES: {
            depends: function () {
                if ($('#empresa').prop('checked') == true) {
                    return true;
                } else
                    return false;
            }
        },
        required: true,
        remote: 'http://localhost/juanda/proyecto_ajax/validar_nif_db.php'
            //remote: '../php/validar_nif_db.php'
    },
    nomempresa: {
        required: true
    },
    direccion: {
        required: true
    },
    CodPostal: {
        required: true,
        maxlength: 5,
        number: true,
        remote: 'http://localhost/juanda/proyecto_ajax/validar_CodPostal_db.php'
            //remote: '/validar_CodPostal_db.php'
    },
    localidad: {
        required: true
    },
    provincia: {
        required: true
    },
    pais: {
        required: true
    },
    iban: {
        required: true,
        iban: true
    },
    formapago: {
        min: 1
    },
    user: {
        required: true
    },
    password: {
        required: true
    },
    password2: {
        required: true,
        equalTo: '#password'
    }

},
messages: {
    nombre: {
        required: 'Debes escribir tu nombre',
    },
    apellido: {
        required: 'Debes escribir tus apellidos',
    },
    telefono: {
        required: 'Debes escribir tu número de teléfono',
        maxlength: 'Debe ser de 9 digitos',
        minlength: 'Debe ser de 9 digitos',
        number: 'Deben ser digitos'
    },
    email: {
        email: 'Por favor escribe un email valido',
        required: 'Debes escribir tu e-mail',
        remote: 'El e-mail ya existe en la base de datos.',
        minlength: 'Debe tener por lo menos 4 caracteres'
    },
    email2: {
        email: 'Por favor escribe un email valido',
        equalTo: 'El e-mail no coincide',
        minlength: 'Debe tener por lo menos 4 caracteres'
    },
    demandante: {
        min: 'Debes marcar una opcion'
    },
    dni: {
        required: 'Debes escribir tu CIF / NIF',
        nifES: 'Debes escribir un NIF válido',
        cifEs: 'Debes escribir un CIF válido'
    },
    nomempresa: {
        required: 'Debes escribir el nombre'
    },
    direccion: {
        required: 'Debes escribir tu direccion'
    },
    CodPostal: {
        required: 'Debes escribir tu Código Postal',
        maxlength: 'Máximo 5 digitos',
        remote: 'Ese codigo postal no es de España.',
        number: 'Debe ser numérico'
    },
    localidad: {
        required: 'Debes escribir tu localidad'
    },
    provincia: {
        required: 'Debes escribir tu provincia'
    },
    pais: {
        required: 'Debes escribir tu pais'
    },
    iban: {
        required: 'IBAN requerido'
    },
    formapago: {
        min: 'Elija forma de pago'
    },
    user: {
        required: 'Usuario requerido'
    },
    password: {
        required: 'Contraseña requerida'
    },
    password2: {
        required: 'Debes validar la contraseña',
        equalTo: 'Las contraseñas no coinciden'
    }
}

});
