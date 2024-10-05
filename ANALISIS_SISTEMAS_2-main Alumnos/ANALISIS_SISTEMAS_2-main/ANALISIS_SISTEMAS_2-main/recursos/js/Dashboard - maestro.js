document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los enlaces del sidebar
    const links = document.querySelectorAll('.sidebar ul li a');
    
    // Función para ocultar todas las secciones
    function hideAllSections() {
        const sections = document.querySelectorAll('.card-container');
        sections.forEach(section => section.style.display = 'none');
    }

    // Añadimos un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace realice el scroll por defecto
            
            // Ocultamos todas las secciones
            hideAllSections();
            
            // Mostramos la sección correspondiente
            const targetId = this.getAttribute('href').substring(1); // Obtener el ID del href
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'flex';
            }
        });
    });

    // Mostrar la sección de inicio por defecto al cargar la página
    hideAllSections(); // Ocultamos todas las secciones
    document.getElementById('Dashboard').style.display = 'flex'; // Mostramos la sección de inicio

    // Seleccionamos todas las opciones en el div .opciones
    const opciones = document.querySelectorAll('.opciones .opcion a');

    // Función para ocultar todas las secciones
    function hideAllSections() {
        const sections = document.querySelectorAll('.card-container');
        sections.forEach(section => section.style.display = 'none');
    }

    // Añadimos un evento de clic a cada opción
    opciones.forEach(opcion => {
        opcion.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace realice el scroll por defecto

            // Ocultamos todas las secciones
            hideAllSections();

            // Mostramos la sección correspondiente
            const targetId = this.getAttribute('href').substring(1); // Obtener el ID del href
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'flex';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionamos todos los enlaces del sidebar
    const links = document.querySelectorAll('.sidebar ul li a');
    
    // Función para ocultar todas las secciones
    function hideAllSections() {
        const sections = document.querySelectorAll('.card-container');
        sections.forEach(section => section.style.display = 'none');
    }

    // Añadimos un evento de clic a cada enlace
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace realice el scroll por defecto
            
            // Ocultamos todas las secciones
            hideAllSections();
            
            // Mostramos la sección correspondiente
            const targetId = this.getAttribute('href').substring(1); // Obtener el ID del href
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'flex';
            }
        });
    });

    // Mostrar la sección de inicio por defecto al cargar la página
    hideAllSections(); // Ocultamos todas las secciones
    document.getElementById('Dashboard').style.display = 'flex'; // Mostramos la sección de inicio

    // Seleccionamos todas las opciones en el div .opciones
    const opciones = document.querySelectorAll('.opciones .opcion a');

    // Función para ocultar todas las secciones
    function hideAllSections() {
        const sections = document.querySelectorAll('.card-container');
        sections.forEach(section => section.style.display = 'none');
    }

    // Añadimos un evento de clic a cada opción
    opciones.forEach(opcion => {
        opcion.addEventListener('click', function(event) {
            event.preventDefault(); // Evita que el enlace realice el scroll por defecto

            // Ocultamos todas las secciones
            hideAllSections();

            // Mostramos la sección correspondiente
            const targetId = this.getAttribute('href').substring(1); // Obtener el ID del href
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'flex';
            }
        });
    });
});