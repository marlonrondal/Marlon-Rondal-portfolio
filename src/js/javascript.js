document.querySelectorAll(".card").forEach(function(elemento) {
    elemento.addEventListener("click", function() {
      this.classList.toggle("descubierto");
    });
  });
  
 