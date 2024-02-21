console.log('-- Archivo de funciones --');

let numero1 = 60;
let numero2 = 60;
let resultado;

function sumar(parametro1, parametro2) {
  resultado = parametro1 + parametro2;
  return resultado;
}

function sumarNuevaFuncion(parametro1, parametro2) {
  return parametro1 + parametro2;
}

function restar(parametro1, parametro2) {
  resultado = parametro1 - parametro2;
  console.log(resultado);
}

let resultadoAdicion = sumar(numero1, numero2);
console.log("El resultado de la suma es: " + resultadoAdicion);
console.log(sumar(numero1, numero2));

sumar(numero1, numero2); // Invocando una función.
restar(numero1, numero2);
// resultado = numero1 + numero2;