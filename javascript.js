function cambia(){
    var i =Math.floor(Math.random()*10);
    var ximagen = "imagenes/" + i + ".png";
          if (i <= 10) {
                 document.getElementById("img").src =ximagen;
              }
  }
  function inicio() {
              setInterval(cambia, 1000);
          }
  //evento que se ejecuta al mostrar la pagina
  window.onload = inicio;

  function validar () {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;

    if (nombre.trim().length===0 && apellido.trim().length===0 && correo.trim().length===0){
        window.alert ("Los valores ingresados no son validos")
    }
    else {
        window.alert ("Has sido registrado correctamente")
    }
    /*
    if (typeof nombre === "string" && nombre.length===0){
    document.getElementById('nombre').innerHTML = "Valor vacio "<br>;
  }
    if (nombre.length===0){
        document.getElementById('nombre').innerHTML = "Valor vacio "<br>;
    }*/
  }