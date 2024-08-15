document.addEventListener('DOMContentLoaded', () => {
    let mainVideo = document.querySelector('.main-video iframe'); // Mantenemos la referencia del iframe original
    const listVideo = document.querySelectorAll('.video-list .vid');
    const title = document.querySelector('.main-video .title');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');
    const searchBar = document.getElementById('search');
    
    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            const sources = JSON.parse(video.dataset.sources);
            
            // Actualizamos las opciones del select y cambiamos el iframe automáticamente
            updateSourceOptions(sources);
            changeIframeSource(sources[0]); // Cambiamos la fuente y aplicamos sandbox si es necesario
            title.textContent = video.querySelector('.title').textContent;
        });
    });

    changeSourceBtn.addEventListener('click', () => {
        const selectedSource = sourceSelect.value;
        changeIframeSource(selectedSource);
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

    function changeIframeSource(source) {
        const selectedSourceIndex = Array.from(sourceSelect.options).findIndex(option => option.value === source);
        
        // Creamos un nuevo iframe para cambiar la fuente
        const newIframe = document.createElement('iframe');
        newIframe.id = 'reproductor';
        newIframe.src = source;
        newIframe.allow = 'autoplay; encrypted-media';
        newIframe.allowFullscreen = true;

        if (selectedSourceIndex !== 1) { // Aplica el sandbox para cualquier opción que no sea la opción 2
            newIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups-to-escape-sandbox');
        }

        // Reemplazamos el iframe manteniendo la referencia correcta
        mainVideo.parentNode.replaceChild(newIframe, mainVideo);
        mainVideo = newIframe; // Actualizamos la referencia de mainVideo
    }
    
    searchBar.addEventListener('input', () => {
        const filter = searchBar.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.getAttribute('data-title').toLowerCase();
            video.style.display = title.includes(filter) ? '' : 'none';
        });
    });

    // BLOQUEO DE POP-UPS
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

    bloquearPopups();
});
