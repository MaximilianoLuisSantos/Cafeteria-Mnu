
function validateDate() {
    var userdate = new Date(document.getElementById("fecha").value);
    var today = new Date();
    if(userdate <= today){
      alert("No podes elegir una fecha anterior a hoy!");
	  return false;
	}
	
	return true;
}


function mostrar(){
	
	if(validateDate()){
		var nombre = document.getElementById("nombre").value();
		var dni = document.getElementById("dni").value();
		var fecha = document.getElementById("fecha").value;
		var email = document.getElementById("email").value;
		var telefono = document.getElementById("phone").value;
		alert("Estos son los datos de tu reserva: " + "Nombre: " + nombre + "DNI: " + dni + "Fecha: " + fecha + "Email: " + email + "Telefono: " + telefono);
	}
}