function tablasDeMultiplicar() {
    let numeroUsuario = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = "";

    for (let numero = 0; numero <= 10; numero++) {
        let operacion = numeroUsuario * numero;
        let resultadoFinal = (numeroUsuario + " x " + numero + " = " + operacion);

        resultado.innerHTML += resultadoFinal + "<br>";
    }
}

function limpiar() {
    document.getElementById("numero").value = "";
    document.getElementById("resultado").innerHTML = "";
}