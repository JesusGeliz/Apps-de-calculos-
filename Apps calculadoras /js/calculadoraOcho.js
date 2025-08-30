function calculadora() {
    let identificacion = parseInt(document.getElementById("identificacion").value);
    let nombres = document.getElementById("nombres").value;
    let salario = parseFloat(document.getElementById("salario").value);
    let dias = parseInt(document.getElementById("dias").value);
    let horasExtraDiurnas = parseFloat(document.getElementById("horasExtraDiurnas").value);
    let horasExtraNocturnas = parseFloat(document.getElementById("horasExtraNocturnas").value);

    if (salario < 877803) {
        alert("El salario minimo es de 877.803");
        return;
    }

    if (dias < 1 || dias > 30) {
        alert("Los dias de trabajo son entre 1 y 30.")
        return;
    }

    if (horasExtraDiurnas < 0 || horasExtraDiurnas > 30) {
        alert("Las horas extras diurnas son entre 0 y 30.")
        return;
    }

    if (horasExtraNocturnas < 0 || horasExtraNocturnas > 30) {
        alert("Las horas extras nocturnas son entre 0 y 30.")
        return;
    }

    let resultadoIdentificacion = document.getElementById("resultadoIdentificacion");
    let resultadoNombres = document.getElementById("resultadoNombres");
    let resultadoSalario = document.getElementById("resultadoSalario");
    let resultadoValorDePago = document.getElementById("resultadoValorDePago");

    let valorDia = salario / 30;
    let basico = dias * valorDia;
    let valorHorasExtraDiurnas = ((valorDia / 8) * 1.25) * horasExtraDiurnas;
    let valorHorasExtraNocturnas = ((valorDia / 8) * 1.75) * horasExtraNocturnas;
    let subtotal = salario + valorHorasExtraDiurnas + valorHorasExtraNocturnas;
    let salud = salario * 0.04;
    let pension = basico * 0.04;
    let auxTransporte = 0;

    if (salario <= (877803 * 2)) {
        auxTransporte = 102854;
    }

    let neto = (subtotal - (salud + pension)) + auxTransporte;

    resultadoIdentificacion.innerHTML = identificacion;
    resultadoNombres.innerHTML = nombres;
    resultadoSalario.innerHTML = salario.toLocaleString("es-CO");
    resultadoValorDePago.innerHTML = neto.toLocaleString("es-CO");
}