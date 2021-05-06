function checar(){
    var cadena = document.getElementsByClassName("dos");
    var cadena1 = document.getElementById("tres");
    var cadena2 =  document.getElementById("uno");
    var cadena3 = document.getElementById("cuatro");
    var cadena4 = document.getElementById("cinco");
    console.log("holii"+cadena);
    var pat = new RegExp(/^(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*)|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*,\s(de))|(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))|([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü]*\s)(((((de)|(del)|(De)|(Del)|(la)|(las)|(los))\s)?){1,2}([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)))$/);
    var pat2 = new RegExp(/^(([A-ZÁÉÍÓÚÑ]{1}[a-záéíóúüñ]*)(\s)?)((((((((de)|(del)|(la)|(las)|(los))\s)?)?){1,2})(([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*)(\s([A-ZÁÉÍÑÓ]{1}[a-záéíñóúü\.]*))?){1})?)$/);
    var pat3 = new RegExp(/[1-9]/);
    var pat4 = new RegExp(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})+$/);
    
    if(pat.test(cadena)=== false || pat.test(cadena1)=== false){
        alert("Apellido inválido(s)");
        return false;
    }
    
    if(pat2.test(cadena2)=== false){
        alert("Nombre inválido");
        return false;
    }
    
    if(pat3.test(cadena3)=== false || cadena3 >= 110){
        alert("Edad inválida");
        return false;
    }
    
    if(pat4.test(cadena4)=== false){
        alert("Correo inválido");
        return false;
    }
}

