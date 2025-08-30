function calculadora() {
    let diagonalMayor = parseFloat(document.getElementById("diagonalMayor").value);
    let diagonalMenor = parseFloat(document.getElementById("diagonalMenor").value);
    let resultado = document.getElementById("resultado");

    let operacion = (diagonalMayor * diagonalMenor) / 2;
    resultado.value = operacion.toLocaleString("es-CO") + (" cm²");
}

function limpiar() {
    document.getElementById("diagonalMayor").value = "";
    document.getElementById("diagonalMenor").value = "";
    document.getElementById("resultado").value = "";
}