
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
		var nombre = document.getElementById("nombre").value;
		var dni = document.getElementById("dni").value;
		var fecha = document.getElementById("fecha").value;
		var email = document.getElementById("email").value;
		var telefono = document.getElementById("phone").value;
		var fecha = document.getElementById("fecha").value;
		var cant = document.getElementById("cantidad").value;
		var mensaje = "Estos son los datos de tu reserva:\n" +
      "Nombre: " + nombre + "\n" +
      "DNI: " + dni + "\n" +
      "Fecha: " + fecha + "\n" +
      "Email: " + email + "\n" +
      "Telefono: " + telefono + "\n" +
      "Fecha: " + fecha + "\n" +
      "Cantidad de Personas: " + cant;
    alert(mensaje);
	}
}