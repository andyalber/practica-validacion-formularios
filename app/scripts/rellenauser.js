'use strict';
$(document).ready(function () {
            /* Comprueba si se eligió Particular o Empresa */
            
            $('#email').on("focusout", function () {
                var user = $('input[name="email"]').val();
                 $("#user").val(user);
            });
});