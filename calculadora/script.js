const runCalculadora = () => {
  let numero1 = +prompt("Introduce el primer numero");
  while (numero1 == "" || isNaN(+numero1)) {
    numero1 = +prompt("El valor introducido no es un numero");
  }

  let numero2 = +prompt("Intoduce el segundo numero");
  if (isNaN(+numero2)) {
    numero2 = +prompt("El valor introducido no es un numero");
  } else if (numero2 == "") {
    console.log("La raiz caudrada del primer numero es " + Math.sqrt(numero1));
  } else {
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    console.log("El resultado de la suma es " + suma);
    console.log("El resultado de la resta es " + resta);
    console.log("El resultado de la division es " + division);
    console.log("El resultado de la multiplicacion es " + multiplicacion);
  }
};

runCalculadora();
