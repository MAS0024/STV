(function() {
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
        /www.voegol.com.br/
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
