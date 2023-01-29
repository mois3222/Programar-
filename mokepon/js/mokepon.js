const d = document,
  inputPets = d.querySelectorAll(`input`),
  PlayerPetbutton = document.querySelector("#buttonPets"),
  playersPet = d.getElementById("playersPet"),
  label = d.querySelectorAll(`label`),
  enemysPet = d.getElementById(`enemysPet`);

const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};

d.addEventListener("DOMContentLoaded", (element) => {
  PlayerPetbutton.addEventListener("click", (e) => {
    inputPets.forEach((item) =>
      item.checked ? (playersPet.textContent = item.id) : null
    );
  });

  try {
    enemysPet.textContent = label[random(5, 0)].textContent;
  } catch (error) {
    enemysPet.textContent = label[0].textContent;
  }
});
