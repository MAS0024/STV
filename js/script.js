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
    });

    function updateSourceOptions(sources) {
        sourceSelect.innerHTML = '';
        sources.forEach((source, index) => {
            const option = document.createElement('option');
            option.value = source;
            option.textContent = `Fuente ${index + 1}`;
            sourceSelect.appendChild(option);
        });

 /*       window.onload = function() {
            var iframe = document.getElementById('mainPlayer');
            iframe.onload = function() {
                var iframeWindow = iframe.contentWindow;
                var originalOpen = iframeWindow.open;
                iframeWindow.open = function() {
                    console.log("Pop-up bloqueado");
                    return null;  // Previene la apertura de pop-ups
                };
            };
        };

         window.onload = function() {
            var iframe = document.getElementById('mainPlayer');
            iframe.onload = function() {
                var iframeWindow = iframe.contentWindow;
                iframeWindow.open = function() {
                    console.log("Pop-up bloqueado");
                    return null;  // Previene la apertura de pop-ups
                };
            };
        };

        window.onload = function() {
            var iframe = document.getElementById('mainPlayer');
            iframe.onload = function() {
                var iframeWindow = iframe.contentWindow;
                var originalOpen = iframeWindow.open;

                try {
                    iframeWindow.open = function() {
                        console.log("Pop-up bloqueado");
                        return null;
                    };
                } catch (error) {
                    console.log("No se puede bloquear pop-ups debido al sandbox. Ajustando...");
                    iframe.removeAttribute("sandbox");  // Retira el sandbox si es necesario
                    iframe.src = iframe.src;  // Recarga el iframe sin sandbox
                }
            };
        };*/

       /* function blockPopups(iframe) {
            try {
                var iframeWindow = iframe.contentWindow || iframe.contentDocument;

                if (iframeWindow) {
                    // Bloquea window.open
                    iframeWindow.open = function() {
                        console.log("Intento de pop-up bloqueado");
                        return null;
                    };

                    // Bloquea cambios en window.location
                    Object.defineProperty(iframeWindow, 'location', {
                        set: function(url) {
                            console.log("Intento de redirección bloqueado:", url);
                        }
                    });

                    // Bloquea alert, confirm, prompt
                    iframeWindow.alert = iframeWindow.confirm = iframeWindow.prompt = function() {
                        console.log("Intento de alert/confirm/prompt bloqueado");
                        return null;
                    };

                    // Monitorea y bloquea posibles cambios en el DOM que intenten abrir anuncios
                    new MutationObserver(function(mutations) {
                        mutations.forEach(function(mutation) {
                            if (mutation.addedNodes.length) {
                                Array.from(mutation.addedNodes).forEach(function(node) {
                                    if (node.tagName === 'SCRIPT' || node.tagName === 'IFRAME') {
                                        node.parentNode.removeChild(node);
                                        console.log("Intento de anuncio bloqueado y eliminado:", node.tagName);
                                    }
                                });
                            }
                        });
                    }).observe(iframe.contentDocument, { childList: true, subtree: true });
                }
            } catch (error) {
                console.error("Error bloqueando pop-ups:", error);
            }
        }

        window.onload = function() {
            var iframe = document.getElementById('mainPlayer');
            iframe.onload = function() {
                blockPopups(iframe);
            };
        };
    }*/

        function setIframeSrc(url) {
            var iframe = document.getElementById('mainPlayer');

            // Si la URL es de "https://televisionlibretv.online/html/fl/?get=VHlDU3BvcnQ", se agrega el sandbox
            if (url === "https://televisionlibretv.online/") {
                console.log("Habilitando sandbox para la URL: " + url);
                iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-popups-to-escape-sandbox');
            } else {
                console.log("Deshabilitando sandbox para la URL: " + url);
                iframe.removeAttribute('sandbox');
            }

            // Establece la URL del iframe después de configurar el sandbox
            iframe.src = url;

            // Bloquea los pop-ups después de que se cargue el iframe
            iframe.onload = function() {
                blockPopups(iframe);
            };
        }

        window.onload = function() {
            // Llama a setIframeSrc con la URL que desees cargar
            setIframeSrc("https://streamtp.live/global1.php?stream=foxsportspremium");
            // O para otra URL que requiera el sandbox:
            // setIframeSrc("https://televisionlibretv.online/html/fl/?get=VHlDU3BvcnQ");
        };}
});
