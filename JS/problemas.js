function validar(e){
    var teclado = (document.all)?e.keycode:e.which;
    if(teclado == 8)return true;
    var patron = /[0-9\d .]/;
    var prueba = String.fromCharCode(teclado);
    return patron.test(prueba);
}

function problema_1(){
    if(isNaN(parseInt(document.tabla_1.cantidad_1.value))){
        alert("No ingresó ningún número")
        document.tabla_1.interes_1.value = "";
        document.tabla_1.cantidad_1.value = "";
        return false;
    }
    else{
        var valor = document.tabla_1.cantidad_1.value;
        var result = parseInt(valor);
        var interes = result*0.02;
        var total = result+interes;
    
        document.tabla_1.sueldot_1.value = "$"+total;
    }
}

function borrar_1(){
    document.tabla_1.sueldot_1.value = "";
    document.tabla_1.cantidad_1.value = "";
}



function problema_2(){
    if(isNaN(parseInt(document.tabla_2.cantidad_2.value)) || isNaN(parseInt(document.tabla_2.cantidad_21.value))){
        alert("No ingresó ningún número")
        document.tabla_2.cantidad_2.value = "";
        document.tabla_2.cantidad_21.value = "";
        return false;
    }
    else{
        var valor = parseInt(document.tabla_2.cantidad_2.value);
        var valor1 = parseInt(document.tabla_2.cantidad_21.value);
        var comision = valor1*0.1;
        var total = comision+valor;
    
        document.tabla_2.total_2.value = "$"+total;
    }
}

function borrar_2(){
    document.tabla_2.cantidad_2.value = "";
    document.tabla_2.cantidad_21.value = "";
    document.tabla_2.total_2.value = "";
}



function problema_3(){
    if(isNaN(parseInt(document.tabla_3.cantidad_3.value))){
        alert("No ingresó ningún número")
        document.tabla_3.cantidad_3.value = "";
        return false;
    }
    else{
        var valor = document.tabla_3.cantidad_3.value;
        var result = parseInt(valor);
        var total = result*0.9;
    
        document.tabla_3.total_3.value = "$"+total;
    }
}

function borrar_3(){
    document.tabla_3.total_3.value = "";
    document.tabla_3.cantidad_3.value = "";
}



function problema_4(){
    if(isNaN(parseInt(document.tabla_4.cantidad_41.value)) || isNaN(parseInt(document.tabla_4.cantidad_42.value)) || 
    isNaN(parseInt(document.tabla_4.cantidad_43.value)) || isNaN(parseInt(document.tabla_4.cantidad_44.value)) ||
    isNaN(parseInt(document.tabla_4.cantidad_45.value))){
        alert("No ingresó ningún número")
        document.tabla_4.cantidad_41.value = "";
        document.tabla_4.cantidad_42.value = "";
        document.tabla_4.cantidad_43.value = "";
        document.tabla_4.cantidad_44.value = "";
        document.tabla_4.cantidad_45.value = "";
        return false;
    }
    else{
        var valor1 = parseInt(document.tabla_4.cantidad_41.value);
        var valor2 = parseInt(document.tabla_4.cantidad_42.value);
        var valor3 = parseInt(document.tabla_4.cantidad_43.value);
        var valor4 = parseInt(document.tabla_4.cantidad_44.value);
        var valor5 = parseInt(document.tabla_4.cantidad_45.value);
        var promedio = (valor1+valor2+valor3)/3;
        var porcentaje1 = (promedio*55)/10
        var porcentaje2 = (valor4*30)/10
        var porcentaje3 = (valor5*15)/10
        var total = (porcentaje1+porcentaje2+porcentaje3)/10
    
        document.tabla_4.total_4.value = total;
    }
}

function borrar_4(){
    document.tabla_4.total_4.value = "";
    document.tabla_4.cantidad_41.value = "";
    document.tabla_4.cantidad_42.value = "";
    document.tabla_4.cantidad_43.value = "";
    document.tabla_4.cantidad_44.value = "";
    document.tabla_4.cantidad_45.value = "";
}



function problema_5(){
    if(isNaN(parseInt(document.tabla_5.cantidad_5.value)) || isNaN(parseInt(document.tabla_5.cantidad_51.value))){
        alert("No ingresó ningún número")
        document.tabla_5.cantidad_5.value = "";
        document.tabla_5.cantidad_51.value = "";
        return false;
    }
    else{
        var valor = parseInt(document.tabla_5.cantidad_5.value);
        var valor1 = parseInt(document.tabla_5.cantidad_51.value);
        var porcenteje1 = (valor1*100)/valor;
        var porcentaje2 = 100-porcenteje1;
    
        document.tabla_5.total_52.value = porcenteje1 + "%";
        document.tabla_5.total_53.value = porcentaje2 + "%";
    }
}

function borrar_5(){
    document.tabla_5.cantidad_5.value = "";
    document.tabla_5.cantidad_51.value = "";
    document.tabla_5.total_52.value = "";
    document.tabla_5.total_53.value = "";
}



function problema_6(){
    if(isNaN(parseInt(document.tabla_6.cantidad_6.value)) || isNaN(parseInt(document.tabla_6.cantidad_61.value)) ||
    isNaN(parseInt(document.tabla_6.cantidad_62.value)) || isNaN(parseInt(document.tabla_6.cantidad_63.value)) ||
    isNaN(parseInt(document.tabla_6.cantidad_64.value)) || isNaN(parseInt(document.tabla_6.cantidad_65.value))){
        alert("No ingresó ningún número")
        document.tabla_6.cantidad_6.value = "";
        document.tabla_6.cantidad_61.value = "";
        document.tabla_6.cantidad_62.value = "";
        document.tabla_6.cantidad_63.value = "";
        document.tabla_6.cantidad_64.value = "";
        document.tabla_6.cantidad_65.value = "";
        return false;
    }
    else{
        var valor = parseInt(document.tabla_6.cantidad_6.value);
        var valor1 = parseInt(document.tabla_6.cantidad_61.value);
        var valor2 = parseInt(document.tabla_6.cantidad_62.value);
        var valor3 = parseInt(document.tabla_6.cantidad_63.value);
        var valor4 = parseInt(document.tabla_6.cantidad_64.value);
        var valor5 = parseInt(document.tabla_6.cantidad_65.value);
        var año = valor2 - valor5;
        if(valor1 > valor4){
            document.tabla_6.total_66.value = año;
        }
            else{
                if(valor1 < valor4){
                    document.tabla_6.total_66.value = (año-1);
                }
                else{
                    if(valor1 == valor4 && valor == valor3){
                        document.tabla_6.total_66.value = "Felicidades hoy cumple " + año + " años";
                    }
                    else{
                        if(valor > valor3){
                            document.tabla_6.total_66.value = año;
                        }
                        else{
                            document.tabla_6.total_66.value = (año-1);
                        }
                    }
                }
            }
    }
}

function borrar_6(){
    document.tabla_6.cantidad_6.value = "";
    document.tabla_6.cantidad_61.value = "";
    document.tabla_6.cantidad_62.value = "";
    document.tabla_6.cantidad_63.value = "";
    document.tabla_6.cantidad_64.value = "";
    document.tabla_6.cantidad_65.value = "";
    document.tabla_6.total_66.value = "";
}



function problema_7(){
    if(isNaN(parseInt(document.tabla_7.cantidad_7.value)) || isNaN(parseInt(document.tabla_7.cantidad_71.value))){
        alert("No ingresó ningún número")
        document.tabla_7.cantidad_7.value = "";
        document.tabla_7.cantidad_71.value = "";
        return false;
    }
    else{
        var valor = parseInt(document.tabla_7.cantidad_7.value);
        var valor1 = parseInt(document.tabla_7.cantidad_71.value);
        if(valor == valor1){
            var total1 = valor*valor1;
            document.tabla_7.total_72.value = total1;
        }
        else if(valor > valor1){
            var total2 = valor-valor1;
            document.tabla_7.total_72.value = total2;
        }
        else{
            var total3 = valor+valor1;
            document.tabla_7.total_72.value = total3;
        }
    
        
    }
}

function borrar_7(){
    document.tabla_7.cantidad_7.value = "";
    document.tabla_7.cantidad_71.value = "";
    document.tabla_7.total_72.value = "";
}



function problema_8(){
    if(isNaN(parseInt(document.tabla_8.cantidad_8.value)) || isNaN(parseInt(document.tabla_8.cantidad_81.value))
    || isNaN(parseInt(document.tabla_8.cantidad_82.value))){
        alert("No ingresó ningún número")
        document.tabla_8.cantidad_8.value = "";
        document.tabla_8.cantidad_81.value = "";
        document.tabla_8.cantidad_82.value = "";
        return false;
    }
    else{
        var valor = parseInt(document.tabla_8.cantidad_8.value);
        var valor1 = parseInt(document.tabla_8.cantidad_81.value);
        var valor2 = parseInt(document.tabla_8.cantidad_82.value);
        if(valor > valor1 && valor > valor2){
            document.tabla_8.total_83.value = valor;
        }
        else{
            if(valor1 > valor && valor1 > valor2){
                document.tabla_8.total_83.value = valor1;
            }
            else{
                if(valor2 > valor && valor2 > valor1){
                    document.tabla_8.total_83.value = valor2;
                }
                else{
                    if(valor1 == valor && valor1 > valor2){
                        document.tabla_8.total_83.value = valor1;
                    }
                    else{
                        if(valor2 == valor1 && valor2 > valor){
                            document.tabla_8.total_83.value = valor2;
                        }
                        else{
                            if(valor == valor2 && valor > valor1){
                                document.tabla_8.total_83.value = valor;
                            }
                            else{
                                if(valor2 == valor1 && valor2 == valor){
                                    document.tabla_8.total_83.value = "No hay un valor mayor";
                                }
                            }
                        }
                    }
                }

            }
        }
        
    }
}

function borrar_8(){
    document.tabla_8.cantidad_8.value = "";
    document.tabla_8.cantidad_81.value = "";
    document.tabla_8.cantidad_82.value = "";
    document.tabla_8.total_83.value = "";
}



function problema_9(){
    if(isNaN(parseInt(document.tabla_9.cantidad_9.value))){
        alert("No ingresó ningún número")
        document.tabla_9.cantidad_9.value = "";
        return false;
    }
    else{
        var valor = parseInt(document.tabla_9.cantidad_9.value);
        var resultado = valor-40;
        if(resultado > 0 && resultado <= 8){
            var extra = resultado*160;
            document.tabla_9.total_91.value = "$"+(extra+3200)
        }
        else{
        
            if(resultado > 8){
                var resultado2 = resultado - 8;
                var extra2 = resultado2*240;
                document.tabla_9.total_91.value = "$"+(extra2+4480)
    
                }             
            else{
                var total = valor * 80;
                document.tabla_9.total_91.value = "$"+total; 
            }
        }
    }
}


function borrar_9(){
    document.tabla_9.cantidad_9.value = "";
    document.tabla_9.total_91.value = "";
}



function problema_10(){
    if(isNaN(parseInt(document.tabla_10.cantidad_10.value)) || isNaN(parseInt(document.tabla_10.cantidad_101.value))){
        alert("No ingresó ningún número")
        document.tabla_10.cantidad_10.value = "";
        document.tabla_10.cantidad_101.value = "";
        return false;
    }
    else{
        var salario = parseInt(document.tabla_10.cantidad_10.value);
        var antiguedad = parseInt(document.tabla_10.cantidad_101.value);
        if(antiguedad == 0){
            var total1 = salario*0.05;
            document.tabla_10.total_102.value = total1;
        }
        else{
            if(antiguedad >= 1 && antiguedad < 2){
            var total2 = salario*0.07;
            document.tabla_10.total_102.value = total2;
            }
            else{
                if(antiguedad >= 2 && antiguedad < 5){
                    var total3 = salario*0.1;
                    document.tabla_10.total_102.value = total3;
                    }
                    else{
                        if(antiguedad >= 5 && antiguedad < 10){
                            var total4 = salario*0.15;
                            document.tabla_10.total_102.value = total4;
                        }
                        else{
                            if(antiguedad >= 10){
                            var total5 = salario*0.2;
                            document.tabla_10.total_102.value = total5;
                            }
                        }
                        
                    }
            }
        }
    }
}


function borrar_10(){
    document.tabla_10.cantidad_10.value = "";
    document.tabla_10.cantidad_101.value = "";
    document.tabla_10.total_102.value = "";
}
