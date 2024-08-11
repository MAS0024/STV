/*(function() {
    // Patrones de URL que indican que el contenido es un anuncio
    const adPatterns = [
        /join.worldoftanks.com/,
        /adsbygoogle/,
        /adservice.google.com/,
        /googlesyndication.com/,
        /ads/,
        /adtrack/,
        /banner/,
        /banners/,
        /sponsor/,
        /lps.iluvestreaming.com/,
        /stake.com/,
        /betano.bet.ar/,
        /www.betano.bet.ar/,
        /ofertas.pba.betsson.bet.ar/,
        /pba.betsson.bet.ar/,
        /go.aff.apuestashouse.com/,
        /tullosllc.com/,
        /refpa4293501.top/,
        /codere.bet.ar/,
        /mikedownload.net/,
        /downloadoperagx.net/,
        /promo.worldofwarships.com/,
        /promo.codere.bet.ar/,
        /mikedownload.net/,
        /stake.mba/,
        /roobet.com/,
        /legalsofafalter.com/,
        /inolorak.co.in/,
        /getramusinc.azurewebsites.net/,
        /www.voegol.com.br/,
        /promo.codere.bet.ar/,
        /online.codere.bet.ar/,
        /gml-grp.com/,
        /ak.phaunaitsi.net/,
        /ak.phaunaitsi.net/
    ];

    // Función para eliminar anuncios
    function removeAds() {
        const elements = document.querySelectorAll('iframe, script, div, section');

        elements.forEach(el => {
            const src = el.src || el.dataset.src || '';
            adPatterns.forEach(pattern => {
                if (pattern.test(src) || pattern.test(el.className) || pattern.test(el.id) || pattern.test(el.innerHTML)) {
                    console.log('Ad removed:', el); // Registro de los elementos eliminados
                    el.remove();
                }
            });
        });
    }

    // Bloquea ventanas emergentes
    window.open = function(url, name, specs) {
        console.log('Pop-up blocked:', url);
        return null;
    };

    // Bloquea alertas (frecuentemente usadas en anuncios intrusivos)
    window.alert = function(message) {
        console.log('Alert blocked:', message);
    };

    // Ejecuta el adblocker al cargar la página
    window.addEventListener('load', () => {
        removeAds();
        setInterval(removeAds, 5000); // Verificar y eliminar anuncios cada 5 segundos
    });
})();
*/
  // Bloqueo de ventanas emergentes
  window.open = function() {
    console.log("Intento de abrir una ventana emergente bloqueada.");
    return null;
};

// Bloqueo de redireccionamientos automáticos
window.onbeforeunload = function() {
    return "¿Estás seguro de que quieres salir de esta página?";
};

// Bloqueo de anuncios y elementos de seguimiento
const adSelectors = [
    'iframe[src*="ads"]',
    'iframe[src*="advertising"]',
    'iframe[src*="adservice"]',
    'iframe[src*="doubleclick"]',
    'iframe[src*="googlesyndication"]',
    'iframe[src*="popads"]',
    'iframe[src*="ad"]'
];

function removeAds() {
    adSelectors.forEach(selector => {
        const ads = document.querySelectorAll(selector);
        ads.forEach(ad => ad.remove());
    });
}

// Observa cambios en la página para eliminar anuncios dinámicos
const observer = new MutationObserver(removeAds);
observer.observe(document.body, { childList: true, subtree: true });

// Ejecutar al cargar la página
window.onload = function() {
    removeAds();
};

// Evitar que los enlaces causen redirecciones no deseadas
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.href.includes('ad')) {
        event.preventDefault();
        console.log("Intento de redireccionamiento bloqueado:", event.target.href);
    }
});

// Evitar el uso de contextmenu para prevenir métodos no deseados
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});
