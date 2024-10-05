const materiasData = [
    {
        materia: "Matematica",
        asistencia: "85%",
        examen: "80",
        notaFinal: "82"
    },
    {
        materia: "Lenguaje",
        asistencia: "90%",
        examen: "88",
        notaFinal: "89"
    },
    {
        materia: "M. Natural",
        asistencia: "95%",
        examen: "92",
        notaFinal: "93"
    },
    {
        materia: "M. Social",
        asistencia: "88%",
        examen: "85",
        notaFinal: "86"
    },
    {
        materia: "Ingles",
        asistencia: "92%",
        examen: "87",
        notaFinal: "89"
    },
    {
        materia: "Computacion",
        asistencia: "98%",
        examen: "95",
        notaFinal: "96"
    },
    {
        materia: "Ed. Fisica",
        asistencia: "100%",
        examen: "100",
        notaFinal: "100"
    },
    {
        materia: "Lectura",
        asistencia: "85%",
        examen: "78",
        notaFinal: "80"
    },
    {
        materia: "Form. Ciudadana",
        asistencia: "93%",
        examen: "90",
        notaFinal: "91"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const materiaSelect = document.getElementById('materia');
    const actividadesInput = document.querySelector('#notasForm table tr td:nth-child(1) input');
    const asistenciaInput = document.querySelector('#notasForm table tr td:nth-child(2) input');
    const examenInput = document.querySelector('#notasForm table tr td:nth-child(3) input');
    const notaFinalCell = document.querySelector('#notasForm table tr td:nth-child(4)');

    // Función para mostrar los datos de la materia seleccionada
    function mostrarDatosMateria(materia) {
        const materiaSeleccionada = materiasData.find(data => data.materia === materia);
        
        if (materiaSeleccionada) {
            actividadesInput.value = materiaSeleccionada.actividades;
            asistenciaInput.value = materiaSeleccionada.asistencia;
            examenInput.value = materiaSeleccionada.examen;
            notaFinalCell.textContent = materiaSeleccionada.notaFinal;
        } else {
            // Limpiar los campos si no hay materia seleccionada
            actividadesInput.value = '';
            asistenciaInput.value = '';
            examenInput.value = '';
            notaFinalCell.textContent = '00';
        }
    }

    // Evento que detecta el cambio en la selección de la materia
    materiaSelect.addEventListener('change', function() {
        const materiaSeleccionada = this.value;
        mostrarDatosMateria(materiaSeleccionada);
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

document.addEventListener("DOMContentLoaded", function() {
    const calendar = document.getElementById('calendar');
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    function renderCalendar(month, year) {
        let firstDay = new Date(year, month).getDay();
        let daysInMonth = 32 - new Date(year, month, 32).getDate();

        let calendarHTML = `
            <table>
                <tr>
                    <th class="prev" onclick="prevMonth()">&#10094;</th>
                    <th colspan="5">${months[month]} ${year}</th>
                    <th class="next" onclick="nextMonth()">&#10095;</th>
                </tr>
                <tr>
                    <th>Dom</th>
                    <th>Lun</th>
                    <th>Mar</th>
                    <th>Mié</th>
                    <th>Jue</th>
                    <th>Vie</th>
                    <th>Sáb</th>
                </tr>
        `;

        let date = 1;
        for (let i = 0; i < 6; i++) {
            calendarHTML += "<tr>";
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDay) {
                    calendarHTML += "<td></td>";
                } else if (date > daysInMonth) {
                    break;
                } else {
                    if (date === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                        calendarHTML += `<td class="today">${date}</td>`;
                    } else {
                        calendarHTML += `<td>${date}</td>`;
                    }
                    date++;
                }
            }
            calendarHTML += "</tr>";
        }

        calendarHTML += "</table>";
        calendar.innerHTML = calendarHTML;
    }

    window.prevMonth = function() {
        currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
        currentYear = (currentMonth === 11) ? currentYear - 1 : currentYear;
        renderCalendar(currentMonth, currentYear);
    }

    window.nextMonth = function() {
        currentMonth = (currentMonth === 11) ? 0 : currentMonth + 1;
        currentYear = (currentMonth === 0) ? currentYear + 1 : currentYear;
        renderCalendar(currentMonth, currentYear);
    }

    renderCalendar(currentMonth, currentYear);
});
