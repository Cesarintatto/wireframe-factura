function openPopUp() {
    var modal = document.getElementById("miModal");
    modal.style.display = "block"; // Muestra el modal
}

window.addEventListener("message", function(event) {
    if (event.data === "cerrarModal") {
    var modal = document.getElementById("miModal");
    modal.style.display = "none"; // Cierra el modal
}
});


