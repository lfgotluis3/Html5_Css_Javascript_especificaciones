function iniciar ()
    {
        nombre1 = document.getElementById ("clave");
        nombre2 = document.getElementById ("texto");
        nombre1.addEventListener ("input", validacion, false);
        nombre2.addEventListener ("input", validacion, false);
        validacion ();
        document.informacion.addEventListener("invalid", check, true);
        document.getElementById("grabar").addEventListener("click", enviar, false);
        document.informacion.addEventListener(`input`, controlar, false);
        document.informacion.addEventListener ("submit", nuevoitem, false);
        mostrar();
    }
function validacion() 
    {
        if (nombre1.value == '' && nombre2.value == '') 
            {
                nombre1.setCustomValidity('llene el campo');
                nombre1.style.background = 'lightgreen';
                nombre2.setCustomValidity('');
                nombre2.style.background = 'lightgreen';
            }
        else 
            {
                nombre1.setCustomValidity('');
                nombre1.style.background = '#FFFFFF';
            }
    }
function check(e) 
    {
        var elemento = e.target;
        elemento.style.background = '#FFDDDD';
    }
function enviar() 
    {
        var valido = document.informacion.checkValidity();
        if (valido) 
            {
                document.informacion.submit();
            }
    }
function controlar(e) 
    {
        var elemento = e.target;
        if (elemento.validity.valid) 
            {
                elemento.style.background = `#FFFFFF`;
            }
        else 
            {
                elemento.style.background = `#FFDDDD`;
            }
    }
function nuevoitem ()
    {
        var clave = document.getElementById (`clave`).value;
        var valor = document.getElementById (`texto`).value;
        sessionStorage.setItem (clave, valor);
        mostrar ();
        document.getElementById(`clave`).value = ``;
        document.getElementById(`texto`).value = ``;
    }
function mostrar ()
    {
        var cajadatos =document.getElementById (`cajadatos`);
        cajadatos.innerHTML =   `<div>
                                    <button onclick =">
                                        eliminar todo ()">Eliminar todo
                                    </button>
                                </div>`;
        for (var f = 0; f < sessionStorage.length; f++) 
            {
                var clave = sessionStorage.key (f);
                var valor = sessionStorage.getItem (clave);
                cajadatos.innerHTML +=  `<div> 
                                            `+ clave +` - `+ valor +`
                                            <br>
                                            <button onclick = "eliminar (\`` + clave + `\`)">
                                                Eliminar
                                            </button>
                                        </div>`;
            }
    }
function eliminar (clave)
    {
        if (confirm (`Esta seguro?`))
            {
                sessionStorage.removeItem (clave);
                mostrar ();
            }
    }
function eliminarTodo ()
    {
        if (confirm (`Esta seguro?`))
            {
                sessionStorage.clear ();
                mostrar ();
            }
    }
window.addEventListener (`load`, iniciar, false);
