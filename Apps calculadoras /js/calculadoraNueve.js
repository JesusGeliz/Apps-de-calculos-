function calculadora() {

    let edad = parseInt(document.getElementById("edad").value);
    let resultado = document.getElementById("resultado");

    if (edad < 1 || edad > 115) {
        alert("La edad es invalida")
        resultado.innerHTML = "Datos invalidos";
    }

    else if (edad <= 12) {
        resultado.innerHTML = "La persona de " + edad + " años de edad es:  NIÑO";
    }

    else if (edad > 12 && edad <= 17) {
        resultado.innerHTML = "La persona de " + edad + " años de edad es:  ADOLECENTE";
    }

    else if (edad > 17 && edad <= 59) {
        resultado.innerHTML = "La persona de " + edad + " años de edad es:  ADULTO";
    }

    else {
        resultado.innerHTML = "La persona de " + edad + " años de edad es:  ADULTO MAYOR";
    }

}

function limpiar() {
    document.getElementById("edad").value = "";
    document.getElementById("resultado").innerHTML = "";
}