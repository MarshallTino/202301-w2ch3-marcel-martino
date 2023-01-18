// This is a example of array of objects... each position of array contains one object...
const flights = [
  { id: 00, to: "New York", from: "Barcelona", cost: 700, scale: false },
  { id: 01, to: "Los Angeles", from: "Madrid", cost: 1100, scale: true },
  { id: 02, to: "Paris", from: "Barcelona", cost: 210, scale: false },
  { id: 03, to: "Roma", from: "Barcelona", cost: 150, scale: false },
  { id: 04, to: "London", from: "Madrid", cost: 200, scale: false },
  { id: 05, to: "Madrid", from: "Barcelona", cost: 90, scale: false },
  { id: 06, to: "Tokyo", from: "Madrid", cost: 1500, scale: true },
  { id: 07, to: "Shangai", from: "Barcelona", cost: 800, scale: true },
  { id: 08, to: "Sydney", from: "Barcelona", cost: 150, scale: true },
  { id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150, scale: false },
];

const askForNameAndGreet = () => {
  const userName = prompt("Hello, what is your name");
  console.log(`Hello ${userName}`);
};

const showFlights = () => {
  console.log("*********************");
  flights.forEach((flight) => {
    console.log(
      "El vuelo con el id " +
        `${flight.id} con destino ${flight.to} y origen ${flight.from} , tiene un coste de ${flight.cost}€. Efectua escala: ${flight.scale}`
    );
  });
  console.log("*********************");
};

const flightAveragePrice = (arr) => {
  const { length } = arr;
  return arr.reduce((acc, val) => {
    return acc + val.cost / length;
  }, 0);
};

const numberOfFlightsWithScale = () => {
  console.log("*********************");

  const countOfBoolean = flights.filter(function (s) {
    return s.scale;
  }).length;
  console.log("Hacen escala " + countOfBoolean + " vuelos.");
};

const lastFiveFlights = () => {
  console.log("*********************");
  console.log("Los ultimos destinos son:");
  flights.forEach((flight) => {
    if (flight.id >= 05) {
      console.log(`${flight.to}`);
    }
  });
  console.log("*********************");
};

const playApp = () => {
  askForNameAndGreet();
  showFlights();
  console.log(
    "El precio medio de los vuelos es de " + flightAveragePrice(flights) + "€"
  );
  numberOfFlightsWithScale();
  lastFiveFlights();
};

playApp();
