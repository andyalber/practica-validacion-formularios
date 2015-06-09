'use strict';
$(document).ready(function () {
$("#CodPostal").focusout(function(){
			var caracteres = $("#CodPostal").val();
			if (caracteres.length == 4)
			{
				$("#CodPostal").val("0" + caracteres);
                $("#CodPostal").change();
            }
            else if (caracteres.length == 3)
            	{
				$("#CodPostal").val("00" + caracteres);
                $("#CodPostal").change();
            }
            else if (caracteres.length == 2)
            	{
				$("#CodPostal").val("000" + caracteres);
                $("#CodPostal").change();
            }
            else if (caracteres.length == 1)
            	{
				$("#CodPostal").val("0000" + caracteres);
                $("#CodPostal").change();
            }
		});
$("#CodPostal").change(function(){
		      if ($("#pais option:selected").val() == "ES/0/0"){
			  if($(this).val()!=""){
	                	var dato = $(this).val();
	                	if (dato.length >= 2){
				    dato = dato.substring(0, 2);    
				}
				$("#provincia").val(dato);
	                }
		      }		
	 });
});