'use strict';
$(document).ready(function () {
            /* Comprueba si se eligió Particular o Empresa */
            
            $('.demandante').on("click", function () {
                $("#dni").val('');
                var demandante = $('input[name="demandante"]:checked').val();
                if (demandante == 1) {
                    document.getElementById('dni').placeholder = "Escribe tu NIF";
                    $("#labelcifnif").empty();
                    $("#labelcifnif").append("NIF<span class='obligatorio'>*</span>:");
                    document.getElementById('nomempresa').placeholder = "Escribe tu nombre";
                    $("#labelnomempresa").empty();
                    $("#labelnomempresa").append("Nombre<span class='obligatorio'>*</span>:");
                } else if (demandante == 2) {
                    document.getElementById('dni').placeholder = "Escribe tu CIF";
                    $("#labelcifnif").empty();
                    $("#labelcifnif").append("CIF<span class='obligatorio'>*</span>:");
                    document.getElementById('nomempresa').placeholder = "Escribe el nombre de la empresa";
                    $("#labelnomempresa").empty();
                    $("#labelnomempresa").append("Empresa<span class='obligatorio'>*</span>:");
                } else {
                    console.log('algo raro pasa');
                }
            });/*
            $('#dni').on("focusout", function () {
                var demandante = $('input[name="demandante"]:checked').val();
                if (demandante == 1) {
                    console.log('has actualizado el nif');
                    $('#dni').validate({
                        rules: {
                            dni: {
                                nifES: true,
                                required: true,
                                remote: 'http://localhost/juanda/proyecto_ajax/validar_nif_db.php'
                                //remote: '../php/validar_nif_db.php'
                            }
                        },
                        messages: {
                            dni: {
                                nifES: 'Por favor introduzca un NIF válido',
                                required: 'Debes escribir tu NIF',
                                remote: 'Este nif ya existe en la base de datos'
                            }
                        }
                    })
                } else if (demandante == 2) {
                    console.log('has actualizado el cif');
                    $('#dni').validate({
                        rules: {

                            dni: {
                                cifES: true,
                                required: true,
                                remote: 'http://localhost/juanda/proyecto_ajax/validar_nif_db.php'
                                    //remote: '../php/validar_nif_db.php'
                            }
                        },
                        messages: {
                            dni: {
                                cifES: 'Por favor introduzca un CIF válido',
                                required: 'Debes escribir tu CIF',
                                remote: 'Este cif ya existe en la base de datos'
                            }
                        }
                    })
                } else {
                    console.log('algo raro pasa');
                }
            });*/
});