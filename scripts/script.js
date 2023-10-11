// JAIME FERNÄNDEZ CALVO
// https://github.com/jaimecamocha/ExamenTema1DWECDIW.git
  
function calcular(){
    // reiniciamos el texto párrafos para que cuando vuelva a darle al botón no se pise
    document.getElementById("msjerror").innerHTML = "";
    document.getElementById("calcarea").innerHTML = ""
    document.getElementById("calcperimetro").innerHTML = "";
    document.getElementById("calcdiagonal").innerHTML = "";

    // sacamos el valor de la longitud y del ancho introducidos por el usuario
    let longitud = document.getElementById("long").value;
    let ancho = document.getElementById("anch").value;

    // inicializamos el area, perímetro y diagonal a cero
    let area = 0;
    let perimetro = 0;
    let diagonal = 0;

    if(longitud > 0 && ancho > 0){
        // si se han introducido valores válidos calcula y lo muestra por pantalla
        area = longitud * ancho;
        perimetro = (longitud * 2) + (ancho * 2);
        diagonal = Math.sqrt(Math.pow(longitud, 2) + Math.pow(ancho, 2))

        document.getElementById("calcarea").innerHTML = "Área del rectángulo: " + area.toFixed(2);
        document.getElementById("calcperimetro").innerHTML = "Perímetro del rectángulo: " + perimetro.toFixed(2);
        document.getElementById("calcdiagonal").innerHTML = "Diagonal del rectángulo: " + diagonal.toFixed(2);
    }
    else{
        // si hay un valor vacío muestra un mensaje de error
        document.getElementById("msjerror").innerHTML = "Por favor, ingrese valores válidos";
    }
}
