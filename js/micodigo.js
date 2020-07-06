function hacerclick ()
    {
        var lista=document.getElementById(`principal`).querySelectorAll("p");
        lista[1].onclick=mostraralerta;
    }
function mostraralerta() 
    {
        alert(`hizo click!`);
    }
window.onload=hacerclick;
