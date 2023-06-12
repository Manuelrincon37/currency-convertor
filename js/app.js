
function convertir(){
//obtenemos los valores del formulario
    var cantidad = parseFloat(document.getElementById("cantidad").value)
    var monedaDesde = document.getElementById("desde").value
    var monedaHacia = document.getElementById("hacia").value
    // Verificar si se seleccionó el valor "0" en alguna de las opciones
    if (monedaDesde === "0" || monedaHacia === "0") {
        // Mostrar un mensaje de error o tomar las acciones adecuadas
        alert("Debe seleccionar un tipo de moneda válido");
        return; // Salir de la función sin realizar el cálculo
    }

    var tasaCambio = obtenerTasaCambio(monedaDesde, monedaHacia);
    var resultado = cantidad * tasaCambio;
    var resultadoElemento = document.getElementById("result")
    if (resultadoElemento !== null) {
        resultadoElemento.value = resultado.toFixed(2);
    }
}

function obtenerTasaCambio(monedaDesde,monedaHacia){
    var tasasCambio = {
        "USD":{
            "EUR":0.85,
            "JPY":109.80,
            "CLP":754.65
        },
        "EUR":{
            "USD": 1.18,
            "JPY": 129.36,
            "CLP": 876.49
        },
        "JPY":{
            "USD": 0.0091,
            "EUR": 0.0077,
            "CLP":6.38
        },
        "CLP":{
            "USD": 0.0013,
            "EUR": 0.0011,
            "CLP": 0.157
        }
    };
    return tasasCambio[monedaDesde][monedaHacia];
}
//codigo para prevenir que la paginase recargue
document.getElementById("miForm").addEventListener("submit",function(event){
    event.preventDefault();
});