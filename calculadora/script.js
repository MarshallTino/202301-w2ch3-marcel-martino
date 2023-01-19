const runCalculadora = () => {
  let numero1 = Number(prompt("Introduce el primer numero"));
  while (numero1 == "" || isNaN(Number(numero1))) {
    numero1 = Number(prompt("El valor introducido no es un numero"));
  }

  let numero2 = Number(prompt("Intoduce el segundo numero"));
  if (isNaN(Number(numero2))) {
    numero2 = Number(prompt("El valor introducido no es un numero"));
  } else if (numero2 == "") {
    console.log("La raiz caudrada del primer numero es " + Math.sqrt(numero1));
  } else {
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;

    console.log("El resultado de la suma es " + suma);
    console.log("El resultado de la resta es " + resta);
    console.log("El resultado de la division es " + division);
    console.log("El resultado de la multiplicacion es " + multiplicacion);
  }
};

runCalculadora();
