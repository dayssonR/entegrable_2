document.getElementById("contactoForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const email = document.getElementById("email").value.trim();
  
    if (!nombre || !motivo || !email) {
      alert("Por favor completa todos los campos.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Por favor ingresa un correo válido.");
      return;
    }
  
    document.getElementById("mensajeExito").classList.remove("oculto");
    this.reset();
  });
  
  function validateEmail(email) {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
  }
  