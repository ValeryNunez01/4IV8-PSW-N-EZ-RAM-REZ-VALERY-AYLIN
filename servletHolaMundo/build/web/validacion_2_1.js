function checar(){
    var cadena = document.getElementById("appat").value;
    var cadena1 = document.getElementById("apmat").value;
    var cadena2 = document.getElementById("edad").value;
    var cadena3 = document.getElementById("correo").value;
    var cadena4 = document.getElementById("nombre").value;
    
    
    var pat = new RegExp(/^(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*)|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*,\s(de))|(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*\s)(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)))$/);
    var pat1 = new RegExp(/^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/);
    var pat2 = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})+$/);
    
    if(pat.test(cadena)=== false || pat.test(cadena1)===false){
        alert("Apellido(s) inválido(s)");
        return false;
    }
    
    if(pat1.test(cadena4)=== false){
        alert("Nombre inválido");
        return false;
    }
    
    if(pat2.test(cadena3)=== false){
        alert("Correo inválido");
        return false;
    }
    
    if(cadena2>=111 || cadena2<=14){
        alert("Edad inválido");
        return false;
    }

}

function eliminar(){
    var id = document.getElementById("eliminar").value;
    
    if(id === ""){
        alert("Campo id vacío");
        return false;
    }
    
    if(id == 1 ){
        alert("Id inválido");
        return false;
    }
}