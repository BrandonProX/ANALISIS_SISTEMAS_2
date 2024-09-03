
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces del navbar
    const navLinks = document.querySelectorAll('nav ul li a');
    // Selecciona todos los artículos
    const articles = document.querySelectorAll('article');

    // Añade un evento de clic a cada enlace del navbar
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // Previene el comportamiento por defecto del enlace
            event.preventDefault();

            // Obtén el id del artículo que se debe mostrar
            const targetId = link.getAttribute('href').substring(1);

            // Oculta todos los artículos
            articles.forEach(article => {
                article.style.display = 'none';
            });

            // Muestra el artículo correspondiente al enlace clicado
            const targetArticle = document.getElementById(targetId);
            targetArticle.style.display = 'flex';
        });
    });
});
