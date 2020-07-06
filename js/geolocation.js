function iniciar ()
    {
        var boton = document.getElementById (`obtener`);
        boton.addEventListener (`click`, obtener, false);
    }
function obtener ()
    {
        navigator.geolocation.watchPosition (mostrar, errores);
    }
function mostrar (posicion)
    {
        var ubicacion = document.getElementById (`ubicacion`);
        var mapurl = `http://maps.google.com/maps/api/staticmap?center =` + posicion.coords.latitude + `,` +posicion.coords.longitude + `& zoom = 12 & size = 400 * 400 & sensor = false & markers = ` + posicion.coords.latitude + `,` +posicion.coords.longitude;
        ubicacion.innerHTML = `<img src="`+ mapurl +`">`;
    }
function errores (error)
    {
        alert (`Error: ` + error.code + `` + error.message);
    }
window.addEventListener (`load`, iniciar, false);