// 1 es piedra, 2 es papel, 3 es tijera

const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};

const choose = (move) => {
  let result = "";

  if (move == 1) {
    result = `rock 🥌`;
  } else if (move == 2) {
    result = `papper 🗞`;
  } else if (move == 3) {
    result = `scissors ✂`;
  } else {
    result = `undefined`;
  }

  return result;
};

let player = 0,
  pc = 0,
  wins = 0,
  fails = 0;

while (wins < 3 && fails < 3) {
  pc = random(3, 1);

  player = prompt(`choose 1 is stone, 2 is paper or 3 is scissors`);
  //Combat

  //alert(`you choosed ${player}`);

  alert(`Pc choosed: ${choose(pc)}`);
  alert(`Player choosed: ${choose(player)}`);

  if (pc == player) {
    alert(`TIE!`);
  } else if (player == 1 && pc == 3) {
    alert(`You Win!!!`);
    wins = wins + 1;
  } else if (player == 2 && pc == 1) {
    alert(`You Win!!!`);
    wins = wins + 1;
  } else if (player == 3 && pc == 2) {
    alert(`You Win!!!`);
    wins = wins + 1;
  } else {
    alert(`You Fail!!!`);
    fails = fails + 1;
  }
}

alert(`You winned: ${wins} Times, Fail: ${fails}, Times.`);
