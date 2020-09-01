document.body.onload = addElement();

function addElement(){
    var divElem = document.createElement("div");
    var porcentaje = document.createElement("a");
    var aElem = document.createElement("a",{
        "id": "id",
        "class": "this that and so on",
        "data-whatever": "whatever data",
    });

    divElem.setAttribute('class', 'divElem')
    divElem.style.width = "100%"
    document.body.appendChild(divElem);

    aElem.setAttribute('class', 'aElem');
    aElem.setAttribute('href', 'javascript:window.open("http://hekvh.com")');
    aElem.innerHTML = "DRINK ME";
    aElem.style.marginLeft = "10px";

    divElem.appendChild(aElem); //

    porcentaje.setAttribute('class', 'aElem');

    var eatMe = document.createElement("a");
    eatMe.setAttribute('class', 'aElem');
    eatMe.setAttribute('opacity', '1');
    eatMe.setAttribute('href', '');
    eatMe.style.opacity = '1';

    eatMe.innerHTML = "EAT ME";
    console.log("hola");
    eatMe.style.marginLeft = "10px";
    divElem.appendChild(eatMe);

    porcentaje.setAttribute('href', 'javascript:window.open("http://hekvh.com")');
    porcentaje.innerHTML = "100%";
    porcentaje.style.marginLeft = "10px";
    divElem.appendChild(porcentaje);

    eatMe.addEventListener('click', () => {
        alert(opacidad);

    })
    
    var opacidad = eatMe.style.opacity;
    var intervalo = setInterval(function () {

        /*if(eatMe.style.visibility === 'hidden'){
            eatMe.style.visibility = 'visible';
        }  */
        opacidad = eatMe.style.opacity;
        opacidad = parseFloat(opacidad);
        console.log(opacidad);
        opacidad = opacidad - 0.1
        console.log(opacidad);

        eatMe.style.opacity = opacidad.toString();
        console.log(eatMe.style.opacity);
        porcentaje.innerHTML = "  " + (eatMe.style.opacity * 100) + " %";

        if (opacidad == 0) {
            clearInterval(intervalo);
        }
    }, 500);

}



