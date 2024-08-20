/*document.addEventListener('DOMContentLoaded', () => {
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

function cambiarFuente() {
    const sourceSelect = document.getElementById('sourceSelect');
    const reproductor = document.getElementById('reproductor');
    const selectedSource = sourceSelect.value;

    if (selectedSource) {
        reproductor.src = selectedSource;
    }
}

function actualizarFuentes(sources) {
    const sourceSelect = document.getElementById('sourceSelect');
    sourceSelect.innerHTML = 'Fuente';

    sources.forEach((source, index) => {
        const option = document.createElement('option');
        option.value = source;
        option.textContent = `Fuente ${index + 1}`;
        sourceSelect.appendChild(option);
    });

    
    if (sources.length > 0) {
        sourceSelect.value = sources[0];
        cambiarFuente();
    }
}


document.querySelectorAll('.vid').forEach((vid) => {
    vid.addEventListener('click', () => {
        const sources = JSON.parse(vid.getAttribute('data-sources'));
        actualizarFuentes(sources);
    });
});

document.getElementById('changeSourceBtn').addEventListener('click', cambiarFuente);
*/
document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');
    const searchBar = document.getElementById('search');

    // Cargar los canales desde canales.js y crear elementos en la lista de videos
    canales.forEach((canal) => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('vid');
        videoElement.dataset.sources = JSON.stringify(canal.sources);
        videoElement.dataset.title = canal.title;

        videoElement.innerHTML = `
            <img src="${canal.imgSrc}" alt="${canal.title}" />
            <h4 class="title">${canal.title}</h4>
        `;

        videoListContainer.appendChild(videoElement);
    });

    const listVideo = document.querySelectorAll('.video-list .vid');

    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            const sources = JSON.parse(video.dataset.sources);

            updateSourceOptions(sources);
            changeIframeSource(sources[0]);
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
            if (source) {
                const option = document.createElement('option');
                option.value = source;
                option.textContent = `Fuente ${index + 1}`;
                sourceSelect.appendChild(option);
            }
        });
    }

    function changeIframeSource(source) {
        const selectedSourceIndex = Array.from(sourceSelect.options).findIndex(option => option.value === source);

        const newIframe = document.createElement('iframe');
        newIframe.id = 'reproductor';
        newIframe.src = source;
        newIframe.allow = 'autoplay; encrypted-media';
        newIframe.allowFullscreen = true;

        if (selectedSourceIndex !== 1) {
            newIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups-to-escape-sandbox');
        }

        mainVideo.parentNode.replaceChild(newIframe, mainVideo);
        mainVideo = newIframe;
    }
});
