document.addEventListener('DOMContentLoaded', () => {
    const listVideo = document.querySelectorAll('.video-list .vid');
    const mainVideo = document.querySelector('.main-video iframe');
    const title = document.querySelector('.main-video .title');
    const searchBar = document.getElementById('search');

    listVideo.forEach(video => {
        video.addEventListener('click', () => {
            listVideo.forEach(vid => vid.classList.remove('active'));
            video.classList.add('active');
            const sources = JSON.parse(video.dataset.sources);
            mainVideo.src = sources[0];
            title.textContent = video.querySelector('.title').textContent;
        });
    });

    searchBar.addEventListener('input', () => {
        const filter = searchBar.value.toLowerCase();
        listVideo.forEach(video => {
            const title = video.getAttribute('data-title').toLowerCase();
            video.style.display = title.includes(filter) ? '' : 'none';
        });
    });

    // Bloquear cualquier intento de abrir ventanas emergentes
    window.open = function() {
        console.log("Intento de abrir una ventana emergente bloqueado");
        return null;
    };

    document.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.target === '_blank') {
            event.preventDefault();
            console.log("Intento de abrir un enlace en una nueva ventana bloqueado");
        }
    });
});