let reproducir = "";
let mostrar = "";
let pausar = "";
let borrar = "";
let crearPlay = "";
let reproducirPlay = "";

const reproductor = {

    reproducir: function(id) {
        console.log(`Reproduciendo Cancion ID ${id}`);
        reproducir+="Reproduciendo Cancion ID" + id;
        document.getElementById("reproducir").innerHTML=reproducir;
    },
    mostrar: function(id) {
        console.log(`Reproduciendo Cancion ID ${id}`);
        mostrar+="Reproduciendo Cancion ID " + id;
        document.getElementById("mostrar").innerHTML=mostrar;
    },
    pausar: function(id) {
        console.log(`Reproduciendo Cancion ID ${id}`);
        pausar+="Reproduciendo Cancion ID " + id;
        document.getElementById("pausar").innerHTML=pausar;
    },
    borrar: function(id) {
        console.log(`Reproduciendo Cancion ID ${id}`);
        borrar+="Reproduciendo Cancion ID " + id;
        document.getElementById("borrar").innerHTML=borrar;
    },
    crearPlaylist: function(nombre) {
        console.log(`Reproduciendo Cancion ID ${nombre}`);
        crearPlay+="Reproduciendo Cancion ID " + nombre;
        document.getElementById("crearPlay").innerHTML=crearPlay;
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo Cancion ID ${nombre}`);
        reproducirPlay+="Reproduciendo Cancion ID " + nombre;
        document.getElementById("reproducirPlay").innerHTML=reproducirPlay;
    }
};

reproductor.crearPlaylist("Rock and Roll");
reproductor.reproducirPlaylist("Rock and Roll");
reproductor.mostrar("Mistery Train");
reproductor.borrar(15);


