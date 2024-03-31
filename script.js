window.addEventListener('scroll', function () {
    var nav = document.getElementById('mainNav');
    if (window.scrollY > 0) {
        nav.classList.add('opacity-100', 'transition-opacity');
    } else {
        nav.classList.remove('opacity-100', 'transition-opacity');
    }
});




/*SCALE CUADROS*/
function isInViewport(element) {
    var bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function escalarEnPantalla(elementId, scaleClass) {
    var elemento = document.getElementById(elementId);
    if (isInViewport(elemento)) {
        elemento.classList.add(scaleClass);
    } else {
        elemento.classList.remove(scaleClass);
    }
}

window.addEventListener('scroll', function () {
    escalarEnPantalla('miDiv1', 'scale-110');
    escalarEnPantalla('miDiv2', 'scale-110');
    escalarEnPantalla('miDiv3', 'scale-110');
    escalarEnPantalla('miDiv4', 'scale-110');
    escalarEnPantalla('miDiv5', 'scale-110');
    escalarEnPantalla('miDiv6', 'scale-110');
    escalarEnPantalla('miDiv7', 'scale-110');
    escalarEnPantalla('miDiv8', 'scale-110');
    escalarEnPantalla('proyect1', 'scale-110');
    escalarEnPantalla('proyect2', 'scale-110');




});

escalarEnPantalla('miDiv1', 'scale-110');
escalarEnPantalla('miDiv2', 'scale-110');
escalarEnPantalla('miDiv3', 'scale-110');
escalarEnPantalla('miDiv4', 'scale-110');
escalarEnPantalla('miDiv5', 'scale-110');
escalarEnPantalla('miDiv6', 'scale-110');
escalarEnPantalla('miDiv7', 'scale-110');
escalarEnPantalla('miDiv8', 'scale-110');
escalarEnPantalla('proyect1', 'scale-110');
escalarEnPantalla('proyect2', 'scale-110');


