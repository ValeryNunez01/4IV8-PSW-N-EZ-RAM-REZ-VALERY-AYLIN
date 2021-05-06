var valor = -1;


async function updateusuario() {
     var nombre_usuario = "";
     var apellidop_usuario = "";
     var apellidom_usuario = "";
     var tipo_usuario = "";
     var id_usuario = 0; 
     var index = 0;
     var inputArray = document.getElementsByTagName("input");
     var radioArray = document.getElementsByName("radioid");   
  
  for (index = 0; index < radioArray.length; index++)
    {
        if (radioArray[index].checked)
          {
            id_usuario = radioArray[index].value;
          }
  
    }
  
for ( index = 0; index < inputArray.length; index++)
  {
    if (inputArray[index].type == 'text' && inputArray[index].disabled == false 
        && inputArray[index].name == 'nombre_usuario')
          {
            nombre_usuario = inputArray[index].value;   
            }
      }
        
    
    
    let n = {
      "id": id_usuario, 
      "nom": nombre_usuario,
      "appat": nombre_usuario,
      "apmat": nombre_usuario,
      "edad": 8,
      "correo":nombre_usuario
    }
    

    let res = await axios.post('/ActualizarUsuarios', n);

  let data = res.data;
  console.log(data);
  document.getElementById("salida").innerHTML = data.message;
  document.getElementById("tabla").innerHTML ="";
  document.getElementById("btn").style.display = "none";
  //ObtienePokemones();
    }

function activacampos(myRadio){
   
  
  if (valor != -1){
  document.getElementById("nombre_usuario_" + valor).disabled = true;
  document.getElementById("apellidop_usuario_" + valor).disabled = true;
  document.getElementById("apellidom_usuario_" + valor).disabled = true;
  document.getElementById("edad_usuario_" + valor).disabled = true;
  document.getElementById("correo_usuario_" + valor).disabled = true;
  }
  
  valor = myRadio.value;
  document.getElementById("nombre_usuario_" + valor).disabled = false;
  document.getElementById("apellidop_usuario_" + valor).disabled = false;
  document.getElementById("apellidom_usuario_" + valor).disabled = false;
  document.getElementById("edad_usuario_" + valor).disabled = false;
  document.getElementById("correo_usuario_" + valor).disabled = false;
  
}

async function ObtienePokemones() {

  let res = await axios.get('/mostrarusuarioes');

  let data = res.data.data;
  console.log(data);
  
 
  var table = document.getElementById("tabla");
   var row = table.insertRow();
     var cell1 = row.insertCell();
  cell1.innerHTML = "<b>Selecciona el que deseas editar</b>";
     cell1 = row.insertCell();
     cell1.innerHTML = "<b>nombre_usuario</b>";
       cell1 = row.insertCell();
     cell1.innerHTML = "<b>tipo_usuario</b>";
  for (var x = 0; x<data.length;x++) {
  var row = table.insertRow();
    var cell1 = row.insertCell();
cell1.innerHTML = "<input type='radio' name = 'radioid' id='radio_"+ data[x]["clave_usuario"]  +"' value = "+ data[x]["clave_usuario"]  +" onclick='activacampos(this)'' />"
cell1 = row.insertCell();
cell1.innerHTML = "<input type='text' name = 'nombre_usuario' id='nombre_usuario_"+ data[x]["clave_usuario"]  +"'  value=" + data[x]["nombre_usuario"] +" disabled>";
cell1 = row.insertCell();
cell1.innerHTML = "<input type='text' name= 'tipo_usuario' id='tipo_usuario_"+ data[x]["clave_usuario"]  +"'   value=" + data[x]["tipo_usuario"] +" disabled>";
  

}
   
}
