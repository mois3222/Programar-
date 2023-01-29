const d = document,
  inputPets = d.querySelectorAll(`input`),
  playersPet = d.getElementById("playersPet"),
  label = d.querySelectorAll(`label`),
  enemysPet = d.getElementById(`enemysPet`),
  playerAttack = d.getElementById("playerAttack"),
  enemyAttack = d.getElementById("enemyAttack"),
  allButtons = d.querySelectorAll("button");

const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};

const msg = (el) => {
  enemyAttack.textContent = allButtons[random(3, 1)].textContent;
  playerAttack.textContent = el;
};

d.addEventListener("DOMContentLoaded", (element) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".buttonPets"))
      inputPets.forEach((item) =>
        item.checked ? (playersPet.textContent = item.id) : null
      );

    if (e.target.matches(".buttonFire")) msg(`🔥Fire🔥`);

    if (e.target.matches(".buttonAqua")) msg(`💧Aqua💧`);

    if (e.target.matches(".buttonTerra")) msg(`🌱Terra🌱`);
  });

  try {
    enemysPet.textContent = label[random(5, 0)].textContent;
  } catch (error) {
    enemysPet.textContent = label[0].textContent;
  }
});
