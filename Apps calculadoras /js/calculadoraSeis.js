function calculadora() {

    let numero = parseInt(document.getElementById("numero").value);
    let resultado = document.getElementById("resultado");

    if (numero % 2 === 0) {
        resultado.innerHTML = "El numero (" + numero + ") es par";
    }

    else {
        resultado.innerHTML = "El numero (" + numero + ") es impar";
    }
}

function limpiar() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}