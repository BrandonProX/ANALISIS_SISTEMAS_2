const gradoSelect = document.getElementById('gradoForo');
    const materiaSelect = document.getElementById('materiaForo');
    const foroSeleccionado = document.getElementById('foro-seleccionado');

    function manejarSeleccion() {
        if (gradoSelect.value !== '' && materiaSelect.value !== '') {
            crearForo(gradoSelect.value, materiaSelect.value);
        } else {
            foroSeleccionado.innerHTML = '';
            foroSeleccionado.style.display = 'none';
        }
    }

    gradoSelect.addEventListener('change', manejarSeleccion);
    materiaSelect.addEventListener('change', manejarSeleccion);

    function crearForo(grado, materia) {
        foroSeleccionado.innerHTML = `
            <div class="descripcion-foro">
            <h3>${grado} - ${materia}</h3>
            <input type="text" id="tituloComentario" placeholder="Título del comentario" class="inputComentario"/>
            <textarea id="nuevoComentario" placeholder="Escribe tu comentario aquí..." class="textareaComentario"></textarea>
            <input type="file" id="archivoAdjunto" />
            <button onclick="agregarComentario()">Enviar Comentario</button>
            </div>
            <div id="listaComentarios"></div>
        `;
        foroSeleccionado.style.display = 'block';
    }

    function agregarComentario() {
        const tituloInput = document.getElementById('tituloComentario').value.trim();
        const comentarioInput = document.getElementById('nuevoComentario').value.trim();
        const archivoAdjunto = document.getElementById('archivoAdjunto').files[0];

        if (tituloInput === '' || comentarioInput === '') {
            alert('Por favor, completa el título y el comentario.');
            return;
        }

        const listaComentarios = document.getElementById('listaComentarios');
        const nuevoComentario = document.createElement('div');
        nuevoComentario.classList.add('comentario');

        const fecha = new Date();
        let archivoInfo = archivoAdjunto ? `<small>Archivo adjunto: ${archivoAdjunto.name}</small>` : '';

        nuevoComentario.innerHTML = `
            <span class="titulo">${tituloInput}</span>
            <p>${comentarioInput}</p>
            <small>${fecha.toLocaleDateString()} ${fecha.toLocaleTimeString()}</small>
            ${archivoInfo}
        `;

        listaComentarios.appendChild(nuevoComentario);
        
        // Limpiar campos
        document.getElementById('tituloComentario').value = '';
        document.getElementById('nuevoComentario').value = '';
        document.getElementById('archivoAdjunto').value = ''; // Reset del archivo adjunto
    }