function calculadora() {
    let baseMayor = parseFloat(document.getElementById("baseMayor").value);
    let baseMenor = parseFloat(document.getElementById("baseMenor").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    let operacion = ((baseMayor + baseMenor) * altura) / 2 + (" cm²");
    resultado.value = operacion.toLocaleString("es-CO");
}



function limpiar() {
    document.getElementById("baseMayor").value = "";
    document.getElementById("baseMenor").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("resultado").value = "";
}