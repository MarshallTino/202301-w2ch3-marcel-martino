let userName = prompt("Hola, como te llamas?");
const usedNumbers = [];
const bingoCard = [];
let turno = 0;

const createBingoCard = () => {
  for (let i = 0; i < 3; i++) {
    bingoCard[i] = [];
    for (let j = 0; j < 5; j++) {
      let number = Math.floor(Math.random() * 98) + 1;

      bingoCard[i][j] = number;
    }
  }
};

const showBingoCard = () => {
  console.table(bingoCard);
};

let newNumber = () => {
  let mainNumber = Math.floor(Math.random() * 98) + 1;

  if (usedNumbers.includes(mainNumber)) {
    return newNumber();
  }

  usedNumbers.push(mainNumber);

  console.log("El numero es: " + mainNumber + ".");

  let found = false;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      if (bingoCard[i][j] === mainNumber) {
        bingoCard[i][j] = "X";
        found = true;
      }
    }
  }
};

const checkLine = () => {
  if (bingoCard[0].every((number) => number === "X")) {
    console.log("¡LÍNEA 1 COMPLETADA!");
  }
  if (bingoCard[1].every((number) => number === "X")) {
    console.log("¡LÍNEA 2 COMPLETADA!");
  }
  if (bingoCard[2].every((number) => number === "X")) {
    console.log("¡LÍNEA 3 COMPLETADA!");
  }
};

const checkBingo = () => {
  if (
    bingoCard[0].every((number) => number === "X") &&
    bingoCard[1].every((number) => number === "X") &&
    bingoCard[2].every((number) => number === "X")
  ) {
    alert("BINGOOO!!!  Has completado el Bingo en " + turno + " turnos.");
    console.log("BINGOOO!!!  Has completado el Bingo en " + turno + " turnos.");
    newGame();
  } else newTurn();
};

const newTurn = () => {
  let nextTurn = confirm(
    "Haga click en acpetar para sacar un numero o en cancelar para dejar de jugar."
  );
  if (nextTurn != true) {
    alert("Adios " + userName);
  } else {
    turno++;
    newNumber();
    showBingoCard();
    checkLine();
    checkBingo();
  }
};

const newGame = () => {
  let newTurn = confirm("Quiere jugar de nuevo?");
  if (newTurn != true) {
    alert("Adios " + userName);
  } else {
    createBingoCard();
    playBingo();
  }
};
const playBingo = () => {
  createBingoCard();
  showBingoCard();
  newTurn();
};

playBingo();
