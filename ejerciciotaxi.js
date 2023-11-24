function validarTaxi(taxi) {
  const añoActual = new Date().getFullYear();
  const añoSalida = añoActual - taxi.añoFabricación;
  return añoSalida < 10;
}

// Ejemplo de uso
const taxi = {
  añoFabricación: 2017,
};

// Llamada a la función
const esValido = validarTaxi(taxi);

alert(esValido);
