function calculadora() {
    let operacion = document.getElementById("operacion").value;
    let resultado = document.getElementById("resultado");

    try {
        let operacionValores = eval(operacion);
        resultado.value = operacionValores.toLocaleString("es-CO");
    }
    catch {
        resultado.value = "Operación Inválida"
    }
}

function limpiar() {
    document.getElementById("operacion").value = "";
    document.getElementById("resultado").value = "";
}