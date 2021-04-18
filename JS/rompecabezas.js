var piezas = document.getElementsByClassName('movil');

var tanWidth = [134, 192, 134, 163, 134, 163, 134, 192, 134];
var tanHeight = [163, 134, 163, 134, 192, 134, 163, 134, 163];

for(var i=0 ; i<piezas.length ; i++){
    piezas[i].setAttribute("width", tanWidth[i]);
    piezas[i].setAttribute("height",tanHeight[i]);

    piezas[i].setAttribute("x",Math.floor((Math.random()*10)+1));
    piezas[i].setAttribute("y",Math.floor((Math.random()*409)+1));
    piezas[i].setAttribute("onmousedown", "seleccionarElemento(evt)");
}

var elementoSeleccionado = 0;
var currentX = 0;
var currentY = 0;
var currentPosX = 0;
var currentPosY = 0;

function moverElemnto(evt){
    var dx = evt.clienteX - currentX;
    var dy = evt.clienteY - currentY;

    currentPosX = currentPosX + dx;
    currentPosY = currentPosY + dy;

    elementoSeleccionado.setAttribute("x", currentPosX);
    elementoSeleccionado.setAttribute("y", currentPosY);

    currentX = evt.clienteX;
    currencY = evt.clienteY;

    elementoSeleccionado.setAttribute("onmouseout", "deseleccionarElemento(evt)");
    elementoSeleccionado.setAttribute("onmouseup", "deseleccionarElemento(evt)");

    iman();
}

function deseleccionarElemento(evt){
    testing();
    if(elementoSeleccionado != 0){
        elementoSeleccionado.removeAttribute("onmousemove");
        elementoSeleccionado.removeAttribute("onmousemove");
        elementoSeleccionado.removeAttribute("onmousemove");
        elementoSeleccionado = 0;
    }
}

var entorno = document.getElementById('entorno');
//todas son de tipo eventoporque necesitamos la interación con el mouse
function reordenar(evt){
    var padre = evt.target.parentNode;
    var clone = padre.cloneNode(true);
    var id = padre.getAttribute("id");

    entorno.removeChild(document.getElementById(id));
    entorno.appendChild(clone);

    return entorno.lastChild.firstChild;
}

var origX = [200, 304, 466, 200, 333, 437, 200, 304, 466];
var origY = [100, 100, 100, 233, 204, 233, 337, 366, 337];

function iman(){
    for(var i=0 ; i<piezas.length ; i++){
        if(Math.abs(currentPosX-ori))
    }
}

var win = document.getElementById('win');

function testing(){
    var bien_ubicada = 0;
    var padre = document.getElementsByClassName('padre');

    for(var i=0 ; i<piezas.length ; i++){
        var posx = parseFloat(padres[i].firstChild.getAttribute("x"));
        var posy = parseFloat(padres[i].firstChild.getAttribute("y"));
        
        ide = padres[i].getAttribute("id");
        if(origX[ide] == posx && origY[ide] == posy){
            bien_ubicada = bien_ubicada + 1;
        }
    }
    if(bien_ubicada == 9){
        win.play();
    }
}