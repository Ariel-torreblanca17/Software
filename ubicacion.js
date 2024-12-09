
function ubi() {
   
    const nombre = document.getElementsByName("nombre")[0].value.trim();
    const correo = document.getElementsByName("correo")[0].value.trim();
    const numtel = document.getElementsByName("numtel")[0].value.trim();
    const calle = document.getElementsByName("calle")[0].value.trim();
    const ciudad = document.getElementsByName("ciudad")[0].value.trim();
    const cp = document.getElementsByName("cp")[0].value.trim();
    const ex = document.getElementsByName("ex")[0].value.trim();

   
    if (nombre && correo && numtel && calle && ciudad && cp) {
        
        window.location.href = "finalizar-compra.html";
    } else {
       
        alert("Por favor, complete todos los campos antes de continuar.");
    }
}
