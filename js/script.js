
document.addEventListener('DOMContentLoaded', () => {
    const videoListContainer = document.getElementById('video-list');
    let mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const description = document.querySelector('.main-video .description');
    const sourceSelect = document.getElementById('sourceSelect');
    const changeSourceBtn = document.getElementById('changeSourceBtn');
    const searchBar = document.getElementById('search');


    canales.forEach((canal) => {
        const videoElement = document.createElement('div');
        videoElement.classList.add('vid');
        videoElement.dataset.sources = JSON.stringify(canal.sources);
        videoElement.dataset.title = canal.title;
        videoElement.dataset.description = canal.description; // Almacena la descripción en el dataset

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

            // Actualiza el título y la descripción en la sección principal
            title.textContent = video.dataset.title;
            //description.textContent = video.dataset.description;
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

            // Agrega "ads" a la opción 2 si está disponible
            if (index === 1) { // Index 1 corresponde a la segunda opción
                option.textContent = `Opción ${index + 1} (ads)`;
            } else {
                option.textContent = `Opción ${index + 1}`;
            }

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

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.querySelector('.title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                video.style.display = '';
            } else {
                video.style.display = 'none';
            }
        });
    });
    
});
