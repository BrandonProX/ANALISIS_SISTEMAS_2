async function obtenerAlumnos() {
    try {
        // Reemplaza esta URL con la de tu API real
        const respuesta = await fetch('https://localhost:7109/api/Alumnos');
        
        // Verifica si la respuesta es correcta
        if (!respuesta.ok) {
            throw new Error('Error al obtener los datos');
        }

        const alumnos = await respuesta.json();
        const tbody = document.getElementById('alumnosTbody');
        
        // Limpia el contenido previo
        tbody.innerHTML = '';

        // Rellenar la tabla con los datos de la API
        alumnos.forEach(alumno => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${alumno.primerNombre}</td>
                <td>${alumno.primerApellido}</td>
                <td>${alumno.email}</td>
            `;
            tbody.appendChild(fila);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

// Llamamos a la función cuando la página se cargue
window.onload = obtenerAlumnos;