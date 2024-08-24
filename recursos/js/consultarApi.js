// URL de la API
const apiURL = '';

// Referencias a los elementos del formulario
const form = document.getElementById('FormularioEstudiante');
const btnRegistrar = document.getElementById('btnRegistrar');
const btnVisualizar = document.getElementById('btnVisualizar');
const btnEliminar = document.getElementById('btnEliminar');

// Función para obtener los datos del formulario
function obtenerDatosFormulario() {
    return {
        primerNombre: document.getElementById('primerNombre').value,
        segundoNombre: document.getElementById('segundoNombre').value,
        primerApellido: document.getElementById('primerApellido').value,
        segundoApellido: document.getElementById('segundoApellido').value,
        numeroTelefonico: document.getElementById('numeroTelefonico').value,
        correoElectronico: document.getElementById('correoElectronico').value,
        cuiPersonal: document.getElementById('cuiPersonal').value
    };
}

// Función para registrar un nuevo estudiante
btnRegistrar.addEventListener('click', () => {
    const datos = obtenerDatosFormulario();

    fetch(apiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
    })
    .then(response => response.json())
    .then(data => {
        alert('Estudiante registrado exitosamente');
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Función para visualizar los estudiantes registrados
btnVisualizar.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const tablaEstudiantes = document.getElementById('tablaEstudiantes');
        const tbody = tablaEstudiantes.querySelector('tbody');

        // Limpiar el contenido anterior
        tbody.innerHTML = '';

        // Rellenar la tabla con los datos obtenidos
        data.forEach(estudiante => {
            const fila = document.createElement('tr');
            
            fila.innerHTML = `
                <td>${estudiante.primerNombre}</td>
                <td>${estudiante.segundoNombre}</td>
                <td>${estudiante.primerApellido}</td>
                <td>${estudiante.segundoApellido}</td>
                <td>${estudiante.numeroTelefonico}</td>
                <td>${estudiante.correoElectronico}</td>
                <td>${estudiante.cuiPersonal}</td>
            `;
            
            tbody.appendChild(fila);
        });

        // Mostrar la tabla
        tablaEstudiantes.style.display = 'table';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


// Función para eliminar un estudiante (según CUI)
btnEliminar.addEventListener('click', () => {
    const cuiPersonal = document.getElementById('cuiPersonal').value;

    fetch(`${apiURL}/${cuiPersonal}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            alert('Estudiante eliminado exitosamente');
        } else {
            alert('No se pudo eliminar el estudiante');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

btnEliminar.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const tablaEstudiantes = document.getElementById('tablaEstudiantes');
        const tbody = tablaEstudiantes.querySelector('tbody');

        // Limpiar el contenido anterior
        tbody.innerHTML = '';

        // Rellenar la tabla con los datos obtenidos y un botón de eliminar
        data.forEach(estudiante => {
            const fila = document.createElement('tr');
            
            fila.innerHTML = `
                <td>${estudiante.primerNombre}</td>
                <td>${estudiante.segundoNombre}</td>
                <td>${estudiante.primerApellido}</td>
                <td>${estudiante.segundoApellido}</td>
                <td>${estudiante.numeroTelefonico}</td>
                <td>${estudiante.correoElectronico}</td>
                <td>${estudiante.cuiPersonal}</td>
                <td>
                    <button onclick="eliminarEstudiante('${estudiante.cuiPersonal}')">Eliminar</button>
                </td>
            `;
            
            tbody.appendChild(fila);
        });

        // Mostrar la tabla
        tablaEstudiantes.style.display = 'table';
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Función para eliminar un estudiante
function eliminarEstudiante(cuiPersonal) {
    if (confirm('¿Estás seguro de que deseas eliminar a este estudiante?')) {
        fetch(`${apiURL}/${cuiPersonal}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                alert('Estudiante eliminado exitosamente');
                // Vuelve a cargar la lista para reflejar los cambios
                btnEliminar.click();
            } else {
                alert('No se pudo eliminar el estudiante');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }
}
