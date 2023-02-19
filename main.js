
const userAutorizado = "productor";
const passAutorizado = "123";

let userIngresado = prompt("Por favor ingrese su usuario: ");
let passIngresado = prompt("Por favor ingrese su contraseña: ");

if (userIngresado === userAutorizado && passIngresado === passAutorizado){
    alert("Bienvenido " + userAutorizado);
    
    let cantidadCotizaciones = parseInt(prompt("Cuantas cotizaciones queres realizar?: "));

    for(let i = 0; i < cantidadCotizaciones; i++){
        let tipoCotizacion = prompt("Que desea cotizar?, ingresa 'a' para seguros de vivienda o 'b' para seguros de vehiculos");
        switch(tipoCotizacion){
            case "a": 
            let valorDeclaradoVivienda = parseInt(prompt("Indique el valor de su vivienda: "));
            let metrosCuadradosVivienda = parseInt(prompt("Ingrese los m2 de su vivienda: "));
            let cotizacionVivienda = cotizarVivienda(valorDeclaradoVivienda, metrosCuadradosVivienda);
            alert("Su cotizacion es $ " + cotizacionVivienda.toFixed(2) + " por mes.");
            break;
            case "b":
            let valorDeclaradoVehiculo = parseInt(prompt("Indique el valor de su vehiculo: "));
            let anioVehiculo = parseInt(prompt("Indique el año de su vehiculo: "));
            let cotizacionVehiculo = cotizarVehiculo (valorDeclaradoVehiculo, anioVehiculo);
            alert("Su cotizacion es $ " + cotizacionVehiculo.toFixed(2) + " por mes.")
            break;
            default:
            alert("El tipo de cotizacion no existe.");
            break;
        }
    }
} else {
        alert("Usuario o clave erronea")
    }

    //Funciones

    function cotizarVivienda(valorDeclaradoVivienda,metrosCuadradosVivienda){
        let cotizacionVivienda = (valorDeclaradoVivienda/metrosCuadradosVivienda)/360*2;
        return cotizacionVivienda
    }

    function cotizarVehiculo(valorDeclaradoVehiculo,anioVehiculo){
        let cotizacionVehiculo = (valorDeclaradoVehiculo/anioVehiculo)/360*2
        return cotizacionVehiculo;
    }
