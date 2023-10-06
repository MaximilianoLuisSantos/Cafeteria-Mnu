
function validateDate() {
    var userdate = new Date(document.getElementById("fecha").value);
    var today = new Date();
    if(userdate <= today){
      alert("No podes elegir una fecha anterior a hoy!");
	  return false;
	}
	
	return true;
}