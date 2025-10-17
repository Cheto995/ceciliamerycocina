document.addEventListener('DOMContentLoaded', () => {
    // Desplazamiento suave para los enlaces de navegación
    const links = document.querySelectorAll('.nav a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Manejo del formulario de contacto
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Mensaje enviado! Nos pondremos en contacto contigo pronto.');
        form.reset();
    });

    // Reducir el encabezado al hacer scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});