'use strict';

jQuery.validator.addMethod( "clavecompleja", function ( value ) {
 "use strict";
  
 var complejidad = 0;
  
 complejidad  = $('#PassValue').val();
  
 if (complejidad >= 40)
 {
    return true;
 }
else
{
  return false;
};
});