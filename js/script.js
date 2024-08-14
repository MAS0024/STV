document.addEventListener('DOMContentLoaded', () => {
    const listVideo = document.querySelectorAll('.video-list .vid');
    const mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');
    const searchBar = document.getElementById('search');

    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            const sources = JSON.parse(video.dataset.sources);
            mainVideo.src = sources[0];
            title.textContent = video.querySelector('.title').textContent;
            updateSourceOptions(sources);
        });
    });
    changeSourceBtn.addEventListener('click', () => {
        const selectedSource = sourceSelect.value;
        mainVideo.src = selectedSource;
    });

    function updateSourceOptions(sources) {
        sourceSelect.innerHTML = '';
        sources.forEach((source, index) => {
            const option = document.createElement('option');
            option.value = source;
            option.textContent = `Fuente ${index + 1}`;
            sourceSelect.appendChild(option);
        });
    }
    

    //BLOQUEO
    function bloquearPopups() {
        window.open = function() {
            console.log("Intento de abrir un pop-up bloqueado.");
            return null;
        };

        document.querySelectorAll('a[target="_blank"]').forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                console.log("Intento de abrir un enlace en nueva pestaña bloqueado.");
            });
        });
    }

    // Llama a la función de bloqueo de pop-ups
    bloquearPopups();

    // Función para cambiar el canal en el iframe
    document.querySelectorAll('#playlist a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var url = this.getAttribute('data-url');
            document.getElementById('reproductor').src = url;

            // Resaltar el canal seleccionado
            document.querySelectorAll('#playlist a').forEach(function(link) {
                link.style.backgroundColor = '#007bff';
            });
            this.style.backgroundColor = '#0056b3';
        });
    });

    // Función para recargar el contenido del iframe
    document.getElementById('recargar-btn').addEventListener('click', function() {
        var reproductor = document.getElementById('reproductor');
        reproductor.src = reproductor.src; // Recarga el iframe
    });
});
    