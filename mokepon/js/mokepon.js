const d = document,
  inputPets = d.querySelectorAll(`input`),
  PlayerPetbutton = document.querySelector(".buttonPets"),
  playersPet = d.getElementById("playersPet"),
  label = d.querySelectorAll(`label`),
  enemysPet = d.getElementById(`enemysPet`);

const random = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1) + 1);
};

d.addEventListener("DOMContentLoaded", (element) => {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".buttonPets"))
      inputPets.forEach((item) =>
        item.checked ? (playersPet.textContent = item.id) : null
      );

    if (e.target.matches(".buttonFire")) alert(`You attack is fire element 🔥`);

    if (e.target.matches(".buttonAqua")) alert(`You attack is Aqua element💧`);

    if (e.target.matches(".buttonTerra"))
      alert(`You attack is Terra element🌱`);
  });

  try {
    enemysPet.textContent = label[random(5, 0)].textContent;
  } catch (error) {
    enemysPet.textContent = label[0].textContent;
  }
});
