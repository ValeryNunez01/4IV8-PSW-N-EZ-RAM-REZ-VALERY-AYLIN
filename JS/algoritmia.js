function problema1(){
    /*Hace una búsqueda por todos los elementos */
    var p1_input = document.querySelector('#p1-input').value;
    /*Split separa la cadena por cada espacio que le demos, en este caso */
    var p1_array = p1_input.split(' ').reverse();
    var p1_res = '';

    p1_array.forEach(function(palabra, i){
        if(i != 0 || i != p1_array.length)p1_res += ' ';
        p1_res += palabra;
    });
    document.querySelector('#p1-output').textContent = p1_res;
}

function problema2(){
    var p2_x1 = document.querySelector('#p2-x1').value;
    var p2_x2 = document.querySelector('#p2-x2').value;
    var p2_x3 = document.querySelector('#p2-x3').value;
    var p2_x4 = document.querySelector('#p2-x4').value;
    var p2_x5 = document.querySelector('#p2-x5').value;

    var p2_y1 = document.querySelector('#p2-y1').value;
    var p2_y2 = document.querySelector('#p2-y2').value;
    var p2_y3 = document.querySelector('#p2-y3').value;
    var p2_y4 = document.querySelector('#p2-y4').value;
    var p2_y5 = document.querySelector('#p2-y5').value;
//construccion de vectores
    var v1 = [p2_x1, p2_x2,p2_x3,p2_x4,p2_x5];
    var v2 = [p2_y1, p2_y2,p2_y3,p2_y4,p2_y5];

    v1 = v1.sort(function(a,b){
        return b-a;
    });

    v2 = v2.sort(function(a,b){
        return b-a;
    });

    v2 = v2.reverse();

    var p2_producto = 0;

    for(var i=0 ; i<v1.length ; i++){
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent =
    'Producto Escalar Minimo : '+ p2_producto;
}
//innerhtml agrega codigo de html a una etiqueta ejemplo es la cadena 12 
//obtenemos el contenido de html como una vex habia blabla
//document.nombre del formulario.nombre del elemento

function problema3(){
    //var p3_input = document.querySelector('#p3-input').value.toUpperCase();
    var p3_input = document.querySelector('#p3-input').value;
    var p3_array = p3_input.split(',');
    console.log(p3_array);
    document.querySelector('#p3-output').innerHTML = "";
    for(var i=0 ; i<p3_array.length ; i++){
        var expresion = new RegExp("^[A-Z]+$");
        if(expresion.test(p3_array[i].trim())){

            a = p3_array[i].trim().split('');
            var a_sinrepetir = a.filter(function (item, pos){
                return a.indexOf(item) == pos;
            });
            console.log(p3_array[i] + " = " + a_sinrepetir.length + "(" + a_sinrepetir +")");
            //Ejemplos:
            //CASA = 3(c, a, s) PERRO= 4(p, e, r, o)
            document.querySelector('#p3-output').innerHTML += "<p>" + p3_array[i].trim() + " = " + a_sinrepetir.length + "(" + a_sinrepetir +")" + "</p>";
        }
        else{
            alert("No ingresar letras minúsculas " + p3_array[i].trim());
        }
       
    }

 
}
/*   for(var i=0 ; i <= p3_array.length ; i++){
    if(p3_array[i] != "A"){
        contador += 1
    }
}
document.querySelector('#p3-output').textContent = contador;
*/