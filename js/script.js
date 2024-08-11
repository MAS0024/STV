/*document.addEventListener('DOMContentLoaded', () => {
    const listVideo = document.querySelectorAll('.video-list .vid');
    const mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const searchBar = document.getElementById('search');

    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            if (video.classList.contains('active')) {
                const src = video.dataset.src;
                mainVideo.src = src;
                title.textContent = video.querySelector('.title').textContent;
            }
        });
    });

    searchBar.addEventListener('input', () => {
        const filter = searchBar.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.getAttribute('data-title').toLowerCase();
            video.style.display = title.includes(filter) ? '' : 'none';
        });
    });
});


    document.addEventListener('DOMContentLoaded', () => {

        const listVideo = document.querySelectorAll('.video-list .vid');
        const mainVideo = document.querySelector('.main-video iframe');
        const title = document.querySelector('.main-video .title');
        const searchBar = document.getElementById('search');
        const sourceSelect = document.getElementById('sourceSelect');
        const changeSourceBtn = document.getElementById('changeSourceBtn');
        
        // Crear una capa superpuesta sobre el iframe
        const overlay = document.createElement('div');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'transparent';
        overlay.style.zIndex = '2';
        overlay.style.cursor = 'pointer';
        
        // Insertar la capa superpuesta sobre el iframe
        const mainVideoContainer = document.querySelector('.main-video');
        mainVideoContainer.style.position = 'relative';
        mainVideoContainer.appendChild(overlay);
        
        // Quitar la capa superpuesta al primer clic
        overlay.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            mainVideo.src = mainVideo.src; // Recargar el iframe para asegurar que el video se reproduzca
            overlay.style.display = 'none'; // Ocultar la capa superpuesta
        });
        
        listVideo.forEach(video => {
            video.addEventListener('click', (event) => {
                event.preventDefault();
                event.stopPropagation();

                listVideo.forEach(vid => vid.classList.remove('active'));
                video.classList.add('active');

                const sources = JSON.parse(video.dataset.sources);
                mainVideo.src = sources[0];
                title.textContent = video.querySelector('.title').textContent;
                updateSourceOptions(sources);
                
                // Restaurar la capa superpuesta cuando se selecciona un nuevo video
                overlay.style.display = 'block';
            });
        });

        searchBar.addEventListener('input', () => {
            const filter = searchBar.value.toLowerCase();
            listVideo.forEach(video => {
                const title = video.getAttribute('data-title').toLowerCase();
                video.style.display = title.includes(filter) ? '' : 'none';
            });
        });

        changeSourceBtn.addEventListener('click', () => {
            const selectedSource = sourceSelect.value;
            mainVideo.src = selectedSource;
            
            // Restaurar la capa superpuesta cuando se cambia la fuente
            overlay.style.display = 'block';
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
    });

*/

document.addEventListener('DOMContentLoaded', () => {
    const listVideo = document.querySelectorAll('.video-list .vid');
    const mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const searchBar = document.getElementById('search');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');

    // Crear una capa superpuesta sobre el iframe
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'transparent';
    overlay.style.zIndex = '2';
    overlay.style.cursor = 'pointer';

    // Insertar la capa superpuesta sobre el iframe
    const mainVideoContainer = document.querySelector('.main-video');
    mainVideoContainer.style.position = 'relative';
    mainVideoContainer.appendChild(overlay);

    // Quitar la capa superpuesta al primer clic
    overlay.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        mainVideo.src = mainVideo.src; // Recargar el iframe para asegurar que el video se reproduzca
        overlay.style.display = 'none'; // Ocultar la capa superpuesta
    });

    listVideo.forEach(video => {
        video.addEventListener('click', (event) => {
            event.preventDefault();
            event.stopPropagation();

            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');

            const sources = JSON.parse(video.dataset.sources);
            setVideoSource(sources[0]);
            title.textContent = video.querySelector('.title').textContent;
            updateSourceOptions(sources);

            // Restaurar la capa superpuesta cuando se selecciona un nuevo video
            overlay.style.display = 'block';
        });
    });

    searchBar.addEventListener('input', () => {
        const filter = searchBar.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.getAttribute('data-title').toLowerCase();
            video.style.display = title.includes(filter) ? '' : 'none';
        });
    });

    changeSourceBtn.addEventListener('click', () => {
        const selectedSource = sourceSelect.value;
        setVideoSource(selectedSource);
        
        // Restaurar la capa superpuesta cuando se cambia la fuente
        overlay.style.display = 'block';
    });

    function setVideoSource(source) {
        if (isBlocked(source)) {
            console.warn(`URL bloqueada: ${source}`);
            mainVideo.src = ''; // No asignar la URL bloqueada
        } else {
            mainVideo.src = source;
        }
    }

    function isBlocked(url) {
        // Lista de patrones de URLs bloqueadas (ajusta según sea necesario)
        const blockedPatterns = [
            /adserver/i,
            /advertisement/i,
            /tracking/i,
            /promo/i
        ];
        return blockedPatterns.some(pattern => pattern.test(url));
    }

    function updateSourceOptions(sources) {
        sourceSelect.innerHTML = '';
        sources.forEach((source, index) => {
            const option = document.createElement('option');
            option.value = source;
            option.textContent = `Fuente ${index + 1}`;
            sourceSelect.appendChild(option);
        });
    }
});
