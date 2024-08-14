document.addEventListener('DOMContentLoaded', () => {
    let mainVideo = document.querySelector('.main-video iframe'); 
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
            mainVideo.src = sources[0];
            title.textContent = video.querySelector('.title').textContent;
            updateSourceOptions(sources);
        });
    });

    changeSourceBtn.addEventListener('click', () => {
        const selectedSourceIndex = sourceSelect.selectedIndex;
        const selectedSource = sourceSelect.value;
        const newIframe = document.createElement('iframe');
        newIframe.id = 'reproductor';
        newIframe.src = selectedSource;
        newIframe.allow = 'autoplay; encrypted-media';
        newIframe.allowFullscreen = true;

        if (selectedSourceIndex !== 1) { 
            newIframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups-to-escape-sandbox');
        }


        mainVideo.parentNode.replaceChild(newIframe, mainVideo);
        mainVideo = newIframe;
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
    
    searchBar.addEventListener('input', () => {
        const filter = searchBar.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.getAttribute('data-title').toLowerCase();
            video.style.display = title.includes(filter) ? '' : 'none';
        });
    });


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
