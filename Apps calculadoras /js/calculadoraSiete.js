function calculadora() {
    let cadenaUno = document.getElementById("cadenaUno").value;
    let cadenaDos = document.getElementById("cadenaDos").value;
    let cadenaTres = document.getElementById("cadenaTres").value;
    let resultado = document.getElementById("resultado");

    if (cadenaUno.length > cadenaDos.length && cadenaUno.length > cadenaTres.length) {
        resultado = document.getElementById("resultado").innerHTML = "La cadena más larga es: " + cadenaUno;
    }

    else if (cadenaDos.length > cadenaUno.length && cadenaDos.length > cadenaTres.length) {
        resultado = document.getElementById("resultado").innerHTML = "La cadena más larga es: " + cadenaDos;
    }

    else {
        resultado = document.getElementById("resultado").innerHTML = "La cadena más larga es: " + cadenaTres;
    }
}

function limpiar() {
    document.getElementById("cadenaUno").value = "";
    document.getElementById("cadenaDos").value = "";
    document.getElementById("cadenaTres").value = "";
    document.getElementById("resultado").innerHTML = "";
}