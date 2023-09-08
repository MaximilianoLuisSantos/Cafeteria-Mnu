
function validateDate() {
    var userdate = new Date(document.getElementById("fecha").value).toJSON().slice(0,10);
    var today = new Date().toJSON().slice(0,10);
    if(userdate < today){
      alert('No podes elegir una fecha anterior a hoy!');
}