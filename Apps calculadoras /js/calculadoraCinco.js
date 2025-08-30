function calculadora() {
    let nombreUsuario = document.getElementById("nombreUsuario").value;
    let notaUno = parseFloat(document.getElementById("notaUno").value);
    let notaDos = parseFloat(document.getElementById("notaDos").value);
    let notaTres = parseFloat(document.getElementById("notaTres").value);
    let notaCuatro = parseFloat(document.getElementById("notaCuatro").value);
    let notaCinco = parseFloat(document.getElementById("notaCinco").value);
    let resultado = document.getElementById("resultado");

    let operacion = (notaUno + notaDos + notaTres + notaCuatro + notaCinco) / 5;

    if (operacion > 0 && operacion < 3) {
        resultado.innerHTML = "El promedio de " + nombreUsuario + " es " + operacion.toFixed(2) + "<br><br>ESTADO: REPROBADO";
    }
    else if (operacion >= 3 && operacion < 4) {
        resultado.innerHTML = "El promedio de " + nombreUsuario + " es " + operacion.toFixed(2) + "<br><br>ESTADO: NIVELACIÓN";
    }
    else if (operacion >= 4 && operacion <= 5) {
        resultado.innerHTML = "El promedio de " + nombreUsuario + " es " + operacion.toFixed(2) + "<br><br>ESTADO: APROBADO";
    }
    else {
        resultado.innerHTML = "Error en la operación";
    }
}

function limpiar() {
    document.getElementById("nombreUsuario").value = "";
    document.getElementById("notaUno").value = "";
    document.getElementById("notaDos").value = "";
    document.getElementById("notaTres").value = "";
    document.getElementById("notaCuatro").value = "";
    document.getElementById("notaCinco").value = "";
    document.getElementById("resultado").innerHTML = "";
}