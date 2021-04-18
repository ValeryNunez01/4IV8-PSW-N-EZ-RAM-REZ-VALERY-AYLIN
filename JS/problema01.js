//"e" es un evento
function validarn(e){
    //dame todo lo que venga de entrada del documento
    var teclado = (document.all)?e.keycode:e.which;
    if(teclado == 8)return true;
    var patron = /[0-9\d .]/;
    // /d digito /s string
    //==8 es el codigo de la tecla numerica
    //va a obtener el codigo de la tecla que estamos presionando y la va a transformar a cadena
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
    //test es metodo de testeo

    //submit hace un envio de todoo el formulario
}

function interes(){
    if(isNaN(parseInt(document.formulario.cantidad.value)) || isNaN(parseInt(document.formulario.mes.value))){
        alert("No ingresó ningún número")
        document.formulario.sueldoti.value = "";
        return false;
    }
    else{
    var valor = document.formulario.cantidad.value;
    var valor_dos = document.formulario.mes.value;
    var result_uno = parseInt(valor_dos);
    var result = parseInt(valor);
    var interes = (result*0.02)*result_uno;
    var total = result+interes
    document.formulario.sueldoti.value = "$"+total;
    }
}

function borrar(){
    document.formulario.sueldoti.value = "";
    document.formulario.cantidad.value = "";
    document.formulario.mes.value = "";
}
