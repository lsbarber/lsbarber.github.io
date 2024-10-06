document.getElementById('form-reseña').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página

    // Obtén los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const comentario = document.getElementById('comentario').value;

    // Crea un nuevo div para la reseña
    const reseñaDiv = document.createElement('div');
    reseñaDiv.classList.add('reseña');

    // Crea el nombre del usuario en h3
    const nombreUsuario = document.createElement('h3');
    nombreUsuario.textContent = nombre;

    // Crea el comentario en un párrafo
    const comentarioUsuario = document.createElement('p');
    comentarioUsuario.textContent = comentario;

    // Añade el nombre y el comentario al div de reseña
    reseñaDiv.appendChild(nombreUsuario);
    reseñaDiv.appendChild(comentarioUsuario);

    // Añade la reseña a la lista de reseñas
    document.getElementById('lista-reseñas').appendChild(reseñaDiv);

    // Limpia los campos del formulario
    document.getElementById('form-reseña').reset();
});
