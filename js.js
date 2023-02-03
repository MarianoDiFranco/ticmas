function cambiaIdioma(lang) {
    location.hash = lang;
    location.reload();
}

var idioma = {
    eng: {
        welcome:
            "Welcome to my Resume " +
            "My name is Mariano " +
            "and i hope you like it!"
    },
    es: {
        welcome:
            "Bienvenidos a mi CV " +
            "Mi nombre es Mariano " +
            "y espero que les guste!"
    }
};

if (window.location.hash) {
    if (window.location.hash == "#eng") {
        contenido.textContent = idioma.eng.welcome;
    }
}