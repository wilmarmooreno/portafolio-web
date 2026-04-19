// MENÚ HAMBURGUESA
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("show");
});


// SCROLL SUAVE
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const targetId = this.getAttribute("href").substring(1);
        const target = document.getElementById(targetId);

        target.scrollIntoView({
            behavior: "smooth"
        });

        // cerrar menú en móvil
        menu.classList.remove("show");
    });
});


// VALIDACIÓN DE FORMULARIO
const form = document.getElementById("contact-form");
const message = document.getElementById("form-message");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const text = document.getElementById("message").value.trim();

    if (name === "" || email === "" || text === "") {
        message.textContent = "Por favor, completa todos los campos.";
        message.style.color = "red";
        return;
    }

    if (!validateEmail(email)) {
        message.textContent = "Correo electrónico no válido.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Mensaje enviado correctamente ✅";
    message.style.color = "green";

    form.reset();
});


// FUNCIÓN PARA VALIDAR EMAIL
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}