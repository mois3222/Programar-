const d = document,
  inputPets = d.querySelectorAll(`input`),
  playersPet = d.getElementById("playersPet"),
  label = d.querySelectorAll(`label`),
  enemysPet = d.getElementById(`enemysPet`),
  allButtons = d.querySelectorAll("button"),
  messege = d.getElementById("msg");

const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};

const msgAndMore = (el, n) => {
  let randomMore = random(3, 1);

  messege.innerHTML += `<p> Your pet attacked to - ${el}. enemys'pet attacked to - ${allButtons[randomMore].textContent} ....`;
};

d.addEventListener("DOMContentLoaded", (element) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".buttonPets"))
      inputPets.forEach((item) =>
        item.checked ? (playersPet.textContent = item.id) : null
      );

    if (e.target.matches(".buttonFire")) msgAndMore(`🔥Fire🔥`, 1);

    if (e.target.matches(".buttonAqua")) msgAndMore(`💧Aqua💧`, 2);

    if (e.target.matches(".buttonTerra")) msgAndMore(`🌱Terra🌱`, 3);
  });

  try {
    enemysPet.textContent = label[random(5, 0)].textContent;
  } catch (error) {
    enemysPet.textContent = label[0].textContent;
  }
});
