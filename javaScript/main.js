function accion(){
    var enlace = document.getElementsByClassName('prueba');
    for (var index = 0; index < enlace.length; index++) {
        enlace[index].classList.toggle('prueba');
        
    }
}